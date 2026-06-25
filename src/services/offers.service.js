const { transaction } = require('../config/db');
const TransactionModel = require('../models/transaction.model');
const OfferModel = require('../models/offer.model');
const OfferEventModel = require('../models/offer-event.model');
const { buildSpendProfile, scoreOffer, currentMonthRange } = require('../helpers/offers.helpers');

const getTopOffers = async (userId) => {
  const { start, end } = currentMonthRange();
  const transactions = await TransactionModel.findByDateRange(userId, start, end);
  const spendProfile = buildSpendProfile(transactions);
  const offers = await OfferModel.findAllActive();

  return offers
    .map((offer) => ({ offer, score: scoreOffer(offer, spendProfile) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => ({ ...item.offer, score: item.score, company: item.offer.company_name }));
};

const redeem = async (userId, offerId) => {
  const offer = await OfferModel.findActiveById(offerId);
  if (!offer) {
    const err = new Error('Offer not found');
    err.status = 404;
    throw err;
  }
  if (offer.current_redemptions >= offer.max_redemptions) {
    const err = new Error('Offer fully redeemed');
    err.status = 404;
    throw err;
  }

  await transaction(async (conn) => {
    await OfferModel.incrementRedemptions(conn, offerId);
    await OfferEventModel.createInTx(conn, { user_id: userId, offer_id: offerId, event_type: 'redeemed' });
  });

  return { promo_code: offer.promo_code, offer_id: offerId };
};

const feedback = async (userId, offerId, rating) => {
  await OfferEventModel.create({ user_id: userId, offer_id: offerId, event_type: rating });
  return { recorded: true };
};

module.exports = { getTopOffers, redeem, feedback };
