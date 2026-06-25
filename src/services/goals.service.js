const GoalModel = require('../models/goal.model');

const withProgress = (goal) => {
  const target = Number(goal.target_amount);
  const saved = Number(goal.saved_amount);
  const progress = target > 0 ? Math.round((saved / target) * 100) : 0;
  const daysLeft = Math.ceil((new Date(goal.deadline).getTime() - Date.now()) / 86400000);
  return { ...goal, target_amount: target, saved_amount: saved, progress, days_left: daysLeft };
};

const list = async (userId) => {
  const goals = await GoalModel.findByUser(userId);
  return goals.map(withProgress);
};

const create = async (userId, dto) => {
  const goal = await GoalModel.create({
    user_id: userId,
    title: dto.title,
    target_amount: dto.target_amount,
    deadline: new Date(dto.deadline),
  });
  return withProgress(goal);
};

const update = async (userId, id, savedAmount) => {
  const goal = await GoalModel.findOne(id, userId);
  if (!goal) {
    const err = new Error('Goal not found');
    err.status = 404;
    throw err;
  }
  const updated = await GoalModel.updateSavedAmount(goal.id, savedAmount);
  return withProgress(updated);
};

const remove = async (userId, id) => {
  const goal = await GoalModel.findOne(id, userId);
  if (!goal) {
    const err = new Error('Goal not found');
    err.status = 404;
    throw err;
  }
  await GoalModel.delete(goal.id);
  return { deleted: true };
};

module.exports = { list, create, update, remove };
