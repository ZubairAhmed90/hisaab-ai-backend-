const { transaction } = require('../config/db');
const UserModel = require('../models/user.model');
const LimitModel = require('../models/limit.model');
const { sumCategorySpend } = require('../helpers/limits.helpers');

const listSet = async (userId) => LimitModel.findSetByOwner(userId);

const listMine = async (userId) => {
  const limits = await LimitModel.findAppliedToUser(userId);
  return Promise.all(
    limits.map(async (limit) => {
      const spent = await sumCategorySpend(userId, limit.category);
      return { ...limit, monthly_limit: Number(limit.monthly_limit), spent };
    }),
  );
};

const create = async (userId, dto) => {
  return LimitModel.create({
    owner_id: userId,
    target_user_id: dto.target_user_id ?? userId,
    category: dto.category,
    monthly_limit: dto.monthly_limit,
    alert_at_percent: dto.alert_at_percent ?? 80,
    is_hard_limit: dto.is_hard_limit,
  });
};

const update = async (userId, id, data) => {
  const limit = await LimitModel.findOne(id, userId);
  if (!limit) {
    const err = new Error('Limit not found');
    err.status = 404;
    throw err;
  }
  return LimitModel.update(limit.id, data);
};

const remove = async (userId, id) => {
  const limit = await LimitModel.findOne(id, userId);
  if (!limit) {
    const err = new Error('Limit not found');
    err.status = 404;
    throw err;
  }
  await LimitModel.delete(limit.id);
  return { deleted: true };
};

const linkPartner = async (userId, email) => {
  const user = await UserModel.findById(userId);
  if (user?.linked_partner_id) {
    const err = new Error('Unlink your current partner before linking a new one');
    err.status = 400;
    throw err;
  }
  const partner = await UserModel.findByEmail(email);
  if (!partner) {
    const err = new Error('Partner not found');
    err.status = 404;
    throw err;
  }
  if (partner.id === userId) {
    const err = new Error('You cannot link your own account');
    err.status = 400;
    throw err;
  }
  if (partner.linked_partner_id && partner.linked_partner_id !== userId) {
    const err = new Error('This user is already linked to another partner');
    err.status = 400;
    throw err;
  }
  await transaction(async (conn) => {
    await conn.execute('UPDATE users SET linked_partner_id = ? WHERE id = ?', [partner.id, userId]);
    await conn.execute('UPDATE users SET linked_partner_id = ? WHERE id = ?', [userId, partner.id]);
  });
  return { linked: true, partner_name: partner.name, partner_id: partner.id };
};

const unlinkPartner = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user?.linked_partner_id) {
    const err = new Error('No partner linked');
    err.status = 400;
    throw err;
  }
  const partnerId = user.linked_partner_id;
  await transaction(async (conn) => {
    await conn.execute('UPDATE users SET linked_partner_id = NULL WHERE id = ?', [userId]);
    await conn.execute('UPDATE users SET linked_partner_id = NULL WHERE id = ?', [partnerId]);
  });
  return { unlinked: true };
};

const partnerSummary = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user?.linked_partner_id) return null;

  const partnerId = user.linked_partner_id;
  const partner = await UserModel.findById(partnerId);

  const [limitsISet, limitsOnMeRaw] = await Promise.all([
    LimitModel.findByOwnerAndTarget(userId, partnerId),
    LimitModel.findByOwnerAndTargetWithOwner(partnerId, userId),
  ]);

  const limits_i_set = await Promise.all(
    limitsISet.map(async (limit) => {
      const spent = await sumCategorySpend(partnerId, limit.category);
      const cap = Number(limit.monthly_limit);
      return {
        id: limit.id, category: limit.category, limit: cap, spent,
        is_hard_limit: Boolean(limit.is_hard_limit),
        alert_at_percent: limit.alert_at_percent,
        pct: cap > 0 ? Math.round((spent / cap) * 100) : 0,
        exceeded: spent > cap,
      };
    }),
  );

  const limits_on_me = await Promise.all(
    limitsOnMeRaw.map(async (limit) => {
      const spent = await sumCategorySpend(userId, limit.category);
      const cap = Number(limit.monthly_limit);
      return {
        id: limit.id, category: limit.category, limit: cap, spent,
        is_hard_limit: Boolean(limit.is_hard_limit),
        owner_name: limit.owner_name,
        pct: cap > 0 ? Math.round((spent / cap) * 100) : 0,
        exceeded: spent > cap,
      };
    }),
  );

  return {
    partner_id: partnerId,
    partner_name: partner?.name,
    partner_email: partner?.email,
    partner_account: partner?.account_number,
    partner_wallet: Number(partner?.wallet_balance ?? 0),
    partner_account_balance: Number(partner?.account_balance ?? 0),
    categories: limits_i_set.map(({ category, limit, spent }) => ({ category, limit, spent })),
    limits_i_set,
    limits_on_me,
    stats: {
      limits_set_count: limits_i_set.length,
      limits_on_me_count: limits_on_me.length,
      total_monitored_spend: limits_i_set.reduce((s, r) => s + r.spent, 0),
      categories_exceeded: limits_i_set.filter((r) => r.exceeded).length,
      my_categories_exceeded: limits_on_me.filter((r) => r.exceeded).length,
    },
  };
};

const checkLimitBeforeSave = async (userId, category, amount) => {
  const limits = await LimitModel.findByCategoryForUser(userId, category);
  if (!limits.length) return { allowed: true, message: '' };

  const currentSpend = await sumCategorySpend(userId, category);
  const total = currentSpend + amount;

  for (const limit of limits) {
    const cap = Number(limit.monthly_limit);
    const owner = limit.owner_name;
    if (total > cap && limit.is_hard_limit) {
      return { allowed: false, message: `${limit.category} limit of Rs. ${cap} set by ${owner} reached` };
    }
    if (total >= cap * (limit.alert_at_percent / 100)) {
      return { allowed: true, message: `Warning: ${Math.round((total / cap) * 100)}% of ${limit.category} limit reached` };
    }
  }
  return { allowed: true, message: '' };
};

module.exports = { listSet, listMine, create, update, remove, linkPartner, unlinkPartner, partnerSummary, checkLimitBeforeSave };
