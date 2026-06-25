const BeneficiaryModel = require('../models/beneficiary.model');
const UserModel = require('../models/user.model');
const { formatPublicUser } = require('./payments.service');

const list = async (userId) => {
  const rows = await BeneficiaryModel.findByUser(userId);
  return rows.map((b) => ({
    id: b.id,
    name: b.name,
    bank: b.bank || 'HisaabAI',
    account: b.account_number || b.linked_account || '',
    iban: b.iban || undefined,
    linked_user_id: b.linked_user_id || undefined,
    nickname: b.nickname || undefined,
    is_favorite: Boolean(b.is_favorite),
    initials: b.name.split(/\s+/).slice(0, 2).map((p) => p[0]?.toUpperCase()).join(''),
  }));
};

const create = async (userId, dto) => {
  let linkedUserId = dto.linked_user_id || null;
  if (!linkedUserId && dto.account_number) {
    const normalized = String(dto.account_number).trim().toUpperCase();
    let user = await UserModel.findByAccountNumber(normalized);
    if (!user && normalized.startsWith('HA-')) {
      const uid = Number(normalized.replace('HA-', ''));
      if (uid) user = await UserModel.findById(uid);
    }
    if (user && user.id !== userId) linkedUserId = user.id;
  }

  const row = await BeneficiaryModel.create({
    user_id: userId,
    linked_user_id: linkedUserId,
    name: dto.name.trim(),
    bank: dto.bank || (linkedUserId ? 'HisaabAI' : null),
    account_number: dto.account_number || null,
    iban: dto.iban || null,
    nickname: dto.nickname || null,
    is_favorite: dto.is_favorite || false,
  });

  return list(userId).then((items) => items.find((i) => i.id === row.id) || row);
};

const update = async (userId, id, dto) => {
  const existing = await BeneficiaryModel.findOne(id, userId);
  if (!existing) {
    const err = new Error('Beneficiary not found');
    err.status = 404;
    throw err;
  }
  await BeneficiaryModel.update(id, userId, dto);
  const row = await BeneficiaryModel.findOne(id, userId);
  return {
    id: row.id,
    name: row.name,
    bank: row.bank || 'HisaabAI',
    account: row.account_number || '',
    iban: row.iban || undefined,
    linked_user_id: row.linked_user_id || undefined,
    nickname: row.nickname || undefined,
    is_favorite: Boolean(row.is_favorite),
  };
};

const remove = async (userId, id) => {
  const existing = await BeneficiaryModel.findOne(id, userId);
  if (!existing) {
    const err = new Error('Beneficiary not found');
    err.status = 404;
    throw err;
  }
  await BeneficiaryModel.delete(id, userId);
  return { deleted: true };
};

const lookupForAdd = async (account_number) => {
  const normalized = String(account_number).trim().toUpperCase();
  let user = await UserModel.findByAccountNumber(normalized);
  if (!user && normalized.startsWith('HA-')) {
    const uid = Number(normalized.replace('HA-', ''));
    if (uid) user = await UserModel.findById(uid);
  }
  return formatPublicUser(user);
};

module.exports = { list, create, update, remove, lookupForAdd };
