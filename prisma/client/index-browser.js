
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  account_number: 'account_number',
  name: 'name',
  email: 'email',
  password_hash: 'password_hash',
  phone: 'phone',
  preferred_language: 'preferred_language',
  monthly_income: 'monthly_income',
  wallet_balance: 'wallet_balance',
  account_balance: 'account_balance',
  is_admin: 'is_admin',
  reset_token_hash: 'reset_token_hash',
  reset_token_expires: 'reset_token_expires',
  created_at: 'created_at',
  last_login: 'last_login',
  linked_partner_id: 'linked_partner_id'
};

exports.Prisma.SpendingLimitScalarFieldEnum = {
  id: 'id',
  owner_id: 'owner_id',
  target_user_id: 'target_user_id',
  category: 'category',
  monthly_limit: 'monthly_limit',
  alert_at_percent: 'alert_at_percent',
  is_hard_limit: 'is_hard_limit',
  is_active: 'is_active',
  created_at: 'created_at'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  amount: 'amount',
  description: 'description',
  category: 'category',
  sub_category: 'sub_category',
  merchant: 'merchant',
  transaction_date: 'transaction_date',
  source: 'source',
  is_recurring: 'is_recurring',
  ai_confidence: 'ai_confidence',
  user_corrected: 'user_corrected',
  created_at: 'created_at'
};

exports.Prisma.BudgetScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  category: 'category',
  monthly_limit: 'monthly_limit',
  month: 'month',
  alert_at_percent: 'alert_at_percent',
  created_at: 'created_at'
};

exports.Prisma.GoalScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  title: 'title',
  target_amount: 'target_amount',
  saved_amount: 'saved_amount',
  deadline: 'deadline',
  status: 'status',
  created_at: 'created_at'
};

exports.Prisma.MarketCacheScalarFieldEnum = {
  id: 'id',
  asset_type: 'asset_type',
  ticker: 'ticker',
  price_pkr: 'price_pkr',
  change_1d: 'change_1d',
  change_30d: 'change_30d',
  change_90d: 'change_90d',
  change_180d: 'change_180d',
  change_365d: 'change_365d',
  fetched_at: 'fetched_at'
};

exports.Prisma.UserHoldingScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  ticker: 'ticker',
  display_name: 'display_name',
  asset_type: 'asset_type',
  quantity: 'quantity',
  avg_cost_pkr: 'avg_cost_pkr',
  acquired_at: 'acquired_at'
};

exports.Prisma.StockTradeScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  ticker: 'ticker',
  display_name: 'display_name',
  side: 'side',
  quantity: 'quantity',
  price_pkr: 'price_pkr',
  total_pkr: 'total_pkr',
  created_at: 'created_at'
};

exports.Prisma.AiInsightScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  type: 'type',
  content_en: 'content_en',
  content_ur: 'content_ur',
  is_read: 'is_read',
  rating: 'rating',
  generated_at: 'generated_at',
  valid_until: 'valid_until'
};

exports.Prisma.ReportCardScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  month: 'month',
  overall_grade: 'overall_grade',
  budget_score: 'budget_score',
  savings_score: 'savings_score',
  trend_score: 'trend_score',
  summary_en: 'summary_en',
  summary_ur: 'summary_ur',
  created_at: 'created_at'
};

exports.Prisma.OfferPartnerScalarFieldEnum = {
  id: 'id',
  company_name: 'company_name',
  category: 'category',
  billing_model: 'billing_model',
  rate_pkr: 'rate_pkr',
  is_active: 'is_active',
  created_at: 'created_at'
};

exports.Prisma.OfferScalarFieldEnum = {
  id: 'id',
  partner_id: 'partner_id',
  title: 'title',
  title_ur: 'title_ur',
  description: 'description',
  target_category: 'target_category',
  min_monthly_spend: 'min_monthly_spend',
  trigger_event: 'trigger_event',
  promo_code: 'promo_code',
  redemption_type: 'redemption_type',
  deeplink_url: 'deeplink_url',
  valid_from: 'valid_from',
  valid_until: 'valid_until',
  max_redemptions: 'max_redemptions',
  current_redemptions: 'current_redemptions',
  is_active: 'is_active',
  created_at: 'created_at'
};

exports.Prisma.UserOfferEventScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  offer_id: 'offer_id',
  event_type: 'event_type',
  spend_amount: 'spend_amount',
  event_at: 'event_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  SpendingLimit: 'SpendingLimit',
  Transaction: 'Transaction',
  Budget: 'Budget',
  Goal: 'Goal',
  MarketCache: 'MarketCache',
  UserHolding: 'UserHolding',
  StockTrade: 'StockTrade',
  AiInsight: 'AiInsight',
  ReportCard: 'ReportCard',
  OfferPartner: 'OfferPartner',
  Offer: 'Offer',
  UserOfferEvent: 'UserOfferEvent'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
