// Return first day of month as a stable UTC date (avoids timezone mismatches in DB lookups)
export const parseMonth = (month?: string): Date => {
  if (month) {
    return new Date(`${month}-01T12:00:00.000Z`);
  }
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  return new Date(`${y}-${m}-01T12:00:00.000Z`);
};

// Return exclusive end date for a month period
export const monthEnd = (start: Date): Date =>
  new Date(start.getFullYear(), start.getMonth() + 1, 1);

// Map mirror period query to market cache change field
export const periodToChangeField = (period: string): string => {
  const map: Record<string, string> = {
    '1m': 'change_30d',
    '3m': 'change_90d',
    '6m': 'change_180d',
    '12m': 'change_365d',
  };
  return map[period] || 'change_30d';
};
