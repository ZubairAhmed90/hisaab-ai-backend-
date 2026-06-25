/**
 * Production API smoke test — hisaab.petzone.pk
 * Usage: node scripts/test-production-apis.js
 */
const axios = require('axios');

const BASE = process.env.API_BASE || 'https://hisaab.petzone.pk/api/v1';
const api = axios.create({ baseURL: BASE, timeout: 30000, validateStatus: () => true });

const ts = Date.now();
const userA = { name: 'API Test A', email: `apitest.a.${ts}@example.com`, password: 'TestPass123!' };
const userB = { name: 'API Test B', email: `apitest.b.${ts}@example.com`, password: 'TestPass123!' };

const results = [];

function pass(name, detail = '') {
  results.push({ name, ok: true, detail });
  console.log(`✓ ${name}${detail ? ` — ${detail}` : ''}`);
}

function fail(name, detail = '') {
  results.push({ name, ok: false, detail });
  console.error(`✗ ${name}${detail ? ` — ${detail}` : ''}`);
}

function authHeader(token) {
  return { Authorization: `Bearer ${token}` };
}

async function main() {
  console.log(`\nTesting ${BASE}\n`);

  // 1. Health
  const health = await api.get('/health');
  if (health.data?.success) pass('GET /health', health.data.data.status);
  else fail('GET /health', JSON.stringify(health.data));

  // 2. Register A & B
  const regA = await api.post('/auth/register', {
    ...userA,
    monthly_income: 100000,
    phone: '03001234567',
  });
  if (!regA.data?.data?.accessToken) {
    fail('POST /auth/register (user A)', regA.data?.message || regA.status);
    printSummary();
    process.exit(1);
  }
  const tokenA = regA.data.data.accessToken;
  const idA = regA.data.data.user.id;
  pass('POST /auth/register (user A)', `id=${idA}`);

  const regB = await api.post('/auth/register', {
    ...userB,
    monthly_income: 50000,
  });
  if (!regB.data?.data?.accessToken) {
    fail('POST /auth/register (user B)', regB.data?.message);
    printSummary();
    process.exit(1);
  }
  const tokenB = regB.data.data.accessToken;
  const idB = regB.data.data.user.id;
  const accountB = regB.data.data.user.account_number;
  pass('POST /auth/register (user B)', `id=${idB} account=${accountB}`);

  // 3. Login
  const login = await api.post('/auth/login', { email: userA.email, password: userA.password });
  if (login.data?.data?.accessToken) pass('POST /auth/login');
  else fail('POST /auth/login', login.data?.message);

  // 4. Me
  const me = await api.get('/auth/me', { headers: authHeader(tokenA) });
  if (me.data?.data?.email === userA.email) pass('GET /auth/me');
  else fail('GET /auth/me', me.data?.message);

  // 5. Fund wallet A for bills (optional) — P2P uses account (register sets account from monthly_income)
  const walletA = await api.get('/portfolio/wallet', { headers: authHeader(tokenA) });
  const accountBalA = Number(walletA.data?.data?.account_balance ?? 0);
  if (accountBalA >= 2000) pass('Account balance ready for P2P', `Rs ${accountBalA}`);
  else fail('Account balance for P2P', `only Rs ${accountBalA}`);

  // 6. Payment lookup
  const lookup = await api.get('/payments/lookup', {
    headers: authHeader(tokenA),
    params: { user_id: idB },
  });
  if (lookup.data?.data?.id === idB) pass('GET /payments/lookup', lookup.data.data.name);
  else fail('GET /payments/lookup', lookup.data?.message || JSON.stringify(lookup.data));

  // 7. Beneficiaries — create & list
  const addBen = await api.post(
    '/beneficiaries',
    { name: userB.name, bank: 'HisaabAI', account_number: accountB },
    { headers: authHeader(tokenA) },
  );
  if (addBen.data?.success) pass('POST /beneficiaries');
  else fail('POST /beneficiaries', addBen.data?.message);

  const listBen = await api.get('/beneficiaries', { headers: authHeader(tokenA) });
  if (listBen.data?.data?.length >= 1) pass('GET /beneficiaries', `count=${listBen.data.data.length}`);
  else fail('GET /beneficiaries', listBen.data?.message);

  // 8. P2P send A → B
  const send = await api.post(
    '/payments/send',
    { recipient_user_id: idB, amount: 1500, note: 'API test transfer' },
    { headers: authHeader(tokenA) },
  );
  if (send.data?.success) {
    pass(
      'POST /payments/send',
      `ref=${send.data.data.reference} recipient_account=${send.data.data.recipient_account_balance}`,
    );
  } else fail('POST /payments/send', send.data?.message);

  // 9. B account should reflect credit (account, not wallet)
  const walletB = await api.get('/portfolio/wallet', { headers: authHeader(tokenB) });
  const acctB = Number(walletB.data?.data?.account_balance ?? 0);
  const walB = Number(walletB.data?.data?.wallet_balance ?? 0);
  if (acctB >= 1500) pass('GET /portfolio/wallet (recipient account credited)', `account=Rs ${acctB} wallet=Rs ${walB}`);
  else fail('GET /portfolio/wallet (recipient account)', `account=${acctB} wallet=${walB}`);

  // 10. Transfer history
  const transfers = await api.get('/payments/transfers', { headers: authHeader(tokenA) });
  if (transfers.data?.data?.items?.length >= 1) pass('GET /payments/transfers');
  else fail('GET /payments/transfers', transfers.data?.message);

  // 11. Money request B → A
  const req = await api.post(
    '/money-requests',
    { payer_user_id: idA, amount: 500, reason: 'API test request' },
    { headers: authHeader(tokenB) },
  );
  const requestId = req.data?.data?.id;
  if (requestId) pass('POST /money-requests', `id=${requestId}`);
  else fail('POST /money-requests', req.data?.message);

  // 12. Notifications for A (should have money request + maybe received from earlier if A was payer - B received)
  const notifsA = await api.get('/notifications', { headers: authHeader(tokenA) });
  if (notifsA.data?.data?.length >= 1) pass('GET /notifications (user A)', `count=${notifsA.data.data.length}`);
  else fail('GET /notifications (user A)', 'empty');

  const notifsB = await api.get('/notifications', { headers: authHeader(tokenB) });
  const receivedNotif = (notifsB.data?.data || []).some((n) => n.type === 'money_received');
  if (receivedNotif) pass('GET /notifications (user B money_received)');
  else fail('GET /notifications (user B money_received)', 'not found');

  // 13. Accept money request
  if (requestId) {
    const accept = await api.post(`/money-requests/${requestId}/accept`, {}, { headers: authHeader(tokenA) });
    if (accept.data?.success) pass('POST /money-requests/:id/accept');
    else fail('POST /money-requests/:id/accept', accept.data?.message);
  }

  // 14. Bill pay (uses account)
  const bill = await api.post(
    '/bills/pay',
    {
      biller_code: 'lesco',
      biller_name: 'LESCO',
      consumer_number: '1234567890',
      amount: 200,
    },
    { headers: authHeader(tokenA) },
  );
  if (bill.data?.success) pass('POST /bills/pay', `bill_id=${bill.data.data?.bill?.id}`);
  else fail('POST /bills/pay', bill.data?.message);

  const billHist = await api.get('/bills/history', { headers: authHeader(tokenA) });
  if (billHist.data?.data?.length >= 1) pass('GET /bills/history');
  else fail('GET /bills/history');

  // 15. Transactions list
  const txns = await api.get('/transactions', { headers: authHeader(tokenA), params: { page: 1, limit: 10 } });
  if (txns.data?.data?.items?.length >= 1) pass('GET /transactions', `count=${txns.data.data.items.length}`);
  else fail('GET /transactions');

  // 16. Unread count
  const unread = await api.get('/notifications/unread-count', { headers: authHeader(tokenA) });
  if (typeof unread.data?.data?.count === 'number') pass('GET /notifications/unread-count', String(unread.data.data.count));
  else fail('GET /notifications/unread-count');

  printSummary();
  process.exit(results.some((r) => !r.ok) ? 1 : 0);
}

function printSummary() {
  const ok = results.filter((r) => r.ok).length;
  const bad = results.filter((r) => !r.ok).length;
  console.log(`\n--- ${ok} passed, ${bad} failed ---\n`);
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
