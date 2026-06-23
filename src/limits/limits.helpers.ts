import { PrismaService } from '../prisma/prisma.service';

// Return current month date range for spend calculations
export const currentMonthRange = () => {
  const now = new Date();
  return {
    gte: new Date(now.getFullYear(), now.getMonth(), 1),
    lt: new Date(now.getFullYear(), now.getMonth() + 1, 1),
  };
};

// Sum category spending for a user in the current month
export const sumCategorySpend = async (
  prisma: PrismaService,
  userId: number,
  category: string,
) => {
  const transactions = await prisma.transaction.findMany({
    where: { user_id: userId, category, transaction_date: currentMonthRange() },
  });
  return transactions.reduce((sum, txn) => {
    const amt = Number(txn.amount);
    if (category === 'income') return sum + Math.max(0, amt);
    return sum + (amt < 0 ? -amt : amt);
  }, 0);
};
