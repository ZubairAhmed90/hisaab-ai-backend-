import { PrismaService } from '../prisma/prisma.service';

export async function generateUniqueAccountNumber(prisma: PrismaService): Promise<string> {
  for (let attempt = 0; attempt < 20; attempt++) {
    const num = `HA-${Math.floor(100000 + Math.random() * 900000)}`;
    const exists = await prisma.user.findUnique({ where: { account_number: num } });
    if (!exists) return num;
  }
  throw new Error('Could not generate unique account number');
}

export function formatUserProfile(user: {
  id: number;
  account_number: string | null;
  name: string;
  email: string;
  phone: string | null;
  preferred_language: string;
  monthly_income: unknown;
    wallet_balance: unknown;
  account_balance: unknown;
  is_admin: boolean;
}) {
  return {
    id: user.id,
    account_number: user.account_number,
    name: user.name,
    email: user.email,
    phone: user.phone,
    preferred_language: user.preferred_language,
    monthly_income: Number(user.monthly_income),
    wallet_balance: Number(user.wallet_balance),
    account_balance: Number(user.account_balance),
    is_admin: user.is_admin,
  };
}
