// Starter transactions for new users (no auto stock holdings — users invest manually)
export const FALLBACK_PRICES: Record<string, number> = {
  OGDC: 198.4, PPL: 165.2, HBL: 142.1, MCB: 185.5, UBL: 178.3,
  LUCK: 720, GATM: 48.5, ENGRO: 312.75, FFC: 118.6, MTL: 890,
  TRG: 95.4, HUBC: 152.8, MARI: 2150, EFERT: 98.2, SEARL: 72.5,
  COLG: 1450, NESTLE: 7800, AGTL: 520, FATIMA: 105.3, PSO: 425,
};

export const DEMO_TRANSACTIONS = [
  { amount: 85000, description: 'Salary credited', category: 'income', daysAgo: 2 },
  { amount: 850, description: 'Foodpanda', category: 'food', daysAgo: 0 },
  { amount: 420, description: 'Careem ride', category: 'transport', daysAgo: 0 },
  { amount: 4200, description: 'LESCO bill', category: 'utilities', daysAgo: 1 },
  { amount: 3100, description: 'Daraz order', category: 'shopping', daysAgo: 1 },
];

export function daysAgoDate(daysAgo: number) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d;
}
