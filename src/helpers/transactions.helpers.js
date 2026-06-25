const { Readable } = require('stream');
const csv = require('csv-parser');
const { parseMonth, monthEnd } = require('./date.helpers');

const parseCsvBuffer = (buffer) =>
  new Promise((resolve, reject) => {
    const rows = [];
    Readable.from(buffer)
      .pipe(csv())
      .on('data', (row) => rows.push(row))
      .on('end', () => resolve(rows))
      .on('error', reject);
  });

const mapCsvRow = (row) => ({
  amount: Number(row.amount || row.Amount),
  description: row.description || row.Description || '',
  transaction_date: new Date(row.date || row.Date),
});

const summarizeByCategory = (transactions) => {
  const totals = {};
  for (const txn of transactions) {
    totals[txn.category] = (totals[txn.category] || 0) + Number(txn.amount);
  }
  return Object.entries(totals).map(([category, total]) => ({ category, total }));
};

const monthDateRange = (month) => {
  const start = parseMonth(month);
  return { start, end: monthEnd(start) };
};

module.exports = { parseCsvBuffer, mapCsvRow, summarizeByCategory, monthDateRange };
