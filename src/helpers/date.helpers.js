const parseMonth = (month) => {
  if (month) {
    return new Date(`${month}-01T12:00:00.000Z`);
  }
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  return new Date(`${y}-${m}-01T12:00:00.000Z`);
};

const monthEnd = (start) =>
  new Date(start.getFullYear(), start.getMonth() + 1, 1);

const periodToChangeField = (period) => {
  const map = {
    '1m': 'change_30d',
    '3m': 'change_90d',
    '6m': 'change_180d',
    '12m': 'change_365d',
  };
  return map[period] || 'change_30d';
};

module.exports = { parseMonth, monthEnd, periodToChangeField };
