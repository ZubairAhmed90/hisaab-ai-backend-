import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  buildSpendProfile,
  currentMonthRange,
  scoreOffer,
} from './offers.helpers';

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  // Return top 5 offers scored against user's spend profile
  async getTopOffers(userId: number) {
    const transactions = await this.prisma.transaction.findMany({
      where: { user_id: userId, transaction_date: currentMonthRange() },
    });
    const spendProfile = buildSpendProfile(transactions);
    const offers = await this.prisma.offer.findMany({
      where: { is_active: true },
      include: { partner: true },
    });

    const scored = offers
      .map((offer) => ({ offer, score: scoreOffer(offer, spendProfile) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map((item) => ({
        ...item.offer,
        score: item.score,
        company: item.offer.partner.company_name,
      }));

    return scored;
  }

  // Redeem an offer and return its promo code
  async redeem(userId: number, offerId: number) {
    const offer = await this.prisma.offer.findFirst({
      where: { id: offerId, is_active: true },
    });
    if (!offer) throw new NotFoundException('Offer not found');
    if (offer.current_redemptions >= offer.max_redemptions) {
      throw new NotFoundException('Offer fully redeemed');
    }

    await this.prisma.$transaction([
      this.prisma.offer.update({
        where: { id: offerId },
        data: { current_redemptions: { increment: 1 } },
      }),
      this.prisma.userOfferEvent.create({
        data: { user_id: userId, offer_id: offerId, event_type: 'redeemed' },
      }),
    ]);

    return { promo_code: offer.promo_code, offer_id: offerId };
  }

  // Record user feedback on an offer's relevance
  async feedback(userId: number, offerId: number, rating: string) {
    await this.prisma.userOfferEvent.create({
      data: {
        user_id: userId,
        offer_id: offerId,
        event_type: rating,
      },
    });
    return { recorded: true };
  }
}
