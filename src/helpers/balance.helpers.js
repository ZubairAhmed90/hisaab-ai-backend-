async function readBalances(conn, userId) {
  const [[user]] = await conn.execute(
    'SELECT account_balance, wallet_balance FROM users WHERE id = ?',
    [userId],
  );
  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }
  return {
    account: Number(user.account_balance),
    wallet: Number(user.wallet_balance),
  };
}

function formatTxn(row) {
  if (!row) return row;
  return {
    ...row,
    amount: Number(row.amount),
    account_balance_before: row.account_balance_before != null ? Number(row.account_balance_before) : null,
    account_balance_after: row.account_balance_after != null ? Number(row.account_balance_after) : null,
    wallet_balance_before: row.wallet_balance_before != null ? Number(row.wallet_balance_before) : null,
    wallet_balance_after: row.wallet_balance_after != null ? Number(row.wallet_balance_after) : null,
  };
}

function formatTrade(row) {
  if (!row) return row;
  return {
    ...row,
    quantity: Number(row.quantity),
    price_pkr: Number(row.price_pkr),
    total_pkr: Number(row.total_pkr),
    wallet_balance_before: row.wallet_balance_before != null ? Number(row.wallet_balance_before) : null,
    wallet_balance_after: row.wallet_balance_after != null ? Number(row.wallet_balance_after) : null,
  };
}

module.exports = { readBalances, formatTxn, formatTrade };
