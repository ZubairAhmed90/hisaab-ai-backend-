import { Readable } from 'stream';
import * as csv from 'csv-parser';
import { monthEnd, parseMonth } from '../common/date.helpers';

// Parse uploaded CSV buffer into transaction rows
export const parseCsvBuffer = (buffer: Buffer): Promise<Record<string, string>[]> =>
  new Promise((resolve, reject) => {
    const rows: Record<string, string>[] = [];
    Readable.from(buffer)
      .pipe(csv())
      .on('data', (row) => rows.push(row))
      .on('end', () => resolve(rows))
      .on('error', reject);
  });

// Map a CSV row to a normalized transaction shape
export const mapCsvRow = (row: Record<string, string>) => ({
  amount: Number(row.amount || row.Amount),
  description: row.description || row.Description || '',
  transaction_date: new Date(row.date || row.Date),
});

// Group transactions by category and sum amounts for a month
export const summarizeByCategory = (
  transactions: { category: string; amount: unknown }[],
) => {
  const totals: Record<string, number> = {};
  for (const txn of transactions) {
    totals[txn.category] = (totals[txn.category] || 0) + Number(txn.amount);
  }
  return Object.entries(totals).map(([category, total]) => ({
    category,
    total,
  }));
};

// Build date range filter for a given month string
export const monthDateRange = (month?: string) => {
  const start = parseMonth(month);
  return { gte: start, lt: monthEnd(start) };
};
