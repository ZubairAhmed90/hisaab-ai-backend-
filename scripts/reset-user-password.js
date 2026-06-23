const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const p = new PrismaClient();
const email = 'zubairahmedkaimkhani@gmail.com';
const password = 'Hisaab@123';

(async () => {
  const password_hash = await bcrypt.hash(password, 10);
  await p.user.update({
    where: { email },
    data: { password_hash, reset_token_hash: null, reset_token_expires: null },
  });
  console.log(`Password for ${email} set to: ${password}`);
  await p.$disconnect();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
