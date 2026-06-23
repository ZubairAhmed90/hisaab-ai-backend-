const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  try {
    const count = await prisma.user.count();
    console.log('Connected OK. users table row count:', count);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error('Connection failed:', e.message);
  process.exit(1);
});
