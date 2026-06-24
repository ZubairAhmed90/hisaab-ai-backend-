
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SpendingLimit
 * 
 */
export type SpendingLimit = $Result.DefaultSelection<Prisma.$SpendingLimitPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model MarketCache
 * 
 */
export type MarketCache = $Result.DefaultSelection<Prisma.$MarketCachePayload>
/**
 * Model UserHolding
 * 
 */
export type UserHolding = $Result.DefaultSelection<Prisma.$UserHoldingPayload>
/**
 * Model StockTrade
 * 
 */
export type StockTrade = $Result.DefaultSelection<Prisma.$StockTradePayload>
/**
 * Model AiInsight
 * 
 */
export type AiInsight = $Result.DefaultSelection<Prisma.$AiInsightPayload>
/**
 * Model ReportCard
 * 
 */
export type ReportCard = $Result.DefaultSelection<Prisma.$ReportCardPayload>
/**
 * Model OfferPartner
 * 
 */
export type OfferPartner = $Result.DefaultSelection<Prisma.$OfferPartnerPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model UserOfferEvent
 * 
 */
export type UserOfferEvent = $Result.DefaultSelection<Prisma.$UserOfferEventPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.spendingLimit`: Exposes CRUD operations for the **SpendingLimit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpendingLimits
    * const spendingLimits = await prisma.spendingLimit.findMany()
    * ```
    */
  get spendingLimit(): Prisma.SpendingLimitDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs>;

  /**
   * `prisma.marketCache`: Exposes CRUD operations for the **MarketCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketCaches
    * const marketCaches = await prisma.marketCache.findMany()
    * ```
    */
  get marketCache(): Prisma.MarketCacheDelegate<ExtArgs>;

  /**
   * `prisma.userHolding`: Exposes CRUD operations for the **UserHolding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHoldings
    * const userHoldings = await prisma.userHolding.findMany()
    * ```
    */
  get userHolding(): Prisma.UserHoldingDelegate<ExtArgs>;

  /**
   * `prisma.stockTrade`: Exposes CRUD operations for the **StockTrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockTrades
    * const stockTrades = await prisma.stockTrade.findMany()
    * ```
    */
  get stockTrade(): Prisma.StockTradeDelegate<ExtArgs>;

  /**
   * `prisma.aiInsight`: Exposes CRUD operations for the **AiInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiInsights
    * const aiInsights = await prisma.aiInsight.findMany()
    * ```
    */
  get aiInsight(): Prisma.AiInsightDelegate<ExtArgs>;

  /**
   * `prisma.reportCard`: Exposes CRUD operations for the **ReportCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportCards
    * const reportCards = await prisma.reportCard.findMany()
    * ```
    */
  get reportCard(): Prisma.ReportCardDelegate<ExtArgs>;

  /**
   * `prisma.offerPartner`: Exposes CRUD operations for the **OfferPartner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfferPartners
    * const offerPartners = await prisma.offerPartner.findMany()
    * ```
    */
  get offerPartner(): Prisma.OfferPartnerDelegate<ExtArgs>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs>;

  /**
   * `prisma.userOfferEvent`: Exposes CRUD operations for the **UserOfferEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOfferEvents
    * const userOfferEvents = await prisma.userOfferEvent.findMany()
    * ```
    */
  get userOfferEvent(): Prisma.UserOfferEventDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "spendingLimit" | "transaction" | "budget" | "goal" | "marketCache" | "userHolding" | "stockTrade" | "aiInsight" | "reportCard" | "offerPartner" | "offer" | "userOfferEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SpendingLimit: {
        payload: Prisma.$SpendingLimitPayload<ExtArgs>
        fields: Prisma.SpendingLimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpendingLimitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingLimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpendingLimitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingLimitPayload>
          }
          findFirst: {
            args: Prisma.SpendingLimitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingLimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpendingLimitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingLimitPayload>
          }
          findMany: {
            args: Prisma.SpendingLimitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingLimitPayload>[]
          }
          create: {
            args: Prisma.SpendingLimitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingLimitPayload>
          }
          createMany: {
            args: Prisma.SpendingLimitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpendingLimitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingLimitPayload>
          }
          update: {
            args: Prisma.SpendingLimitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingLimitPayload>
          }
          deleteMany: {
            args: Prisma.SpendingLimitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpendingLimitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpendingLimitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpendingLimitPayload>
          }
          aggregate: {
            args: Prisma.SpendingLimitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpendingLimit>
          }
          groupBy: {
            args: Prisma.SpendingLimitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpendingLimitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpendingLimitCountArgs<ExtArgs>
            result: $Utils.Optional<SpendingLimitCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      MarketCache: {
        payload: Prisma.$MarketCachePayload<ExtArgs>
        fields: Prisma.MarketCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketCachePayload>
          }
          findFirst: {
            args: Prisma.MarketCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketCachePayload>
          }
          findMany: {
            args: Prisma.MarketCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketCachePayload>[]
          }
          create: {
            args: Prisma.MarketCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketCachePayload>
          }
          createMany: {
            args: Prisma.MarketCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MarketCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketCachePayload>
          }
          update: {
            args: Prisma.MarketCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketCachePayload>
          }
          deleteMany: {
            args: Prisma.MarketCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarketCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketCachePayload>
          }
          aggregate: {
            args: Prisma.MarketCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketCache>
          }
          groupBy: {
            args: Prisma.MarketCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCacheCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCacheCountAggregateOutputType> | number
          }
        }
      }
      UserHolding: {
        payload: Prisma.$UserHoldingPayload<ExtArgs>
        fields: Prisma.UserHoldingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHoldingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHoldingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHoldingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHoldingPayload>
          }
          findFirst: {
            args: Prisma.UserHoldingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHoldingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHoldingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHoldingPayload>
          }
          findMany: {
            args: Prisma.UserHoldingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHoldingPayload>[]
          }
          create: {
            args: Prisma.UserHoldingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHoldingPayload>
          }
          createMany: {
            args: Prisma.UserHoldingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserHoldingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHoldingPayload>
          }
          update: {
            args: Prisma.UserHoldingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHoldingPayload>
          }
          deleteMany: {
            args: Prisma.UserHoldingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHoldingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserHoldingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHoldingPayload>
          }
          aggregate: {
            args: Prisma.UserHoldingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHolding>
          }
          groupBy: {
            args: Prisma.UserHoldingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHoldingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHoldingCountArgs<ExtArgs>
            result: $Utils.Optional<UserHoldingCountAggregateOutputType> | number
          }
        }
      }
      StockTrade: {
        payload: Prisma.$StockTradePayload<ExtArgs>
        fields: Prisma.StockTradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockTradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockTradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockTradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockTradePayload>
          }
          findFirst: {
            args: Prisma.StockTradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockTradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockTradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockTradePayload>
          }
          findMany: {
            args: Prisma.StockTradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockTradePayload>[]
          }
          create: {
            args: Prisma.StockTradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockTradePayload>
          }
          createMany: {
            args: Prisma.StockTradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StockTradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockTradePayload>
          }
          update: {
            args: Prisma.StockTradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockTradePayload>
          }
          deleteMany: {
            args: Prisma.StockTradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockTradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockTradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockTradePayload>
          }
          aggregate: {
            args: Prisma.StockTradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockTrade>
          }
          groupBy: {
            args: Prisma.StockTradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockTradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockTradeCountArgs<ExtArgs>
            result: $Utils.Optional<StockTradeCountAggregateOutputType> | number
          }
        }
      }
      AiInsight: {
        payload: Prisma.$AiInsightPayload<ExtArgs>
        fields: Prisma.AiInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiInsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiInsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          findFirst: {
            args: Prisma.AiInsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiInsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          findMany: {
            args: Prisma.AiInsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>[]
          }
          create: {
            args: Prisma.AiInsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          createMany: {
            args: Prisma.AiInsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AiInsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          update: {
            args: Prisma.AiInsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          deleteMany: {
            args: Prisma.AiInsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiInsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiInsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          aggregate: {
            args: Prisma.AiInsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiInsight>
          }
          groupBy: {
            args: Prisma.AiInsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiInsightCountArgs<ExtArgs>
            result: $Utils.Optional<AiInsightCountAggregateOutputType> | number
          }
        }
      }
      ReportCard: {
        payload: Prisma.$ReportCardPayload<ExtArgs>
        fields: Prisma.ReportCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          findFirst: {
            args: Prisma.ReportCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          findMany: {
            args: Prisma.ReportCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>[]
          }
          create: {
            args: Prisma.ReportCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          createMany: {
            args: Prisma.ReportCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          update: {
            args: Prisma.ReportCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          deleteMany: {
            args: Prisma.ReportCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          aggregate: {
            args: Prisma.ReportCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportCard>
          }
          groupBy: {
            args: Prisma.ReportCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCardCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCardCountAggregateOutputType> | number
          }
        }
      }
      OfferPartner: {
        payload: Prisma.$OfferPartnerPayload<ExtArgs>
        fields: Prisma.OfferPartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferPartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferPartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPartnerPayload>
          }
          findFirst: {
            args: Prisma.OfferPartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferPartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPartnerPayload>
          }
          findMany: {
            args: Prisma.OfferPartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPartnerPayload>[]
          }
          create: {
            args: Prisma.OfferPartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPartnerPayload>
          }
          createMany: {
            args: Prisma.OfferPartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OfferPartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPartnerPayload>
          }
          update: {
            args: Prisma.OfferPartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPartnerPayload>
          }
          deleteMany: {
            args: Prisma.OfferPartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferPartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfferPartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPartnerPayload>
          }
          aggregate: {
            args: Prisma.OfferPartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfferPartner>
          }
          groupBy: {
            args: Prisma.OfferPartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferPartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferPartnerCountArgs<ExtArgs>
            result: $Utils.Optional<OfferPartnerCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      UserOfferEvent: {
        payload: Prisma.$UserOfferEventPayload<ExtArgs>
        fields: Prisma.UserOfferEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOfferEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOfferEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOfferEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOfferEventPayload>
          }
          findFirst: {
            args: Prisma.UserOfferEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOfferEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOfferEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOfferEventPayload>
          }
          findMany: {
            args: Prisma.UserOfferEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOfferEventPayload>[]
          }
          create: {
            args: Prisma.UserOfferEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOfferEventPayload>
          }
          createMany: {
            args: Prisma.UserOfferEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserOfferEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOfferEventPayload>
          }
          update: {
            args: Prisma.UserOfferEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOfferEventPayload>
          }
          deleteMany: {
            args: Prisma.UserOfferEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOfferEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserOfferEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOfferEventPayload>
          }
          aggregate: {
            args: Prisma.UserOfferEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOfferEvent>
          }
          groupBy: {
            args: Prisma.UserOfferEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOfferEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOfferEventCountArgs<ExtArgs>
            result: $Utils.Optional<UserOfferEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transactions: number
    budgets: number
    goals: number
    ai_insights: number
    report_cards: number
    offer_events: number
    partner_of: number
    limits_set: number
    limits_received: number
    holdings: number
    stock_trades: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    budgets?: boolean | UserCountOutputTypeCountBudgetsArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    ai_insights?: boolean | UserCountOutputTypeCountAi_insightsArgs
    report_cards?: boolean | UserCountOutputTypeCountReport_cardsArgs
    offer_events?: boolean | UserCountOutputTypeCountOffer_eventsArgs
    partner_of?: boolean | UserCountOutputTypeCountPartner_ofArgs
    limits_set?: boolean | UserCountOutputTypeCountLimits_setArgs
    limits_received?: boolean | UserCountOutputTypeCountLimits_receivedArgs
    holdings?: boolean | UserCountOutputTypeCountHoldingsArgs
    stock_trades?: boolean | UserCountOutputTypeCountStock_tradesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAi_insightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInsightWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReport_cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportCardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOffer_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOfferEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPartner_ofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLimits_setArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpendingLimitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLimits_receivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpendingLimitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHoldingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStock_tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockTradeWhereInput
  }


  /**
   * Count Type OfferPartnerCountOutputType
   */

  export type OfferPartnerCountOutputType = {
    offers: number
  }

  export type OfferPartnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | OfferPartnerCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * OfferPartnerCountOutputType without action
   */
  export type OfferPartnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartnerCountOutputType
     */
    select?: OfferPartnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferPartnerCountOutputType without action
   */
  export type OfferPartnerCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Count Type OfferCountOutputType
   */

  export type OfferCountOutputType = {
    events: number
  }

  export type OfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | OfferCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferCountOutputType
     */
    select?: OfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOfferEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    monthly_income: Decimal | null
    wallet_balance: Decimal | null
    account_balance: Decimal | null
    linked_partner_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    monthly_income: Decimal | null
    wallet_balance: Decimal | null
    account_balance: Decimal | null
    linked_partner_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    account_number: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    phone: string | null
    preferred_language: string | null
    monthly_income: Decimal | null
    wallet_balance: Decimal | null
    account_balance: Decimal | null
    is_admin: boolean | null
    reset_token_hash: string | null
    reset_token_expires: Date | null
    created_at: Date | null
    last_login: Date | null
    linked_partner_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    account_number: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    phone: string | null
    preferred_language: string | null
    monthly_income: Decimal | null
    wallet_balance: Decimal | null
    account_balance: Decimal | null
    is_admin: boolean | null
    reset_token_hash: string | null
    reset_token_expires: Date | null
    created_at: Date | null
    last_login: Date | null
    linked_partner_id: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    account_number: number
    name: number
    email: number
    password_hash: number
    phone: number
    preferred_language: number
    monthly_income: number
    wallet_balance: number
    account_balance: number
    is_admin: number
    reset_token_hash: number
    reset_token_expires: number
    created_at: number
    last_login: number
    linked_partner_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    monthly_income?: true
    wallet_balance?: true
    account_balance?: true
    linked_partner_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    monthly_income?: true
    wallet_balance?: true
    account_balance?: true
    linked_partner_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    account_number?: true
    name?: true
    email?: true
    password_hash?: true
    phone?: true
    preferred_language?: true
    monthly_income?: true
    wallet_balance?: true
    account_balance?: true
    is_admin?: true
    reset_token_hash?: true
    reset_token_expires?: true
    created_at?: true
    last_login?: true
    linked_partner_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    account_number?: true
    name?: true
    email?: true
    password_hash?: true
    phone?: true
    preferred_language?: true
    monthly_income?: true
    wallet_balance?: true
    account_balance?: true
    is_admin?: true
    reset_token_hash?: true
    reset_token_expires?: true
    created_at?: true
    last_login?: true
    linked_partner_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    account_number?: true
    name?: true
    email?: true
    password_hash?: true
    phone?: true
    preferred_language?: true
    monthly_income?: true
    wallet_balance?: true
    account_balance?: true
    is_admin?: true
    reset_token_hash?: true
    reset_token_expires?: true
    created_at?: true
    last_login?: true
    linked_partner_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    account_number: string | null
    name: string
    email: string
    password_hash: string
    phone: string | null
    preferred_language: string
    monthly_income: Decimal
    wallet_balance: Decimal
    account_balance: Decimal
    is_admin: boolean
    reset_token_hash: string | null
    reset_token_expires: Date | null
    created_at: Date
    last_login: Date | null
    linked_partner_id: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_number?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    preferred_language?: boolean
    monthly_income?: boolean
    wallet_balance?: boolean
    account_balance?: boolean
    is_admin?: boolean
    reset_token_hash?: boolean
    reset_token_expires?: boolean
    created_at?: boolean
    last_login?: boolean
    linked_partner_id?: boolean
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    ai_insights?: boolean | User$ai_insightsArgs<ExtArgs>
    report_cards?: boolean | User$report_cardsArgs<ExtArgs>
    offer_events?: boolean | User$offer_eventsArgs<ExtArgs>
    linked_partner?: boolean | User$linked_partnerArgs<ExtArgs>
    partner_of?: boolean | User$partner_ofArgs<ExtArgs>
    limits_set?: boolean | User$limits_setArgs<ExtArgs>
    limits_received?: boolean | User$limits_receivedArgs<ExtArgs>
    holdings?: boolean | User$holdingsArgs<ExtArgs>
    stock_trades?: boolean | User$stock_tradesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    account_number?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    preferred_language?: boolean
    monthly_income?: boolean
    wallet_balance?: boolean
    account_balance?: boolean
    is_admin?: boolean
    reset_token_hash?: boolean
    reset_token_expires?: boolean
    created_at?: boolean
    last_login?: boolean
    linked_partner_id?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    ai_insights?: boolean | User$ai_insightsArgs<ExtArgs>
    report_cards?: boolean | User$report_cardsArgs<ExtArgs>
    offer_events?: boolean | User$offer_eventsArgs<ExtArgs>
    linked_partner?: boolean | User$linked_partnerArgs<ExtArgs>
    partner_of?: boolean | User$partner_ofArgs<ExtArgs>
    limits_set?: boolean | User$limits_setArgs<ExtArgs>
    limits_received?: boolean | User$limits_receivedArgs<ExtArgs>
    holdings?: boolean | User$holdingsArgs<ExtArgs>
    stock_trades?: boolean | User$stock_tradesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      ai_insights: Prisma.$AiInsightPayload<ExtArgs>[]
      report_cards: Prisma.$ReportCardPayload<ExtArgs>[]
      offer_events: Prisma.$UserOfferEventPayload<ExtArgs>[]
      linked_partner: Prisma.$UserPayload<ExtArgs> | null
      partner_of: Prisma.$UserPayload<ExtArgs>[]
      limits_set: Prisma.$SpendingLimitPayload<ExtArgs>[]
      limits_received: Prisma.$SpendingLimitPayload<ExtArgs>[]
      holdings: Prisma.$UserHoldingPayload<ExtArgs>[]
      stock_trades: Prisma.$StockTradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_number: string | null
      name: string
      email: string
      password_hash: string
      phone: string | null
      preferred_language: string
      monthly_income: Prisma.Decimal
      wallet_balance: Prisma.Decimal
      account_balance: Prisma.Decimal
      is_admin: boolean
      reset_token_hash: string | null
      reset_token_expires: Date | null
      created_at: Date
      last_login: Date | null
      linked_partner_id: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    budgets<T extends User$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany"> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany"> | Null>
    ai_insights<T extends User$ai_insightsArgs<ExtArgs> = {}>(args?: Subset<T, User$ai_insightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findMany"> | Null>
    report_cards<T extends User$report_cardsArgs<ExtArgs> = {}>(args?: Subset<T, User$report_cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findMany"> | Null>
    offer_events<T extends User$offer_eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$offer_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "findMany"> | Null>
    linked_partner<T extends User$linked_partnerArgs<ExtArgs> = {}>(args?: Subset<T, User$linked_partnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    partner_of<T extends User$partner_ofArgs<ExtArgs> = {}>(args?: Subset<T, User$partner_ofArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    limits_set<T extends User$limits_setArgs<ExtArgs> = {}>(args?: Subset<T, User$limits_setArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "findMany"> | Null>
    limits_received<T extends User$limits_receivedArgs<ExtArgs> = {}>(args?: Subset<T, User$limits_receivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "findMany"> | Null>
    holdings<T extends User$holdingsArgs<ExtArgs> = {}>(args?: Subset<T, User$holdingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "findMany"> | Null>
    stock_trades<T extends User$stock_tradesArgs<ExtArgs> = {}>(args?: Subset<T, User$stock_tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly account_number: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly preferred_language: FieldRef<"User", 'String'>
    readonly monthly_income: FieldRef<"User", 'Decimal'>
    readonly wallet_balance: FieldRef<"User", 'Decimal'>
    readonly account_balance: FieldRef<"User", 'Decimal'>
    readonly is_admin: FieldRef<"User", 'Boolean'>
    readonly reset_token_hash: FieldRef<"User", 'String'>
    readonly reset_token_expires: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly last_login: FieldRef<"User", 'DateTime'>
    readonly linked_partner_id: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.budgets
   */
  export type User$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.ai_insights
   */
  export type User$ai_insightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    where?: AiInsightWhereInput
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    cursor?: AiInsightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * User.report_cards
   */
  export type User$report_cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    where?: ReportCardWhereInput
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    cursor?: ReportCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportCardScalarFieldEnum | ReportCardScalarFieldEnum[]
  }

  /**
   * User.offer_events
   */
  export type User$offer_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    where?: UserOfferEventWhereInput
    orderBy?: UserOfferEventOrderByWithRelationInput | UserOfferEventOrderByWithRelationInput[]
    cursor?: UserOfferEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOfferEventScalarFieldEnum | UserOfferEventScalarFieldEnum[]
  }

  /**
   * User.linked_partner
   */
  export type User$linked_partnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.partner_of
   */
  export type User$partner_ofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.limits_set
   */
  export type User$limits_setArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    where?: SpendingLimitWhereInput
    orderBy?: SpendingLimitOrderByWithRelationInput | SpendingLimitOrderByWithRelationInput[]
    cursor?: SpendingLimitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpendingLimitScalarFieldEnum | SpendingLimitScalarFieldEnum[]
  }

  /**
   * User.limits_received
   */
  export type User$limits_receivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    where?: SpendingLimitWhereInput
    orderBy?: SpendingLimitOrderByWithRelationInput | SpendingLimitOrderByWithRelationInput[]
    cursor?: SpendingLimitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpendingLimitScalarFieldEnum | SpendingLimitScalarFieldEnum[]
  }

  /**
   * User.holdings
   */
  export type User$holdingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    where?: UserHoldingWhereInput
    orderBy?: UserHoldingOrderByWithRelationInput | UserHoldingOrderByWithRelationInput[]
    cursor?: UserHoldingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHoldingScalarFieldEnum | UserHoldingScalarFieldEnum[]
  }

  /**
   * User.stock_trades
   */
  export type User$stock_tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    where?: StockTradeWhereInput
    orderBy?: StockTradeOrderByWithRelationInput | StockTradeOrderByWithRelationInput[]
    cursor?: StockTradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockTradeScalarFieldEnum | StockTradeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SpendingLimit
   */

  export type AggregateSpendingLimit = {
    _count: SpendingLimitCountAggregateOutputType | null
    _avg: SpendingLimitAvgAggregateOutputType | null
    _sum: SpendingLimitSumAggregateOutputType | null
    _min: SpendingLimitMinAggregateOutputType | null
    _max: SpendingLimitMaxAggregateOutputType | null
  }

  export type SpendingLimitAvgAggregateOutputType = {
    id: number | null
    owner_id: number | null
    target_user_id: number | null
    monthly_limit: Decimal | null
    alert_at_percent: number | null
  }

  export type SpendingLimitSumAggregateOutputType = {
    id: number | null
    owner_id: number | null
    target_user_id: number | null
    monthly_limit: Decimal | null
    alert_at_percent: number | null
  }

  export type SpendingLimitMinAggregateOutputType = {
    id: number | null
    owner_id: number | null
    target_user_id: number | null
    category: string | null
    monthly_limit: Decimal | null
    alert_at_percent: number | null
    is_hard_limit: boolean | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type SpendingLimitMaxAggregateOutputType = {
    id: number | null
    owner_id: number | null
    target_user_id: number | null
    category: string | null
    monthly_limit: Decimal | null
    alert_at_percent: number | null
    is_hard_limit: boolean | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type SpendingLimitCountAggregateOutputType = {
    id: number
    owner_id: number
    target_user_id: number
    category: number
    monthly_limit: number
    alert_at_percent: number
    is_hard_limit: number
    is_active: number
    created_at: number
    _all: number
  }


  export type SpendingLimitAvgAggregateInputType = {
    id?: true
    owner_id?: true
    target_user_id?: true
    monthly_limit?: true
    alert_at_percent?: true
  }

  export type SpendingLimitSumAggregateInputType = {
    id?: true
    owner_id?: true
    target_user_id?: true
    monthly_limit?: true
    alert_at_percent?: true
  }

  export type SpendingLimitMinAggregateInputType = {
    id?: true
    owner_id?: true
    target_user_id?: true
    category?: true
    monthly_limit?: true
    alert_at_percent?: true
    is_hard_limit?: true
    is_active?: true
    created_at?: true
  }

  export type SpendingLimitMaxAggregateInputType = {
    id?: true
    owner_id?: true
    target_user_id?: true
    category?: true
    monthly_limit?: true
    alert_at_percent?: true
    is_hard_limit?: true
    is_active?: true
    created_at?: true
  }

  export type SpendingLimitCountAggregateInputType = {
    id?: true
    owner_id?: true
    target_user_id?: true
    category?: true
    monthly_limit?: true
    alert_at_percent?: true
    is_hard_limit?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type SpendingLimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpendingLimit to aggregate.
     */
    where?: SpendingLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpendingLimits to fetch.
     */
    orderBy?: SpendingLimitOrderByWithRelationInput | SpendingLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpendingLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpendingLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpendingLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpendingLimits
    **/
    _count?: true | SpendingLimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpendingLimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpendingLimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpendingLimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpendingLimitMaxAggregateInputType
  }

  export type GetSpendingLimitAggregateType<T extends SpendingLimitAggregateArgs> = {
        [P in keyof T & keyof AggregateSpendingLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpendingLimit[P]>
      : GetScalarType<T[P], AggregateSpendingLimit[P]>
  }




  export type SpendingLimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpendingLimitWhereInput
    orderBy?: SpendingLimitOrderByWithAggregationInput | SpendingLimitOrderByWithAggregationInput[]
    by: SpendingLimitScalarFieldEnum[] | SpendingLimitScalarFieldEnum
    having?: SpendingLimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpendingLimitCountAggregateInputType | true
    _avg?: SpendingLimitAvgAggregateInputType
    _sum?: SpendingLimitSumAggregateInputType
    _min?: SpendingLimitMinAggregateInputType
    _max?: SpendingLimitMaxAggregateInputType
  }

  export type SpendingLimitGroupByOutputType = {
    id: number
    owner_id: number
    target_user_id: number
    category: string
    monthly_limit: Decimal
    alert_at_percent: number
    is_hard_limit: boolean
    is_active: boolean
    created_at: Date
    _count: SpendingLimitCountAggregateOutputType | null
    _avg: SpendingLimitAvgAggregateOutputType | null
    _sum: SpendingLimitSumAggregateOutputType | null
    _min: SpendingLimitMinAggregateOutputType | null
    _max: SpendingLimitMaxAggregateOutputType | null
  }

  type GetSpendingLimitGroupByPayload<T extends SpendingLimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpendingLimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpendingLimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpendingLimitGroupByOutputType[P]>
            : GetScalarType<T[P], SpendingLimitGroupByOutputType[P]>
        }
      >
    >


  export type SpendingLimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    target_user_id?: boolean
    category?: boolean
    monthly_limit?: boolean
    alert_at_percent?: boolean
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    target_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spendingLimit"]>


  export type SpendingLimitSelectScalar = {
    id?: boolean
    owner_id?: boolean
    target_user_id?: boolean
    category?: boolean
    monthly_limit?: boolean
    alert_at_percent?: boolean
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type SpendingLimitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    target_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SpendingLimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpendingLimit"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      target_user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      owner_id: number
      target_user_id: number
      category: string
      monthly_limit: Prisma.Decimal
      alert_at_percent: number
      is_hard_limit: boolean
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["spendingLimit"]>
    composites: {}
  }

  type SpendingLimitGetPayload<S extends boolean | null | undefined | SpendingLimitDefaultArgs> = $Result.GetResult<Prisma.$SpendingLimitPayload, S>

  type SpendingLimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpendingLimitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpendingLimitCountAggregateInputType | true
    }

  export interface SpendingLimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpendingLimit'], meta: { name: 'SpendingLimit' } }
    /**
     * Find zero or one SpendingLimit that matches the filter.
     * @param {SpendingLimitFindUniqueArgs} args - Arguments to find a SpendingLimit
     * @example
     * // Get one SpendingLimit
     * const spendingLimit = await prisma.spendingLimit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpendingLimitFindUniqueArgs>(args: SelectSubset<T, SpendingLimitFindUniqueArgs<ExtArgs>>): Prisma__SpendingLimitClient<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SpendingLimit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpendingLimitFindUniqueOrThrowArgs} args - Arguments to find a SpendingLimit
     * @example
     * // Get one SpendingLimit
     * const spendingLimit = await prisma.spendingLimit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpendingLimitFindUniqueOrThrowArgs>(args: SelectSubset<T, SpendingLimitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpendingLimitClient<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SpendingLimit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingLimitFindFirstArgs} args - Arguments to find a SpendingLimit
     * @example
     * // Get one SpendingLimit
     * const spendingLimit = await prisma.spendingLimit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpendingLimitFindFirstArgs>(args?: SelectSubset<T, SpendingLimitFindFirstArgs<ExtArgs>>): Prisma__SpendingLimitClient<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SpendingLimit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingLimitFindFirstOrThrowArgs} args - Arguments to find a SpendingLimit
     * @example
     * // Get one SpendingLimit
     * const spendingLimit = await prisma.spendingLimit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpendingLimitFindFirstOrThrowArgs>(args?: SelectSubset<T, SpendingLimitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpendingLimitClient<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SpendingLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingLimitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpendingLimits
     * const spendingLimits = await prisma.spendingLimit.findMany()
     * 
     * // Get first 10 SpendingLimits
     * const spendingLimits = await prisma.spendingLimit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spendingLimitWithIdOnly = await prisma.spendingLimit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpendingLimitFindManyArgs>(args?: SelectSubset<T, SpendingLimitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SpendingLimit.
     * @param {SpendingLimitCreateArgs} args - Arguments to create a SpendingLimit.
     * @example
     * // Create one SpendingLimit
     * const SpendingLimit = await prisma.spendingLimit.create({
     *   data: {
     *     // ... data to create a SpendingLimit
     *   }
     * })
     * 
     */
    create<T extends SpendingLimitCreateArgs>(args: SelectSubset<T, SpendingLimitCreateArgs<ExtArgs>>): Prisma__SpendingLimitClient<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SpendingLimits.
     * @param {SpendingLimitCreateManyArgs} args - Arguments to create many SpendingLimits.
     * @example
     * // Create many SpendingLimits
     * const spendingLimit = await prisma.spendingLimit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpendingLimitCreateManyArgs>(args?: SelectSubset<T, SpendingLimitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SpendingLimit.
     * @param {SpendingLimitDeleteArgs} args - Arguments to delete one SpendingLimit.
     * @example
     * // Delete one SpendingLimit
     * const SpendingLimit = await prisma.spendingLimit.delete({
     *   where: {
     *     // ... filter to delete one SpendingLimit
     *   }
     * })
     * 
     */
    delete<T extends SpendingLimitDeleteArgs>(args: SelectSubset<T, SpendingLimitDeleteArgs<ExtArgs>>): Prisma__SpendingLimitClient<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SpendingLimit.
     * @param {SpendingLimitUpdateArgs} args - Arguments to update one SpendingLimit.
     * @example
     * // Update one SpendingLimit
     * const spendingLimit = await prisma.spendingLimit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpendingLimitUpdateArgs>(args: SelectSubset<T, SpendingLimitUpdateArgs<ExtArgs>>): Prisma__SpendingLimitClient<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SpendingLimits.
     * @param {SpendingLimitDeleteManyArgs} args - Arguments to filter SpendingLimits to delete.
     * @example
     * // Delete a few SpendingLimits
     * const { count } = await prisma.spendingLimit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpendingLimitDeleteManyArgs>(args?: SelectSubset<T, SpendingLimitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpendingLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingLimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpendingLimits
     * const spendingLimit = await prisma.spendingLimit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpendingLimitUpdateManyArgs>(args: SelectSubset<T, SpendingLimitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpendingLimit.
     * @param {SpendingLimitUpsertArgs} args - Arguments to update or create a SpendingLimit.
     * @example
     * // Update or create a SpendingLimit
     * const spendingLimit = await prisma.spendingLimit.upsert({
     *   create: {
     *     // ... data to create a SpendingLimit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpendingLimit we want to update
     *   }
     * })
     */
    upsert<T extends SpendingLimitUpsertArgs>(args: SelectSubset<T, SpendingLimitUpsertArgs<ExtArgs>>): Prisma__SpendingLimitClient<$Result.GetResult<Prisma.$SpendingLimitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SpendingLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingLimitCountArgs} args - Arguments to filter SpendingLimits to count.
     * @example
     * // Count the number of SpendingLimits
     * const count = await prisma.spendingLimit.count({
     *   where: {
     *     // ... the filter for the SpendingLimits we want to count
     *   }
     * })
    **/
    count<T extends SpendingLimitCountArgs>(
      args?: Subset<T, SpendingLimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpendingLimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpendingLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingLimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpendingLimitAggregateArgs>(args: Subset<T, SpendingLimitAggregateArgs>): Prisma.PrismaPromise<GetSpendingLimitAggregateType<T>>

    /**
     * Group by SpendingLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpendingLimitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpendingLimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpendingLimitGroupByArgs['orderBy'] }
        : { orderBy?: SpendingLimitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpendingLimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpendingLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpendingLimit model
   */
  readonly fields: SpendingLimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpendingLimit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpendingLimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    target_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpendingLimit model
   */ 
  interface SpendingLimitFieldRefs {
    readonly id: FieldRef<"SpendingLimit", 'Int'>
    readonly owner_id: FieldRef<"SpendingLimit", 'Int'>
    readonly target_user_id: FieldRef<"SpendingLimit", 'Int'>
    readonly category: FieldRef<"SpendingLimit", 'String'>
    readonly monthly_limit: FieldRef<"SpendingLimit", 'Decimal'>
    readonly alert_at_percent: FieldRef<"SpendingLimit", 'Int'>
    readonly is_hard_limit: FieldRef<"SpendingLimit", 'Boolean'>
    readonly is_active: FieldRef<"SpendingLimit", 'Boolean'>
    readonly created_at: FieldRef<"SpendingLimit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpendingLimit findUnique
   */
  export type SpendingLimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    /**
     * Filter, which SpendingLimit to fetch.
     */
    where: SpendingLimitWhereUniqueInput
  }

  /**
   * SpendingLimit findUniqueOrThrow
   */
  export type SpendingLimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    /**
     * Filter, which SpendingLimit to fetch.
     */
    where: SpendingLimitWhereUniqueInput
  }

  /**
   * SpendingLimit findFirst
   */
  export type SpendingLimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    /**
     * Filter, which SpendingLimit to fetch.
     */
    where?: SpendingLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpendingLimits to fetch.
     */
    orderBy?: SpendingLimitOrderByWithRelationInput | SpendingLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpendingLimits.
     */
    cursor?: SpendingLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpendingLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpendingLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpendingLimits.
     */
    distinct?: SpendingLimitScalarFieldEnum | SpendingLimitScalarFieldEnum[]
  }

  /**
   * SpendingLimit findFirstOrThrow
   */
  export type SpendingLimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    /**
     * Filter, which SpendingLimit to fetch.
     */
    where?: SpendingLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpendingLimits to fetch.
     */
    orderBy?: SpendingLimitOrderByWithRelationInput | SpendingLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpendingLimits.
     */
    cursor?: SpendingLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpendingLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpendingLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpendingLimits.
     */
    distinct?: SpendingLimitScalarFieldEnum | SpendingLimitScalarFieldEnum[]
  }

  /**
   * SpendingLimit findMany
   */
  export type SpendingLimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    /**
     * Filter, which SpendingLimits to fetch.
     */
    where?: SpendingLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpendingLimits to fetch.
     */
    orderBy?: SpendingLimitOrderByWithRelationInput | SpendingLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpendingLimits.
     */
    cursor?: SpendingLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpendingLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpendingLimits.
     */
    skip?: number
    distinct?: SpendingLimitScalarFieldEnum | SpendingLimitScalarFieldEnum[]
  }

  /**
   * SpendingLimit create
   */
  export type SpendingLimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    /**
     * The data needed to create a SpendingLimit.
     */
    data: XOR<SpendingLimitCreateInput, SpendingLimitUncheckedCreateInput>
  }

  /**
   * SpendingLimit createMany
   */
  export type SpendingLimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpendingLimits.
     */
    data: SpendingLimitCreateManyInput | SpendingLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpendingLimit update
   */
  export type SpendingLimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    /**
     * The data needed to update a SpendingLimit.
     */
    data: XOR<SpendingLimitUpdateInput, SpendingLimitUncheckedUpdateInput>
    /**
     * Choose, which SpendingLimit to update.
     */
    where: SpendingLimitWhereUniqueInput
  }

  /**
   * SpendingLimit updateMany
   */
  export type SpendingLimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpendingLimits.
     */
    data: XOR<SpendingLimitUpdateManyMutationInput, SpendingLimitUncheckedUpdateManyInput>
    /**
     * Filter which SpendingLimits to update
     */
    where?: SpendingLimitWhereInput
  }

  /**
   * SpendingLimit upsert
   */
  export type SpendingLimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    /**
     * The filter to search for the SpendingLimit to update in case it exists.
     */
    where: SpendingLimitWhereUniqueInput
    /**
     * In case the SpendingLimit found by the `where` argument doesn't exist, create a new SpendingLimit with this data.
     */
    create: XOR<SpendingLimitCreateInput, SpendingLimitUncheckedCreateInput>
    /**
     * In case the SpendingLimit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpendingLimitUpdateInput, SpendingLimitUncheckedUpdateInput>
  }

  /**
   * SpendingLimit delete
   */
  export type SpendingLimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
    /**
     * Filter which SpendingLimit to delete.
     */
    where: SpendingLimitWhereUniqueInput
  }

  /**
   * SpendingLimit deleteMany
   */
  export type SpendingLimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpendingLimits to delete
     */
    where?: SpendingLimitWhereInput
  }

  /**
   * SpendingLimit without action
   */
  export type SpendingLimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpendingLimit
     */
    select?: SpendingLimitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpendingLimitInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    ai_confidence: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    ai_confidence: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    description: string | null
    category: string | null
    sub_category: string | null
    merchant: string | null
    transaction_date: Date | null
    source: string | null
    is_recurring: boolean | null
    ai_confidence: Decimal | null
    user_corrected: boolean | null
    created_at: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    description: string | null
    category: string | null
    sub_category: string | null
    merchant: string | null
    transaction_date: Date | null
    source: string | null
    is_recurring: boolean | null
    ai_confidence: Decimal | null
    user_corrected: boolean | null
    created_at: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    user_id: number
    amount: number
    description: number
    category: number
    sub_category: number
    merchant: number
    transaction_date: number
    source: number
    is_recurring: number
    ai_confidence: number
    user_corrected: number
    created_at: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    ai_confidence?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    ai_confidence?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    description?: true
    category?: true
    sub_category?: true
    merchant?: true
    transaction_date?: true
    source?: true
    is_recurring?: true
    ai_confidence?: true
    user_corrected?: true
    created_at?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    description?: true
    category?: true
    sub_category?: true
    merchant?: true
    transaction_date?: true
    source?: true
    is_recurring?: true
    ai_confidence?: true
    user_corrected?: true
    created_at?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    description?: true
    category?: true
    sub_category?: true
    merchant?: true
    transaction_date?: true
    source?: true
    is_recurring?: true
    ai_confidence?: true
    user_corrected?: true
    created_at?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    user_id: number
    amount: Decimal
    description: string
    category: string
    sub_category: string | null
    merchant: string | null
    transaction_date: Date
    source: string
    is_recurring: boolean
    ai_confidence: Decimal | null
    user_corrected: boolean
    created_at: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    sub_category?: boolean
    merchant?: boolean
    transaction_date?: boolean
    source?: boolean
    is_recurring?: boolean
    ai_confidence?: boolean
    user_corrected?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>


  export type TransactionSelectScalar = {
    id?: boolean
    user_id?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    sub_category?: boolean
    merchant?: boolean
    transaction_date?: boolean
    source?: boolean
    is_recurring?: boolean
    ai_confidence?: boolean
    user_corrected?: boolean
    created_at?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      amount: Prisma.Decimal
      description: string
      category: string
      sub_category: string | null
      merchant: string | null
      transaction_date: Date
      source: string
      is_recurring: boolean
      ai_confidence: Prisma.Decimal | null
      user_corrected: boolean
      created_at: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly user_id: FieldRef<"Transaction", 'Int'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly category: FieldRef<"Transaction", 'String'>
    readonly sub_category: FieldRef<"Transaction", 'String'>
    readonly merchant: FieldRef<"Transaction", 'String'>
    readonly transaction_date: FieldRef<"Transaction", 'DateTime'>
    readonly source: FieldRef<"Transaction", 'String'>
    readonly is_recurring: FieldRef<"Transaction", 'Boolean'>
    readonly ai_confidence: FieldRef<"Transaction", 'Decimal'>
    readonly user_corrected: FieldRef<"Transaction", 'Boolean'>
    readonly created_at: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    monthly_limit: Decimal | null
    alert_at_percent: number | null
  }

  export type BudgetSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    monthly_limit: Decimal | null
    alert_at_percent: number | null
  }

  export type BudgetMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    category: string | null
    monthly_limit: Decimal | null
    month: Date | null
    alert_at_percent: number | null
    created_at: Date | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    category: string | null
    monthly_limit: Decimal | null
    month: Date | null
    alert_at_percent: number | null
    created_at: Date | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    user_id: number
    category: number
    monthly_limit: number
    month: number
    alert_at_percent: number
    created_at: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    id?: true
    user_id?: true
    monthly_limit?: true
    alert_at_percent?: true
  }

  export type BudgetSumAggregateInputType = {
    id?: true
    user_id?: true
    monthly_limit?: true
    alert_at_percent?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    user_id?: true
    category?: true
    monthly_limit?: true
    month?: true
    alert_at_percent?: true
    created_at?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    user_id?: true
    category?: true
    monthly_limit?: true
    month?: true
    alert_at_percent?: true
    created_at?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    user_id?: true
    category?: true
    monthly_limit?: true
    month?: true
    alert_at_percent?: true
    created_at?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: number
    user_id: number
    category: string
    monthly_limit: Decimal
    month: Date
    alert_at_percent: number
    created_at: Date
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    category?: boolean
    monthly_limit?: boolean
    month?: boolean
    alert_at_percent?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>


  export type BudgetSelectScalar = {
    id?: boolean
    user_id?: boolean
    category?: boolean
    monthly_limit?: boolean
    month?: boolean
    alert_at_percent?: boolean
    created_at?: boolean
  }

  export type BudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      category: string
      monthly_limit: Prisma.Decimal
      month: Date
      alert_at_percent: number
      created_at: Date
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Budget model
   */ 
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'Int'>
    readonly user_id: FieldRef<"Budget", 'Int'>
    readonly category: FieldRef<"Budget", 'String'>
    readonly monthly_limit: FieldRef<"Budget", 'Decimal'>
    readonly month: FieldRef<"Budget", 'DateTime'>
    readonly alert_at_percent: FieldRef<"Budget", 'Int'>
    readonly created_at: FieldRef<"Budget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    target_amount: Decimal | null
    saved_amount: Decimal | null
  }

  export type GoalSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    target_amount: Decimal | null
    saved_amount: Decimal | null
  }

  export type GoalMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    target_amount: Decimal | null
    saved_amount: Decimal | null
    deadline: Date | null
    status: string | null
    created_at: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    target_amount: Decimal | null
    saved_amount: Decimal | null
    deadline: Date | null
    status: string | null
    created_at: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    target_amount: number
    saved_amount: number
    deadline: number
    status: number
    created_at: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    id?: true
    user_id?: true
    target_amount?: true
    saved_amount?: true
  }

  export type GoalSumAggregateInputType = {
    id?: true
    user_id?: true
    target_amount?: true
    saved_amount?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    target_amount?: true
    saved_amount?: true
    deadline?: true
    status?: true
    created_at?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    target_amount?: true
    saved_amount?: true
    deadline?: true
    status?: true
    created_at?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    target_amount?: true
    saved_amount?: true
    deadline?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: number
    user_id: number
    title: string
    target_amount: Decimal
    saved_amount: Decimal
    deadline: Date
    status: string
    created_at: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    target_amount?: boolean
    saved_amount?: boolean
    deadline?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>


  export type GoalSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    target_amount?: boolean
    saved_amount?: boolean
    deadline?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      target_amount: Prisma.Decimal
      saved_amount: Prisma.Decimal
      deadline: Date
      status: string
      created_at: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Goal model
   */ 
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'Int'>
    readonly user_id: FieldRef<"Goal", 'Int'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly target_amount: FieldRef<"Goal", 'Decimal'>
    readonly saved_amount: FieldRef<"Goal", 'Decimal'>
    readonly deadline: FieldRef<"Goal", 'DateTime'>
    readonly status: FieldRef<"Goal", 'String'>
    readonly created_at: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model MarketCache
   */

  export type AggregateMarketCache = {
    _count: MarketCacheCountAggregateOutputType | null
    _avg: MarketCacheAvgAggregateOutputType | null
    _sum: MarketCacheSumAggregateOutputType | null
    _min: MarketCacheMinAggregateOutputType | null
    _max: MarketCacheMaxAggregateOutputType | null
  }

  export type MarketCacheAvgAggregateOutputType = {
    id: number | null
    price_pkr: Decimal | null
    change_1d: Decimal | null
    change_30d: Decimal | null
    change_90d: Decimal | null
    change_180d: Decimal | null
    change_365d: Decimal | null
  }

  export type MarketCacheSumAggregateOutputType = {
    id: number | null
    price_pkr: Decimal | null
    change_1d: Decimal | null
    change_30d: Decimal | null
    change_90d: Decimal | null
    change_180d: Decimal | null
    change_365d: Decimal | null
  }

  export type MarketCacheMinAggregateOutputType = {
    id: number | null
    asset_type: string | null
    ticker: string | null
    price_pkr: Decimal | null
    change_1d: Decimal | null
    change_30d: Decimal | null
    change_90d: Decimal | null
    change_180d: Decimal | null
    change_365d: Decimal | null
    fetched_at: Date | null
  }

  export type MarketCacheMaxAggregateOutputType = {
    id: number | null
    asset_type: string | null
    ticker: string | null
    price_pkr: Decimal | null
    change_1d: Decimal | null
    change_30d: Decimal | null
    change_90d: Decimal | null
    change_180d: Decimal | null
    change_365d: Decimal | null
    fetched_at: Date | null
  }

  export type MarketCacheCountAggregateOutputType = {
    id: number
    asset_type: number
    ticker: number
    price_pkr: number
    change_1d: number
    change_30d: number
    change_90d: number
    change_180d: number
    change_365d: number
    fetched_at: number
    _all: number
  }


  export type MarketCacheAvgAggregateInputType = {
    id?: true
    price_pkr?: true
    change_1d?: true
    change_30d?: true
    change_90d?: true
    change_180d?: true
    change_365d?: true
  }

  export type MarketCacheSumAggregateInputType = {
    id?: true
    price_pkr?: true
    change_1d?: true
    change_30d?: true
    change_90d?: true
    change_180d?: true
    change_365d?: true
  }

  export type MarketCacheMinAggregateInputType = {
    id?: true
    asset_type?: true
    ticker?: true
    price_pkr?: true
    change_1d?: true
    change_30d?: true
    change_90d?: true
    change_180d?: true
    change_365d?: true
    fetched_at?: true
  }

  export type MarketCacheMaxAggregateInputType = {
    id?: true
    asset_type?: true
    ticker?: true
    price_pkr?: true
    change_1d?: true
    change_30d?: true
    change_90d?: true
    change_180d?: true
    change_365d?: true
    fetched_at?: true
  }

  export type MarketCacheCountAggregateInputType = {
    id?: true
    asset_type?: true
    ticker?: true
    price_pkr?: true
    change_1d?: true
    change_30d?: true
    change_90d?: true
    change_180d?: true
    change_365d?: true
    fetched_at?: true
    _all?: true
  }

  export type MarketCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketCache to aggregate.
     */
    where?: MarketCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketCaches to fetch.
     */
    orderBy?: MarketCacheOrderByWithRelationInput | MarketCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketCaches
    **/
    _count?: true | MarketCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketCacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketCacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketCacheMaxAggregateInputType
  }

  export type GetMarketCacheAggregateType<T extends MarketCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketCache[P]>
      : GetScalarType<T[P], AggregateMarketCache[P]>
  }




  export type MarketCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketCacheWhereInput
    orderBy?: MarketCacheOrderByWithAggregationInput | MarketCacheOrderByWithAggregationInput[]
    by: MarketCacheScalarFieldEnum[] | MarketCacheScalarFieldEnum
    having?: MarketCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCacheCountAggregateInputType | true
    _avg?: MarketCacheAvgAggregateInputType
    _sum?: MarketCacheSumAggregateInputType
    _min?: MarketCacheMinAggregateInputType
    _max?: MarketCacheMaxAggregateInputType
  }

  export type MarketCacheGroupByOutputType = {
    id: number
    asset_type: string
    ticker: string
    price_pkr: Decimal
    change_1d: Decimal | null
    change_30d: Decimal | null
    change_90d: Decimal | null
    change_180d: Decimal | null
    change_365d: Decimal | null
    fetched_at: Date
    _count: MarketCacheCountAggregateOutputType | null
    _avg: MarketCacheAvgAggregateOutputType | null
    _sum: MarketCacheSumAggregateOutputType | null
    _min: MarketCacheMinAggregateOutputType | null
    _max: MarketCacheMaxAggregateOutputType | null
  }

  type GetMarketCacheGroupByPayload<T extends MarketCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketCacheGroupByOutputType[P]>
            : GetScalarType<T[P], MarketCacheGroupByOutputType[P]>
        }
      >
    >


  export type MarketCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_type?: boolean
    ticker?: boolean
    price_pkr?: boolean
    change_1d?: boolean
    change_30d?: boolean
    change_90d?: boolean
    change_180d?: boolean
    change_365d?: boolean
    fetched_at?: boolean
  }, ExtArgs["result"]["marketCache"]>


  export type MarketCacheSelectScalar = {
    id?: boolean
    asset_type?: boolean
    ticker?: boolean
    price_pkr?: boolean
    change_1d?: boolean
    change_30d?: boolean
    change_90d?: boolean
    change_180d?: boolean
    change_365d?: boolean
    fetched_at?: boolean
  }


  export type $MarketCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      asset_type: string
      ticker: string
      price_pkr: Prisma.Decimal
      change_1d: Prisma.Decimal | null
      change_30d: Prisma.Decimal | null
      change_90d: Prisma.Decimal | null
      change_180d: Prisma.Decimal | null
      change_365d: Prisma.Decimal | null
      fetched_at: Date
    }, ExtArgs["result"]["marketCache"]>
    composites: {}
  }

  type MarketCacheGetPayload<S extends boolean | null | undefined | MarketCacheDefaultArgs> = $Result.GetResult<Prisma.$MarketCachePayload, S>

  type MarketCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarketCacheFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarketCacheCountAggregateInputType | true
    }

  export interface MarketCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketCache'], meta: { name: 'MarketCache' } }
    /**
     * Find zero or one MarketCache that matches the filter.
     * @param {MarketCacheFindUniqueArgs} args - Arguments to find a MarketCache
     * @example
     * // Get one MarketCache
     * const marketCache = await prisma.marketCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketCacheFindUniqueArgs>(args: SelectSubset<T, MarketCacheFindUniqueArgs<ExtArgs>>): Prisma__MarketCacheClient<$Result.GetResult<Prisma.$MarketCachePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MarketCache that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MarketCacheFindUniqueOrThrowArgs} args - Arguments to find a MarketCache
     * @example
     * // Get one MarketCache
     * const marketCache = await prisma.marketCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketCacheClient<$Result.GetResult<Prisma.$MarketCachePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MarketCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCacheFindFirstArgs} args - Arguments to find a MarketCache
     * @example
     * // Get one MarketCache
     * const marketCache = await prisma.marketCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketCacheFindFirstArgs>(args?: SelectSubset<T, MarketCacheFindFirstArgs<ExtArgs>>): Prisma__MarketCacheClient<$Result.GetResult<Prisma.$MarketCachePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MarketCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCacheFindFirstOrThrowArgs} args - Arguments to find a MarketCache
     * @example
     * // Get one MarketCache
     * const marketCache = await prisma.marketCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketCacheClient<$Result.GetResult<Prisma.$MarketCachePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MarketCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketCaches
     * const marketCaches = await prisma.marketCache.findMany()
     * 
     * // Get first 10 MarketCaches
     * const marketCaches = await prisma.marketCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketCacheWithIdOnly = await prisma.marketCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketCacheFindManyArgs>(args?: SelectSubset<T, MarketCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketCachePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MarketCache.
     * @param {MarketCacheCreateArgs} args - Arguments to create a MarketCache.
     * @example
     * // Create one MarketCache
     * const MarketCache = await prisma.marketCache.create({
     *   data: {
     *     // ... data to create a MarketCache
     *   }
     * })
     * 
     */
    create<T extends MarketCacheCreateArgs>(args: SelectSubset<T, MarketCacheCreateArgs<ExtArgs>>): Prisma__MarketCacheClient<$Result.GetResult<Prisma.$MarketCachePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MarketCaches.
     * @param {MarketCacheCreateManyArgs} args - Arguments to create many MarketCaches.
     * @example
     * // Create many MarketCaches
     * const marketCache = await prisma.marketCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCacheCreateManyArgs>(args?: SelectSubset<T, MarketCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MarketCache.
     * @param {MarketCacheDeleteArgs} args - Arguments to delete one MarketCache.
     * @example
     * // Delete one MarketCache
     * const MarketCache = await prisma.marketCache.delete({
     *   where: {
     *     // ... filter to delete one MarketCache
     *   }
     * })
     * 
     */
    delete<T extends MarketCacheDeleteArgs>(args: SelectSubset<T, MarketCacheDeleteArgs<ExtArgs>>): Prisma__MarketCacheClient<$Result.GetResult<Prisma.$MarketCachePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MarketCache.
     * @param {MarketCacheUpdateArgs} args - Arguments to update one MarketCache.
     * @example
     * // Update one MarketCache
     * const marketCache = await prisma.marketCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketCacheUpdateArgs>(args: SelectSubset<T, MarketCacheUpdateArgs<ExtArgs>>): Prisma__MarketCacheClient<$Result.GetResult<Prisma.$MarketCachePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MarketCaches.
     * @param {MarketCacheDeleteManyArgs} args - Arguments to filter MarketCaches to delete.
     * @example
     * // Delete a few MarketCaches
     * const { count } = await prisma.marketCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketCacheDeleteManyArgs>(args?: SelectSubset<T, MarketCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketCaches
     * const marketCache = await prisma.marketCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketCacheUpdateManyArgs>(args: SelectSubset<T, MarketCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarketCache.
     * @param {MarketCacheUpsertArgs} args - Arguments to update or create a MarketCache.
     * @example
     * // Update or create a MarketCache
     * const marketCache = await prisma.marketCache.upsert({
     *   create: {
     *     // ... data to create a MarketCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketCache we want to update
     *   }
     * })
     */
    upsert<T extends MarketCacheUpsertArgs>(args: SelectSubset<T, MarketCacheUpsertArgs<ExtArgs>>): Prisma__MarketCacheClient<$Result.GetResult<Prisma.$MarketCachePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MarketCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCacheCountArgs} args - Arguments to filter MarketCaches to count.
     * @example
     * // Count the number of MarketCaches
     * const count = await prisma.marketCache.count({
     *   where: {
     *     // ... the filter for the MarketCaches we want to count
     *   }
     * })
    **/
    count<T extends MarketCacheCountArgs>(
      args?: Subset<T, MarketCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketCacheAggregateArgs>(args: Subset<T, MarketCacheAggregateArgs>): Prisma.PrismaPromise<GetMarketCacheAggregateType<T>>

    /**
     * Group by MarketCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketCacheGroupByArgs['orderBy'] }
        : { orderBy?: MarketCacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketCache model
   */
  readonly fields: MarketCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketCache model
   */ 
  interface MarketCacheFieldRefs {
    readonly id: FieldRef<"MarketCache", 'Int'>
    readonly asset_type: FieldRef<"MarketCache", 'String'>
    readonly ticker: FieldRef<"MarketCache", 'String'>
    readonly price_pkr: FieldRef<"MarketCache", 'Decimal'>
    readonly change_1d: FieldRef<"MarketCache", 'Decimal'>
    readonly change_30d: FieldRef<"MarketCache", 'Decimal'>
    readonly change_90d: FieldRef<"MarketCache", 'Decimal'>
    readonly change_180d: FieldRef<"MarketCache", 'Decimal'>
    readonly change_365d: FieldRef<"MarketCache", 'Decimal'>
    readonly fetched_at: FieldRef<"MarketCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketCache findUnique
   */
  export type MarketCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
    /**
     * Filter, which MarketCache to fetch.
     */
    where: MarketCacheWhereUniqueInput
  }

  /**
   * MarketCache findUniqueOrThrow
   */
  export type MarketCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
    /**
     * Filter, which MarketCache to fetch.
     */
    where: MarketCacheWhereUniqueInput
  }

  /**
   * MarketCache findFirst
   */
  export type MarketCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
    /**
     * Filter, which MarketCache to fetch.
     */
    where?: MarketCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketCaches to fetch.
     */
    orderBy?: MarketCacheOrderByWithRelationInput | MarketCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketCaches.
     */
    cursor?: MarketCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketCaches.
     */
    distinct?: MarketCacheScalarFieldEnum | MarketCacheScalarFieldEnum[]
  }

  /**
   * MarketCache findFirstOrThrow
   */
  export type MarketCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
    /**
     * Filter, which MarketCache to fetch.
     */
    where?: MarketCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketCaches to fetch.
     */
    orderBy?: MarketCacheOrderByWithRelationInput | MarketCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketCaches.
     */
    cursor?: MarketCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketCaches.
     */
    distinct?: MarketCacheScalarFieldEnum | MarketCacheScalarFieldEnum[]
  }

  /**
   * MarketCache findMany
   */
  export type MarketCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
    /**
     * Filter, which MarketCaches to fetch.
     */
    where?: MarketCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketCaches to fetch.
     */
    orderBy?: MarketCacheOrderByWithRelationInput | MarketCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketCaches.
     */
    cursor?: MarketCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketCaches.
     */
    skip?: number
    distinct?: MarketCacheScalarFieldEnum | MarketCacheScalarFieldEnum[]
  }

  /**
   * MarketCache create
   */
  export type MarketCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
    /**
     * The data needed to create a MarketCache.
     */
    data: XOR<MarketCacheCreateInput, MarketCacheUncheckedCreateInput>
  }

  /**
   * MarketCache createMany
   */
  export type MarketCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketCaches.
     */
    data: MarketCacheCreateManyInput | MarketCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketCache update
   */
  export type MarketCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
    /**
     * The data needed to update a MarketCache.
     */
    data: XOR<MarketCacheUpdateInput, MarketCacheUncheckedUpdateInput>
    /**
     * Choose, which MarketCache to update.
     */
    where: MarketCacheWhereUniqueInput
  }

  /**
   * MarketCache updateMany
   */
  export type MarketCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketCaches.
     */
    data: XOR<MarketCacheUpdateManyMutationInput, MarketCacheUncheckedUpdateManyInput>
    /**
     * Filter which MarketCaches to update
     */
    where?: MarketCacheWhereInput
  }

  /**
   * MarketCache upsert
   */
  export type MarketCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
    /**
     * The filter to search for the MarketCache to update in case it exists.
     */
    where: MarketCacheWhereUniqueInput
    /**
     * In case the MarketCache found by the `where` argument doesn't exist, create a new MarketCache with this data.
     */
    create: XOR<MarketCacheCreateInput, MarketCacheUncheckedCreateInput>
    /**
     * In case the MarketCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketCacheUpdateInput, MarketCacheUncheckedUpdateInput>
  }

  /**
   * MarketCache delete
   */
  export type MarketCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
    /**
     * Filter which MarketCache to delete.
     */
    where: MarketCacheWhereUniqueInput
  }

  /**
   * MarketCache deleteMany
   */
  export type MarketCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketCaches to delete
     */
    where?: MarketCacheWhereInput
  }

  /**
   * MarketCache without action
   */
  export type MarketCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCache
     */
    select?: MarketCacheSelect<ExtArgs> | null
  }


  /**
   * Model UserHolding
   */

  export type AggregateUserHolding = {
    _count: UserHoldingCountAggregateOutputType | null
    _avg: UserHoldingAvgAggregateOutputType | null
    _sum: UserHoldingSumAggregateOutputType | null
    _min: UserHoldingMinAggregateOutputType | null
    _max: UserHoldingMaxAggregateOutputType | null
  }

  export type UserHoldingAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    quantity: Decimal | null
    avg_cost_pkr: Decimal | null
  }

  export type UserHoldingSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    quantity: Decimal | null
    avg_cost_pkr: Decimal | null
  }

  export type UserHoldingMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    ticker: string | null
    display_name: string | null
    asset_type: string | null
    quantity: Decimal | null
    avg_cost_pkr: Decimal | null
    acquired_at: Date | null
  }

  export type UserHoldingMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    ticker: string | null
    display_name: string | null
    asset_type: string | null
    quantity: Decimal | null
    avg_cost_pkr: Decimal | null
    acquired_at: Date | null
  }

  export type UserHoldingCountAggregateOutputType = {
    id: number
    user_id: number
    ticker: number
    display_name: number
    asset_type: number
    quantity: number
    avg_cost_pkr: number
    acquired_at: number
    _all: number
  }


  export type UserHoldingAvgAggregateInputType = {
    id?: true
    user_id?: true
    quantity?: true
    avg_cost_pkr?: true
  }

  export type UserHoldingSumAggregateInputType = {
    id?: true
    user_id?: true
    quantity?: true
    avg_cost_pkr?: true
  }

  export type UserHoldingMinAggregateInputType = {
    id?: true
    user_id?: true
    ticker?: true
    display_name?: true
    asset_type?: true
    quantity?: true
    avg_cost_pkr?: true
    acquired_at?: true
  }

  export type UserHoldingMaxAggregateInputType = {
    id?: true
    user_id?: true
    ticker?: true
    display_name?: true
    asset_type?: true
    quantity?: true
    avg_cost_pkr?: true
    acquired_at?: true
  }

  export type UserHoldingCountAggregateInputType = {
    id?: true
    user_id?: true
    ticker?: true
    display_name?: true
    asset_type?: true
    quantity?: true
    avg_cost_pkr?: true
    acquired_at?: true
    _all?: true
  }

  export type UserHoldingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHolding to aggregate.
     */
    where?: UserHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHoldings to fetch.
     */
    orderBy?: UserHoldingOrderByWithRelationInput | UserHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHoldings
    **/
    _count?: true | UserHoldingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserHoldingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserHoldingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHoldingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHoldingMaxAggregateInputType
  }

  export type GetUserHoldingAggregateType<T extends UserHoldingAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHolding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHolding[P]>
      : GetScalarType<T[P], AggregateUserHolding[P]>
  }




  export type UserHoldingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHoldingWhereInput
    orderBy?: UserHoldingOrderByWithAggregationInput | UserHoldingOrderByWithAggregationInput[]
    by: UserHoldingScalarFieldEnum[] | UserHoldingScalarFieldEnum
    having?: UserHoldingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHoldingCountAggregateInputType | true
    _avg?: UserHoldingAvgAggregateInputType
    _sum?: UserHoldingSumAggregateInputType
    _min?: UserHoldingMinAggregateInputType
    _max?: UserHoldingMaxAggregateInputType
  }

  export type UserHoldingGroupByOutputType = {
    id: number
    user_id: number
    ticker: string
    display_name: string
    asset_type: string
    quantity: Decimal
    avg_cost_pkr: Decimal
    acquired_at: Date
    _count: UserHoldingCountAggregateOutputType | null
    _avg: UserHoldingAvgAggregateOutputType | null
    _sum: UserHoldingSumAggregateOutputType | null
    _min: UserHoldingMinAggregateOutputType | null
    _max: UserHoldingMaxAggregateOutputType | null
  }

  type GetUserHoldingGroupByPayload<T extends UserHoldingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHoldingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHoldingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHoldingGroupByOutputType[P]>
            : GetScalarType<T[P], UserHoldingGroupByOutputType[P]>
        }
      >
    >


  export type UserHoldingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    ticker?: boolean
    display_name?: boolean
    asset_type?: boolean
    quantity?: boolean
    avg_cost_pkr?: boolean
    acquired_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHolding"]>


  export type UserHoldingSelectScalar = {
    id?: boolean
    user_id?: boolean
    ticker?: boolean
    display_name?: boolean
    asset_type?: boolean
    quantity?: boolean
    avg_cost_pkr?: boolean
    acquired_at?: boolean
  }

  export type UserHoldingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserHoldingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHolding"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      ticker: string
      display_name: string
      asset_type: string
      quantity: Prisma.Decimal
      avg_cost_pkr: Prisma.Decimal
      acquired_at: Date
    }, ExtArgs["result"]["userHolding"]>
    composites: {}
  }

  type UserHoldingGetPayload<S extends boolean | null | undefined | UserHoldingDefaultArgs> = $Result.GetResult<Prisma.$UserHoldingPayload, S>

  type UserHoldingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserHoldingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserHoldingCountAggregateInputType | true
    }

  export interface UserHoldingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHolding'], meta: { name: 'UserHolding' } }
    /**
     * Find zero or one UserHolding that matches the filter.
     * @param {UserHoldingFindUniqueArgs} args - Arguments to find a UserHolding
     * @example
     * // Get one UserHolding
     * const userHolding = await prisma.userHolding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHoldingFindUniqueArgs>(args: SelectSubset<T, UserHoldingFindUniqueArgs<ExtArgs>>): Prisma__UserHoldingClient<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserHolding that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserHoldingFindUniqueOrThrowArgs} args - Arguments to find a UserHolding
     * @example
     * // Get one UserHolding
     * const userHolding = await prisma.userHolding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHoldingFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHoldingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHoldingClient<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserHolding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHoldingFindFirstArgs} args - Arguments to find a UserHolding
     * @example
     * // Get one UserHolding
     * const userHolding = await prisma.userHolding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHoldingFindFirstArgs>(args?: SelectSubset<T, UserHoldingFindFirstArgs<ExtArgs>>): Prisma__UserHoldingClient<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserHolding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHoldingFindFirstOrThrowArgs} args - Arguments to find a UserHolding
     * @example
     * // Get one UserHolding
     * const userHolding = await prisma.userHolding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHoldingFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHoldingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHoldingClient<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserHoldings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHoldingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHoldings
     * const userHoldings = await prisma.userHolding.findMany()
     * 
     * // Get first 10 UserHoldings
     * const userHoldings = await prisma.userHolding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userHoldingWithIdOnly = await prisma.userHolding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserHoldingFindManyArgs>(args?: SelectSubset<T, UserHoldingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserHolding.
     * @param {UserHoldingCreateArgs} args - Arguments to create a UserHolding.
     * @example
     * // Create one UserHolding
     * const UserHolding = await prisma.userHolding.create({
     *   data: {
     *     // ... data to create a UserHolding
     *   }
     * })
     * 
     */
    create<T extends UserHoldingCreateArgs>(args: SelectSubset<T, UserHoldingCreateArgs<ExtArgs>>): Prisma__UserHoldingClient<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserHoldings.
     * @param {UserHoldingCreateManyArgs} args - Arguments to create many UserHoldings.
     * @example
     * // Create many UserHoldings
     * const userHolding = await prisma.userHolding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHoldingCreateManyArgs>(args?: SelectSubset<T, UserHoldingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserHolding.
     * @param {UserHoldingDeleteArgs} args - Arguments to delete one UserHolding.
     * @example
     * // Delete one UserHolding
     * const UserHolding = await prisma.userHolding.delete({
     *   where: {
     *     // ... filter to delete one UserHolding
     *   }
     * })
     * 
     */
    delete<T extends UserHoldingDeleteArgs>(args: SelectSubset<T, UserHoldingDeleteArgs<ExtArgs>>): Prisma__UserHoldingClient<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserHolding.
     * @param {UserHoldingUpdateArgs} args - Arguments to update one UserHolding.
     * @example
     * // Update one UserHolding
     * const userHolding = await prisma.userHolding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHoldingUpdateArgs>(args: SelectSubset<T, UserHoldingUpdateArgs<ExtArgs>>): Prisma__UserHoldingClient<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserHoldings.
     * @param {UserHoldingDeleteManyArgs} args - Arguments to filter UserHoldings to delete.
     * @example
     * // Delete a few UserHoldings
     * const { count } = await prisma.userHolding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHoldingDeleteManyArgs>(args?: SelectSubset<T, UserHoldingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHoldingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHoldings
     * const userHolding = await prisma.userHolding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHoldingUpdateManyArgs>(args: SelectSubset<T, UserHoldingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserHolding.
     * @param {UserHoldingUpsertArgs} args - Arguments to update or create a UserHolding.
     * @example
     * // Update or create a UserHolding
     * const userHolding = await prisma.userHolding.upsert({
     *   create: {
     *     // ... data to create a UserHolding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHolding we want to update
     *   }
     * })
     */
    upsert<T extends UserHoldingUpsertArgs>(args: SelectSubset<T, UserHoldingUpsertArgs<ExtArgs>>): Prisma__UserHoldingClient<$Result.GetResult<Prisma.$UserHoldingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHoldingCountArgs} args - Arguments to filter UserHoldings to count.
     * @example
     * // Count the number of UserHoldings
     * const count = await prisma.userHolding.count({
     *   where: {
     *     // ... the filter for the UserHoldings we want to count
     *   }
     * })
    **/
    count<T extends UserHoldingCountArgs>(
      args?: Subset<T, UserHoldingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHoldingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHolding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHoldingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserHoldingAggregateArgs>(args: Subset<T, UserHoldingAggregateArgs>): Prisma.PrismaPromise<GetUserHoldingAggregateType<T>>

    /**
     * Group by UserHolding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHoldingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserHoldingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHoldingGroupByArgs['orderBy'] }
        : { orderBy?: UserHoldingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserHoldingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHoldingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHolding model
   */
  readonly fields: UserHoldingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHolding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHoldingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserHolding model
   */ 
  interface UserHoldingFieldRefs {
    readonly id: FieldRef<"UserHolding", 'Int'>
    readonly user_id: FieldRef<"UserHolding", 'Int'>
    readonly ticker: FieldRef<"UserHolding", 'String'>
    readonly display_name: FieldRef<"UserHolding", 'String'>
    readonly asset_type: FieldRef<"UserHolding", 'String'>
    readonly quantity: FieldRef<"UserHolding", 'Decimal'>
    readonly avg_cost_pkr: FieldRef<"UserHolding", 'Decimal'>
    readonly acquired_at: FieldRef<"UserHolding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserHolding findUnique
   */
  export type UserHoldingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    /**
     * Filter, which UserHolding to fetch.
     */
    where: UserHoldingWhereUniqueInput
  }

  /**
   * UserHolding findUniqueOrThrow
   */
  export type UserHoldingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    /**
     * Filter, which UserHolding to fetch.
     */
    where: UserHoldingWhereUniqueInput
  }

  /**
   * UserHolding findFirst
   */
  export type UserHoldingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    /**
     * Filter, which UserHolding to fetch.
     */
    where?: UserHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHoldings to fetch.
     */
    orderBy?: UserHoldingOrderByWithRelationInput | UserHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHoldings.
     */
    cursor?: UserHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHoldings.
     */
    distinct?: UserHoldingScalarFieldEnum | UserHoldingScalarFieldEnum[]
  }

  /**
   * UserHolding findFirstOrThrow
   */
  export type UserHoldingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    /**
     * Filter, which UserHolding to fetch.
     */
    where?: UserHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHoldings to fetch.
     */
    orderBy?: UserHoldingOrderByWithRelationInput | UserHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHoldings.
     */
    cursor?: UserHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHoldings.
     */
    distinct?: UserHoldingScalarFieldEnum | UserHoldingScalarFieldEnum[]
  }

  /**
   * UserHolding findMany
   */
  export type UserHoldingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    /**
     * Filter, which UserHoldings to fetch.
     */
    where?: UserHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHoldings to fetch.
     */
    orderBy?: UserHoldingOrderByWithRelationInput | UserHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHoldings.
     */
    cursor?: UserHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHoldings.
     */
    skip?: number
    distinct?: UserHoldingScalarFieldEnum | UserHoldingScalarFieldEnum[]
  }

  /**
   * UserHolding create
   */
  export type UserHoldingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHolding.
     */
    data: XOR<UserHoldingCreateInput, UserHoldingUncheckedCreateInput>
  }

  /**
   * UserHolding createMany
   */
  export type UserHoldingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHoldings.
     */
    data: UserHoldingCreateManyInput | UserHoldingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserHolding update
   */
  export type UserHoldingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHolding.
     */
    data: XOR<UserHoldingUpdateInput, UserHoldingUncheckedUpdateInput>
    /**
     * Choose, which UserHolding to update.
     */
    where: UserHoldingWhereUniqueInput
  }

  /**
   * UserHolding updateMany
   */
  export type UserHoldingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHoldings.
     */
    data: XOR<UserHoldingUpdateManyMutationInput, UserHoldingUncheckedUpdateManyInput>
    /**
     * Filter which UserHoldings to update
     */
    where?: UserHoldingWhereInput
  }

  /**
   * UserHolding upsert
   */
  export type UserHoldingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHolding to update in case it exists.
     */
    where: UserHoldingWhereUniqueInput
    /**
     * In case the UserHolding found by the `where` argument doesn't exist, create a new UserHolding with this data.
     */
    create: XOR<UserHoldingCreateInput, UserHoldingUncheckedCreateInput>
    /**
     * In case the UserHolding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHoldingUpdateInput, UserHoldingUncheckedUpdateInput>
  }

  /**
   * UserHolding delete
   */
  export type UserHoldingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
    /**
     * Filter which UserHolding to delete.
     */
    where: UserHoldingWhereUniqueInput
  }

  /**
   * UserHolding deleteMany
   */
  export type UserHoldingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHoldings to delete
     */
    where?: UserHoldingWhereInput
  }

  /**
   * UserHolding without action
   */
  export type UserHoldingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHolding
     */
    select?: UserHoldingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHoldingInclude<ExtArgs> | null
  }


  /**
   * Model StockTrade
   */

  export type AggregateStockTrade = {
    _count: StockTradeCountAggregateOutputType | null
    _avg: StockTradeAvgAggregateOutputType | null
    _sum: StockTradeSumAggregateOutputType | null
    _min: StockTradeMinAggregateOutputType | null
    _max: StockTradeMaxAggregateOutputType | null
  }

  export type StockTradeAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    quantity: Decimal | null
    price_pkr: Decimal | null
    total_pkr: Decimal | null
  }

  export type StockTradeSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    quantity: Decimal | null
    price_pkr: Decimal | null
    total_pkr: Decimal | null
  }

  export type StockTradeMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    ticker: string | null
    display_name: string | null
    side: string | null
    quantity: Decimal | null
    price_pkr: Decimal | null
    total_pkr: Decimal | null
    created_at: Date | null
  }

  export type StockTradeMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    ticker: string | null
    display_name: string | null
    side: string | null
    quantity: Decimal | null
    price_pkr: Decimal | null
    total_pkr: Decimal | null
    created_at: Date | null
  }

  export type StockTradeCountAggregateOutputType = {
    id: number
    user_id: number
    ticker: number
    display_name: number
    side: number
    quantity: number
    price_pkr: number
    total_pkr: number
    created_at: number
    _all: number
  }


  export type StockTradeAvgAggregateInputType = {
    id?: true
    user_id?: true
    quantity?: true
    price_pkr?: true
    total_pkr?: true
  }

  export type StockTradeSumAggregateInputType = {
    id?: true
    user_id?: true
    quantity?: true
    price_pkr?: true
    total_pkr?: true
  }

  export type StockTradeMinAggregateInputType = {
    id?: true
    user_id?: true
    ticker?: true
    display_name?: true
    side?: true
    quantity?: true
    price_pkr?: true
    total_pkr?: true
    created_at?: true
  }

  export type StockTradeMaxAggregateInputType = {
    id?: true
    user_id?: true
    ticker?: true
    display_name?: true
    side?: true
    quantity?: true
    price_pkr?: true
    total_pkr?: true
    created_at?: true
  }

  export type StockTradeCountAggregateInputType = {
    id?: true
    user_id?: true
    ticker?: true
    display_name?: true
    side?: true
    quantity?: true
    price_pkr?: true
    total_pkr?: true
    created_at?: true
    _all?: true
  }

  export type StockTradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockTrade to aggregate.
     */
    where?: StockTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockTrades to fetch.
     */
    orderBy?: StockTradeOrderByWithRelationInput | StockTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockTrades
    **/
    _count?: true | StockTradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockTradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockTradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockTradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockTradeMaxAggregateInputType
  }

  export type GetStockTradeAggregateType<T extends StockTradeAggregateArgs> = {
        [P in keyof T & keyof AggregateStockTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockTrade[P]>
      : GetScalarType<T[P], AggregateStockTrade[P]>
  }




  export type StockTradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockTradeWhereInput
    orderBy?: StockTradeOrderByWithAggregationInput | StockTradeOrderByWithAggregationInput[]
    by: StockTradeScalarFieldEnum[] | StockTradeScalarFieldEnum
    having?: StockTradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockTradeCountAggregateInputType | true
    _avg?: StockTradeAvgAggregateInputType
    _sum?: StockTradeSumAggregateInputType
    _min?: StockTradeMinAggregateInputType
    _max?: StockTradeMaxAggregateInputType
  }

  export type StockTradeGroupByOutputType = {
    id: number
    user_id: number
    ticker: string
    display_name: string
    side: string
    quantity: Decimal
    price_pkr: Decimal
    total_pkr: Decimal
    created_at: Date
    _count: StockTradeCountAggregateOutputType | null
    _avg: StockTradeAvgAggregateOutputType | null
    _sum: StockTradeSumAggregateOutputType | null
    _min: StockTradeMinAggregateOutputType | null
    _max: StockTradeMaxAggregateOutputType | null
  }

  type GetStockTradeGroupByPayload<T extends StockTradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockTradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockTradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockTradeGroupByOutputType[P]>
            : GetScalarType<T[P], StockTradeGroupByOutputType[P]>
        }
      >
    >


  export type StockTradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    ticker?: boolean
    display_name?: boolean
    side?: boolean
    quantity?: boolean
    price_pkr?: boolean
    total_pkr?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockTrade"]>


  export type StockTradeSelectScalar = {
    id?: boolean
    user_id?: boolean
    ticker?: boolean
    display_name?: boolean
    side?: boolean
    quantity?: boolean
    price_pkr?: boolean
    total_pkr?: boolean
    created_at?: boolean
  }

  export type StockTradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StockTradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockTrade"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      ticker: string
      display_name: string
      side: string
      quantity: Prisma.Decimal
      price_pkr: Prisma.Decimal
      total_pkr: Prisma.Decimal
      created_at: Date
    }, ExtArgs["result"]["stockTrade"]>
    composites: {}
  }

  type StockTradeGetPayload<S extends boolean | null | undefined | StockTradeDefaultArgs> = $Result.GetResult<Prisma.$StockTradePayload, S>

  type StockTradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockTradeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockTradeCountAggregateInputType | true
    }

  export interface StockTradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockTrade'], meta: { name: 'StockTrade' } }
    /**
     * Find zero or one StockTrade that matches the filter.
     * @param {StockTradeFindUniqueArgs} args - Arguments to find a StockTrade
     * @example
     * // Get one StockTrade
     * const stockTrade = await prisma.stockTrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockTradeFindUniqueArgs>(args: SelectSubset<T, StockTradeFindUniqueArgs<ExtArgs>>): Prisma__StockTradeClient<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockTrade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockTradeFindUniqueOrThrowArgs} args - Arguments to find a StockTrade
     * @example
     * // Get one StockTrade
     * const stockTrade = await prisma.stockTrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockTradeFindUniqueOrThrowArgs>(args: SelectSubset<T, StockTradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockTradeClient<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockTrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockTradeFindFirstArgs} args - Arguments to find a StockTrade
     * @example
     * // Get one StockTrade
     * const stockTrade = await prisma.stockTrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockTradeFindFirstArgs>(args?: SelectSubset<T, StockTradeFindFirstArgs<ExtArgs>>): Prisma__StockTradeClient<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockTrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockTradeFindFirstOrThrowArgs} args - Arguments to find a StockTrade
     * @example
     * // Get one StockTrade
     * const stockTrade = await prisma.stockTrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockTradeFindFirstOrThrowArgs>(args?: SelectSubset<T, StockTradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockTradeClient<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockTrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockTradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockTrades
     * const stockTrades = await prisma.stockTrade.findMany()
     * 
     * // Get first 10 StockTrades
     * const stockTrades = await prisma.stockTrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockTradeWithIdOnly = await prisma.stockTrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockTradeFindManyArgs>(args?: SelectSubset<T, StockTradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockTrade.
     * @param {StockTradeCreateArgs} args - Arguments to create a StockTrade.
     * @example
     * // Create one StockTrade
     * const StockTrade = await prisma.stockTrade.create({
     *   data: {
     *     // ... data to create a StockTrade
     *   }
     * })
     * 
     */
    create<T extends StockTradeCreateArgs>(args: SelectSubset<T, StockTradeCreateArgs<ExtArgs>>): Prisma__StockTradeClient<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockTrades.
     * @param {StockTradeCreateManyArgs} args - Arguments to create many StockTrades.
     * @example
     * // Create many StockTrades
     * const stockTrade = await prisma.stockTrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockTradeCreateManyArgs>(args?: SelectSubset<T, StockTradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockTrade.
     * @param {StockTradeDeleteArgs} args - Arguments to delete one StockTrade.
     * @example
     * // Delete one StockTrade
     * const StockTrade = await prisma.stockTrade.delete({
     *   where: {
     *     // ... filter to delete one StockTrade
     *   }
     * })
     * 
     */
    delete<T extends StockTradeDeleteArgs>(args: SelectSubset<T, StockTradeDeleteArgs<ExtArgs>>): Prisma__StockTradeClient<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockTrade.
     * @param {StockTradeUpdateArgs} args - Arguments to update one StockTrade.
     * @example
     * // Update one StockTrade
     * const stockTrade = await prisma.stockTrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockTradeUpdateArgs>(args: SelectSubset<T, StockTradeUpdateArgs<ExtArgs>>): Prisma__StockTradeClient<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockTrades.
     * @param {StockTradeDeleteManyArgs} args - Arguments to filter StockTrades to delete.
     * @example
     * // Delete a few StockTrades
     * const { count } = await prisma.stockTrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockTradeDeleteManyArgs>(args?: SelectSubset<T, StockTradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockTradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockTrades
     * const stockTrade = await prisma.stockTrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockTradeUpdateManyArgs>(args: SelectSubset<T, StockTradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockTrade.
     * @param {StockTradeUpsertArgs} args - Arguments to update or create a StockTrade.
     * @example
     * // Update or create a StockTrade
     * const stockTrade = await prisma.stockTrade.upsert({
     *   create: {
     *     // ... data to create a StockTrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockTrade we want to update
     *   }
     * })
     */
    upsert<T extends StockTradeUpsertArgs>(args: SelectSubset<T, StockTradeUpsertArgs<ExtArgs>>): Prisma__StockTradeClient<$Result.GetResult<Prisma.$StockTradePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockTradeCountArgs} args - Arguments to filter StockTrades to count.
     * @example
     * // Count the number of StockTrades
     * const count = await prisma.stockTrade.count({
     *   where: {
     *     // ... the filter for the StockTrades we want to count
     *   }
     * })
    **/
    count<T extends StockTradeCountArgs>(
      args?: Subset<T, StockTradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockTradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockTradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockTradeAggregateArgs>(args: Subset<T, StockTradeAggregateArgs>): Prisma.PrismaPromise<GetStockTradeAggregateType<T>>

    /**
     * Group by StockTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockTradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockTradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockTradeGroupByArgs['orderBy'] }
        : { orderBy?: StockTradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockTradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockTrade model
   */
  readonly fields: StockTradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockTrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockTradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockTrade model
   */ 
  interface StockTradeFieldRefs {
    readonly id: FieldRef<"StockTrade", 'Int'>
    readonly user_id: FieldRef<"StockTrade", 'Int'>
    readonly ticker: FieldRef<"StockTrade", 'String'>
    readonly display_name: FieldRef<"StockTrade", 'String'>
    readonly side: FieldRef<"StockTrade", 'String'>
    readonly quantity: FieldRef<"StockTrade", 'Decimal'>
    readonly price_pkr: FieldRef<"StockTrade", 'Decimal'>
    readonly total_pkr: FieldRef<"StockTrade", 'Decimal'>
    readonly created_at: FieldRef<"StockTrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockTrade findUnique
   */
  export type StockTradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    /**
     * Filter, which StockTrade to fetch.
     */
    where: StockTradeWhereUniqueInput
  }

  /**
   * StockTrade findUniqueOrThrow
   */
  export type StockTradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    /**
     * Filter, which StockTrade to fetch.
     */
    where: StockTradeWhereUniqueInput
  }

  /**
   * StockTrade findFirst
   */
  export type StockTradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    /**
     * Filter, which StockTrade to fetch.
     */
    where?: StockTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockTrades to fetch.
     */
    orderBy?: StockTradeOrderByWithRelationInput | StockTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockTrades.
     */
    cursor?: StockTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockTrades.
     */
    distinct?: StockTradeScalarFieldEnum | StockTradeScalarFieldEnum[]
  }

  /**
   * StockTrade findFirstOrThrow
   */
  export type StockTradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    /**
     * Filter, which StockTrade to fetch.
     */
    where?: StockTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockTrades to fetch.
     */
    orderBy?: StockTradeOrderByWithRelationInput | StockTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockTrades.
     */
    cursor?: StockTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockTrades.
     */
    distinct?: StockTradeScalarFieldEnum | StockTradeScalarFieldEnum[]
  }

  /**
   * StockTrade findMany
   */
  export type StockTradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    /**
     * Filter, which StockTrades to fetch.
     */
    where?: StockTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockTrades to fetch.
     */
    orderBy?: StockTradeOrderByWithRelationInput | StockTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockTrades.
     */
    cursor?: StockTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockTrades.
     */
    skip?: number
    distinct?: StockTradeScalarFieldEnum | StockTradeScalarFieldEnum[]
  }

  /**
   * StockTrade create
   */
  export type StockTradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    /**
     * The data needed to create a StockTrade.
     */
    data: XOR<StockTradeCreateInput, StockTradeUncheckedCreateInput>
  }

  /**
   * StockTrade createMany
   */
  export type StockTradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockTrades.
     */
    data: StockTradeCreateManyInput | StockTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockTrade update
   */
  export type StockTradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    /**
     * The data needed to update a StockTrade.
     */
    data: XOR<StockTradeUpdateInput, StockTradeUncheckedUpdateInput>
    /**
     * Choose, which StockTrade to update.
     */
    where: StockTradeWhereUniqueInput
  }

  /**
   * StockTrade updateMany
   */
  export type StockTradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockTrades.
     */
    data: XOR<StockTradeUpdateManyMutationInput, StockTradeUncheckedUpdateManyInput>
    /**
     * Filter which StockTrades to update
     */
    where?: StockTradeWhereInput
  }

  /**
   * StockTrade upsert
   */
  export type StockTradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    /**
     * The filter to search for the StockTrade to update in case it exists.
     */
    where: StockTradeWhereUniqueInput
    /**
     * In case the StockTrade found by the `where` argument doesn't exist, create a new StockTrade with this data.
     */
    create: XOR<StockTradeCreateInput, StockTradeUncheckedCreateInput>
    /**
     * In case the StockTrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockTradeUpdateInput, StockTradeUncheckedUpdateInput>
  }

  /**
   * StockTrade delete
   */
  export type StockTradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
    /**
     * Filter which StockTrade to delete.
     */
    where: StockTradeWhereUniqueInput
  }

  /**
   * StockTrade deleteMany
   */
  export type StockTradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockTrades to delete
     */
    where?: StockTradeWhereInput
  }

  /**
   * StockTrade without action
   */
  export type StockTradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockTrade
     */
    select?: StockTradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockTradeInclude<ExtArgs> | null
  }


  /**
   * Model AiInsight
   */

  export type AggregateAiInsight = {
    _count: AiInsightCountAggregateOutputType | null
    _avg: AiInsightAvgAggregateOutputType | null
    _sum: AiInsightSumAggregateOutputType | null
    _min: AiInsightMinAggregateOutputType | null
    _max: AiInsightMaxAggregateOutputType | null
  }

  export type AiInsightAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AiInsightSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AiInsightMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    type: string | null
    content_en: string | null
    content_ur: string | null
    is_read: boolean | null
    rating: string | null
    generated_at: Date | null
    valid_until: Date | null
  }

  export type AiInsightMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    type: string | null
    content_en: string | null
    content_ur: string | null
    is_read: boolean | null
    rating: string | null
    generated_at: Date | null
    valid_until: Date | null
  }

  export type AiInsightCountAggregateOutputType = {
    id: number
    user_id: number
    type: number
    content_en: number
    content_ur: number
    is_read: number
    rating: number
    generated_at: number
    valid_until: number
    _all: number
  }


  export type AiInsightAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AiInsightSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AiInsightMinAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    content_en?: true
    content_ur?: true
    is_read?: true
    rating?: true
    generated_at?: true
    valid_until?: true
  }

  export type AiInsightMaxAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    content_en?: true
    content_ur?: true
    is_read?: true
    rating?: true
    generated_at?: true
    valid_until?: true
  }

  export type AiInsightCountAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    content_en?: true
    content_ur?: true
    is_read?: true
    rating?: true
    generated_at?: true
    valid_until?: true
    _all?: true
  }

  export type AiInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInsight to aggregate.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiInsights
    **/
    _count?: true | AiInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiInsightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiInsightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiInsightMaxAggregateInputType
  }

  export type GetAiInsightAggregateType<T extends AiInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateAiInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiInsight[P]>
      : GetScalarType<T[P], AggregateAiInsight[P]>
  }




  export type AiInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInsightWhereInput
    orderBy?: AiInsightOrderByWithAggregationInput | AiInsightOrderByWithAggregationInput[]
    by: AiInsightScalarFieldEnum[] | AiInsightScalarFieldEnum
    having?: AiInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiInsightCountAggregateInputType | true
    _avg?: AiInsightAvgAggregateInputType
    _sum?: AiInsightSumAggregateInputType
    _min?: AiInsightMinAggregateInputType
    _max?: AiInsightMaxAggregateInputType
  }

  export type AiInsightGroupByOutputType = {
    id: number
    user_id: number
    type: string
    content_en: string
    content_ur: string | null
    is_read: boolean
    rating: string | null
    generated_at: Date
    valid_until: Date | null
    _count: AiInsightCountAggregateOutputType | null
    _avg: AiInsightAvgAggregateOutputType | null
    _sum: AiInsightSumAggregateOutputType | null
    _min: AiInsightMinAggregateOutputType | null
    _max: AiInsightMaxAggregateOutputType | null
  }

  type GetAiInsightGroupByPayload<T extends AiInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiInsightGroupByOutputType[P]>
            : GetScalarType<T[P], AiInsightGroupByOutputType[P]>
        }
      >
    >


  export type AiInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    content_en?: boolean
    content_ur?: boolean
    is_read?: boolean
    rating?: boolean
    generated_at?: boolean
    valid_until?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiInsight"]>


  export type AiInsightSelectScalar = {
    id?: boolean
    user_id?: boolean
    type?: boolean
    content_en?: boolean
    content_ur?: boolean
    is_read?: boolean
    rating?: boolean
    generated_at?: boolean
    valid_until?: boolean
  }

  export type AiInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AiInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiInsight"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      type: string
      content_en: string
      content_ur: string | null
      is_read: boolean
      rating: string | null
      generated_at: Date
      valid_until: Date | null
    }, ExtArgs["result"]["aiInsight"]>
    composites: {}
  }

  type AiInsightGetPayload<S extends boolean | null | undefined | AiInsightDefaultArgs> = $Result.GetResult<Prisma.$AiInsightPayload, S>

  type AiInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AiInsightFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AiInsightCountAggregateInputType | true
    }

  export interface AiInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiInsight'], meta: { name: 'AiInsight' } }
    /**
     * Find zero or one AiInsight that matches the filter.
     * @param {AiInsightFindUniqueArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiInsightFindUniqueArgs>(args: SelectSubset<T, AiInsightFindUniqueArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AiInsight that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AiInsightFindUniqueOrThrowArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiInsightFindUniqueOrThrowArgs>(args: SelectSubset<T, AiInsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AiInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightFindFirstArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiInsightFindFirstArgs>(args?: SelectSubset<T, AiInsightFindFirstArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AiInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightFindFirstOrThrowArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiInsightFindFirstOrThrowArgs>(args?: SelectSubset<T, AiInsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AiInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiInsights
     * const aiInsights = await prisma.aiInsight.findMany()
     * 
     * // Get first 10 AiInsights
     * const aiInsights = await prisma.aiInsight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiInsightWithIdOnly = await prisma.aiInsight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiInsightFindManyArgs>(args?: SelectSubset<T, AiInsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AiInsight.
     * @param {AiInsightCreateArgs} args - Arguments to create a AiInsight.
     * @example
     * // Create one AiInsight
     * const AiInsight = await prisma.aiInsight.create({
     *   data: {
     *     // ... data to create a AiInsight
     *   }
     * })
     * 
     */
    create<T extends AiInsightCreateArgs>(args: SelectSubset<T, AiInsightCreateArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AiInsights.
     * @param {AiInsightCreateManyArgs} args - Arguments to create many AiInsights.
     * @example
     * // Create many AiInsights
     * const aiInsight = await prisma.aiInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiInsightCreateManyArgs>(args?: SelectSubset<T, AiInsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AiInsight.
     * @param {AiInsightDeleteArgs} args - Arguments to delete one AiInsight.
     * @example
     * // Delete one AiInsight
     * const AiInsight = await prisma.aiInsight.delete({
     *   where: {
     *     // ... filter to delete one AiInsight
     *   }
     * })
     * 
     */
    delete<T extends AiInsightDeleteArgs>(args: SelectSubset<T, AiInsightDeleteArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AiInsight.
     * @param {AiInsightUpdateArgs} args - Arguments to update one AiInsight.
     * @example
     * // Update one AiInsight
     * const aiInsight = await prisma.aiInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiInsightUpdateArgs>(args: SelectSubset<T, AiInsightUpdateArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AiInsights.
     * @param {AiInsightDeleteManyArgs} args - Arguments to filter AiInsights to delete.
     * @example
     * // Delete a few AiInsights
     * const { count } = await prisma.aiInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiInsightDeleteManyArgs>(args?: SelectSubset<T, AiInsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiInsights
     * const aiInsight = await prisma.aiInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiInsightUpdateManyArgs>(args: SelectSubset<T, AiInsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiInsight.
     * @param {AiInsightUpsertArgs} args - Arguments to update or create a AiInsight.
     * @example
     * // Update or create a AiInsight
     * const aiInsight = await prisma.aiInsight.upsert({
     *   create: {
     *     // ... data to create a AiInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiInsight we want to update
     *   }
     * })
     */
    upsert<T extends AiInsightUpsertArgs>(args: SelectSubset<T, AiInsightUpsertArgs<ExtArgs>>): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AiInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightCountArgs} args - Arguments to filter AiInsights to count.
     * @example
     * // Count the number of AiInsights
     * const count = await prisma.aiInsight.count({
     *   where: {
     *     // ... the filter for the AiInsights we want to count
     *   }
     * })
    **/
    count<T extends AiInsightCountArgs>(
      args?: Subset<T, AiInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiInsightAggregateArgs>(args: Subset<T, AiInsightAggregateArgs>): Prisma.PrismaPromise<GetAiInsightAggregateType<T>>

    /**
     * Group by AiInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiInsightGroupByArgs['orderBy'] }
        : { orderBy?: AiInsightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiInsight model
   */
  readonly fields: AiInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiInsight model
   */ 
  interface AiInsightFieldRefs {
    readonly id: FieldRef<"AiInsight", 'Int'>
    readonly user_id: FieldRef<"AiInsight", 'Int'>
    readonly type: FieldRef<"AiInsight", 'String'>
    readonly content_en: FieldRef<"AiInsight", 'String'>
    readonly content_ur: FieldRef<"AiInsight", 'String'>
    readonly is_read: FieldRef<"AiInsight", 'Boolean'>
    readonly rating: FieldRef<"AiInsight", 'String'>
    readonly generated_at: FieldRef<"AiInsight", 'DateTime'>
    readonly valid_until: FieldRef<"AiInsight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiInsight findUnique
   */
  export type AiInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight findUniqueOrThrow
   */
  export type AiInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight findFirst
   */
  export type AiInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInsights.
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInsights.
     */
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * AiInsight findFirstOrThrow
   */
  export type AiInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInsights.
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInsights.
     */
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * AiInsight findMany
   */
  export type AiInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsights to fetch.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiInsights.
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * AiInsight create
   */
  export type AiInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a AiInsight.
     */
    data: XOR<AiInsightCreateInput, AiInsightUncheckedCreateInput>
  }

  /**
   * AiInsight createMany
   */
  export type AiInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiInsights.
     */
    data: AiInsightCreateManyInput | AiInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiInsight update
   */
  export type AiInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a AiInsight.
     */
    data: XOR<AiInsightUpdateInput, AiInsightUncheckedUpdateInput>
    /**
     * Choose, which AiInsight to update.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight updateMany
   */
  export type AiInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiInsights.
     */
    data: XOR<AiInsightUpdateManyMutationInput, AiInsightUncheckedUpdateManyInput>
    /**
     * Filter which AiInsights to update
     */
    where?: AiInsightWhereInput
  }

  /**
   * AiInsight upsert
   */
  export type AiInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the AiInsight to update in case it exists.
     */
    where: AiInsightWhereUniqueInput
    /**
     * In case the AiInsight found by the `where` argument doesn't exist, create a new AiInsight with this data.
     */
    create: XOR<AiInsightCreateInput, AiInsightUncheckedCreateInput>
    /**
     * In case the AiInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiInsightUpdateInput, AiInsightUncheckedUpdateInput>
  }

  /**
   * AiInsight delete
   */
  export type AiInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter which AiInsight to delete.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight deleteMany
   */
  export type AiInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInsights to delete
     */
    where?: AiInsightWhereInput
  }

  /**
   * AiInsight without action
   */
  export type AiInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
  }


  /**
   * Model ReportCard
   */

  export type AggregateReportCard = {
    _count: ReportCardCountAggregateOutputType | null
    _avg: ReportCardAvgAggregateOutputType | null
    _sum: ReportCardSumAggregateOutputType | null
    _min: ReportCardMinAggregateOutputType | null
    _max: ReportCardMaxAggregateOutputType | null
  }

  export type ReportCardAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    budget_score: number | null
    savings_score: number | null
    trend_score: number | null
  }

  export type ReportCardSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    budget_score: number | null
    savings_score: number | null
    trend_score: number | null
  }

  export type ReportCardMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    month: Date | null
    overall_grade: string | null
    budget_score: number | null
    savings_score: number | null
    trend_score: number | null
    summary_en: string | null
    summary_ur: string | null
    created_at: Date | null
  }

  export type ReportCardMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    month: Date | null
    overall_grade: string | null
    budget_score: number | null
    savings_score: number | null
    trend_score: number | null
    summary_en: string | null
    summary_ur: string | null
    created_at: Date | null
  }

  export type ReportCardCountAggregateOutputType = {
    id: number
    user_id: number
    month: number
    overall_grade: number
    budget_score: number
    savings_score: number
    trend_score: number
    summary_en: number
    summary_ur: number
    created_at: number
    _all: number
  }


  export type ReportCardAvgAggregateInputType = {
    id?: true
    user_id?: true
    budget_score?: true
    savings_score?: true
    trend_score?: true
  }

  export type ReportCardSumAggregateInputType = {
    id?: true
    user_id?: true
    budget_score?: true
    savings_score?: true
    trend_score?: true
  }

  export type ReportCardMinAggregateInputType = {
    id?: true
    user_id?: true
    month?: true
    overall_grade?: true
    budget_score?: true
    savings_score?: true
    trend_score?: true
    summary_en?: true
    summary_ur?: true
    created_at?: true
  }

  export type ReportCardMaxAggregateInputType = {
    id?: true
    user_id?: true
    month?: true
    overall_grade?: true
    budget_score?: true
    savings_score?: true
    trend_score?: true
    summary_en?: true
    summary_ur?: true
    created_at?: true
  }

  export type ReportCardCountAggregateInputType = {
    id?: true
    user_id?: true
    month?: true
    overall_grade?: true
    budget_score?: true
    savings_score?: true
    trend_score?: true
    summary_en?: true
    summary_ur?: true
    created_at?: true
    _all?: true
  }

  export type ReportCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportCard to aggregate.
     */
    where?: ReportCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportCards to fetch.
     */
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportCards
    **/
    _count?: true | ReportCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportCardMaxAggregateInputType
  }

  export type GetReportCardAggregateType<T extends ReportCardAggregateArgs> = {
        [P in keyof T & keyof AggregateReportCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportCard[P]>
      : GetScalarType<T[P], AggregateReportCard[P]>
  }




  export type ReportCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportCardWhereInput
    orderBy?: ReportCardOrderByWithAggregationInput | ReportCardOrderByWithAggregationInput[]
    by: ReportCardScalarFieldEnum[] | ReportCardScalarFieldEnum
    having?: ReportCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCardCountAggregateInputType | true
    _avg?: ReportCardAvgAggregateInputType
    _sum?: ReportCardSumAggregateInputType
    _min?: ReportCardMinAggregateInputType
    _max?: ReportCardMaxAggregateInputType
  }

  export type ReportCardGroupByOutputType = {
    id: number
    user_id: number
    month: Date
    overall_grade: string
    budget_score: number
    savings_score: number
    trend_score: number
    summary_en: string
    summary_ur: string | null
    created_at: Date
    _count: ReportCardCountAggregateOutputType | null
    _avg: ReportCardAvgAggregateOutputType | null
    _sum: ReportCardSumAggregateOutputType | null
    _min: ReportCardMinAggregateOutputType | null
    _max: ReportCardMaxAggregateOutputType | null
  }

  type GetReportCardGroupByPayload<T extends ReportCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportCardGroupByOutputType[P]>
            : GetScalarType<T[P], ReportCardGroupByOutputType[P]>
        }
      >
    >


  export type ReportCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    month?: boolean
    overall_grade?: boolean
    budget_score?: boolean
    savings_score?: boolean
    trend_score?: boolean
    summary_en?: boolean
    summary_ur?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportCard"]>


  export type ReportCardSelectScalar = {
    id?: boolean
    user_id?: boolean
    month?: boolean
    overall_grade?: boolean
    budget_score?: boolean
    savings_score?: boolean
    trend_score?: boolean
    summary_en?: boolean
    summary_ur?: boolean
    created_at?: boolean
  }

  export type ReportCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportCard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      month: Date
      overall_grade: string
      budget_score: number
      savings_score: number
      trend_score: number
      summary_en: string
      summary_ur: string | null
      created_at: Date
    }, ExtArgs["result"]["reportCard"]>
    composites: {}
  }

  type ReportCardGetPayload<S extends boolean | null | undefined | ReportCardDefaultArgs> = $Result.GetResult<Prisma.$ReportCardPayload, S>

  type ReportCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReportCardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReportCardCountAggregateInputType | true
    }

  export interface ReportCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportCard'], meta: { name: 'ReportCard' } }
    /**
     * Find zero or one ReportCard that matches the filter.
     * @param {ReportCardFindUniqueArgs} args - Arguments to find a ReportCard
     * @example
     * // Get one ReportCard
     * const reportCard = await prisma.reportCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportCardFindUniqueArgs>(args: SelectSubset<T, ReportCardFindUniqueArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReportCard that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReportCardFindUniqueOrThrowArgs} args - Arguments to find a ReportCard
     * @example
     * // Get one ReportCard
     * const reportCard = await prisma.reportCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportCardFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReportCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardFindFirstArgs} args - Arguments to find a ReportCard
     * @example
     * // Get one ReportCard
     * const reportCard = await prisma.reportCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportCardFindFirstArgs>(args?: SelectSubset<T, ReportCardFindFirstArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReportCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardFindFirstOrThrowArgs} args - Arguments to find a ReportCard
     * @example
     * // Get one ReportCard
     * const reportCard = await prisma.reportCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportCardFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReportCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportCards
     * const reportCards = await prisma.reportCard.findMany()
     * 
     * // Get first 10 ReportCards
     * const reportCards = await prisma.reportCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportCardWithIdOnly = await prisma.reportCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportCardFindManyArgs>(args?: SelectSubset<T, ReportCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReportCard.
     * @param {ReportCardCreateArgs} args - Arguments to create a ReportCard.
     * @example
     * // Create one ReportCard
     * const ReportCard = await prisma.reportCard.create({
     *   data: {
     *     // ... data to create a ReportCard
     *   }
     * })
     * 
     */
    create<T extends ReportCardCreateArgs>(args: SelectSubset<T, ReportCardCreateArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReportCards.
     * @param {ReportCardCreateManyArgs} args - Arguments to create many ReportCards.
     * @example
     * // Create many ReportCards
     * const reportCard = await prisma.reportCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCardCreateManyArgs>(args?: SelectSubset<T, ReportCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReportCard.
     * @param {ReportCardDeleteArgs} args - Arguments to delete one ReportCard.
     * @example
     * // Delete one ReportCard
     * const ReportCard = await prisma.reportCard.delete({
     *   where: {
     *     // ... filter to delete one ReportCard
     *   }
     * })
     * 
     */
    delete<T extends ReportCardDeleteArgs>(args: SelectSubset<T, ReportCardDeleteArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReportCard.
     * @param {ReportCardUpdateArgs} args - Arguments to update one ReportCard.
     * @example
     * // Update one ReportCard
     * const reportCard = await prisma.reportCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportCardUpdateArgs>(args: SelectSubset<T, ReportCardUpdateArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReportCards.
     * @param {ReportCardDeleteManyArgs} args - Arguments to filter ReportCards to delete.
     * @example
     * // Delete a few ReportCards
     * const { count } = await prisma.reportCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportCardDeleteManyArgs>(args?: SelectSubset<T, ReportCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportCards
     * const reportCard = await prisma.reportCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportCardUpdateManyArgs>(args: SelectSubset<T, ReportCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReportCard.
     * @param {ReportCardUpsertArgs} args - Arguments to update or create a ReportCard.
     * @example
     * // Update or create a ReportCard
     * const reportCard = await prisma.reportCard.upsert({
     *   create: {
     *     // ... data to create a ReportCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportCard we want to update
     *   }
     * })
     */
    upsert<T extends ReportCardUpsertArgs>(args: SelectSubset<T, ReportCardUpsertArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReportCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardCountArgs} args - Arguments to filter ReportCards to count.
     * @example
     * // Count the number of ReportCards
     * const count = await prisma.reportCard.count({
     *   where: {
     *     // ... the filter for the ReportCards we want to count
     *   }
     * })
    **/
    count<T extends ReportCardCountArgs>(
      args?: Subset<T, ReportCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportCardAggregateArgs>(args: Subset<T, ReportCardAggregateArgs>): Prisma.PrismaPromise<GetReportCardAggregateType<T>>

    /**
     * Group by ReportCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportCardGroupByArgs['orderBy'] }
        : { orderBy?: ReportCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportCard model
   */
  readonly fields: ReportCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReportCard model
   */ 
  interface ReportCardFieldRefs {
    readonly id: FieldRef<"ReportCard", 'Int'>
    readonly user_id: FieldRef<"ReportCard", 'Int'>
    readonly month: FieldRef<"ReportCard", 'DateTime'>
    readonly overall_grade: FieldRef<"ReportCard", 'String'>
    readonly budget_score: FieldRef<"ReportCard", 'Int'>
    readonly savings_score: FieldRef<"ReportCard", 'Int'>
    readonly trend_score: FieldRef<"ReportCard", 'Int'>
    readonly summary_en: FieldRef<"ReportCard", 'String'>
    readonly summary_ur: FieldRef<"ReportCard", 'String'>
    readonly created_at: FieldRef<"ReportCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportCard findUnique
   */
  export type ReportCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCard to fetch.
     */
    where: ReportCardWhereUniqueInput
  }

  /**
   * ReportCard findUniqueOrThrow
   */
  export type ReportCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCard to fetch.
     */
    where: ReportCardWhereUniqueInput
  }

  /**
   * ReportCard findFirst
   */
  export type ReportCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCard to fetch.
     */
    where?: ReportCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportCards to fetch.
     */
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportCards.
     */
    cursor?: ReportCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportCards.
     */
    distinct?: ReportCardScalarFieldEnum | ReportCardScalarFieldEnum[]
  }

  /**
   * ReportCard findFirstOrThrow
   */
  export type ReportCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCard to fetch.
     */
    where?: ReportCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportCards to fetch.
     */
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportCards.
     */
    cursor?: ReportCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportCards.
     */
    distinct?: ReportCardScalarFieldEnum | ReportCardScalarFieldEnum[]
  }

  /**
   * ReportCard findMany
   */
  export type ReportCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCards to fetch.
     */
    where?: ReportCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportCards to fetch.
     */
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportCards.
     */
    cursor?: ReportCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportCards.
     */
    skip?: number
    distinct?: ReportCardScalarFieldEnum | ReportCardScalarFieldEnum[]
  }

  /**
   * ReportCard create
   */
  export type ReportCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportCard.
     */
    data: XOR<ReportCardCreateInput, ReportCardUncheckedCreateInput>
  }

  /**
   * ReportCard createMany
   */
  export type ReportCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportCards.
     */
    data: ReportCardCreateManyInput | ReportCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportCard update
   */
  export type ReportCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportCard.
     */
    data: XOR<ReportCardUpdateInput, ReportCardUncheckedUpdateInput>
    /**
     * Choose, which ReportCard to update.
     */
    where: ReportCardWhereUniqueInput
  }

  /**
   * ReportCard updateMany
   */
  export type ReportCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportCards.
     */
    data: XOR<ReportCardUpdateManyMutationInput, ReportCardUncheckedUpdateManyInput>
    /**
     * Filter which ReportCards to update
     */
    where?: ReportCardWhereInput
  }

  /**
   * ReportCard upsert
   */
  export type ReportCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportCard to update in case it exists.
     */
    where: ReportCardWhereUniqueInput
    /**
     * In case the ReportCard found by the `where` argument doesn't exist, create a new ReportCard with this data.
     */
    create: XOR<ReportCardCreateInput, ReportCardUncheckedCreateInput>
    /**
     * In case the ReportCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportCardUpdateInput, ReportCardUncheckedUpdateInput>
  }

  /**
   * ReportCard delete
   */
  export type ReportCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter which ReportCard to delete.
     */
    where: ReportCardWhereUniqueInput
  }

  /**
   * ReportCard deleteMany
   */
  export type ReportCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportCards to delete
     */
    where?: ReportCardWhereInput
  }

  /**
   * ReportCard without action
   */
  export type ReportCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
  }


  /**
   * Model OfferPartner
   */

  export type AggregateOfferPartner = {
    _count: OfferPartnerCountAggregateOutputType | null
    _avg: OfferPartnerAvgAggregateOutputType | null
    _sum: OfferPartnerSumAggregateOutputType | null
    _min: OfferPartnerMinAggregateOutputType | null
    _max: OfferPartnerMaxAggregateOutputType | null
  }

  export type OfferPartnerAvgAggregateOutputType = {
    id: number | null
    rate_pkr: Decimal | null
  }

  export type OfferPartnerSumAggregateOutputType = {
    id: number | null
    rate_pkr: Decimal | null
  }

  export type OfferPartnerMinAggregateOutputType = {
    id: number | null
    company_name: string | null
    category: string | null
    billing_model: string | null
    rate_pkr: Decimal | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type OfferPartnerMaxAggregateOutputType = {
    id: number | null
    company_name: string | null
    category: string | null
    billing_model: string | null
    rate_pkr: Decimal | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type OfferPartnerCountAggregateOutputType = {
    id: number
    company_name: number
    category: number
    billing_model: number
    rate_pkr: number
    is_active: number
    created_at: number
    _all: number
  }


  export type OfferPartnerAvgAggregateInputType = {
    id?: true
    rate_pkr?: true
  }

  export type OfferPartnerSumAggregateInputType = {
    id?: true
    rate_pkr?: true
  }

  export type OfferPartnerMinAggregateInputType = {
    id?: true
    company_name?: true
    category?: true
    billing_model?: true
    rate_pkr?: true
    is_active?: true
    created_at?: true
  }

  export type OfferPartnerMaxAggregateInputType = {
    id?: true
    company_name?: true
    category?: true
    billing_model?: true
    rate_pkr?: true
    is_active?: true
    created_at?: true
  }

  export type OfferPartnerCountAggregateInputType = {
    id?: true
    company_name?: true
    category?: true
    billing_model?: true
    rate_pkr?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type OfferPartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferPartner to aggregate.
     */
    where?: OfferPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferPartners to fetch.
     */
    orderBy?: OfferPartnerOrderByWithRelationInput | OfferPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfferPartners
    **/
    _count?: true | OfferPartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferPartnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferPartnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferPartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferPartnerMaxAggregateInputType
  }

  export type GetOfferPartnerAggregateType<T extends OfferPartnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOfferPartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfferPartner[P]>
      : GetScalarType<T[P], AggregateOfferPartner[P]>
  }




  export type OfferPartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferPartnerWhereInput
    orderBy?: OfferPartnerOrderByWithAggregationInput | OfferPartnerOrderByWithAggregationInput[]
    by: OfferPartnerScalarFieldEnum[] | OfferPartnerScalarFieldEnum
    having?: OfferPartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferPartnerCountAggregateInputType | true
    _avg?: OfferPartnerAvgAggregateInputType
    _sum?: OfferPartnerSumAggregateInputType
    _min?: OfferPartnerMinAggregateInputType
    _max?: OfferPartnerMaxAggregateInputType
  }

  export type OfferPartnerGroupByOutputType = {
    id: number
    company_name: string
    category: string
    billing_model: string
    rate_pkr: Decimal
    is_active: boolean
    created_at: Date
    _count: OfferPartnerCountAggregateOutputType | null
    _avg: OfferPartnerAvgAggregateOutputType | null
    _sum: OfferPartnerSumAggregateOutputType | null
    _min: OfferPartnerMinAggregateOutputType | null
    _max: OfferPartnerMaxAggregateOutputType | null
  }

  type GetOfferPartnerGroupByPayload<T extends OfferPartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferPartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferPartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferPartnerGroupByOutputType[P]>
            : GetScalarType<T[P], OfferPartnerGroupByOutputType[P]>
        }
      >
    >


  export type OfferPartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    category?: boolean
    billing_model?: boolean
    rate_pkr?: boolean
    is_active?: boolean
    created_at?: boolean
    offers?: boolean | OfferPartner$offersArgs<ExtArgs>
    _count?: boolean | OfferPartnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerPartner"]>


  export type OfferPartnerSelectScalar = {
    id?: boolean
    company_name?: boolean
    category?: boolean
    billing_model?: boolean
    rate_pkr?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type OfferPartnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | OfferPartner$offersArgs<ExtArgs>
    _count?: boolean | OfferPartnerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OfferPartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfferPartner"
    objects: {
      offers: Prisma.$OfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_name: string
      category: string
      billing_model: string
      rate_pkr: Prisma.Decimal
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["offerPartner"]>
    composites: {}
  }

  type OfferPartnerGetPayload<S extends boolean | null | undefined | OfferPartnerDefaultArgs> = $Result.GetResult<Prisma.$OfferPartnerPayload, S>

  type OfferPartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfferPartnerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfferPartnerCountAggregateInputType | true
    }

  export interface OfferPartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfferPartner'], meta: { name: 'OfferPartner' } }
    /**
     * Find zero or one OfferPartner that matches the filter.
     * @param {OfferPartnerFindUniqueArgs} args - Arguments to find a OfferPartner
     * @example
     * // Get one OfferPartner
     * const offerPartner = await prisma.offerPartner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferPartnerFindUniqueArgs>(args: SelectSubset<T, OfferPartnerFindUniqueArgs<ExtArgs>>): Prisma__OfferPartnerClient<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OfferPartner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OfferPartnerFindUniqueOrThrowArgs} args - Arguments to find a OfferPartner
     * @example
     * // Get one OfferPartner
     * const offerPartner = await prisma.offerPartner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferPartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferPartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferPartnerClient<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OfferPartner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPartnerFindFirstArgs} args - Arguments to find a OfferPartner
     * @example
     * // Get one OfferPartner
     * const offerPartner = await prisma.offerPartner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferPartnerFindFirstArgs>(args?: SelectSubset<T, OfferPartnerFindFirstArgs<ExtArgs>>): Prisma__OfferPartnerClient<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OfferPartner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPartnerFindFirstOrThrowArgs} args - Arguments to find a OfferPartner
     * @example
     * // Get one OfferPartner
     * const offerPartner = await prisma.offerPartner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferPartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferPartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferPartnerClient<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OfferPartners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfferPartners
     * const offerPartners = await prisma.offerPartner.findMany()
     * 
     * // Get first 10 OfferPartners
     * const offerPartners = await prisma.offerPartner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerPartnerWithIdOnly = await prisma.offerPartner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferPartnerFindManyArgs>(args?: SelectSubset<T, OfferPartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OfferPartner.
     * @param {OfferPartnerCreateArgs} args - Arguments to create a OfferPartner.
     * @example
     * // Create one OfferPartner
     * const OfferPartner = await prisma.offerPartner.create({
     *   data: {
     *     // ... data to create a OfferPartner
     *   }
     * })
     * 
     */
    create<T extends OfferPartnerCreateArgs>(args: SelectSubset<T, OfferPartnerCreateArgs<ExtArgs>>): Prisma__OfferPartnerClient<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OfferPartners.
     * @param {OfferPartnerCreateManyArgs} args - Arguments to create many OfferPartners.
     * @example
     * // Create many OfferPartners
     * const offerPartner = await prisma.offerPartner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferPartnerCreateManyArgs>(args?: SelectSubset<T, OfferPartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OfferPartner.
     * @param {OfferPartnerDeleteArgs} args - Arguments to delete one OfferPartner.
     * @example
     * // Delete one OfferPartner
     * const OfferPartner = await prisma.offerPartner.delete({
     *   where: {
     *     // ... filter to delete one OfferPartner
     *   }
     * })
     * 
     */
    delete<T extends OfferPartnerDeleteArgs>(args: SelectSubset<T, OfferPartnerDeleteArgs<ExtArgs>>): Prisma__OfferPartnerClient<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OfferPartner.
     * @param {OfferPartnerUpdateArgs} args - Arguments to update one OfferPartner.
     * @example
     * // Update one OfferPartner
     * const offerPartner = await prisma.offerPartner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferPartnerUpdateArgs>(args: SelectSubset<T, OfferPartnerUpdateArgs<ExtArgs>>): Prisma__OfferPartnerClient<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OfferPartners.
     * @param {OfferPartnerDeleteManyArgs} args - Arguments to filter OfferPartners to delete.
     * @example
     * // Delete a few OfferPartners
     * const { count } = await prisma.offerPartner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferPartnerDeleteManyArgs>(args?: SelectSubset<T, OfferPartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfferPartners
     * const offerPartner = await prisma.offerPartner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferPartnerUpdateManyArgs>(args: SelectSubset<T, OfferPartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OfferPartner.
     * @param {OfferPartnerUpsertArgs} args - Arguments to update or create a OfferPartner.
     * @example
     * // Update or create a OfferPartner
     * const offerPartner = await prisma.offerPartner.upsert({
     *   create: {
     *     // ... data to create a OfferPartner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfferPartner we want to update
     *   }
     * })
     */
    upsert<T extends OfferPartnerUpsertArgs>(args: SelectSubset<T, OfferPartnerUpsertArgs<ExtArgs>>): Prisma__OfferPartnerClient<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OfferPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPartnerCountArgs} args - Arguments to filter OfferPartners to count.
     * @example
     * // Count the number of OfferPartners
     * const count = await prisma.offerPartner.count({
     *   where: {
     *     // ... the filter for the OfferPartners we want to count
     *   }
     * })
    **/
    count<T extends OfferPartnerCountArgs>(
      args?: Subset<T, OfferPartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferPartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfferPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferPartnerAggregateArgs>(args: Subset<T, OfferPartnerAggregateArgs>): Prisma.PrismaPromise<GetOfferPartnerAggregateType<T>>

    /**
     * Group by OfferPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferPartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferPartnerGroupByArgs['orderBy'] }
        : { orderBy?: OfferPartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferPartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfferPartner model
   */
  readonly fields: OfferPartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfferPartner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferPartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offers<T extends OfferPartner$offersArgs<ExtArgs> = {}>(args?: Subset<T, OfferPartner$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OfferPartner model
   */ 
  interface OfferPartnerFieldRefs {
    readonly id: FieldRef<"OfferPartner", 'Int'>
    readonly company_name: FieldRef<"OfferPartner", 'String'>
    readonly category: FieldRef<"OfferPartner", 'String'>
    readonly billing_model: FieldRef<"OfferPartner", 'String'>
    readonly rate_pkr: FieldRef<"OfferPartner", 'Decimal'>
    readonly is_active: FieldRef<"OfferPartner", 'Boolean'>
    readonly created_at: FieldRef<"OfferPartner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OfferPartner findUnique
   */
  export type OfferPartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
    /**
     * Filter, which OfferPartner to fetch.
     */
    where: OfferPartnerWhereUniqueInput
  }

  /**
   * OfferPartner findUniqueOrThrow
   */
  export type OfferPartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
    /**
     * Filter, which OfferPartner to fetch.
     */
    where: OfferPartnerWhereUniqueInput
  }

  /**
   * OfferPartner findFirst
   */
  export type OfferPartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
    /**
     * Filter, which OfferPartner to fetch.
     */
    where?: OfferPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferPartners to fetch.
     */
    orderBy?: OfferPartnerOrderByWithRelationInput | OfferPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferPartners.
     */
    cursor?: OfferPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferPartners.
     */
    distinct?: OfferPartnerScalarFieldEnum | OfferPartnerScalarFieldEnum[]
  }

  /**
   * OfferPartner findFirstOrThrow
   */
  export type OfferPartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
    /**
     * Filter, which OfferPartner to fetch.
     */
    where?: OfferPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferPartners to fetch.
     */
    orderBy?: OfferPartnerOrderByWithRelationInput | OfferPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferPartners.
     */
    cursor?: OfferPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferPartners.
     */
    distinct?: OfferPartnerScalarFieldEnum | OfferPartnerScalarFieldEnum[]
  }

  /**
   * OfferPartner findMany
   */
  export type OfferPartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
    /**
     * Filter, which OfferPartners to fetch.
     */
    where?: OfferPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferPartners to fetch.
     */
    orderBy?: OfferPartnerOrderByWithRelationInput | OfferPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfferPartners.
     */
    cursor?: OfferPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferPartners.
     */
    skip?: number
    distinct?: OfferPartnerScalarFieldEnum | OfferPartnerScalarFieldEnum[]
  }

  /**
   * OfferPartner create
   */
  export type OfferPartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
    /**
     * The data needed to create a OfferPartner.
     */
    data: XOR<OfferPartnerCreateInput, OfferPartnerUncheckedCreateInput>
  }

  /**
   * OfferPartner createMany
   */
  export type OfferPartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfferPartners.
     */
    data: OfferPartnerCreateManyInput | OfferPartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfferPartner update
   */
  export type OfferPartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
    /**
     * The data needed to update a OfferPartner.
     */
    data: XOR<OfferPartnerUpdateInput, OfferPartnerUncheckedUpdateInput>
    /**
     * Choose, which OfferPartner to update.
     */
    where: OfferPartnerWhereUniqueInput
  }

  /**
   * OfferPartner updateMany
   */
  export type OfferPartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfferPartners.
     */
    data: XOR<OfferPartnerUpdateManyMutationInput, OfferPartnerUncheckedUpdateManyInput>
    /**
     * Filter which OfferPartners to update
     */
    where?: OfferPartnerWhereInput
  }

  /**
   * OfferPartner upsert
   */
  export type OfferPartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
    /**
     * The filter to search for the OfferPartner to update in case it exists.
     */
    where: OfferPartnerWhereUniqueInput
    /**
     * In case the OfferPartner found by the `where` argument doesn't exist, create a new OfferPartner with this data.
     */
    create: XOR<OfferPartnerCreateInput, OfferPartnerUncheckedCreateInput>
    /**
     * In case the OfferPartner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferPartnerUpdateInput, OfferPartnerUncheckedUpdateInput>
  }

  /**
   * OfferPartner delete
   */
  export type OfferPartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
    /**
     * Filter which OfferPartner to delete.
     */
    where: OfferPartnerWhereUniqueInput
  }

  /**
   * OfferPartner deleteMany
   */
  export type OfferPartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferPartners to delete
     */
    where?: OfferPartnerWhereInput
  }

  /**
   * OfferPartner.offers
   */
  export type OfferPartner$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * OfferPartner without action
   */
  export type OfferPartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPartner
     */
    select?: OfferPartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPartnerInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    id: number | null
    partner_id: number | null
    min_monthly_spend: Decimal | null
    max_redemptions: number | null
    current_redemptions: number | null
  }

  export type OfferSumAggregateOutputType = {
    id: number | null
    partner_id: number | null
    min_monthly_spend: Decimal | null
    max_redemptions: number | null
    current_redemptions: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: number | null
    partner_id: number | null
    title: string | null
    title_ur: string | null
    description: string | null
    target_category: string | null
    min_monthly_spend: Decimal | null
    trigger_event: string | null
    promo_code: string | null
    redemption_type: string | null
    deeplink_url: string | null
    valid_from: Date | null
    valid_until: Date | null
    max_redemptions: number | null
    current_redemptions: number | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type OfferMaxAggregateOutputType = {
    id: number | null
    partner_id: number | null
    title: string | null
    title_ur: string | null
    description: string | null
    target_category: string | null
    min_monthly_spend: Decimal | null
    trigger_event: string | null
    promo_code: string | null
    redemption_type: string | null
    deeplink_url: string | null
    valid_from: Date | null
    valid_until: Date | null
    max_redemptions: number | null
    current_redemptions: number | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    partner_id: number
    title: number
    title_ur: number
    description: number
    target_category: number
    min_monthly_spend: number
    trigger_event: number
    promo_code: number
    redemption_type: number
    deeplink_url: number
    valid_from: number
    valid_until: number
    max_redemptions: number
    current_redemptions: number
    is_active: number
    created_at: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    id?: true
    partner_id?: true
    min_monthly_spend?: true
    max_redemptions?: true
    current_redemptions?: true
  }

  export type OfferSumAggregateInputType = {
    id?: true
    partner_id?: true
    min_monthly_spend?: true
    max_redemptions?: true
    current_redemptions?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    partner_id?: true
    title?: true
    title_ur?: true
    description?: true
    target_category?: true
    min_monthly_spend?: true
    trigger_event?: true
    promo_code?: true
    redemption_type?: true
    deeplink_url?: true
    valid_from?: true
    valid_until?: true
    max_redemptions?: true
    current_redemptions?: true
    is_active?: true
    created_at?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    partner_id?: true
    title?: true
    title_ur?: true
    description?: true
    target_category?: true
    min_monthly_spend?: true
    trigger_event?: true
    promo_code?: true
    redemption_type?: true
    deeplink_url?: true
    valid_from?: true
    valid_until?: true
    max_redemptions?: true
    current_redemptions?: true
    is_active?: true
    created_at?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    partner_id?: true
    title?: true
    title_ur?: true
    description?: true
    target_category?: true
    min_monthly_spend?: true
    trigger_event?: true
    promo_code?: true
    redemption_type?: true
    deeplink_url?: true
    valid_from?: true
    valid_until?: true
    max_redemptions?: true
    current_redemptions?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: number
    partner_id: number
    title: string
    title_ur: string | null
    description: string
    target_category: string
    min_monthly_spend: Decimal
    trigger_event: string
    promo_code: string | null
    redemption_type: string
    deeplink_url: string | null
    valid_from: Date
    valid_until: Date
    max_redemptions: number
    current_redemptions: number
    is_active: boolean
    created_at: Date
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partner_id?: boolean
    title?: boolean
    title_ur?: boolean
    description?: boolean
    target_category?: boolean
    min_monthly_spend?: boolean
    trigger_event?: boolean
    promo_code?: boolean
    redemption_type?: boolean
    deeplink_url?: boolean
    valid_from?: boolean
    valid_until?: boolean
    max_redemptions?: boolean
    current_redemptions?: boolean
    is_active?: boolean
    created_at?: boolean
    partner?: boolean | OfferPartnerDefaultArgs<ExtArgs>
    events?: boolean | Offer$eventsArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>


  export type OfferSelectScalar = {
    id?: boolean
    partner_id?: boolean
    title?: boolean
    title_ur?: boolean
    description?: boolean
    target_category?: boolean
    min_monthly_spend?: boolean
    trigger_event?: boolean
    promo_code?: boolean
    redemption_type?: boolean
    deeplink_url?: boolean
    valid_from?: boolean
    valid_until?: boolean
    max_redemptions?: boolean
    current_redemptions?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | OfferPartnerDefaultArgs<ExtArgs>
    events?: boolean | Offer$eventsArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      partner: Prisma.$OfferPartnerPayload<ExtArgs>
      events: Prisma.$UserOfferEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      partner_id: number
      title: string
      title_ur: string | null
      description: string
      target_category: string
      min_monthly_spend: Prisma.Decimal
      trigger_event: string
      promo_code: string | null
      redemption_type: string
      deeplink_url: string | null
      valid_from: Date
      valid_until: Date
      max_redemptions: number
      current_redemptions: number
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partner<T extends OfferPartnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferPartnerDefaultArgs<ExtArgs>>): Prisma__OfferPartnerClient<$Result.GetResult<Prisma.$OfferPartnerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    events<T extends Offer$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Offer$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */ 
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'Int'>
    readonly partner_id: FieldRef<"Offer", 'Int'>
    readonly title: FieldRef<"Offer", 'String'>
    readonly title_ur: FieldRef<"Offer", 'String'>
    readonly description: FieldRef<"Offer", 'String'>
    readonly target_category: FieldRef<"Offer", 'String'>
    readonly min_monthly_spend: FieldRef<"Offer", 'Decimal'>
    readonly trigger_event: FieldRef<"Offer", 'String'>
    readonly promo_code: FieldRef<"Offer", 'String'>
    readonly redemption_type: FieldRef<"Offer", 'String'>
    readonly deeplink_url: FieldRef<"Offer", 'String'>
    readonly valid_from: FieldRef<"Offer", 'DateTime'>
    readonly valid_until: FieldRef<"Offer", 'DateTime'>
    readonly max_redemptions: FieldRef<"Offer", 'Int'>
    readonly current_redemptions: FieldRef<"Offer", 'Int'>
    readonly is_active: FieldRef<"Offer", 'Boolean'>
    readonly created_at: FieldRef<"Offer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
  }

  /**
   * Offer.events
   */
  export type Offer$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    where?: UserOfferEventWhereInput
    orderBy?: UserOfferEventOrderByWithRelationInput | UserOfferEventOrderByWithRelationInput[]
    cursor?: UserOfferEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOfferEventScalarFieldEnum | UserOfferEventScalarFieldEnum[]
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model UserOfferEvent
   */

  export type AggregateUserOfferEvent = {
    _count: UserOfferEventCountAggregateOutputType | null
    _avg: UserOfferEventAvgAggregateOutputType | null
    _sum: UserOfferEventSumAggregateOutputType | null
    _min: UserOfferEventMinAggregateOutputType | null
    _max: UserOfferEventMaxAggregateOutputType | null
  }

  export type UserOfferEventAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    offer_id: number | null
    spend_amount: Decimal | null
  }

  export type UserOfferEventSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    offer_id: number | null
    spend_amount: Decimal | null
  }

  export type UserOfferEventMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    offer_id: number | null
    event_type: string | null
    spend_amount: Decimal | null
    event_at: Date | null
  }

  export type UserOfferEventMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    offer_id: number | null
    event_type: string | null
    spend_amount: Decimal | null
    event_at: Date | null
  }

  export type UserOfferEventCountAggregateOutputType = {
    id: number
    user_id: number
    offer_id: number
    event_type: number
    spend_amount: number
    event_at: number
    _all: number
  }


  export type UserOfferEventAvgAggregateInputType = {
    id?: true
    user_id?: true
    offer_id?: true
    spend_amount?: true
  }

  export type UserOfferEventSumAggregateInputType = {
    id?: true
    user_id?: true
    offer_id?: true
    spend_amount?: true
  }

  export type UserOfferEventMinAggregateInputType = {
    id?: true
    user_id?: true
    offer_id?: true
    event_type?: true
    spend_amount?: true
    event_at?: true
  }

  export type UserOfferEventMaxAggregateInputType = {
    id?: true
    user_id?: true
    offer_id?: true
    event_type?: true
    spend_amount?: true
    event_at?: true
  }

  export type UserOfferEventCountAggregateInputType = {
    id?: true
    user_id?: true
    offer_id?: true
    event_type?: true
    spend_amount?: true
    event_at?: true
    _all?: true
  }

  export type UserOfferEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOfferEvent to aggregate.
     */
    where?: UserOfferEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOfferEvents to fetch.
     */
    orderBy?: UserOfferEventOrderByWithRelationInput | UserOfferEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOfferEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOfferEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOfferEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOfferEvents
    **/
    _count?: true | UserOfferEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOfferEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOfferEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOfferEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOfferEventMaxAggregateInputType
  }

  export type GetUserOfferEventAggregateType<T extends UserOfferEventAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOfferEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOfferEvent[P]>
      : GetScalarType<T[P], AggregateUserOfferEvent[P]>
  }




  export type UserOfferEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOfferEventWhereInput
    orderBy?: UserOfferEventOrderByWithAggregationInput | UserOfferEventOrderByWithAggregationInput[]
    by: UserOfferEventScalarFieldEnum[] | UserOfferEventScalarFieldEnum
    having?: UserOfferEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOfferEventCountAggregateInputType | true
    _avg?: UserOfferEventAvgAggregateInputType
    _sum?: UserOfferEventSumAggregateInputType
    _min?: UserOfferEventMinAggregateInputType
    _max?: UserOfferEventMaxAggregateInputType
  }

  export type UserOfferEventGroupByOutputType = {
    id: number
    user_id: number
    offer_id: number
    event_type: string
    spend_amount: Decimal | null
    event_at: Date
    _count: UserOfferEventCountAggregateOutputType | null
    _avg: UserOfferEventAvgAggregateOutputType | null
    _sum: UserOfferEventSumAggregateOutputType | null
    _min: UserOfferEventMinAggregateOutputType | null
    _max: UserOfferEventMaxAggregateOutputType | null
  }

  type GetUserOfferEventGroupByPayload<T extends UserOfferEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOfferEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOfferEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOfferEventGroupByOutputType[P]>
            : GetScalarType<T[P], UserOfferEventGroupByOutputType[P]>
        }
      >
    >


  export type UserOfferEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    offer_id?: boolean
    event_type?: boolean
    spend_amount?: boolean
    event_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOfferEvent"]>


  export type UserOfferEventSelectScalar = {
    id?: boolean
    user_id?: boolean
    offer_id?: boolean
    event_type?: boolean
    spend_amount?: boolean
    event_at?: boolean
  }

  export type UserOfferEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }

  export type $UserOfferEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOfferEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      offer: Prisma.$OfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      offer_id: number
      event_type: string
      spend_amount: Prisma.Decimal | null
      event_at: Date
    }, ExtArgs["result"]["userOfferEvent"]>
    composites: {}
  }

  type UserOfferEventGetPayload<S extends boolean | null | undefined | UserOfferEventDefaultArgs> = $Result.GetResult<Prisma.$UserOfferEventPayload, S>

  type UserOfferEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserOfferEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserOfferEventCountAggregateInputType | true
    }

  export interface UserOfferEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOfferEvent'], meta: { name: 'UserOfferEvent' } }
    /**
     * Find zero or one UserOfferEvent that matches the filter.
     * @param {UserOfferEventFindUniqueArgs} args - Arguments to find a UserOfferEvent
     * @example
     * // Get one UserOfferEvent
     * const userOfferEvent = await prisma.userOfferEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOfferEventFindUniqueArgs>(args: SelectSubset<T, UserOfferEventFindUniqueArgs<ExtArgs>>): Prisma__UserOfferEventClient<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserOfferEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserOfferEventFindUniqueOrThrowArgs} args - Arguments to find a UserOfferEvent
     * @example
     * // Get one UserOfferEvent
     * const userOfferEvent = await prisma.userOfferEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOfferEventFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOfferEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOfferEventClient<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserOfferEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOfferEventFindFirstArgs} args - Arguments to find a UserOfferEvent
     * @example
     * // Get one UserOfferEvent
     * const userOfferEvent = await prisma.userOfferEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOfferEventFindFirstArgs>(args?: SelectSubset<T, UserOfferEventFindFirstArgs<ExtArgs>>): Prisma__UserOfferEventClient<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserOfferEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOfferEventFindFirstOrThrowArgs} args - Arguments to find a UserOfferEvent
     * @example
     * // Get one UserOfferEvent
     * const userOfferEvent = await prisma.userOfferEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOfferEventFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOfferEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOfferEventClient<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserOfferEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOfferEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOfferEvents
     * const userOfferEvents = await prisma.userOfferEvent.findMany()
     * 
     * // Get first 10 UserOfferEvents
     * const userOfferEvents = await prisma.userOfferEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOfferEventWithIdOnly = await prisma.userOfferEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserOfferEventFindManyArgs>(args?: SelectSubset<T, UserOfferEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserOfferEvent.
     * @param {UserOfferEventCreateArgs} args - Arguments to create a UserOfferEvent.
     * @example
     * // Create one UserOfferEvent
     * const UserOfferEvent = await prisma.userOfferEvent.create({
     *   data: {
     *     // ... data to create a UserOfferEvent
     *   }
     * })
     * 
     */
    create<T extends UserOfferEventCreateArgs>(args: SelectSubset<T, UserOfferEventCreateArgs<ExtArgs>>): Prisma__UserOfferEventClient<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserOfferEvents.
     * @param {UserOfferEventCreateManyArgs} args - Arguments to create many UserOfferEvents.
     * @example
     * // Create many UserOfferEvents
     * const userOfferEvent = await prisma.userOfferEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOfferEventCreateManyArgs>(args?: SelectSubset<T, UserOfferEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserOfferEvent.
     * @param {UserOfferEventDeleteArgs} args - Arguments to delete one UserOfferEvent.
     * @example
     * // Delete one UserOfferEvent
     * const UserOfferEvent = await prisma.userOfferEvent.delete({
     *   where: {
     *     // ... filter to delete one UserOfferEvent
     *   }
     * })
     * 
     */
    delete<T extends UserOfferEventDeleteArgs>(args: SelectSubset<T, UserOfferEventDeleteArgs<ExtArgs>>): Prisma__UserOfferEventClient<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserOfferEvent.
     * @param {UserOfferEventUpdateArgs} args - Arguments to update one UserOfferEvent.
     * @example
     * // Update one UserOfferEvent
     * const userOfferEvent = await prisma.userOfferEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOfferEventUpdateArgs>(args: SelectSubset<T, UserOfferEventUpdateArgs<ExtArgs>>): Prisma__UserOfferEventClient<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserOfferEvents.
     * @param {UserOfferEventDeleteManyArgs} args - Arguments to filter UserOfferEvents to delete.
     * @example
     * // Delete a few UserOfferEvents
     * const { count } = await prisma.userOfferEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOfferEventDeleteManyArgs>(args?: SelectSubset<T, UserOfferEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOfferEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOfferEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOfferEvents
     * const userOfferEvent = await prisma.userOfferEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOfferEventUpdateManyArgs>(args: SelectSubset<T, UserOfferEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserOfferEvent.
     * @param {UserOfferEventUpsertArgs} args - Arguments to update or create a UserOfferEvent.
     * @example
     * // Update or create a UserOfferEvent
     * const userOfferEvent = await prisma.userOfferEvent.upsert({
     *   create: {
     *     // ... data to create a UserOfferEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOfferEvent we want to update
     *   }
     * })
     */
    upsert<T extends UserOfferEventUpsertArgs>(args: SelectSubset<T, UserOfferEventUpsertArgs<ExtArgs>>): Prisma__UserOfferEventClient<$Result.GetResult<Prisma.$UserOfferEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserOfferEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOfferEventCountArgs} args - Arguments to filter UserOfferEvents to count.
     * @example
     * // Count the number of UserOfferEvents
     * const count = await prisma.userOfferEvent.count({
     *   where: {
     *     // ... the filter for the UserOfferEvents we want to count
     *   }
     * })
    **/
    count<T extends UserOfferEventCountArgs>(
      args?: Subset<T, UserOfferEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOfferEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOfferEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOfferEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOfferEventAggregateArgs>(args: Subset<T, UserOfferEventAggregateArgs>): Prisma.PrismaPromise<GetUserOfferEventAggregateType<T>>

    /**
     * Group by UserOfferEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOfferEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOfferEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOfferEventGroupByArgs['orderBy'] }
        : { orderBy?: UserOfferEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOfferEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOfferEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOfferEvent model
   */
  readonly fields: UserOfferEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOfferEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOfferEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserOfferEvent model
   */ 
  interface UserOfferEventFieldRefs {
    readonly id: FieldRef<"UserOfferEvent", 'Int'>
    readonly user_id: FieldRef<"UserOfferEvent", 'Int'>
    readonly offer_id: FieldRef<"UserOfferEvent", 'Int'>
    readonly event_type: FieldRef<"UserOfferEvent", 'String'>
    readonly spend_amount: FieldRef<"UserOfferEvent", 'Decimal'>
    readonly event_at: FieldRef<"UserOfferEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOfferEvent findUnique
   */
  export type UserOfferEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    /**
     * Filter, which UserOfferEvent to fetch.
     */
    where: UserOfferEventWhereUniqueInput
  }

  /**
   * UserOfferEvent findUniqueOrThrow
   */
  export type UserOfferEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    /**
     * Filter, which UserOfferEvent to fetch.
     */
    where: UserOfferEventWhereUniqueInput
  }

  /**
   * UserOfferEvent findFirst
   */
  export type UserOfferEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    /**
     * Filter, which UserOfferEvent to fetch.
     */
    where?: UserOfferEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOfferEvents to fetch.
     */
    orderBy?: UserOfferEventOrderByWithRelationInput | UserOfferEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOfferEvents.
     */
    cursor?: UserOfferEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOfferEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOfferEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOfferEvents.
     */
    distinct?: UserOfferEventScalarFieldEnum | UserOfferEventScalarFieldEnum[]
  }

  /**
   * UserOfferEvent findFirstOrThrow
   */
  export type UserOfferEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    /**
     * Filter, which UserOfferEvent to fetch.
     */
    where?: UserOfferEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOfferEvents to fetch.
     */
    orderBy?: UserOfferEventOrderByWithRelationInput | UserOfferEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOfferEvents.
     */
    cursor?: UserOfferEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOfferEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOfferEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOfferEvents.
     */
    distinct?: UserOfferEventScalarFieldEnum | UserOfferEventScalarFieldEnum[]
  }

  /**
   * UserOfferEvent findMany
   */
  export type UserOfferEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    /**
     * Filter, which UserOfferEvents to fetch.
     */
    where?: UserOfferEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOfferEvents to fetch.
     */
    orderBy?: UserOfferEventOrderByWithRelationInput | UserOfferEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOfferEvents.
     */
    cursor?: UserOfferEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOfferEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOfferEvents.
     */
    skip?: number
    distinct?: UserOfferEventScalarFieldEnum | UserOfferEventScalarFieldEnum[]
  }

  /**
   * UserOfferEvent create
   */
  export type UserOfferEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOfferEvent.
     */
    data: XOR<UserOfferEventCreateInput, UserOfferEventUncheckedCreateInput>
  }

  /**
   * UserOfferEvent createMany
   */
  export type UserOfferEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOfferEvents.
     */
    data: UserOfferEventCreateManyInput | UserOfferEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOfferEvent update
   */
  export type UserOfferEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOfferEvent.
     */
    data: XOR<UserOfferEventUpdateInput, UserOfferEventUncheckedUpdateInput>
    /**
     * Choose, which UserOfferEvent to update.
     */
    where: UserOfferEventWhereUniqueInput
  }

  /**
   * UserOfferEvent updateMany
   */
  export type UserOfferEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOfferEvents.
     */
    data: XOR<UserOfferEventUpdateManyMutationInput, UserOfferEventUncheckedUpdateManyInput>
    /**
     * Filter which UserOfferEvents to update
     */
    where?: UserOfferEventWhereInput
  }

  /**
   * UserOfferEvent upsert
   */
  export type UserOfferEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOfferEvent to update in case it exists.
     */
    where: UserOfferEventWhereUniqueInput
    /**
     * In case the UserOfferEvent found by the `where` argument doesn't exist, create a new UserOfferEvent with this data.
     */
    create: XOR<UserOfferEventCreateInput, UserOfferEventUncheckedCreateInput>
    /**
     * In case the UserOfferEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOfferEventUpdateInput, UserOfferEventUncheckedUpdateInput>
  }

  /**
   * UserOfferEvent delete
   */
  export type UserOfferEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
    /**
     * Filter which UserOfferEvent to delete.
     */
    where: UserOfferEventWhereUniqueInput
  }

  /**
   * UserOfferEvent deleteMany
   */
  export type UserOfferEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOfferEvents to delete
     */
    where?: UserOfferEventWhereInput
  }

  /**
   * UserOfferEvent without action
   */
  export type UserOfferEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOfferEvent
     */
    select?: UserOfferEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOfferEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpendingLimitScalarFieldEnum: {
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

  export type SpendingLimitScalarFieldEnum = (typeof SpendingLimitScalarFieldEnum)[keyof typeof SpendingLimitScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
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

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    category: 'category',
    monthly_limit: 'monthly_limit',
    month: 'month',
    alert_at_percent: 'alert_at_percent',
    created_at: 'created_at'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    target_amount: 'target_amount',
    saved_amount: 'saved_amount',
    deadline: 'deadline',
    status: 'status',
    created_at: 'created_at'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const MarketCacheScalarFieldEnum: {
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

  export type MarketCacheScalarFieldEnum = (typeof MarketCacheScalarFieldEnum)[keyof typeof MarketCacheScalarFieldEnum]


  export const UserHoldingScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    ticker: 'ticker',
    display_name: 'display_name',
    asset_type: 'asset_type',
    quantity: 'quantity',
    avg_cost_pkr: 'avg_cost_pkr',
    acquired_at: 'acquired_at'
  };

  export type UserHoldingScalarFieldEnum = (typeof UserHoldingScalarFieldEnum)[keyof typeof UserHoldingScalarFieldEnum]


  export const StockTradeScalarFieldEnum: {
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

  export type StockTradeScalarFieldEnum = (typeof StockTradeScalarFieldEnum)[keyof typeof StockTradeScalarFieldEnum]


  export const AiInsightScalarFieldEnum: {
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

  export type AiInsightScalarFieldEnum = (typeof AiInsightScalarFieldEnum)[keyof typeof AiInsightScalarFieldEnum]


  export const ReportCardScalarFieldEnum: {
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

  export type ReportCardScalarFieldEnum = (typeof ReportCardScalarFieldEnum)[keyof typeof ReportCardScalarFieldEnum]


  export const OfferPartnerScalarFieldEnum: {
    id: 'id',
    company_name: 'company_name',
    category: 'category',
    billing_model: 'billing_model',
    rate_pkr: 'rate_pkr',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type OfferPartnerScalarFieldEnum = (typeof OfferPartnerScalarFieldEnum)[keyof typeof OfferPartnerScalarFieldEnum]


  export const OfferScalarFieldEnum: {
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

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const UserOfferEventScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    offer_id: 'offer_id',
    event_type: 'event_type',
    spend_amount: 'spend_amount',
    event_at: 'event_at'
  };

  export type UserOfferEventScalarFieldEnum = (typeof UserOfferEventScalarFieldEnum)[keyof typeof UserOfferEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    account_number?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    preferred_language?: StringFilter<"User"> | string
    monthly_income?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFilter<"User"> | boolean
    reset_token_hash?: StringNullableFilter<"User"> | string | null
    reset_token_expires?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    linked_partner_id?: IntNullableFilter<"User"> | number | null
    transactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
    goals?: GoalListRelationFilter
    ai_insights?: AiInsightListRelationFilter
    report_cards?: ReportCardListRelationFilter
    offer_events?: UserOfferEventListRelationFilter
    linked_partner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    partner_of?: UserListRelationFilter
    limits_set?: SpendingLimitListRelationFilter
    limits_received?: SpendingLimitListRelationFilter
    holdings?: UserHoldingListRelationFilter
    stock_trades?: StockTradeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    account_number?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrderInput | SortOrder
    preferred_language?: SortOrder
    monthly_income?: SortOrder
    wallet_balance?: SortOrder
    account_balance?: SortOrder
    is_admin?: SortOrder
    reset_token_hash?: SortOrderInput | SortOrder
    reset_token_expires?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_login?: SortOrderInput | SortOrder
    linked_partner_id?: SortOrderInput | SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    ai_insights?: AiInsightOrderByRelationAggregateInput
    report_cards?: ReportCardOrderByRelationAggregateInput
    offer_events?: UserOfferEventOrderByRelationAggregateInput
    linked_partner?: UserOrderByWithRelationInput
    partner_of?: UserOrderByRelationAggregateInput
    limits_set?: SpendingLimitOrderByRelationAggregateInput
    limits_received?: SpendingLimitOrderByRelationAggregateInput
    holdings?: UserHoldingOrderByRelationAggregateInput
    stock_trades?: StockTradeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    account_number?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    preferred_language?: StringFilter<"User"> | string
    monthly_income?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFilter<"User"> | boolean
    reset_token_hash?: StringNullableFilter<"User"> | string | null
    reset_token_expires?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    linked_partner_id?: IntNullableFilter<"User"> | number | null
    transactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
    goals?: GoalListRelationFilter
    ai_insights?: AiInsightListRelationFilter
    report_cards?: ReportCardListRelationFilter
    offer_events?: UserOfferEventListRelationFilter
    linked_partner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    partner_of?: UserListRelationFilter
    limits_set?: SpendingLimitListRelationFilter
    limits_received?: SpendingLimitListRelationFilter
    holdings?: UserHoldingListRelationFilter
    stock_trades?: StockTradeListRelationFilter
  }, "id" | "account_number" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    account_number?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrderInput | SortOrder
    preferred_language?: SortOrder
    monthly_income?: SortOrder
    wallet_balance?: SortOrder
    account_balance?: SortOrder
    is_admin?: SortOrder
    reset_token_hash?: SortOrderInput | SortOrder
    reset_token_expires?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_login?: SortOrderInput | SortOrder
    linked_partner_id?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    account_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferred_language?: StringWithAggregatesFilter<"User"> | string
    monthly_income?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    is_admin?: BoolWithAggregatesFilter<"User"> | boolean
    reset_token_hash?: StringNullableWithAggregatesFilter<"User"> | string | null
    reset_token_expires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    linked_partner_id?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type SpendingLimitWhereInput = {
    AND?: SpendingLimitWhereInput | SpendingLimitWhereInput[]
    OR?: SpendingLimitWhereInput[]
    NOT?: SpendingLimitWhereInput | SpendingLimitWhereInput[]
    id?: IntFilter<"SpendingLimit"> | number
    owner_id?: IntFilter<"SpendingLimit"> | number
    target_user_id?: IntFilter<"SpendingLimit"> | number
    category?: StringFilter<"SpendingLimit"> | string
    monthly_limit?: DecimalFilter<"SpendingLimit"> | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFilter<"SpendingLimit"> | number
    is_hard_limit?: BoolFilter<"SpendingLimit"> | boolean
    is_active?: BoolFilter<"SpendingLimit"> | boolean
    created_at?: DateTimeFilter<"SpendingLimit"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    target_user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SpendingLimitOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    target_user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    alert_at_percent?: SortOrder
    is_hard_limit?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    owner?: UserOrderByWithRelationInput
    target_user?: UserOrderByWithRelationInput
  }

  export type SpendingLimitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    owner_id_target_user_id_category?: SpendingLimitOwner_idTarget_user_idCategoryCompoundUniqueInput
    AND?: SpendingLimitWhereInput | SpendingLimitWhereInput[]
    OR?: SpendingLimitWhereInput[]
    NOT?: SpendingLimitWhereInput | SpendingLimitWhereInput[]
    owner_id?: IntFilter<"SpendingLimit"> | number
    target_user_id?: IntFilter<"SpendingLimit"> | number
    category?: StringFilter<"SpendingLimit"> | string
    monthly_limit?: DecimalFilter<"SpendingLimit"> | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFilter<"SpendingLimit"> | number
    is_hard_limit?: BoolFilter<"SpendingLimit"> | boolean
    is_active?: BoolFilter<"SpendingLimit"> | boolean
    created_at?: DateTimeFilter<"SpendingLimit"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    target_user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "owner_id_target_user_id_category">

  export type SpendingLimitOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    target_user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    alert_at_percent?: SortOrder
    is_hard_limit?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: SpendingLimitCountOrderByAggregateInput
    _avg?: SpendingLimitAvgOrderByAggregateInput
    _max?: SpendingLimitMaxOrderByAggregateInput
    _min?: SpendingLimitMinOrderByAggregateInput
    _sum?: SpendingLimitSumOrderByAggregateInput
  }

  export type SpendingLimitScalarWhereWithAggregatesInput = {
    AND?: SpendingLimitScalarWhereWithAggregatesInput | SpendingLimitScalarWhereWithAggregatesInput[]
    OR?: SpendingLimitScalarWhereWithAggregatesInput[]
    NOT?: SpendingLimitScalarWhereWithAggregatesInput | SpendingLimitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpendingLimit"> | number
    owner_id?: IntWithAggregatesFilter<"SpendingLimit"> | number
    target_user_id?: IntWithAggregatesFilter<"SpendingLimit"> | number
    category?: StringWithAggregatesFilter<"SpendingLimit"> | string
    monthly_limit?: DecimalWithAggregatesFilter<"SpendingLimit"> | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntWithAggregatesFilter<"SpendingLimit"> | number
    is_hard_limit?: BoolWithAggregatesFilter<"SpendingLimit"> | boolean
    is_active?: BoolWithAggregatesFilter<"SpendingLimit"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"SpendingLimit"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    user_id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    sub_category?: StringNullableFilter<"Transaction"> | string | null
    merchant?: StringNullableFilter<"Transaction"> | string | null
    transaction_date?: DateTimeFilter<"Transaction"> | Date | string
    source?: StringFilter<"Transaction"> | string
    is_recurring?: BoolFilter<"Transaction"> | boolean
    ai_confidence?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFilter<"Transaction"> | boolean
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    sub_category?: SortOrderInput | SortOrder
    merchant?: SortOrderInput | SortOrder
    transaction_date?: SortOrder
    source?: SortOrder
    is_recurring?: SortOrder
    ai_confidence?: SortOrderInput | SortOrder
    user_corrected?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    user_id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    sub_category?: StringNullableFilter<"Transaction"> | string | null
    merchant?: StringNullableFilter<"Transaction"> | string | null
    transaction_date?: DateTimeFilter<"Transaction"> | Date | string
    source?: StringFilter<"Transaction"> | string
    is_recurring?: BoolFilter<"Transaction"> | boolean
    ai_confidence?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFilter<"Transaction"> | boolean
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    sub_category?: SortOrderInput | SortOrder
    merchant?: SortOrderInput | SortOrder
    transaction_date?: SortOrder
    source?: SortOrder
    is_recurring?: SortOrder
    ai_confidence?: SortOrderInput | SortOrder
    user_corrected?: SortOrder
    created_at?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    user_id?: IntWithAggregatesFilter<"Transaction"> | number
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringWithAggregatesFilter<"Transaction"> | string
    category?: StringWithAggregatesFilter<"Transaction"> | string
    sub_category?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    merchant?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    transaction_date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    source?: StringWithAggregatesFilter<"Transaction"> | string
    is_recurring?: BoolWithAggregatesFilter<"Transaction"> | boolean
    ai_confidence?: DecimalNullableWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolWithAggregatesFilter<"Transaction"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: IntFilter<"Budget"> | number
    user_id?: IntFilter<"Budget"> | number
    category?: StringFilter<"Budget"> | string
    monthly_limit?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    month?: DateTimeFilter<"Budget"> | Date | string
    alert_at_percent?: IntFilter<"Budget"> | number
    created_at?: DateTimeFilter<"Budget"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    month?: SortOrder
    alert_at_percent?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_category_month?: BudgetUser_idCategoryMonthCompoundUniqueInput
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    user_id?: IntFilter<"Budget"> | number
    category?: StringFilter<"Budget"> | string
    monthly_limit?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    month?: DateTimeFilter<"Budget"> | Date | string
    alert_at_percent?: IntFilter<"Budget"> | number
    created_at?: DateTimeFilter<"Budget"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id_category_month">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    month?: SortOrder
    alert_at_percent?: SortOrder
    created_at?: SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Budget"> | number
    user_id?: IntWithAggregatesFilter<"Budget"> | number
    category?: StringWithAggregatesFilter<"Budget"> | string
    monthly_limit?: DecimalWithAggregatesFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    month?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    alert_at_percent?: IntWithAggregatesFilter<"Budget"> | number
    created_at?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: IntFilter<"Goal"> | number
    user_id?: IntFilter<"Goal"> | number
    title?: StringFilter<"Goal"> | string
    target_amount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFilter<"Goal"> | Date | string
    status?: StringFilter<"Goal"> | string
    created_at?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    target_amount?: SortOrder
    saved_amount?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    user_id?: IntFilter<"Goal"> | number
    title?: StringFilter<"Goal"> | string
    target_amount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFilter<"Goal"> | Date | string
    status?: StringFilter<"Goal"> | string
    created_at?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    target_amount?: SortOrder
    saved_amount?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Goal"> | number
    user_id?: IntWithAggregatesFilter<"Goal"> | number
    title?: StringWithAggregatesFilter<"Goal"> | string
    target_amount?: DecimalWithAggregatesFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalWithAggregatesFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    status?: StringWithAggregatesFilter<"Goal"> | string
    created_at?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type MarketCacheWhereInput = {
    AND?: MarketCacheWhereInput | MarketCacheWhereInput[]
    OR?: MarketCacheWhereInput[]
    NOT?: MarketCacheWhereInput | MarketCacheWhereInput[]
    id?: IntFilter<"MarketCache"> | number
    asset_type?: StringFilter<"MarketCache"> | string
    ticker?: StringFilter<"MarketCache"> | string
    price_pkr?: DecimalFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string
    change_1d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_30d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_90d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_180d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_365d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    fetched_at?: DateTimeFilter<"MarketCache"> | Date | string
  }

  export type MarketCacheOrderByWithRelationInput = {
    id?: SortOrder
    asset_type?: SortOrder
    ticker?: SortOrder
    price_pkr?: SortOrder
    change_1d?: SortOrderInput | SortOrder
    change_30d?: SortOrderInput | SortOrder
    change_90d?: SortOrderInput | SortOrder
    change_180d?: SortOrderInput | SortOrder
    change_365d?: SortOrderInput | SortOrder
    fetched_at?: SortOrder
  }

  export type MarketCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    asset_type_ticker?: MarketCacheAsset_typeTickerCompoundUniqueInput
    AND?: MarketCacheWhereInput | MarketCacheWhereInput[]
    OR?: MarketCacheWhereInput[]
    NOT?: MarketCacheWhereInput | MarketCacheWhereInput[]
    asset_type?: StringFilter<"MarketCache"> | string
    ticker?: StringFilter<"MarketCache"> | string
    price_pkr?: DecimalFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string
    change_1d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_30d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_90d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_180d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_365d?: DecimalNullableFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    fetched_at?: DateTimeFilter<"MarketCache"> | Date | string
  }, "id" | "asset_type_ticker">

  export type MarketCacheOrderByWithAggregationInput = {
    id?: SortOrder
    asset_type?: SortOrder
    ticker?: SortOrder
    price_pkr?: SortOrder
    change_1d?: SortOrderInput | SortOrder
    change_30d?: SortOrderInput | SortOrder
    change_90d?: SortOrderInput | SortOrder
    change_180d?: SortOrderInput | SortOrder
    change_365d?: SortOrderInput | SortOrder
    fetched_at?: SortOrder
    _count?: MarketCacheCountOrderByAggregateInput
    _avg?: MarketCacheAvgOrderByAggregateInput
    _max?: MarketCacheMaxOrderByAggregateInput
    _min?: MarketCacheMinOrderByAggregateInput
    _sum?: MarketCacheSumOrderByAggregateInput
  }

  export type MarketCacheScalarWhereWithAggregatesInput = {
    AND?: MarketCacheScalarWhereWithAggregatesInput | MarketCacheScalarWhereWithAggregatesInput[]
    OR?: MarketCacheScalarWhereWithAggregatesInput[]
    NOT?: MarketCacheScalarWhereWithAggregatesInput | MarketCacheScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarketCache"> | number
    asset_type?: StringWithAggregatesFilter<"MarketCache"> | string
    ticker?: StringWithAggregatesFilter<"MarketCache"> | string
    price_pkr?: DecimalWithAggregatesFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string
    change_1d?: DecimalNullableWithAggregatesFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_30d?: DecimalNullableWithAggregatesFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_90d?: DecimalNullableWithAggregatesFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_180d?: DecimalNullableWithAggregatesFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    change_365d?: DecimalNullableWithAggregatesFilter<"MarketCache"> | Decimal | DecimalJsLike | number | string | null
    fetched_at?: DateTimeWithAggregatesFilter<"MarketCache"> | Date | string
  }

  export type UserHoldingWhereInput = {
    AND?: UserHoldingWhereInput | UserHoldingWhereInput[]
    OR?: UserHoldingWhereInput[]
    NOT?: UserHoldingWhereInput | UserHoldingWhereInput[]
    id?: IntFilter<"UserHolding"> | number
    user_id?: IntFilter<"UserHolding"> | number
    ticker?: StringFilter<"UserHolding"> | string
    display_name?: StringFilter<"UserHolding"> | string
    asset_type?: StringFilter<"UserHolding"> | string
    quantity?: DecimalFilter<"UserHolding"> | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFilter<"UserHolding"> | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFilter<"UserHolding"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserHoldingOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    asset_type?: SortOrder
    quantity?: SortOrder
    avg_cost_pkr?: SortOrder
    acquired_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserHoldingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_ticker?: UserHoldingUser_idTickerCompoundUniqueInput
    AND?: UserHoldingWhereInput | UserHoldingWhereInput[]
    OR?: UserHoldingWhereInput[]
    NOT?: UserHoldingWhereInput | UserHoldingWhereInput[]
    user_id?: IntFilter<"UserHolding"> | number
    ticker?: StringFilter<"UserHolding"> | string
    display_name?: StringFilter<"UserHolding"> | string
    asset_type?: StringFilter<"UserHolding"> | string
    quantity?: DecimalFilter<"UserHolding"> | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFilter<"UserHolding"> | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFilter<"UserHolding"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id_ticker">

  export type UserHoldingOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    asset_type?: SortOrder
    quantity?: SortOrder
    avg_cost_pkr?: SortOrder
    acquired_at?: SortOrder
    _count?: UserHoldingCountOrderByAggregateInput
    _avg?: UserHoldingAvgOrderByAggregateInput
    _max?: UserHoldingMaxOrderByAggregateInput
    _min?: UserHoldingMinOrderByAggregateInput
    _sum?: UserHoldingSumOrderByAggregateInput
  }

  export type UserHoldingScalarWhereWithAggregatesInput = {
    AND?: UserHoldingScalarWhereWithAggregatesInput | UserHoldingScalarWhereWithAggregatesInput[]
    OR?: UserHoldingScalarWhereWithAggregatesInput[]
    NOT?: UserHoldingScalarWhereWithAggregatesInput | UserHoldingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserHolding"> | number
    user_id?: IntWithAggregatesFilter<"UserHolding"> | number
    ticker?: StringWithAggregatesFilter<"UserHolding"> | string
    display_name?: StringWithAggregatesFilter<"UserHolding"> | string
    asset_type?: StringWithAggregatesFilter<"UserHolding"> | string
    quantity?: DecimalWithAggregatesFilter<"UserHolding"> | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalWithAggregatesFilter<"UserHolding"> | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeWithAggregatesFilter<"UserHolding"> | Date | string
  }

  export type StockTradeWhereInput = {
    AND?: StockTradeWhereInput | StockTradeWhereInput[]
    OR?: StockTradeWhereInput[]
    NOT?: StockTradeWhereInput | StockTradeWhereInput[]
    id?: IntFilter<"StockTrade"> | number
    user_id?: IntFilter<"StockTrade"> | number
    ticker?: StringFilter<"StockTrade"> | string
    display_name?: StringFilter<"StockTrade"> | string
    side?: StringFilter<"StockTrade"> | string
    quantity?: DecimalFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"StockTrade"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type StockTradeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    side?: SortOrder
    quantity?: SortOrder
    price_pkr?: SortOrder
    total_pkr?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StockTradeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockTradeWhereInput | StockTradeWhereInput[]
    OR?: StockTradeWhereInput[]
    NOT?: StockTradeWhereInput | StockTradeWhereInput[]
    user_id?: IntFilter<"StockTrade"> | number
    ticker?: StringFilter<"StockTrade"> | string
    display_name?: StringFilter<"StockTrade"> | string
    side?: StringFilter<"StockTrade"> | string
    quantity?: DecimalFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"StockTrade"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type StockTradeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    side?: SortOrder
    quantity?: SortOrder
    price_pkr?: SortOrder
    total_pkr?: SortOrder
    created_at?: SortOrder
    _count?: StockTradeCountOrderByAggregateInput
    _avg?: StockTradeAvgOrderByAggregateInput
    _max?: StockTradeMaxOrderByAggregateInput
    _min?: StockTradeMinOrderByAggregateInput
    _sum?: StockTradeSumOrderByAggregateInput
  }

  export type StockTradeScalarWhereWithAggregatesInput = {
    AND?: StockTradeScalarWhereWithAggregatesInput | StockTradeScalarWhereWithAggregatesInput[]
    OR?: StockTradeScalarWhereWithAggregatesInput[]
    NOT?: StockTradeScalarWhereWithAggregatesInput | StockTradeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockTrade"> | number
    user_id?: IntWithAggregatesFilter<"StockTrade"> | number
    ticker?: StringWithAggregatesFilter<"StockTrade"> | string
    display_name?: StringWithAggregatesFilter<"StockTrade"> | string
    side?: StringWithAggregatesFilter<"StockTrade"> | string
    quantity?: DecimalWithAggregatesFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalWithAggregatesFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalWithAggregatesFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"StockTrade"> | Date | string
  }

  export type AiInsightWhereInput = {
    AND?: AiInsightWhereInput | AiInsightWhereInput[]
    OR?: AiInsightWhereInput[]
    NOT?: AiInsightWhereInput | AiInsightWhereInput[]
    id?: IntFilter<"AiInsight"> | number
    user_id?: IntFilter<"AiInsight"> | number
    type?: StringFilter<"AiInsight"> | string
    content_en?: StringFilter<"AiInsight"> | string
    content_ur?: StringNullableFilter<"AiInsight"> | string | null
    is_read?: BoolFilter<"AiInsight"> | boolean
    rating?: StringNullableFilter<"AiInsight"> | string | null
    generated_at?: DateTimeFilter<"AiInsight"> | Date | string
    valid_until?: DateTimeNullableFilter<"AiInsight"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AiInsightOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    content_en?: SortOrder
    content_ur?: SortOrderInput | SortOrder
    is_read?: SortOrder
    rating?: SortOrderInput | SortOrder
    generated_at?: SortOrder
    valid_until?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AiInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AiInsightWhereInput | AiInsightWhereInput[]
    OR?: AiInsightWhereInput[]
    NOT?: AiInsightWhereInput | AiInsightWhereInput[]
    user_id?: IntFilter<"AiInsight"> | number
    type?: StringFilter<"AiInsight"> | string
    content_en?: StringFilter<"AiInsight"> | string
    content_ur?: StringNullableFilter<"AiInsight"> | string | null
    is_read?: BoolFilter<"AiInsight"> | boolean
    rating?: StringNullableFilter<"AiInsight"> | string | null
    generated_at?: DateTimeFilter<"AiInsight"> | Date | string
    valid_until?: DateTimeNullableFilter<"AiInsight"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AiInsightOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    content_en?: SortOrder
    content_ur?: SortOrderInput | SortOrder
    is_read?: SortOrder
    rating?: SortOrderInput | SortOrder
    generated_at?: SortOrder
    valid_until?: SortOrderInput | SortOrder
    _count?: AiInsightCountOrderByAggregateInput
    _avg?: AiInsightAvgOrderByAggregateInput
    _max?: AiInsightMaxOrderByAggregateInput
    _min?: AiInsightMinOrderByAggregateInput
    _sum?: AiInsightSumOrderByAggregateInput
  }

  export type AiInsightScalarWhereWithAggregatesInput = {
    AND?: AiInsightScalarWhereWithAggregatesInput | AiInsightScalarWhereWithAggregatesInput[]
    OR?: AiInsightScalarWhereWithAggregatesInput[]
    NOT?: AiInsightScalarWhereWithAggregatesInput | AiInsightScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AiInsight"> | number
    user_id?: IntWithAggregatesFilter<"AiInsight"> | number
    type?: StringWithAggregatesFilter<"AiInsight"> | string
    content_en?: StringWithAggregatesFilter<"AiInsight"> | string
    content_ur?: StringNullableWithAggregatesFilter<"AiInsight"> | string | null
    is_read?: BoolWithAggregatesFilter<"AiInsight"> | boolean
    rating?: StringNullableWithAggregatesFilter<"AiInsight"> | string | null
    generated_at?: DateTimeWithAggregatesFilter<"AiInsight"> | Date | string
    valid_until?: DateTimeNullableWithAggregatesFilter<"AiInsight"> | Date | string | null
  }

  export type ReportCardWhereInput = {
    AND?: ReportCardWhereInput | ReportCardWhereInput[]
    OR?: ReportCardWhereInput[]
    NOT?: ReportCardWhereInput | ReportCardWhereInput[]
    id?: IntFilter<"ReportCard"> | number
    user_id?: IntFilter<"ReportCard"> | number
    month?: DateTimeFilter<"ReportCard"> | Date | string
    overall_grade?: StringFilter<"ReportCard"> | string
    budget_score?: IntFilter<"ReportCard"> | number
    savings_score?: IntFilter<"ReportCard"> | number
    trend_score?: IntFilter<"ReportCard"> | number
    summary_en?: StringFilter<"ReportCard"> | string
    summary_ur?: StringNullableFilter<"ReportCard"> | string | null
    created_at?: DateTimeFilter<"ReportCard"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReportCardOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    month?: SortOrder
    overall_grade?: SortOrder
    budget_score?: SortOrder
    savings_score?: SortOrder
    trend_score?: SortOrder
    summary_en?: SortOrder
    summary_ur?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReportCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_month?: ReportCardUser_idMonthCompoundUniqueInput
    AND?: ReportCardWhereInput | ReportCardWhereInput[]
    OR?: ReportCardWhereInput[]
    NOT?: ReportCardWhereInput | ReportCardWhereInput[]
    user_id?: IntFilter<"ReportCard"> | number
    month?: DateTimeFilter<"ReportCard"> | Date | string
    overall_grade?: StringFilter<"ReportCard"> | string
    budget_score?: IntFilter<"ReportCard"> | number
    savings_score?: IntFilter<"ReportCard"> | number
    trend_score?: IntFilter<"ReportCard"> | number
    summary_en?: StringFilter<"ReportCard"> | string
    summary_ur?: StringNullableFilter<"ReportCard"> | string | null
    created_at?: DateTimeFilter<"ReportCard"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id_month">

  export type ReportCardOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    month?: SortOrder
    overall_grade?: SortOrder
    budget_score?: SortOrder
    savings_score?: SortOrder
    trend_score?: SortOrder
    summary_en?: SortOrder
    summary_ur?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ReportCardCountOrderByAggregateInput
    _avg?: ReportCardAvgOrderByAggregateInput
    _max?: ReportCardMaxOrderByAggregateInput
    _min?: ReportCardMinOrderByAggregateInput
    _sum?: ReportCardSumOrderByAggregateInput
  }

  export type ReportCardScalarWhereWithAggregatesInput = {
    AND?: ReportCardScalarWhereWithAggregatesInput | ReportCardScalarWhereWithAggregatesInput[]
    OR?: ReportCardScalarWhereWithAggregatesInput[]
    NOT?: ReportCardScalarWhereWithAggregatesInput | ReportCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReportCard"> | number
    user_id?: IntWithAggregatesFilter<"ReportCard"> | number
    month?: DateTimeWithAggregatesFilter<"ReportCard"> | Date | string
    overall_grade?: StringWithAggregatesFilter<"ReportCard"> | string
    budget_score?: IntWithAggregatesFilter<"ReportCard"> | number
    savings_score?: IntWithAggregatesFilter<"ReportCard"> | number
    trend_score?: IntWithAggregatesFilter<"ReportCard"> | number
    summary_en?: StringWithAggregatesFilter<"ReportCard"> | string
    summary_ur?: StringNullableWithAggregatesFilter<"ReportCard"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ReportCard"> | Date | string
  }

  export type OfferPartnerWhereInput = {
    AND?: OfferPartnerWhereInput | OfferPartnerWhereInput[]
    OR?: OfferPartnerWhereInput[]
    NOT?: OfferPartnerWhereInput | OfferPartnerWhereInput[]
    id?: IntFilter<"OfferPartner"> | number
    company_name?: StringFilter<"OfferPartner"> | string
    category?: StringFilter<"OfferPartner"> | string
    billing_model?: StringFilter<"OfferPartner"> | string
    rate_pkr?: DecimalFilter<"OfferPartner"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"OfferPartner"> | boolean
    created_at?: DateTimeFilter<"OfferPartner"> | Date | string
    offers?: OfferListRelationFilter
  }

  export type OfferPartnerOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrder
    category?: SortOrder
    billing_model?: SortOrder
    rate_pkr?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    offers?: OfferOrderByRelationAggregateInput
  }

  export type OfferPartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OfferPartnerWhereInput | OfferPartnerWhereInput[]
    OR?: OfferPartnerWhereInput[]
    NOT?: OfferPartnerWhereInput | OfferPartnerWhereInput[]
    company_name?: StringFilter<"OfferPartner"> | string
    category?: StringFilter<"OfferPartner"> | string
    billing_model?: StringFilter<"OfferPartner"> | string
    rate_pkr?: DecimalFilter<"OfferPartner"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"OfferPartner"> | boolean
    created_at?: DateTimeFilter<"OfferPartner"> | Date | string
    offers?: OfferListRelationFilter
  }, "id">

  export type OfferPartnerOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrder
    category?: SortOrder
    billing_model?: SortOrder
    rate_pkr?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: OfferPartnerCountOrderByAggregateInput
    _avg?: OfferPartnerAvgOrderByAggregateInput
    _max?: OfferPartnerMaxOrderByAggregateInput
    _min?: OfferPartnerMinOrderByAggregateInput
    _sum?: OfferPartnerSumOrderByAggregateInput
  }

  export type OfferPartnerScalarWhereWithAggregatesInput = {
    AND?: OfferPartnerScalarWhereWithAggregatesInput | OfferPartnerScalarWhereWithAggregatesInput[]
    OR?: OfferPartnerScalarWhereWithAggregatesInput[]
    NOT?: OfferPartnerScalarWhereWithAggregatesInput | OfferPartnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OfferPartner"> | number
    company_name?: StringWithAggregatesFilter<"OfferPartner"> | string
    category?: StringWithAggregatesFilter<"OfferPartner"> | string
    billing_model?: StringWithAggregatesFilter<"OfferPartner"> | string
    rate_pkr?: DecimalWithAggregatesFilter<"OfferPartner"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolWithAggregatesFilter<"OfferPartner"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"OfferPartner"> | Date | string
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: IntFilter<"Offer"> | number
    partner_id?: IntFilter<"Offer"> | number
    title?: StringFilter<"Offer"> | string
    title_ur?: StringNullableFilter<"Offer"> | string | null
    description?: StringFilter<"Offer"> | string
    target_category?: StringFilter<"Offer"> | string
    min_monthly_spend?: DecimalFilter<"Offer"> | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFilter<"Offer"> | string
    promo_code?: StringNullableFilter<"Offer"> | string | null
    redemption_type?: StringFilter<"Offer"> | string
    deeplink_url?: StringNullableFilter<"Offer"> | string | null
    valid_from?: DateTimeFilter<"Offer"> | Date | string
    valid_until?: DateTimeFilter<"Offer"> | Date | string
    max_redemptions?: IntFilter<"Offer"> | number
    current_redemptions?: IntFilter<"Offer"> | number
    is_active?: BoolFilter<"Offer"> | boolean
    created_at?: DateTimeFilter<"Offer"> | Date | string
    partner?: XOR<OfferPartnerRelationFilter, OfferPartnerWhereInput>
    events?: UserOfferEventListRelationFilter
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    partner_id?: SortOrder
    title?: SortOrder
    title_ur?: SortOrderInput | SortOrder
    description?: SortOrder
    target_category?: SortOrder
    min_monthly_spend?: SortOrder
    trigger_event?: SortOrder
    promo_code?: SortOrderInput | SortOrder
    redemption_type?: SortOrder
    deeplink_url?: SortOrderInput | SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    max_redemptions?: SortOrder
    current_redemptions?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    partner?: OfferPartnerOrderByWithRelationInput
    events?: UserOfferEventOrderByRelationAggregateInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    partner_id?: IntFilter<"Offer"> | number
    title?: StringFilter<"Offer"> | string
    title_ur?: StringNullableFilter<"Offer"> | string | null
    description?: StringFilter<"Offer"> | string
    target_category?: StringFilter<"Offer"> | string
    min_monthly_spend?: DecimalFilter<"Offer"> | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFilter<"Offer"> | string
    promo_code?: StringNullableFilter<"Offer"> | string | null
    redemption_type?: StringFilter<"Offer"> | string
    deeplink_url?: StringNullableFilter<"Offer"> | string | null
    valid_from?: DateTimeFilter<"Offer"> | Date | string
    valid_until?: DateTimeFilter<"Offer"> | Date | string
    max_redemptions?: IntFilter<"Offer"> | number
    current_redemptions?: IntFilter<"Offer"> | number
    is_active?: BoolFilter<"Offer"> | boolean
    created_at?: DateTimeFilter<"Offer"> | Date | string
    partner?: XOR<OfferPartnerRelationFilter, OfferPartnerWhereInput>
    events?: UserOfferEventListRelationFilter
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    partner_id?: SortOrder
    title?: SortOrder
    title_ur?: SortOrderInput | SortOrder
    description?: SortOrder
    target_category?: SortOrder
    min_monthly_spend?: SortOrder
    trigger_event?: SortOrder
    promo_code?: SortOrderInput | SortOrder
    redemption_type?: SortOrder
    deeplink_url?: SortOrderInput | SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    max_redemptions?: SortOrder
    current_redemptions?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Offer"> | number
    partner_id?: IntWithAggregatesFilter<"Offer"> | number
    title?: StringWithAggregatesFilter<"Offer"> | string
    title_ur?: StringNullableWithAggregatesFilter<"Offer"> | string | null
    description?: StringWithAggregatesFilter<"Offer"> | string
    target_category?: StringWithAggregatesFilter<"Offer"> | string
    min_monthly_spend?: DecimalWithAggregatesFilter<"Offer"> | Decimal | DecimalJsLike | number | string
    trigger_event?: StringWithAggregatesFilter<"Offer"> | string
    promo_code?: StringNullableWithAggregatesFilter<"Offer"> | string | null
    redemption_type?: StringWithAggregatesFilter<"Offer"> | string
    deeplink_url?: StringNullableWithAggregatesFilter<"Offer"> | string | null
    valid_from?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    valid_until?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    max_redemptions?: IntWithAggregatesFilter<"Offer"> | number
    current_redemptions?: IntWithAggregatesFilter<"Offer"> | number
    is_active?: BoolWithAggregatesFilter<"Offer"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
  }

  export type UserOfferEventWhereInput = {
    AND?: UserOfferEventWhereInput | UserOfferEventWhereInput[]
    OR?: UserOfferEventWhereInput[]
    NOT?: UserOfferEventWhereInput | UserOfferEventWhereInput[]
    id?: IntFilter<"UserOfferEvent"> | number
    user_id?: IntFilter<"UserOfferEvent"> | number
    offer_id?: IntFilter<"UserOfferEvent"> | number
    event_type?: StringFilter<"UserOfferEvent"> | string
    spend_amount?: DecimalNullableFilter<"UserOfferEvent"> | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFilter<"UserOfferEvent"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    offer?: XOR<OfferRelationFilter, OfferWhereInput>
  }

  export type UserOfferEventOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_id?: SortOrder
    event_type?: SortOrder
    spend_amount?: SortOrderInput | SortOrder
    event_at?: SortOrder
    user?: UserOrderByWithRelationInput
    offer?: OfferOrderByWithRelationInput
  }

  export type UserOfferEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserOfferEventWhereInput | UserOfferEventWhereInput[]
    OR?: UserOfferEventWhereInput[]
    NOT?: UserOfferEventWhereInput | UserOfferEventWhereInput[]
    user_id?: IntFilter<"UserOfferEvent"> | number
    offer_id?: IntFilter<"UserOfferEvent"> | number
    event_type?: StringFilter<"UserOfferEvent"> | string
    spend_amount?: DecimalNullableFilter<"UserOfferEvent"> | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFilter<"UserOfferEvent"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    offer?: XOR<OfferRelationFilter, OfferWhereInput>
  }, "id">

  export type UserOfferEventOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_id?: SortOrder
    event_type?: SortOrder
    spend_amount?: SortOrderInput | SortOrder
    event_at?: SortOrder
    _count?: UserOfferEventCountOrderByAggregateInput
    _avg?: UserOfferEventAvgOrderByAggregateInput
    _max?: UserOfferEventMaxOrderByAggregateInput
    _min?: UserOfferEventMinOrderByAggregateInput
    _sum?: UserOfferEventSumOrderByAggregateInput
  }

  export type UserOfferEventScalarWhereWithAggregatesInput = {
    AND?: UserOfferEventScalarWhereWithAggregatesInput | UserOfferEventScalarWhereWithAggregatesInput[]
    OR?: UserOfferEventScalarWhereWithAggregatesInput[]
    NOT?: UserOfferEventScalarWhereWithAggregatesInput | UserOfferEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserOfferEvent"> | number
    user_id?: IntWithAggregatesFilter<"UserOfferEvent"> | number
    offer_id?: IntWithAggregatesFilter<"UserOfferEvent"> | number
    event_type?: StringWithAggregatesFilter<"UserOfferEvent"> | string
    spend_amount?: DecimalNullableWithAggregatesFilter<"UserOfferEvent"> | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeWithAggregatesFilter<"UserOfferEvent"> | Date | string
  }

  export type UserCreateInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
  }

  export type UserUpdateManyMutationInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SpendingLimitCreateInput = {
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    alert_at_percent?: number
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutLimits_setInput
    target_user: UserCreateNestedOneWithoutLimits_receivedInput
  }

  export type SpendingLimitUncheckedCreateInput = {
    id?: number
    owner_id: number
    target_user_id: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    alert_at_percent?: number
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: Date | string
  }

  export type SpendingLimitUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLimits_setNestedInput
    target_user?: UserUpdateOneRequiredWithoutLimits_receivedNestedInput
  }

  export type SpendingLimitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    target_user_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendingLimitCreateManyInput = {
    id?: number
    owner_id: number
    target_user_id: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    alert_at_percent?: number
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: Date | string
  }

  export type SpendingLimitUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendingLimitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    target_user_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category?: string
    sub_category?: string | null
    merchant?: string | null
    transaction_date: Date | string
    source?: string
    is_recurring?: boolean
    ai_confidence?: Decimal | DecimalJsLike | number | string | null
    user_corrected?: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category?: string
    sub_category?: string | null
    merchant?: string | null
    transaction_date: Date | string
    source?: string
    is_recurring?: boolean
    ai_confidence?: Decimal | DecimalJsLike | number | string | null
    user_corrected?: boolean
    created_at?: Date | string
  }

  export type TransactionUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sub_category?: NullableStringFieldUpdateOperationsInput | string | null
    merchant?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    ai_confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sub_category?: NullableStringFieldUpdateOperationsInput | string | null
    merchant?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    ai_confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category?: string
    sub_category?: string | null
    merchant?: string | null
    transaction_date: Date | string
    source?: string
    is_recurring?: boolean
    ai_confidence?: Decimal | DecimalJsLike | number | string | null
    user_corrected?: boolean
    created_at?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sub_category?: NullableStringFieldUpdateOperationsInput | string | null
    merchant?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    ai_confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sub_category?: NullableStringFieldUpdateOperationsInput | string | null
    merchant?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    ai_confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCreateInput = {
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    month: Date | string
    alert_at_percent?: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateInput = {
    id?: number
    user_id: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    month: Date | string
    alert_at_percent?: number
    created_at?: Date | string
  }

  export type BudgetUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCreateManyInput = {
    id?: number
    user_id: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    month: Date | string
    alert_at_percent?: number
    created_at?: Date | string
  }

  export type BudgetUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    title: string
    target_amount: Decimal | DecimalJsLike | number | string
    saved_amount?: Decimal | DecimalJsLike | number | string
    deadline: Date | string
    status?: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    target_amount: Decimal | DecimalJsLike | number | string
    saved_amount?: Decimal | DecimalJsLike | number | string
    deadline: Date | string
    status?: string
    created_at?: Date | string
  }

  export type GoalUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyInput = {
    id?: number
    user_id: number
    title: string
    target_amount: Decimal | DecimalJsLike | number | string
    saved_amount?: Decimal | DecimalJsLike | number | string
    deadline: Date | string
    status?: string
    created_at?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCacheCreateInput = {
    asset_type: string
    ticker: string
    price_pkr: Decimal | DecimalJsLike | number | string
    change_1d?: Decimal | DecimalJsLike | number | string | null
    change_30d?: Decimal | DecimalJsLike | number | string | null
    change_90d?: Decimal | DecimalJsLike | number | string | null
    change_180d?: Decimal | DecimalJsLike | number | string | null
    change_365d?: Decimal | DecimalJsLike | number | string | null
    fetched_at?: Date | string
  }

  export type MarketCacheUncheckedCreateInput = {
    id?: number
    asset_type: string
    ticker: string
    price_pkr: Decimal | DecimalJsLike | number | string
    change_1d?: Decimal | DecimalJsLike | number | string | null
    change_30d?: Decimal | DecimalJsLike | number | string | null
    change_90d?: Decimal | DecimalJsLike | number | string | null
    change_180d?: Decimal | DecimalJsLike | number | string | null
    change_365d?: Decimal | DecimalJsLike | number | string | null
    fetched_at?: Date | string
  }

  export type MarketCacheUpdateInput = {
    asset_type?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change_1d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_30d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_90d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_180d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_365d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCacheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset_type?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change_1d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_30d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_90d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_180d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_365d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCacheCreateManyInput = {
    id?: number
    asset_type: string
    ticker: string
    price_pkr: Decimal | DecimalJsLike | number | string
    change_1d?: Decimal | DecimalJsLike | number | string | null
    change_30d?: Decimal | DecimalJsLike | number | string | null
    change_90d?: Decimal | DecimalJsLike | number | string | null
    change_180d?: Decimal | DecimalJsLike | number | string | null
    change_365d?: Decimal | DecimalJsLike | number | string | null
    fetched_at?: Date | string
  }

  export type MarketCacheUpdateManyMutationInput = {
    asset_type?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change_1d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_30d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_90d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_180d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_365d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCacheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset_type?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change_1d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_30d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_90d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_180d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    change_365d?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHoldingCreateInput = {
    ticker: string
    display_name: string
    asset_type?: string
    quantity: Decimal | DecimalJsLike | number | string
    avg_cost_pkr: Decimal | DecimalJsLike | number | string
    acquired_at?: Date | string
    user: UserCreateNestedOneWithoutHoldingsInput
  }

  export type UserHoldingUncheckedCreateInput = {
    id?: number
    user_id: number
    ticker: string
    display_name: string
    asset_type?: string
    quantity: Decimal | DecimalJsLike | number | string
    avg_cost_pkr: Decimal | DecimalJsLike | number | string
    acquired_at?: Date | string
  }

  export type UserHoldingUpdateInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type UserHoldingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHoldingCreateManyInput = {
    id?: number
    user_id: number
    ticker: string
    display_name: string
    asset_type?: string
    quantity: Decimal | DecimalJsLike | number | string
    avg_cost_pkr: Decimal | DecimalJsLike | number | string
    acquired_at?: Date | string
  }

  export type UserHoldingUpdateManyMutationInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHoldingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockTradeCreateInput = {
    ticker: string
    display_name: string
    side: string
    quantity: Decimal | DecimalJsLike | number | string
    price_pkr: Decimal | DecimalJsLike | number | string
    total_pkr: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutStock_tradesInput
  }

  export type StockTradeUncheckedCreateInput = {
    id?: number
    user_id: number
    ticker: string
    display_name: string
    side: string
    quantity: Decimal | DecimalJsLike | number | string
    price_pkr: Decimal | DecimalJsLike | number | string
    total_pkr: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type StockTradeUpdateInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStock_tradesNestedInput
  }

  export type StockTradeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockTradeCreateManyInput = {
    id?: number
    user_id: number
    ticker: string
    display_name: string
    side: string
    quantity: Decimal | DecimalJsLike | number | string
    price_pkr: Decimal | DecimalJsLike | number | string
    total_pkr: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type StockTradeUpdateManyMutationInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockTradeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInsightCreateInput = {
    type: string
    content_en: string
    content_ur?: string | null
    is_read?: boolean
    rating?: string | null
    generated_at?: Date | string
    valid_until?: Date | string | null
    user: UserCreateNestedOneWithoutAi_insightsInput
  }

  export type AiInsightUncheckedCreateInput = {
    id?: number
    user_id: number
    type: string
    content_en: string
    content_ur?: string | null
    is_read?: boolean
    rating?: string | null
    generated_at?: Date | string
    valid_until?: Date | string | null
  }

  export type AiInsightUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_ur?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAi_insightsNestedInput
  }

  export type AiInsightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_ur?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AiInsightCreateManyInput = {
    id?: number
    user_id: number
    type: string
    content_en: string
    content_ur?: string | null
    is_read?: boolean
    rating?: string | null
    generated_at?: Date | string
    valid_until?: Date | string | null
  }

  export type AiInsightUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_ur?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AiInsightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_ur?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCardCreateInput = {
    month: Date | string
    overall_grade: string
    budget_score: number
    savings_score: number
    trend_score: number
    summary_en: string
    summary_ur?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutReport_cardsInput
  }

  export type ReportCardUncheckedCreateInput = {
    id?: number
    user_id: number
    month: Date | string
    overall_grade: string
    budget_score: number
    savings_score: number
    trend_score: number
    summary_en: string
    summary_ur?: string | null
    created_at?: Date | string
  }

  export type ReportCardUpdateInput = {
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    overall_grade?: StringFieldUpdateOperationsInput | string
    budget_score?: IntFieldUpdateOperationsInput | number
    savings_score?: IntFieldUpdateOperationsInput | number
    trend_score?: IntFieldUpdateOperationsInput | number
    summary_en?: StringFieldUpdateOperationsInput | string
    summary_ur?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReport_cardsNestedInput
  }

  export type ReportCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    overall_grade?: StringFieldUpdateOperationsInput | string
    budget_score?: IntFieldUpdateOperationsInput | number
    savings_score?: IntFieldUpdateOperationsInput | number
    trend_score?: IntFieldUpdateOperationsInput | number
    summary_en?: StringFieldUpdateOperationsInput | string
    summary_ur?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCardCreateManyInput = {
    id?: number
    user_id: number
    month: Date | string
    overall_grade: string
    budget_score: number
    savings_score: number
    trend_score: number
    summary_en: string
    summary_ur?: string | null
    created_at?: Date | string
  }

  export type ReportCardUpdateManyMutationInput = {
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    overall_grade?: StringFieldUpdateOperationsInput | string
    budget_score?: IntFieldUpdateOperationsInput | number
    savings_score?: IntFieldUpdateOperationsInput | number
    trend_score?: IntFieldUpdateOperationsInput | number
    summary_en?: StringFieldUpdateOperationsInput | string
    summary_ur?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    overall_grade?: StringFieldUpdateOperationsInput | string
    budget_score?: IntFieldUpdateOperationsInput | number
    savings_score?: IntFieldUpdateOperationsInput | number
    trend_score?: IntFieldUpdateOperationsInput | number
    summary_en?: StringFieldUpdateOperationsInput | string
    summary_ur?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferPartnerCreateInput = {
    company_name: string
    category: string
    billing_model: string
    rate_pkr: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    offers?: OfferCreateNestedManyWithoutPartnerInput
  }

  export type OfferPartnerUncheckedCreateInput = {
    id?: number
    company_name: string
    category: string
    billing_model: string
    rate_pkr: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type OfferPartnerUpdateInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    billing_model?: StringFieldUpdateOperationsInput | string
    rate_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutPartnerNestedInput
  }

  export type OfferPartnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    billing_model?: StringFieldUpdateOperationsInput | string
    rate_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type OfferPartnerCreateManyInput = {
    id?: number
    company_name: string
    category: string
    billing_model: string
    rate_pkr: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
  }

  export type OfferPartnerUpdateManyMutationInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    billing_model?: StringFieldUpdateOperationsInput | string
    rate_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferPartnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    billing_model?: StringFieldUpdateOperationsInput | string
    rate_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateInput = {
    title: string
    title_ur?: string | null
    description: string
    target_category: string
    min_monthly_spend: Decimal | DecimalJsLike | number | string
    trigger_event: string
    promo_code?: string | null
    redemption_type?: string
    deeplink_url?: string | null
    valid_from: Date | string
    valid_until: Date | string
    max_redemptions?: number
    current_redemptions?: number
    is_active?: boolean
    created_at?: Date | string
    partner: OfferPartnerCreateNestedOneWithoutOffersInput
    events?: UserOfferEventCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateInput = {
    id?: number
    partner_id: number
    title: string
    title_ur?: string | null
    description: string
    target_category: string
    min_monthly_spend: Decimal | DecimalJsLike | number | string
    trigger_event: string
    promo_code?: string | null
    redemption_type?: string
    deeplink_url?: string | null
    valid_from: Date | string
    valid_until: Date | string
    max_redemptions?: number
    current_redemptions?: number
    is_active?: boolean
    created_at?: Date | string
    events?: UserOfferEventUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    title_ur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    target_category?: StringFieldUpdateOperationsInput | string
    min_monthly_spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    redemption_type?: StringFieldUpdateOperationsInput | string
    deeplink_url?: NullableStringFieldUpdateOperationsInput | string | null
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    max_redemptions?: IntFieldUpdateOperationsInput | number
    current_redemptions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: OfferPartnerUpdateOneRequiredWithoutOffersNestedInput
    events?: UserOfferEventUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_ur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    target_category?: StringFieldUpdateOperationsInput | string
    min_monthly_spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    redemption_type?: StringFieldUpdateOperationsInput | string
    deeplink_url?: NullableStringFieldUpdateOperationsInput | string | null
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    max_redemptions?: IntFieldUpdateOperationsInput | number
    current_redemptions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: UserOfferEventUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferCreateManyInput = {
    id?: number
    partner_id: number
    title: string
    title_ur?: string | null
    description: string
    target_category: string
    min_monthly_spend: Decimal | DecimalJsLike | number | string
    trigger_event: string
    promo_code?: string | null
    redemption_type?: string
    deeplink_url?: string | null
    valid_from: Date | string
    valid_until: Date | string
    max_redemptions?: number
    current_redemptions?: number
    is_active?: boolean
    created_at?: Date | string
  }

  export type OfferUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    title_ur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    target_category?: StringFieldUpdateOperationsInput | string
    min_monthly_spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    redemption_type?: StringFieldUpdateOperationsInput | string
    deeplink_url?: NullableStringFieldUpdateOperationsInput | string | null
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    max_redemptions?: IntFieldUpdateOperationsInput | number
    current_redemptions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_ur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    target_category?: StringFieldUpdateOperationsInput | string
    min_monthly_spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    redemption_type?: StringFieldUpdateOperationsInput | string
    deeplink_url?: NullableStringFieldUpdateOperationsInput | string | null
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    max_redemptions?: IntFieldUpdateOperationsInput | number
    current_redemptions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOfferEventCreateInput = {
    event_type: string
    spend_amount?: Decimal | DecimalJsLike | number | string | null
    event_at?: Date | string
    user: UserCreateNestedOneWithoutOffer_eventsInput
    offer: OfferCreateNestedOneWithoutEventsInput
  }

  export type UserOfferEventUncheckedCreateInput = {
    id?: number
    user_id: number
    offer_id: number
    event_type: string
    spend_amount?: Decimal | DecimalJsLike | number | string | null
    event_at?: Date | string
  }

  export type UserOfferEventUpdateInput = {
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOffer_eventsNestedInput
    offer?: OfferUpdateOneRequiredWithoutEventsNestedInput
  }

  export type UserOfferEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    offer_id?: IntFieldUpdateOperationsInput | number
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOfferEventCreateManyInput = {
    id?: number
    user_id: number
    offer_id: number
    event_type: string
    spend_amount?: Decimal | DecimalJsLike | number | string | null
    event_at?: Date | string
  }

  export type UserOfferEventUpdateManyMutationInput = {
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOfferEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    offer_id?: IntFieldUpdateOperationsInput | number
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type BudgetListRelationFilter = {
    every?: BudgetWhereInput
    some?: BudgetWhereInput
    none?: BudgetWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type AiInsightListRelationFilter = {
    every?: AiInsightWhereInput
    some?: AiInsightWhereInput
    none?: AiInsightWhereInput
  }

  export type ReportCardListRelationFilter = {
    every?: ReportCardWhereInput
    some?: ReportCardWhereInput
    none?: ReportCardWhereInput
  }

  export type UserOfferEventListRelationFilter = {
    every?: UserOfferEventWhereInput
    some?: UserOfferEventWhereInput
    none?: UserOfferEventWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SpendingLimitListRelationFilter = {
    every?: SpendingLimitWhereInput
    some?: SpendingLimitWhereInput
    none?: SpendingLimitWhereInput
  }

  export type UserHoldingListRelationFilter = {
    every?: UserHoldingWhereInput
    some?: UserHoldingWhereInput
    none?: UserHoldingWhereInput
  }

  export type StockTradeListRelationFilter = {
    every?: StockTradeWhereInput
    some?: StockTradeWhereInput
    none?: StockTradeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiInsightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOfferEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpendingLimitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserHoldingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockTradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    account_number?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    preferred_language?: SortOrder
    monthly_income?: SortOrder
    wallet_balance?: SortOrder
    account_balance?: SortOrder
    is_admin?: SortOrder
    reset_token_hash?: SortOrder
    reset_token_expires?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
    linked_partner_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    monthly_income?: SortOrder
    wallet_balance?: SortOrder
    account_balance?: SortOrder
    linked_partner_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    account_number?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    preferred_language?: SortOrder
    monthly_income?: SortOrder
    wallet_balance?: SortOrder
    account_balance?: SortOrder
    is_admin?: SortOrder
    reset_token_hash?: SortOrder
    reset_token_expires?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
    linked_partner_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    account_number?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    preferred_language?: SortOrder
    monthly_income?: SortOrder
    wallet_balance?: SortOrder
    account_balance?: SortOrder
    is_admin?: SortOrder
    reset_token_hash?: SortOrder
    reset_token_expires?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
    linked_partner_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    monthly_income?: SortOrder
    wallet_balance?: SortOrder
    account_balance?: SortOrder
    linked_partner_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SpendingLimitOwner_idTarget_user_idCategoryCompoundUniqueInput = {
    owner_id: number
    target_user_id: number
    category: string
  }

  export type SpendingLimitCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    target_user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    alert_at_percent?: SortOrder
    is_hard_limit?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type SpendingLimitAvgOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    target_user_id?: SortOrder
    monthly_limit?: SortOrder
    alert_at_percent?: SortOrder
  }

  export type SpendingLimitMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    target_user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    alert_at_percent?: SortOrder
    is_hard_limit?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type SpendingLimitMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    target_user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    alert_at_percent?: SortOrder
    is_hard_limit?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type SpendingLimitSumOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    target_user_id?: SortOrder
    monthly_limit?: SortOrder
    alert_at_percent?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    sub_category?: SortOrder
    merchant?: SortOrder
    transaction_date?: SortOrder
    source?: SortOrder
    is_recurring?: SortOrder
    ai_confidence?: SortOrder
    user_corrected?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    ai_confidence?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    sub_category?: SortOrder
    merchant?: SortOrder
    transaction_date?: SortOrder
    source?: SortOrder
    is_recurring?: SortOrder
    ai_confidence?: SortOrder
    user_corrected?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    sub_category?: SortOrder
    merchant?: SortOrder
    transaction_date?: SortOrder
    source?: SortOrder
    is_recurring?: SortOrder
    ai_confidence?: SortOrder
    user_corrected?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    ai_confidence?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BudgetUser_idCategoryMonthCompoundUniqueInput = {
    user_id: number
    category: string
    month: Date | string
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    month?: SortOrder
    alert_at_percent?: SortOrder
    created_at?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    monthly_limit?: SortOrder
    alert_at_percent?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    month?: SortOrder
    alert_at_percent?: SortOrder
    created_at?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    monthly_limit?: SortOrder
    month?: SortOrder
    alert_at_percent?: SortOrder
    created_at?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    monthly_limit?: SortOrder
    alert_at_percent?: SortOrder
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    target_amount?: SortOrder
    saved_amount?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    target_amount?: SortOrder
    saved_amount?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    target_amount?: SortOrder
    saved_amount?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    target_amount?: SortOrder
    saved_amount?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    target_amount?: SortOrder
    saved_amount?: SortOrder
  }

  export type MarketCacheAsset_typeTickerCompoundUniqueInput = {
    asset_type: string
    ticker: string
  }

  export type MarketCacheCountOrderByAggregateInput = {
    id?: SortOrder
    asset_type?: SortOrder
    ticker?: SortOrder
    price_pkr?: SortOrder
    change_1d?: SortOrder
    change_30d?: SortOrder
    change_90d?: SortOrder
    change_180d?: SortOrder
    change_365d?: SortOrder
    fetched_at?: SortOrder
  }

  export type MarketCacheAvgOrderByAggregateInput = {
    id?: SortOrder
    price_pkr?: SortOrder
    change_1d?: SortOrder
    change_30d?: SortOrder
    change_90d?: SortOrder
    change_180d?: SortOrder
    change_365d?: SortOrder
  }

  export type MarketCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    asset_type?: SortOrder
    ticker?: SortOrder
    price_pkr?: SortOrder
    change_1d?: SortOrder
    change_30d?: SortOrder
    change_90d?: SortOrder
    change_180d?: SortOrder
    change_365d?: SortOrder
    fetched_at?: SortOrder
  }

  export type MarketCacheMinOrderByAggregateInput = {
    id?: SortOrder
    asset_type?: SortOrder
    ticker?: SortOrder
    price_pkr?: SortOrder
    change_1d?: SortOrder
    change_30d?: SortOrder
    change_90d?: SortOrder
    change_180d?: SortOrder
    change_365d?: SortOrder
    fetched_at?: SortOrder
  }

  export type MarketCacheSumOrderByAggregateInput = {
    id?: SortOrder
    price_pkr?: SortOrder
    change_1d?: SortOrder
    change_30d?: SortOrder
    change_90d?: SortOrder
    change_180d?: SortOrder
    change_365d?: SortOrder
  }

  export type UserHoldingUser_idTickerCompoundUniqueInput = {
    user_id: number
    ticker: string
  }

  export type UserHoldingCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    asset_type?: SortOrder
    quantity?: SortOrder
    avg_cost_pkr?: SortOrder
    acquired_at?: SortOrder
  }

  export type UserHoldingAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quantity?: SortOrder
    avg_cost_pkr?: SortOrder
  }

  export type UserHoldingMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    asset_type?: SortOrder
    quantity?: SortOrder
    avg_cost_pkr?: SortOrder
    acquired_at?: SortOrder
  }

  export type UserHoldingMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    asset_type?: SortOrder
    quantity?: SortOrder
    avg_cost_pkr?: SortOrder
    acquired_at?: SortOrder
  }

  export type UserHoldingSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quantity?: SortOrder
    avg_cost_pkr?: SortOrder
  }

  export type StockTradeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    side?: SortOrder
    quantity?: SortOrder
    price_pkr?: SortOrder
    total_pkr?: SortOrder
    created_at?: SortOrder
  }

  export type StockTradeAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quantity?: SortOrder
    price_pkr?: SortOrder
    total_pkr?: SortOrder
  }

  export type StockTradeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    side?: SortOrder
    quantity?: SortOrder
    price_pkr?: SortOrder
    total_pkr?: SortOrder
    created_at?: SortOrder
  }

  export type StockTradeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ticker?: SortOrder
    display_name?: SortOrder
    side?: SortOrder
    quantity?: SortOrder
    price_pkr?: SortOrder
    total_pkr?: SortOrder
    created_at?: SortOrder
  }

  export type StockTradeSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quantity?: SortOrder
    price_pkr?: SortOrder
    total_pkr?: SortOrder
  }

  export type AiInsightCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    content_en?: SortOrder
    content_ur?: SortOrder
    is_read?: SortOrder
    rating?: SortOrder
    generated_at?: SortOrder
    valid_until?: SortOrder
  }

  export type AiInsightAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type AiInsightMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    content_en?: SortOrder
    content_ur?: SortOrder
    is_read?: SortOrder
    rating?: SortOrder
    generated_at?: SortOrder
    valid_until?: SortOrder
  }

  export type AiInsightMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    content_en?: SortOrder
    content_ur?: SortOrder
    is_read?: SortOrder
    rating?: SortOrder
    generated_at?: SortOrder
    valid_until?: SortOrder
  }

  export type AiInsightSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ReportCardUser_idMonthCompoundUniqueInput = {
    user_id: number
    month: Date | string
  }

  export type ReportCardCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    month?: SortOrder
    overall_grade?: SortOrder
    budget_score?: SortOrder
    savings_score?: SortOrder
    trend_score?: SortOrder
    summary_en?: SortOrder
    summary_ur?: SortOrder
    created_at?: SortOrder
  }

  export type ReportCardAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    budget_score?: SortOrder
    savings_score?: SortOrder
    trend_score?: SortOrder
  }

  export type ReportCardMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    month?: SortOrder
    overall_grade?: SortOrder
    budget_score?: SortOrder
    savings_score?: SortOrder
    trend_score?: SortOrder
    summary_en?: SortOrder
    summary_ur?: SortOrder
    created_at?: SortOrder
  }

  export type ReportCardMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    month?: SortOrder
    overall_grade?: SortOrder
    budget_score?: SortOrder
    savings_score?: SortOrder
    trend_score?: SortOrder
    summary_en?: SortOrder
    summary_ur?: SortOrder
    created_at?: SortOrder
  }

  export type ReportCardSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    budget_score?: SortOrder
    savings_score?: SortOrder
    trend_score?: SortOrder
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferPartnerCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    category?: SortOrder
    billing_model?: SortOrder
    rate_pkr?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type OfferPartnerAvgOrderByAggregateInput = {
    id?: SortOrder
    rate_pkr?: SortOrder
  }

  export type OfferPartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    category?: SortOrder
    billing_model?: SortOrder
    rate_pkr?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type OfferPartnerMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    category?: SortOrder
    billing_model?: SortOrder
    rate_pkr?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type OfferPartnerSumOrderByAggregateInput = {
    id?: SortOrder
    rate_pkr?: SortOrder
  }

  export type OfferPartnerRelationFilter = {
    is?: OfferPartnerWhereInput
    isNot?: OfferPartnerWhereInput
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    partner_id?: SortOrder
    title?: SortOrder
    title_ur?: SortOrder
    description?: SortOrder
    target_category?: SortOrder
    min_monthly_spend?: SortOrder
    trigger_event?: SortOrder
    promo_code?: SortOrder
    redemption_type?: SortOrder
    deeplink_url?: SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    max_redemptions?: SortOrder
    current_redemptions?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    id?: SortOrder
    partner_id?: SortOrder
    min_monthly_spend?: SortOrder
    max_redemptions?: SortOrder
    current_redemptions?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    partner_id?: SortOrder
    title?: SortOrder
    title_ur?: SortOrder
    description?: SortOrder
    target_category?: SortOrder
    min_monthly_spend?: SortOrder
    trigger_event?: SortOrder
    promo_code?: SortOrder
    redemption_type?: SortOrder
    deeplink_url?: SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    max_redemptions?: SortOrder
    current_redemptions?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    partner_id?: SortOrder
    title?: SortOrder
    title_ur?: SortOrder
    description?: SortOrder
    target_category?: SortOrder
    min_monthly_spend?: SortOrder
    trigger_event?: SortOrder
    promo_code?: SortOrder
    redemption_type?: SortOrder
    deeplink_url?: SortOrder
    valid_from?: SortOrder
    valid_until?: SortOrder
    max_redemptions?: SortOrder
    current_redemptions?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    id?: SortOrder
    partner_id?: SortOrder
    min_monthly_spend?: SortOrder
    max_redemptions?: SortOrder
    current_redemptions?: SortOrder
  }

  export type OfferRelationFilter = {
    is?: OfferWhereInput
    isNot?: OfferWhereInput
  }

  export type UserOfferEventCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_id?: SortOrder
    event_type?: SortOrder
    spend_amount?: SortOrder
    event_at?: SortOrder
  }

  export type UserOfferEventAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_id?: SortOrder
    spend_amount?: SortOrder
  }

  export type UserOfferEventMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_id?: SortOrder
    event_type?: SortOrder
    spend_amount?: SortOrder
    event_at?: SortOrder
  }

  export type UserOfferEventMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_id?: SortOrder
    event_type?: SortOrder
    spend_amount?: SortOrder
    event_at?: SortOrder
  }

  export type UserOfferEventSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_id?: SortOrder
    spend_amount?: SortOrder
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type AiInsightCreateNestedManyWithoutUserInput = {
    create?: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput> | AiInsightCreateWithoutUserInput[] | AiInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutUserInput | AiInsightCreateOrConnectWithoutUserInput[]
    createMany?: AiInsightCreateManyUserInputEnvelope
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
  }

  export type ReportCardCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCardCreateWithoutUserInput, ReportCardUncheckedCreateWithoutUserInput> | ReportCardCreateWithoutUserInput[] | ReportCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCardCreateOrConnectWithoutUserInput | ReportCardCreateOrConnectWithoutUserInput[]
    createMany?: ReportCardCreateManyUserInputEnvelope
    connect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
  }

  export type UserOfferEventCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOfferEventCreateWithoutUserInput, UserOfferEventUncheckedCreateWithoutUserInput> | UserOfferEventCreateWithoutUserInput[] | UserOfferEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOfferEventCreateOrConnectWithoutUserInput | UserOfferEventCreateOrConnectWithoutUserInput[]
    createMany?: UserOfferEventCreateManyUserInputEnvelope
    connect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPartner_ofInput = {
    create?: XOR<UserCreateWithoutPartner_ofInput, UserUncheckedCreateWithoutPartner_ofInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartner_ofInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutLinked_partnerInput = {
    create?: XOR<UserCreateWithoutLinked_partnerInput, UserUncheckedCreateWithoutLinked_partnerInput> | UserCreateWithoutLinked_partnerInput[] | UserUncheckedCreateWithoutLinked_partnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLinked_partnerInput | UserCreateOrConnectWithoutLinked_partnerInput[]
    createMany?: UserCreateManyLinked_partnerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SpendingLimitCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SpendingLimitCreateWithoutOwnerInput, SpendingLimitUncheckedCreateWithoutOwnerInput> | SpendingLimitCreateWithoutOwnerInput[] | SpendingLimitUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SpendingLimitCreateOrConnectWithoutOwnerInput | SpendingLimitCreateOrConnectWithoutOwnerInput[]
    createMany?: SpendingLimitCreateManyOwnerInputEnvelope
    connect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
  }

  export type SpendingLimitCreateNestedManyWithoutTarget_userInput = {
    create?: XOR<SpendingLimitCreateWithoutTarget_userInput, SpendingLimitUncheckedCreateWithoutTarget_userInput> | SpendingLimitCreateWithoutTarget_userInput[] | SpendingLimitUncheckedCreateWithoutTarget_userInput[]
    connectOrCreate?: SpendingLimitCreateOrConnectWithoutTarget_userInput | SpendingLimitCreateOrConnectWithoutTarget_userInput[]
    createMany?: SpendingLimitCreateManyTarget_userInputEnvelope
    connect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
  }

  export type UserHoldingCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHoldingCreateWithoutUserInput, UserHoldingUncheckedCreateWithoutUserInput> | UserHoldingCreateWithoutUserInput[] | UserHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHoldingCreateOrConnectWithoutUserInput | UserHoldingCreateOrConnectWithoutUserInput[]
    createMany?: UserHoldingCreateManyUserInputEnvelope
    connect?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
  }

  export type StockTradeCreateNestedManyWithoutUserInput = {
    create?: XOR<StockTradeCreateWithoutUserInput, StockTradeUncheckedCreateWithoutUserInput> | StockTradeCreateWithoutUserInput[] | StockTradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockTradeCreateOrConnectWithoutUserInput | StockTradeCreateOrConnectWithoutUserInput[]
    createMany?: StockTradeCreateManyUserInputEnvelope
    connect?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type AiInsightUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput> | AiInsightCreateWithoutUserInput[] | AiInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutUserInput | AiInsightCreateOrConnectWithoutUserInput[]
    createMany?: AiInsightCreateManyUserInputEnvelope
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
  }

  export type ReportCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCardCreateWithoutUserInput, ReportCardUncheckedCreateWithoutUserInput> | ReportCardCreateWithoutUserInput[] | ReportCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCardCreateOrConnectWithoutUserInput | ReportCardCreateOrConnectWithoutUserInput[]
    createMany?: ReportCardCreateManyUserInputEnvelope
    connect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
  }

  export type UserOfferEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOfferEventCreateWithoutUserInput, UserOfferEventUncheckedCreateWithoutUserInput> | UserOfferEventCreateWithoutUserInput[] | UserOfferEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOfferEventCreateOrConnectWithoutUserInput | UserOfferEventCreateOrConnectWithoutUserInput[]
    createMany?: UserOfferEventCreateManyUserInputEnvelope
    connect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLinked_partnerInput = {
    create?: XOR<UserCreateWithoutLinked_partnerInput, UserUncheckedCreateWithoutLinked_partnerInput> | UserCreateWithoutLinked_partnerInput[] | UserUncheckedCreateWithoutLinked_partnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLinked_partnerInput | UserCreateOrConnectWithoutLinked_partnerInput[]
    createMany?: UserCreateManyLinked_partnerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SpendingLimitCreateWithoutOwnerInput, SpendingLimitUncheckedCreateWithoutOwnerInput> | SpendingLimitCreateWithoutOwnerInput[] | SpendingLimitUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SpendingLimitCreateOrConnectWithoutOwnerInput | SpendingLimitCreateOrConnectWithoutOwnerInput[]
    createMany?: SpendingLimitCreateManyOwnerInputEnvelope
    connect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
  }

  export type SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput = {
    create?: XOR<SpendingLimitCreateWithoutTarget_userInput, SpendingLimitUncheckedCreateWithoutTarget_userInput> | SpendingLimitCreateWithoutTarget_userInput[] | SpendingLimitUncheckedCreateWithoutTarget_userInput[]
    connectOrCreate?: SpendingLimitCreateOrConnectWithoutTarget_userInput | SpendingLimitCreateOrConnectWithoutTarget_userInput[]
    createMany?: SpendingLimitCreateManyTarget_userInputEnvelope
    connect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
  }

  export type UserHoldingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHoldingCreateWithoutUserInput, UserHoldingUncheckedCreateWithoutUserInput> | UserHoldingCreateWithoutUserInput[] | UserHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHoldingCreateOrConnectWithoutUserInput | UserHoldingCreateOrConnectWithoutUserInput[]
    createMany?: UserHoldingCreateManyUserInputEnvelope
    connect?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
  }

  export type StockTradeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StockTradeCreateWithoutUserInput, StockTradeUncheckedCreateWithoutUserInput> | StockTradeCreateWithoutUserInput[] | StockTradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockTradeCreateOrConnectWithoutUserInput | StockTradeCreateOrConnectWithoutUserInput[]
    createMany?: StockTradeCreateManyUserInputEnvelope
    connect?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type AiInsightUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput> | AiInsightCreateWithoutUserInput[] | AiInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutUserInput | AiInsightCreateOrConnectWithoutUserInput[]
    upsert?: AiInsightUpsertWithWhereUniqueWithoutUserInput | AiInsightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiInsightCreateManyUserInputEnvelope
    set?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    disconnect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    delete?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    update?: AiInsightUpdateWithWhereUniqueWithoutUserInput | AiInsightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiInsightUpdateManyWithWhereWithoutUserInput | AiInsightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
  }

  export type ReportCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCardCreateWithoutUserInput, ReportCardUncheckedCreateWithoutUserInput> | ReportCardCreateWithoutUserInput[] | ReportCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCardCreateOrConnectWithoutUserInput | ReportCardCreateOrConnectWithoutUserInput[]
    upsert?: ReportCardUpsertWithWhereUniqueWithoutUserInput | ReportCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCardCreateManyUserInputEnvelope
    set?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    disconnect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    delete?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    connect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    update?: ReportCardUpdateWithWhereUniqueWithoutUserInput | ReportCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportCardUpdateManyWithWhereWithoutUserInput | ReportCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportCardScalarWhereInput | ReportCardScalarWhereInput[]
  }

  export type UserOfferEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOfferEventCreateWithoutUserInput, UserOfferEventUncheckedCreateWithoutUserInput> | UserOfferEventCreateWithoutUserInput[] | UserOfferEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOfferEventCreateOrConnectWithoutUserInput | UserOfferEventCreateOrConnectWithoutUserInput[]
    upsert?: UserOfferEventUpsertWithWhereUniqueWithoutUserInput | UserOfferEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOfferEventCreateManyUserInputEnvelope
    set?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    disconnect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    delete?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    connect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    update?: UserOfferEventUpdateWithWhereUniqueWithoutUserInput | UserOfferEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOfferEventUpdateManyWithWhereWithoutUserInput | UserOfferEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOfferEventScalarWhereInput | UserOfferEventScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPartner_ofNestedInput = {
    create?: XOR<UserCreateWithoutPartner_ofInput, UserUncheckedCreateWithoutPartner_ofInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartner_ofInput
    upsert?: UserUpsertWithoutPartner_ofInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPartner_ofInput, UserUpdateWithoutPartner_ofInput>, UserUncheckedUpdateWithoutPartner_ofInput>
  }

  export type UserUpdateManyWithoutLinked_partnerNestedInput = {
    create?: XOR<UserCreateWithoutLinked_partnerInput, UserUncheckedCreateWithoutLinked_partnerInput> | UserCreateWithoutLinked_partnerInput[] | UserUncheckedCreateWithoutLinked_partnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLinked_partnerInput | UserCreateOrConnectWithoutLinked_partnerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLinked_partnerInput | UserUpsertWithWhereUniqueWithoutLinked_partnerInput[]
    createMany?: UserCreateManyLinked_partnerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLinked_partnerInput | UserUpdateWithWhereUniqueWithoutLinked_partnerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLinked_partnerInput | UserUpdateManyWithWhereWithoutLinked_partnerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SpendingLimitUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SpendingLimitCreateWithoutOwnerInput, SpendingLimitUncheckedCreateWithoutOwnerInput> | SpendingLimitCreateWithoutOwnerInput[] | SpendingLimitUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SpendingLimitCreateOrConnectWithoutOwnerInput | SpendingLimitCreateOrConnectWithoutOwnerInput[]
    upsert?: SpendingLimitUpsertWithWhereUniqueWithoutOwnerInput | SpendingLimitUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SpendingLimitCreateManyOwnerInputEnvelope
    set?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    disconnect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    delete?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    connect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    update?: SpendingLimitUpdateWithWhereUniqueWithoutOwnerInput | SpendingLimitUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SpendingLimitUpdateManyWithWhereWithoutOwnerInput | SpendingLimitUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SpendingLimitScalarWhereInput | SpendingLimitScalarWhereInput[]
  }

  export type SpendingLimitUpdateManyWithoutTarget_userNestedInput = {
    create?: XOR<SpendingLimitCreateWithoutTarget_userInput, SpendingLimitUncheckedCreateWithoutTarget_userInput> | SpendingLimitCreateWithoutTarget_userInput[] | SpendingLimitUncheckedCreateWithoutTarget_userInput[]
    connectOrCreate?: SpendingLimitCreateOrConnectWithoutTarget_userInput | SpendingLimitCreateOrConnectWithoutTarget_userInput[]
    upsert?: SpendingLimitUpsertWithWhereUniqueWithoutTarget_userInput | SpendingLimitUpsertWithWhereUniqueWithoutTarget_userInput[]
    createMany?: SpendingLimitCreateManyTarget_userInputEnvelope
    set?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    disconnect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    delete?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    connect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    update?: SpendingLimitUpdateWithWhereUniqueWithoutTarget_userInput | SpendingLimitUpdateWithWhereUniqueWithoutTarget_userInput[]
    updateMany?: SpendingLimitUpdateManyWithWhereWithoutTarget_userInput | SpendingLimitUpdateManyWithWhereWithoutTarget_userInput[]
    deleteMany?: SpendingLimitScalarWhereInput | SpendingLimitScalarWhereInput[]
  }

  export type UserHoldingUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHoldingCreateWithoutUserInput, UserHoldingUncheckedCreateWithoutUserInput> | UserHoldingCreateWithoutUserInput[] | UserHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHoldingCreateOrConnectWithoutUserInput | UserHoldingCreateOrConnectWithoutUserInput[]
    upsert?: UserHoldingUpsertWithWhereUniqueWithoutUserInput | UserHoldingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHoldingCreateManyUserInputEnvelope
    set?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
    disconnect?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
    delete?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
    connect?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
    update?: UserHoldingUpdateWithWhereUniqueWithoutUserInput | UserHoldingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHoldingUpdateManyWithWhereWithoutUserInput | UserHoldingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHoldingScalarWhereInput | UserHoldingScalarWhereInput[]
  }

  export type StockTradeUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockTradeCreateWithoutUserInput, StockTradeUncheckedCreateWithoutUserInput> | StockTradeCreateWithoutUserInput[] | StockTradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockTradeCreateOrConnectWithoutUserInput | StockTradeCreateOrConnectWithoutUserInput[]
    upsert?: StockTradeUpsertWithWhereUniqueWithoutUserInput | StockTradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockTradeCreateManyUserInputEnvelope
    set?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
    disconnect?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
    delete?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
    connect?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
    update?: StockTradeUpdateWithWhereUniqueWithoutUserInput | StockTradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockTradeUpdateManyWithWhereWithoutUserInput | StockTradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockTradeScalarWhereInput | StockTradeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type AiInsightUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput> | AiInsightCreateWithoutUserInput[] | AiInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutUserInput | AiInsightCreateOrConnectWithoutUserInput[]
    upsert?: AiInsightUpsertWithWhereUniqueWithoutUserInput | AiInsightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiInsightCreateManyUserInputEnvelope
    set?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    disconnect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    delete?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    update?: AiInsightUpdateWithWhereUniqueWithoutUserInput | AiInsightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiInsightUpdateManyWithWhereWithoutUserInput | AiInsightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
  }

  export type ReportCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCardCreateWithoutUserInput, ReportCardUncheckedCreateWithoutUserInput> | ReportCardCreateWithoutUserInput[] | ReportCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCardCreateOrConnectWithoutUserInput | ReportCardCreateOrConnectWithoutUserInput[]
    upsert?: ReportCardUpsertWithWhereUniqueWithoutUserInput | ReportCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCardCreateManyUserInputEnvelope
    set?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    disconnect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    delete?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    connect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    update?: ReportCardUpdateWithWhereUniqueWithoutUserInput | ReportCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportCardUpdateManyWithWhereWithoutUserInput | ReportCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportCardScalarWhereInput | ReportCardScalarWhereInput[]
  }

  export type UserOfferEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOfferEventCreateWithoutUserInput, UserOfferEventUncheckedCreateWithoutUserInput> | UserOfferEventCreateWithoutUserInput[] | UserOfferEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOfferEventCreateOrConnectWithoutUserInput | UserOfferEventCreateOrConnectWithoutUserInput[]
    upsert?: UserOfferEventUpsertWithWhereUniqueWithoutUserInput | UserOfferEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOfferEventCreateManyUserInputEnvelope
    set?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    disconnect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    delete?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    connect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    update?: UserOfferEventUpdateWithWhereUniqueWithoutUserInput | UserOfferEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOfferEventUpdateManyWithWhereWithoutUserInput | UserOfferEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOfferEventScalarWhereInput | UserOfferEventScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLinked_partnerNestedInput = {
    create?: XOR<UserCreateWithoutLinked_partnerInput, UserUncheckedCreateWithoutLinked_partnerInput> | UserCreateWithoutLinked_partnerInput[] | UserUncheckedCreateWithoutLinked_partnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLinked_partnerInput | UserCreateOrConnectWithoutLinked_partnerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLinked_partnerInput | UserUpsertWithWhereUniqueWithoutLinked_partnerInput[]
    createMany?: UserCreateManyLinked_partnerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLinked_partnerInput | UserUpdateWithWhereUniqueWithoutLinked_partnerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLinked_partnerInput | UserUpdateManyWithWhereWithoutLinked_partnerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SpendingLimitCreateWithoutOwnerInput, SpendingLimitUncheckedCreateWithoutOwnerInput> | SpendingLimitCreateWithoutOwnerInput[] | SpendingLimitUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SpendingLimitCreateOrConnectWithoutOwnerInput | SpendingLimitCreateOrConnectWithoutOwnerInput[]
    upsert?: SpendingLimitUpsertWithWhereUniqueWithoutOwnerInput | SpendingLimitUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SpendingLimitCreateManyOwnerInputEnvelope
    set?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    disconnect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    delete?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    connect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    update?: SpendingLimitUpdateWithWhereUniqueWithoutOwnerInput | SpendingLimitUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SpendingLimitUpdateManyWithWhereWithoutOwnerInput | SpendingLimitUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SpendingLimitScalarWhereInput | SpendingLimitScalarWhereInput[]
  }

  export type SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput = {
    create?: XOR<SpendingLimitCreateWithoutTarget_userInput, SpendingLimitUncheckedCreateWithoutTarget_userInput> | SpendingLimitCreateWithoutTarget_userInput[] | SpendingLimitUncheckedCreateWithoutTarget_userInput[]
    connectOrCreate?: SpendingLimitCreateOrConnectWithoutTarget_userInput | SpendingLimitCreateOrConnectWithoutTarget_userInput[]
    upsert?: SpendingLimitUpsertWithWhereUniqueWithoutTarget_userInput | SpendingLimitUpsertWithWhereUniqueWithoutTarget_userInput[]
    createMany?: SpendingLimitCreateManyTarget_userInputEnvelope
    set?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    disconnect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    delete?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    connect?: SpendingLimitWhereUniqueInput | SpendingLimitWhereUniqueInput[]
    update?: SpendingLimitUpdateWithWhereUniqueWithoutTarget_userInput | SpendingLimitUpdateWithWhereUniqueWithoutTarget_userInput[]
    updateMany?: SpendingLimitUpdateManyWithWhereWithoutTarget_userInput | SpendingLimitUpdateManyWithWhereWithoutTarget_userInput[]
    deleteMany?: SpendingLimitScalarWhereInput | SpendingLimitScalarWhereInput[]
  }

  export type UserHoldingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHoldingCreateWithoutUserInput, UserHoldingUncheckedCreateWithoutUserInput> | UserHoldingCreateWithoutUserInput[] | UserHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHoldingCreateOrConnectWithoutUserInput | UserHoldingCreateOrConnectWithoutUserInput[]
    upsert?: UserHoldingUpsertWithWhereUniqueWithoutUserInput | UserHoldingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHoldingCreateManyUserInputEnvelope
    set?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
    disconnect?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
    delete?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
    connect?: UserHoldingWhereUniqueInput | UserHoldingWhereUniqueInput[]
    update?: UserHoldingUpdateWithWhereUniqueWithoutUserInput | UserHoldingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHoldingUpdateManyWithWhereWithoutUserInput | UserHoldingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHoldingScalarWhereInput | UserHoldingScalarWhereInput[]
  }

  export type StockTradeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockTradeCreateWithoutUserInput, StockTradeUncheckedCreateWithoutUserInput> | StockTradeCreateWithoutUserInput[] | StockTradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockTradeCreateOrConnectWithoutUserInput | StockTradeCreateOrConnectWithoutUserInput[]
    upsert?: StockTradeUpsertWithWhereUniqueWithoutUserInput | StockTradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockTradeCreateManyUserInputEnvelope
    set?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
    disconnect?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
    delete?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
    connect?: StockTradeWhereUniqueInput | StockTradeWhereUniqueInput[]
    update?: StockTradeUpdateWithWhereUniqueWithoutUserInput | StockTradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockTradeUpdateManyWithWhereWithoutUserInput | StockTradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockTradeScalarWhereInput | StockTradeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLimits_setInput = {
    create?: XOR<UserCreateWithoutLimits_setInput, UserUncheckedCreateWithoutLimits_setInput>
    connectOrCreate?: UserCreateOrConnectWithoutLimits_setInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLimits_receivedInput = {
    create?: XOR<UserCreateWithoutLimits_receivedInput, UserUncheckedCreateWithoutLimits_receivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLimits_receivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLimits_setNestedInput = {
    create?: XOR<UserCreateWithoutLimits_setInput, UserUncheckedCreateWithoutLimits_setInput>
    connectOrCreate?: UserCreateOrConnectWithoutLimits_setInput
    upsert?: UserUpsertWithoutLimits_setInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLimits_setInput, UserUpdateWithoutLimits_setInput>, UserUncheckedUpdateWithoutLimits_setInput>
  }

  export type UserUpdateOneRequiredWithoutLimits_receivedNestedInput = {
    create?: XOR<UserCreateWithoutLimits_receivedInput, UserUncheckedCreateWithoutLimits_receivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLimits_receivedInput
    upsert?: UserUpsertWithoutLimits_receivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLimits_receivedInput, UserUpdateWithoutLimits_receivedInput>, UserUncheckedUpdateWithoutLimits_receivedInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    upsert?: UserUpsertWithoutBudgetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetsInput, UserUpdateWithoutBudgetsInput>, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserCreateNestedOneWithoutHoldingsInput = {
    create?: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHoldingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHoldingsInput
    upsert?: UserUpsertWithoutHoldingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHoldingsInput, UserUpdateWithoutHoldingsInput>, UserUncheckedUpdateWithoutHoldingsInput>
  }

  export type UserCreateNestedOneWithoutStock_tradesInput = {
    create?: XOR<UserCreateWithoutStock_tradesInput, UserUncheckedCreateWithoutStock_tradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStock_tradesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStock_tradesNestedInput = {
    create?: XOR<UserCreateWithoutStock_tradesInput, UserUncheckedCreateWithoutStock_tradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStock_tradesInput
    upsert?: UserUpsertWithoutStock_tradesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStock_tradesInput, UserUpdateWithoutStock_tradesInput>, UserUncheckedUpdateWithoutStock_tradesInput>
  }

  export type UserCreateNestedOneWithoutAi_insightsInput = {
    create?: XOR<UserCreateWithoutAi_insightsInput, UserUncheckedCreateWithoutAi_insightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAi_insightsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAi_insightsNestedInput = {
    create?: XOR<UserCreateWithoutAi_insightsInput, UserUncheckedCreateWithoutAi_insightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAi_insightsInput
    upsert?: UserUpsertWithoutAi_insightsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAi_insightsInput, UserUpdateWithoutAi_insightsInput>, UserUncheckedUpdateWithoutAi_insightsInput>
  }

  export type UserCreateNestedOneWithoutReport_cardsInput = {
    create?: XOR<UserCreateWithoutReport_cardsInput, UserUncheckedCreateWithoutReport_cardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReport_cardsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReport_cardsNestedInput = {
    create?: XOR<UserCreateWithoutReport_cardsInput, UserUncheckedCreateWithoutReport_cardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReport_cardsInput
    upsert?: UserUpsertWithoutReport_cardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReport_cardsInput, UserUpdateWithoutReport_cardsInput>, UserUncheckedUpdateWithoutReport_cardsInput>
  }

  export type OfferCreateNestedManyWithoutPartnerInput = {
    create?: XOR<OfferCreateWithoutPartnerInput, OfferUncheckedCreateWithoutPartnerInput> | OfferCreateWithoutPartnerInput[] | OfferUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutPartnerInput | OfferCreateOrConnectWithoutPartnerInput[]
    createMany?: OfferCreateManyPartnerInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutPartnerInput = {
    create?: XOR<OfferCreateWithoutPartnerInput, OfferUncheckedCreateWithoutPartnerInput> | OfferCreateWithoutPartnerInput[] | OfferUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutPartnerInput | OfferCreateOrConnectWithoutPartnerInput[]
    createMany?: OfferCreateManyPartnerInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type OfferUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<OfferCreateWithoutPartnerInput, OfferUncheckedCreateWithoutPartnerInput> | OfferCreateWithoutPartnerInput[] | OfferUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutPartnerInput | OfferCreateOrConnectWithoutPartnerInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutPartnerInput | OfferUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: OfferCreateManyPartnerInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutPartnerInput | OfferUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutPartnerInput | OfferUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<OfferCreateWithoutPartnerInput, OfferUncheckedCreateWithoutPartnerInput> | OfferCreateWithoutPartnerInput[] | OfferUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutPartnerInput | OfferCreateOrConnectWithoutPartnerInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutPartnerInput | OfferUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: OfferCreateManyPartnerInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutPartnerInput | OfferUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutPartnerInput | OfferUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type OfferPartnerCreateNestedOneWithoutOffersInput = {
    create?: XOR<OfferPartnerCreateWithoutOffersInput, OfferPartnerUncheckedCreateWithoutOffersInput>
    connectOrCreate?: OfferPartnerCreateOrConnectWithoutOffersInput
    connect?: OfferPartnerWhereUniqueInput
  }

  export type UserOfferEventCreateNestedManyWithoutOfferInput = {
    create?: XOR<UserOfferEventCreateWithoutOfferInput, UserOfferEventUncheckedCreateWithoutOfferInput> | UserOfferEventCreateWithoutOfferInput[] | UserOfferEventUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: UserOfferEventCreateOrConnectWithoutOfferInput | UserOfferEventCreateOrConnectWithoutOfferInput[]
    createMany?: UserOfferEventCreateManyOfferInputEnvelope
    connect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
  }

  export type UserOfferEventUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<UserOfferEventCreateWithoutOfferInput, UserOfferEventUncheckedCreateWithoutOfferInput> | UserOfferEventCreateWithoutOfferInput[] | UserOfferEventUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: UserOfferEventCreateOrConnectWithoutOfferInput | UserOfferEventCreateOrConnectWithoutOfferInput[]
    createMany?: UserOfferEventCreateManyOfferInputEnvelope
    connect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
  }

  export type OfferPartnerUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<OfferPartnerCreateWithoutOffersInput, OfferPartnerUncheckedCreateWithoutOffersInput>
    connectOrCreate?: OfferPartnerCreateOrConnectWithoutOffersInput
    upsert?: OfferPartnerUpsertWithoutOffersInput
    connect?: OfferPartnerWhereUniqueInput
    update?: XOR<XOR<OfferPartnerUpdateToOneWithWhereWithoutOffersInput, OfferPartnerUpdateWithoutOffersInput>, OfferPartnerUncheckedUpdateWithoutOffersInput>
  }

  export type UserOfferEventUpdateManyWithoutOfferNestedInput = {
    create?: XOR<UserOfferEventCreateWithoutOfferInput, UserOfferEventUncheckedCreateWithoutOfferInput> | UserOfferEventCreateWithoutOfferInput[] | UserOfferEventUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: UserOfferEventCreateOrConnectWithoutOfferInput | UserOfferEventCreateOrConnectWithoutOfferInput[]
    upsert?: UserOfferEventUpsertWithWhereUniqueWithoutOfferInput | UserOfferEventUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: UserOfferEventCreateManyOfferInputEnvelope
    set?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    disconnect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    delete?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    connect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    update?: UserOfferEventUpdateWithWhereUniqueWithoutOfferInput | UserOfferEventUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: UserOfferEventUpdateManyWithWhereWithoutOfferInput | UserOfferEventUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: UserOfferEventScalarWhereInput | UserOfferEventScalarWhereInput[]
  }

  export type UserOfferEventUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<UserOfferEventCreateWithoutOfferInput, UserOfferEventUncheckedCreateWithoutOfferInput> | UserOfferEventCreateWithoutOfferInput[] | UserOfferEventUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: UserOfferEventCreateOrConnectWithoutOfferInput | UserOfferEventCreateOrConnectWithoutOfferInput[]
    upsert?: UserOfferEventUpsertWithWhereUniqueWithoutOfferInput | UserOfferEventUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: UserOfferEventCreateManyOfferInputEnvelope
    set?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    disconnect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    delete?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    connect?: UserOfferEventWhereUniqueInput | UserOfferEventWhereUniqueInput[]
    update?: UserOfferEventUpdateWithWhereUniqueWithoutOfferInput | UserOfferEventUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: UserOfferEventUpdateManyWithWhereWithoutOfferInput | UserOfferEventUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: UserOfferEventScalarWhereInput | UserOfferEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOffer_eventsInput = {
    create?: XOR<UserCreateWithoutOffer_eventsInput, UserUncheckedCreateWithoutOffer_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffer_eventsInput
    connect?: UserWhereUniqueInput
  }

  export type OfferCreateNestedOneWithoutEventsInput = {
    create?: XOR<OfferCreateWithoutEventsInput, OfferUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutEventsInput
    connect?: OfferWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOffer_eventsNestedInput = {
    create?: XOR<UserCreateWithoutOffer_eventsInput, UserUncheckedCreateWithoutOffer_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffer_eventsInput
    upsert?: UserUpsertWithoutOffer_eventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOffer_eventsInput, UserUpdateWithoutOffer_eventsInput>, UserUncheckedUpdateWithoutOffer_eventsInput>
  }

  export type OfferUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<OfferCreateWithoutEventsInput, OfferUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutEventsInput
    upsert?: OfferUpsertWithoutEventsInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutEventsInput, OfferUpdateWithoutEventsInput>, OfferUncheckedUpdateWithoutEventsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category?: string
    sub_category?: string | null
    merchant?: string | null
    transaction_date: Date | string
    source?: string
    is_recurring?: boolean
    ai_confidence?: Decimal | DecimalJsLike | number | string | null
    user_corrected?: boolean
    created_at?: Date | string
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category?: string
    sub_category?: string | null
    merchant?: string | null
    transaction_date: Date | string
    source?: string
    is_recurring?: boolean
    ai_confidence?: Decimal | DecimalJsLike | number | string | null
    user_corrected?: boolean
    created_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutUserInput = {
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    month: Date | string
    alert_at_percent?: number
    created_at?: Date | string
  }

  export type BudgetUncheckedCreateWithoutUserInput = {
    id?: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    month: Date | string
    alert_at_percent?: number
    created_at?: Date | string
  }

  export type BudgetCreateOrConnectWithoutUserInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetCreateManyUserInputEnvelope = {
    data: BudgetCreateManyUserInput | BudgetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutUserInput = {
    title: string
    target_amount: Decimal | DecimalJsLike | number | string
    saved_amount?: Decimal | DecimalJsLike | number | string
    deadline: Date | string
    status?: string
    created_at?: Date | string
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    target_amount: Decimal | DecimalJsLike | number | string
    saved_amount?: Decimal | DecimalJsLike | number | string
    deadline: Date | string
    status?: string
    created_at?: Date | string
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AiInsightCreateWithoutUserInput = {
    type: string
    content_en: string
    content_ur?: string | null
    is_read?: boolean
    rating?: string | null
    generated_at?: Date | string
    valid_until?: Date | string | null
  }

  export type AiInsightUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    content_en: string
    content_ur?: string | null
    is_read?: boolean
    rating?: string | null
    generated_at?: Date | string
    valid_until?: Date | string | null
  }

  export type AiInsightCreateOrConnectWithoutUserInput = {
    where: AiInsightWhereUniqueInput
    create: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput>
  }

  export type AiInsightCreateManyUserInputEnvelope = {
    data: AiInsightCreateManyUserInput | AiInsightCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportCardCreateWithoutUserInput = {
    month: Date | string
    overall_grade: string
    budget_score: number
    savings_score: number
    trend_score: number
    summary_en: string
    summary_ur?: string | null
    created_at?: Date | string
  }

  export type ReportCardUncheckedCreateWithoutUserInput = {
    id?: number
    month: Date | string
    overall_grade: string
    budget_score: number
    savings_score: number
    trend_score: number
    summary_en: string
    summary_ur?: string | null
    created_at?: Date | string
  }

  export type ReportCardCreateOrConnectWithoutUserInput = {
    where: ReportCardWhereUniqueInput
    create: XOR<ReportCardCreateWithoutUserInput, ReportCardUncheckedCreateWithoutUserInput>
  }

  export type ReportCardCreateManyUserInputEnvelope = {
    data: ReportCardCreateManyUserInput | ReportCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOfferEventCreateWithoutUserInput = {
    event_type: string
    spend_amount?: Decimal | DecimalJsLike | number | string | null
    event_at?: Date | string
    offer: OfferCreateNestedOneWithoutEventsInput
  }

  export type UserOfferEventUncheckedCreateWithoutUserInput = {
    id?: number
    offer_id: number
    event_type: string
    spend_amount?: Decimal | DecimalJsLike | number | string | null
    event_at?: Date | string
  }

  export type UserOfferEventCreateOrConnectWithoutUserInput = {
    where: UserOfferEventWhereUniqueInput
    create: XOR<UserOfferEventCreateWithoutUserInput, UserOfferEventUncheckedCreateWithoutUserInput>
  }

  export type UserOfferEventCreateManyUserInputEnvelope = {
    data: UserOfferEventCreateManyUserInput | UserOfferEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPartner_ofInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPartner_ofInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPartner_ofInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartner_ofInput, UserUncheckedCreateWithoutPartner_ofInput>
  }

  export type UserCreateWithoutLinked_partnerInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinked_partnerInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinked_partnerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinked_partnerInput, UserUncheckedCreateWithoutLinked_partnerInput>
  }

  export type UserCreateManyLinked_partnerInputEnvelope = {
    data: UserCreateManyLinked_partnerInput | UserCreateManyLinked_partnerInput[]
    skipDuplicates?: boolean
  }

  export type SpendingLimitCreateWithoutOwnerInput = {
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    alert_at_percent?: number
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: Date | string
    target_user: UserCreateNestedOneWithoutLimits_receivedInput
  }

  export type SpendingLimitUncheckedCreateWithoutOwnerInput = {
    id?: number
    target_user_id: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    alert_at_percent?: number
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: Date | string
  }

  export type SpendingLimitCreateOrConnectWithoutOwnerInput = {
    where: SpendingLimitWhereUniqueInput
    create: XOR<SpendingLimitCreateWithoutOwnerInput, SpendingLimitUncheckedCreateWithoutOwnerInput>
  }

  export type SpendingLimitCreateManyOwnerInputEnvelope = {
    data: SpendingLimitCreateManyOwnerInput | SpendingLimitCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SpendingLimitCreateWithoutTarget_userInput = {
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    alert_at_percent?: number
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutLimits_setInput
  }

  export type SpendingLimitUncheckedCreateWithoutTarget_userInput = {
    id?: number
    owner_id: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    alert_at_percent?: number
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: Date | string
  }

  export type SpendingLimitCreateOrConnectWithoutTarget_userInput = {
    where: SpendingLimitWhereUniqueInput
    create: XOR<SpendingLimitCreateWithoutTarget_userInput, SpendingLimitUncheckedCreateWithoutTarget_userInput>
  }

  export type SpendingLimitCreateManyTarget_userInputEnvelope = {
    data: SpendingLimitCreateManyTarget_userInput | SpendingLimitCreateManyTarget_userInput[]
    skipDuplicates?: boolean
  }

  export type UserHoldingCreateWithoutUserInput = {
    ticker: string
    display_name: string
    asset_type?: string
    quantity: Decimal | DecimalJsLike | number | string
    avg_cost_pkr: Decimal | DecimalJsLike | number | string
    acquired_at?: Date | string
  }

  export type UserHoldingUncheckedCreateWithoutUserInput = {
    id?: number
    ticker: string
    display_name: string
    asset_type?: string
    quantity: Decimal | DecimalJsLike | number | string
    avg_cost_pkr: Decimal | DecimalJsLike | number | string
    acquired_at?: Date | string
  }

  export type UserHoldingCreateOrConnectWithoutUserInput = {
    where: UserHoldingWhereUniqueInput
    create: XOR<UserHoldingCreateWithoutUserInput, UserHoldingUncheckedCreateWithoutUserInput>
  }

  export type UserHoldingCreateManyUserInputEnvelope = {
    data: UserHoldingCreateManyUserInput | UserHoldingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StockTradeCreateWithoutUserInput = {
    ticker: string
    display_name: string
    side: string
    quantity: Decimal | DecimalJsLike | number | string
    price_pkr: Decimal | DecimalJsLike | number | string
    total_pkr: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type StockTradeUncheckedCreateWithoutUserInput = {
    id?: number
    ticker: string
    display_name: string
    side: string
    quantity: Decimal | DecimalJsLike | number | string
    price_pkr: Decimal | DecimalJsLike | number | string
    total_pkr: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type StockTradeCreateOrConnectWithoutUserInput = {
    where: StockTradeWhereUniqueInput
    create: XOR<StockTradeCreateWithoutUserInput, StockTradeUncheckedCreateWithoutUserInput>
  }

  export type StockTradeCreateManyUserInputEnvelope = {
    data: StockTradeCreateManyUserInput | StockTradeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    user_id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    sub_category?: StringNullableFilter<"Transaction"> | string | null
    merchant?: StringNullableFilter<"Transaction"> | string | null
    transaction_date?: DateTimeFilter<"Transaction"> | Date | string
    source?: StringFilter<"Transaction"> | string
    is_recurring?: BoolFilter<"Transaction"> | boolean
    ai_confidence?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFilter<"Transaction"> | boolean
    created_at?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type BudgetUpsertWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
  }

  export type BudgetUpdateManyWithWhereWithoutUserInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutUserInput>
  }

  export type BudgetScalarWhereInput = {
    AND?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    OR?: BudgetScalarWhereInput[]
    NOT?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    id?: IntFilter<"Budget"> | number
    user_id?: IntFilter<"Budget"> | number
    category?: StringFilter<"Budget"> | string
    monthly_limit?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    month?: DateTimeFilter<"Budget"> | Date | string
    alert_at_percent?: IntFilter<"Budget"> | number
    created_at?: DateTimeFilter<"Budget"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: IntFilter<"Goal"> | number
    user_id?: IntFilter<"Goal"> | number
    title?: StringFilter<"Goal"> | string
    target_amount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFilter<"Goal"> | Date | string
    status?: StringFilter<"Goal"> | string
    created_at?: DateTimeFilter<"Goal"> | Date | string
  }

  export type AiInsightUpsertWithWhereUniqueWithoutUserInput = {
    where: AiInsightWhereUniqueInput
    update: XOR<AiInsightUpdateWithoutUserInput, AiInsightUncheckedUpdateWithoutUserInput>
    create: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput>
  }

  export type AiInsightUpdateWithWhereUniqueWithoutUserInput = {
    where: AiInsightWhereUniqueInput
    data: XOR<AiInsightUpdateWithoutUserInput, AiInsightUncheckedUpdateWithoutUserInput>
  }

  export type AiInsightUpdateManyWithWhereWithoutUserInput = {
    where: AiInsightScalarWhereInput
    data: XOR<AiInsightUpdateManyMutationInput, AiInsightUncheckedUpdateManyWithoutUserInput>
  }

  export type AiInsightScalarWhereInput = {
    AND?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
    OR?: AiInsightScalarWhereInput[]
    NOT?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
    id?: IntFilter<"AiInsight"> | number
    user_id?: IntFilter<"AiInsight"> | number
    type?: StringFilter<"AiInsight"> | string
    content_en?: StringFilter<"AiInsight"> | string
    content_ur?: StringNullableFilter<"AiInsight"> | string | null
    is_read?: BoolFilter<"AiInsight"> | boolean
    rating?: StringNullableFilter<"AiInsight"> | string | null
    generated_at?: DateTimeFilter<"AiInsight"> | Date | string
    valid_until?: DateTimeNullableFilter<"AiInsight"> | Date | string | null
  }

  export type ReportCardUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportCardWhereUniqueInput
    update: XOR<ReportCardUpdateWithoutUserInput, ReportCardUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCardCreateWithoutUserInput, ReportCardUncheckedCreateWithoutUserInput>
  }

  export type ReportCardUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportCardWhereUniqueInput
    data: XOR<ReportCardUpdateWithoutUserInput, ReportCardUncheckedUpdateWithoutUserInput>
  }

  export type ReportCardUpdateManyWithWhereWithoutUserInput = {
    where: ReportCardScalarWhereInput
    data: XOR<ReportCardUpdateManyMutationInput, ReportCardUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportCardScalarWhereInput = {
    AND?: ReportCardScalarWhereInput | ReportCardScalarWhereInput[]
    OR?: ReportCardScalarWhereInput[]
    NOT?: ReportCardScalarWhereInput | ReportCardScalarWhereInput[]
    id?: IntFilter<"ReportCard"> | number
    user_id?: IntFilter<"ReportCard"> | number
    month?: DateTimeFilter<"ReportCard"> | Date | string
    overall_grade?: StringFilter<"ReportCard"> | string
    budget_score?: IntFilter<"ReportCard"> | number
    savings_score?: IntFilter<"ReportCard"> | number
    trend_score?: IntFilter<"ReportCard"> | number
    summary_en?: StringFilter<"ReportCard"> | string
    summary_ur?: StringNullableFilter<"ReportCard"> | string | null
    created_at?: DateTimeFilter<"ReportCard"> | Date | string
  }

  export type UserOfferEventUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOfferEventWhereUniqueInput
    update: XOR<UserOfferEventUpdateWithoutUserInput, UserOfferEventUncheckedUpdateWithoutUserInput>
    create: XOR<UserOfferEventCreateWithoutUserInput, UserOfferEventUncheckedCreateWithoutUserInput>
  }

  export type UserOfferEventUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOfferEventWhereUniqueInput
    data: XOR<UserOfferEventUpdateWithoutUserInput, UserOfferEventUncheckedUpdateWithoutUserInput>
  }

  export type UserOfferEventUpdateManyWithWhereWithoutUserInput = {
    where: UserOfferEventScalarWhereInput
    data: XOR<UserOfferEventUpdateManyMutationInput, UserOfferEventUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOfferEventScalarWhereInput = {
    AND?: UserOfferEventScalarWhereInput | UserOfferEventScalarWhereInput[]
    OR?: UserOfferEventScalarWhereInput[]
    NOT?: UserOfferEventScalarWhereInput | UserOfferEventScalarWhereInput[]
    id?: IntFilter<"UserOfferEvent"> | number
    user_id?: IntFilter<"UserOfferEvent"> | number
    offer_id?: IntFilter<"UserOfferEvent"> | number
    event_type?: StringFilter<"UserOfferEvent"> | string
    spend_amount?: DecimalNullableFilter<"UserOfferEvent"> | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFilter<"UserOfferEvent"> | Date | string
  }

  export type UserUpsertWithoutPartner_ofInput = {
    update: XOR<UserUpdateWithoutPartner_ofInput, UserUncheckedUpdateWithoutPartner_ofInput>
    create: XOR<UserCreateWithoutPartner_ofInput, UserUncheckedCreateWithoutPartner_ofInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPartner_ofInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPartner_ofInput, UserUncheckedUpdateWithoutPartner_ofInput>
  }

  export type UserUpdateWithoutPartner_ofInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPartner_ofInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutLinked_partnerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLinked_partnerInput, UserUncheckedUpdateWithoutLinked_partnerInput>
    create: XOR<UserCreateWithoutLinked_partnerInput, UserUncheckedCreateWithoutLinked_partnerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLinked_partnerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLinked_partnerInput, UserUncheckedUpdateWithoutLinked_partnerInput>
  }

  export type UserUpdateManyWithWhereWithoutLinked_partnerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLinked_partnerInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    account_number?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    preferred_language?: StringFilter<"User"> | string
    monthly_income?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFilter<"User"> | boolean
    reset_token_hash?: StringNullableFilter<"User"> | string | null
    reset_token_expires?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    linked_partner_id?: IntNullableFilter<"User"> | number | null
  }

  export type SpendingLimitUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SpendingLimitWhereUniqueInput
    update: XOR<SpendingLimitUpdateWithoutOwnerInput, SpendingLimitUncheckedUpdateWithoutOwnerInput>
    create: XOR<SpendingLimitCreateWithoutOwnerInput, SpendingLimitUncheckedCreateWithoutOwnerInput>
  }

  export type SpendingLimitUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SpendingLimitWhereUniqueInput
    data: XOR<SpendingLimitUpdateWithoutOwnerInput, SpendingLimitUncheckedUpdateWithoutOwnerInput>
  }

  export type SpendingLimitUpdateManyWithWhereWithoutOwnerInput = {
    where: SpendingLimitScalarWhereInput
    data: XOR<SpendingLimitUpdateManyMutationInput, SpendingLimitUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SpendingLimitScalarWhereInput = {
    AND?: SpendingLimitScalarWhereInput | SpendingLimitScalarWhereInput[]
    OR?: SpendingLimitScalarWhereInput[]
    NOT?: SpendingLimitScalarWhereInput | SpendingLimitScalarWhereInput[]
    id?: IntFilter<"SpendingLimit"> | number
    owner_id?: IntFilter<"SpendingLimit"> | number
    target_user_id?: IntFilter<"SpendingLimit"> | number
    category?: StringFilter<"SpendingLimit"> | string
    monthly_limit?: DecimalFilter<"SpendingLimit"> | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFilter<"SpendingLimit"> | number
    is_hard_limit?: BoolFilter<"SpendingLimit"> | boolean
    is_active?: BoolFilter<"SpendingLimit"> | boolean
    created_at?: DateTimeFilter<"SpendingLimit"> | Date | string
  }

  export type SpendingLimitUpsertWithWhereUniqueWithoutTarget_userInput = {
    where: SpendingLimitWhereUniqueInput
    update: XOR<SpendingLimitUpdateWithoutTarget_userInput, SpendingLimitUncheckedUpdateWithoutTarget_userInput>
    create: XOR<SpendingLimitCreateWithoutTarget_userInput, SpendingLimitUncheckedCreateWithoutTarget_userInput>
  }

  export type SpendingLimitUpdateWithWhereUniqueWithoutTarget_userInput = {
    where: SpendingLimitWhereUniqueInput
    data: XOR<SpendingLimitUpdateWithoutTarget_userInput, SpendingLimitUncheckedUpdateWithoutTarget_userInput>
  }

  export type SpendingLimitUpdateManyWithWhereWithoutTarget_userInput = {
    where: SpendingLimitScalarWhereInput
    data: XOR<SpendingLimitUpdateManyMutationInput, SpendingLimitUncheckedUpdateManyWithoutTarget_userInput>
  }

  export type UserHoldingUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHoldingWhereUniqueInput
    update: XOR<UserHoldingUpdateWithoutUserInput, UserHoldingUncheckedUpdateWithoutUserInput>
    create: XOR<UserHoldingCreateWithoutUserInput, UserHoldingUncheckedCreateWithoutUserInput>
  }

  export type UserHoldingUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHoldingWhereUniqueInput
    data: XOR<UserHoldingUpdateWithoutUserInput, UserHoldingUncheckedUpdateWithoutUserInput>
  }

  export type UserHoldingUpdateManyWithWhereWithoutUserInput = {
    where: UserHoldingScalarWhereInput
    data: XOR<UserHoldingUpdateManyMutationInput, UserHoldingUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHoldingScalarWhereInput = {
    AND?: UserHoldingScalarWhereInput | UserHoldingScalarWhereInput[]
    OR?: UserHoldingScalarWhereInput[]
    NOT?: UserHoldingScalarWhereInput | UserHoldingScalarWhereInput[]
    id?: IntFilter<"UserHolding"> | number
    user_id?: IntFilter<"UserHolding"> | number
    ticker?: StringFilter<"UserHolding"> | string
    display_name?: StringFilter<"UserHolding"> | string
    asset_type?: StringFilter<"UserHolding"> | string
    quantity?: DecimalFilter<"UserHolding"> | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFilter<"UserHolding"> | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFilter<"UserHolding"> | Date | string
  }

  export type StockTradeUpsertWithWhereUniqueWithoutUserInput = {
    where: StockTradeWhereUniqueInput
    update: XOR<StockTradeUpdateWithoutUserInput, StockTradeUncheckedUpdateWithoutUserInput>
    create: XOR<StockTradeCreateWithoutUserInput, StockTradeUncheckedCreateWithoutUserInput>
  }

  export type StockTradeUpdateWithWhereUniqueWithoutUserInput = {
    where: StockTradeWhereUniqueInput
    data: XOR<StockTradeUpdateWithoutUserInput, StockTradeUncheckedUpdateWithoutUserInput>
  }

  export type StockTradeUpdateManyWithWhereWithoutUserInput = {
    where: StockTradeScalarWhereInput
    data: XOR<StockTradeUpdateManyMutationInput, StockTradeUncheckedUpdateManyWithoutUserInput>
  }

  export type StockTradeScalarWhereInput = {
    AND?: StockTradeScalarWhereInput | StockTradeScalarWhereInput[]
    OR?: StockTradeScalarWhereInput[]
    NOT?: StockTradeScalarWhereInput | StockTradeScalarWhereInput[]
    id?: IntFilter<"StockTrade"> | number
    user_id?: IntFilter<"StockTrade"> | number
    ticker?: StringFilter<"StockTrade"> | string
    display_name?: StringFilter<"StockTrade"> | string
    side?: StringFilter<"StockTrade"> | string
    quantity?: DecimalFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFilter<"StockTrade"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"StockTrade"> | Date | string
  }

  export type UserCreateWithoutLimits_setInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLimits_setInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLimits_setInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLimits_setInput, UserUncheckedCreateWithoutLimits_setInput>
  }

  export type UserCreateWithoutLimits_receivedInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLimits_receivedInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLimits_receivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLimits_receivedInput, UserUncheckedCreateWithoutLimits_receivedInput>
  }

  export type UserUpsertWithoutLimits_setInput = {
    update: XOR<UserUpdateWithoutLimits_setInput, UserUncheckedUpdateWithoutLimits_setInput>
    create: XOR<UserCreateWithoutLimits_setInput, UserUncheckedCreateWithoutLimits_setInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLimits_setInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLimits_setInput, UserUncheckedUpdateWithoutLimits_setInput>
  }

  export type UserUpdateWithoutLimits_setInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLimits_setInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutLimits_receivedInput = {
    update: XOR<UserUpdateWithoutLimits_receivedInput, UserUncheckedUpdateWithoutLimits_receivedInput>
    create: XOR<UserCreateWithoutLimits_receivedInput, UserUncheckedCreateWithoutLimits_receivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLimits_receivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLimits_receivedInput, UserUncheckedUpdateWithoutLimits_receivedInput>
  }

  export type UserUpdateWithoutLimits_receivedInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLimits_receivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBudgetsInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBudgetsInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBudgetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
  }

  export type UserUpsertWithoutBudgetsInput = {
    update: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserUpdateWithoutBudgetsInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGoalsInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHoldingsInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHoldingsInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHoldingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
  }

  export type UserUpsertWithoutHoldingsInput = {
    update: XOR<UserUpdateWithoutHoldingsInput, UserUncheckedUpdateWithoutHoldingsInput>
    create: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHoldingsInput, UserUncheckedUpdateWithoutHoldingsInput>
  }

  export type UserUpdateWithoutHoldingsInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHoldingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStock_tradesInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStock_tradesInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStock_tradesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStock_tradesInput, UserUncheckedCreateWithoutStock_tradesInput>
  }

  export type UserUpsertWithoutStock_tradesInput = {
    update: XOR<UserUpdateWithoutStock_tradesInput, UserUncheckedUpdateWithoutStock_tradesInput>
    create: XOR<UserCreateWithoutStock_tradesInput, UserUncheckedCreateWithoutStock_tradesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStock_tradesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStock_tradesInput, UserUncheckedUpdateWithoutStock_tradesInput>
  }

  export type UserUpdateWithoutStock_tradesInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStock_tradesInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAi_insightsInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAi_insightsInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAi_insightsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAi_insightsInput, UserUncheckedCreateWithoutAi_insightsInput>
  }

  export type UserUpsertWithoutAi_insightsInput = {
    update: XOR<UserUpdateWithoutAi_insightsInput, UserUncheckedUpdateWithoutAi_insightsInput>
    create: XOR<UserCreateWithoutAi_insightsInput, UserUncheckedCreateWithoutAi_insightsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAi_insightsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAi_insightsInput, UserUncheckedUpdateWithoutAi_insightsInput>
  }

  export type UserUpdateWithoutAi_insightsInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAi_insightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReport_cardsInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReport_cardsInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    offer_events?: UserOfferEventUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReport_cardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReport_cardsInput, UserUncheckedCreateWithoutReport_cardsInput>
  }

  export type UserUpsertWithoutReport_cardsInput = {
    update: XOR<UserUpdateWithoutReport_cardsInput, UserUncheckedUpdateWithoutReport_cardsInput>
    create: XOR<UserCreateWithoutReport_cardsInput, UserUncheckedCreateWithoutReport_cardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReport_cardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReport_cardsInput, UserUncheckedUpdateWithoutReport_cardsInput>
  }

  export type UserUpdateWithoutReport_cardsInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReport_cardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OfferCreateWithoutPartnerInput = {
    title: string
    title_ur?: string | null
    description: string
    target_category: string
    min_monthly_spend: Decimal | DecimalJsLike | number | string
    trigger_event: string
    promo_code?: string | null
    redemption_type?: string
    deeplink_url?: string | null
    valid_from: Date | string
    valid_until: Date | string
    max_redemptions?: number
    current_redemptions?: number
    is_active?: boolean
    created_at?: Date | string
    events?: UserOfferEventCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutPartnerInput = {
    id?: number
    title: string
    title_ur?: string | null
    description: string
    target_category: string
    min_monthly_spend: Decimal | DecimalJsLike | number | string
    trigger_event: string
    promo_code?: string | null
    redemption_type?: string
    deeplink_url?: string | null
    valid_from: Date | string
    valid_until: Date | string
    max_redemptions?: number
    current_redemptions?: number
    is_active?: boolean
    created_at?: Date | string
    events?: UserOfferEventUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutPartnerInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutPartnerInput, OfferUncheckedCreateWithoutPartnerInput>
  }

  export type OfferCreateManyPartnerInputEnvelope = {
    data: OfferCreateManyPartnerInput | OfferCreateManyPartnerInput[]
    skipDuplicates?: boolean
  }

  export type OfferUpsertWithWhereUniqueWithoutPartnerInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutPartnerInput, OfferUncheckedUpdateWithoutPartnerInput>
    create: XOR<OfferCreateWithoutPartnerInput, OfferUncheckedCreateWithoutPartnerInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutPartnerInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutPartnerInput, OfferUncheckedUpdateWithoutPartnerInput>
  }

  export type OfferUpdateManyWithWhereWithoutPartnerInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutPartnerInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: IntFilter<"Offer"> | number
    partner_id?: IntFilter<"Offer"> | number
    title?: StringFilter<"Offer"> | string
    title_ur?: StringNullableFilter<"Offer"> | string | null
    description?: StringFilter<"Offer"> | string
    target_category?: StringFilter<"Offer"> | string
    min_monthly_spend?: DecimalFilter<"Offer"> | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFilter<"Offer"> | string
    promo_code?: StringNullableFilter<"Offer"> | string | null
    redemption_type?: StringFilter<"Offer"> | string
    deeplink_url?: StringNullableFilter<"Offer"> | string | null
    valid_from?: DateTimeFilter<"Offer"> | Date | string
    valid_until?: DateTimeFilter<"Offer"> | Date | string
    max_redemptions?: IntFilter<"Offer"> | number
    current_redemptions?: IntFilter<"Offer"> | number
    is_active?: BoolFilter<"Offer"> | boolean
    created_at?: DateTimeFilter<"Offer"> | Date | string
  }

  export type OfferPartnerCreateWithoutOffersInput = {
    company_name: string
    category: string
    billing_model: string
    rate_pkr: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
  }

  export type OfferPartnerUncheckedCreateWithoutOffersInput = {
    id?: number
    company_name: string
    category: string
    billing_model: string
    rate_pkr: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
  }

  export type OfferPartnerCreateOrConnectWithoutOffersInput = {
    where: OfferPartnerWhereUniqueInput
    create: XOR<OfferPartnerCreateWithoutOffersInput, OfferPartnerUncheckedCreateWithoutOffersInput>
  }

  export type UserOfferEventCreateWithoutOfferInput = {
    event_type: string
    spend_amount?: Decimal | DecimalJsLike | number | string | null
    event_at?: Date | string
    user: UserCreateNestedOneWithoutOffer_eventsInput
  }

  export type UserOfferEventUncheckedCreateWithoutOfferInput = {
    id?: number
    user_id: number
    event_type: string
    spend_amount?: Decimal | DecimalJsLike | number | string | null
    event_at?: Date | string
  }

  export type UserOfferEventCreateOrConnectWithoutOfferInput = {
    where: UserOfferEventWhereUniqueInput
    create: XOR<UserOfferEventCreateWithoutOfferInput, UserOfferEventUncheckedCreateWithoutOfferInput>
  }

  export type UserOfferEventCreateManyOfferInputEnvelope = {
    data: UserOfferEventCreateManyOfferInput | UserOfferEventCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type OfferPartnerUpsertWithoutOffersInput = {
    update: XOR<OfferPartnerUpdateWithoutOffersInput, OfferPartnerUncheckedUpdateWithoutOffersInput>
    create: XOR<OfferPartnerCreateWithoutOffersInput, OfferPartnerUncheckedCreateWithoutOffersInput>
    where?: OfferPartnerWhereInput
  }

  export type OfferPartnerUpdateToOneWithWhereWithoutOffersInput = {
    where?: OfferPartnerWhereInput
    data: XOR<OfferPartnerUpdateWithoutOffersInput, OfferPartnerUncheckedUpdateWithoutOffersInput>
  }

  export type OfferPartnerUpdateWithoutOffersInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    billing_model?: StringFieldUpdateOperationsInput | string
    rate_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferPartnerUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    billing_model?: StringFieldUpdateOperationsInput | string
    rate_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOfferEventUpsertWithWhereUniqueWithoutOfferInput = {
    where: UserOfferEventWhereUniqueInput
    update: XOR<UserOfferEventUpdateWithoutOfferInput, UserOfferEventUncheckedUpdateWithoutOfferInput>
    create: XOR<UserOfferEventCreateWithoutOfferInput, UserOfferEventUncheckedCreateWithoutOfferInput>
  }

  export type UserOfferEventUpdateWithWhereUniqueWithoutOfferInput = {
    where: UserOfferEventWhereUniqueInput
    data: XOR<UserOfferEventUpdateWithoutOfferInput, UserOfferEventUncheckedUpdateWithoutOfferInput>
  }

  export type UserOfferEventUpdateManyWithWhereWithoutOfferInput = {
    where: UserOfferEventScalarWhereInput
    data: XOR<UserOfferEventUpdateManyMutationInput, UserOfferEventUncheckedUpdateManyWithoutOfferInput>
  }

  export type UserCreateWithoutOffer_eventsInput = {
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightCreateNestedManyWithoutUserInput
    report_cards?: ReportCardCreateNestedManyWithoutUserInput
    linked_partner?: UserCreateNestedOneWithoutPartner_ofInput
    partner_of?: UserCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOffer_eventsInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
    linked_partner_id?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    ai_insights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    report_cards?: ReportCardUncheckedCreateNestedManyWithoutUserInput
    partner_of?: UserUncheckedCreateNestedManyWithoutLinked_partnerInput
    limits_set?: SpendingLimitUncheckedCreateNestedManyWithoutOwnerInput
    limits_received?: SpendingLimitUncheckedCreateNestedManyWithoutTarget_userInput
    holdings?: UserHoldingUncheckedCreateNestedManyWithoutUserInput
    stock_trades?: StockTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOffer_eventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOffer_eventsInput, UserUncheckedCreateWithoutOffer_eventsInput>
  }

  export type OfferCreateWithoutEventsInput = {
    title: string
    title_ur?: string | null
    description: string
    target_category: string
    min_monthly_spend: Decimal | DecimalJsLike | number | string
    trigger_event: string
    promo_code?: string | null
    redemption_type?: string
    deeplink_url?: string | null
    valid_from: Date | string
    valid_until: Date | string
    max_redemptions?: number
    current_redemptions?: number
    is_active?: boolean
    created_at?: Date | string
    partner: OfferPartnerCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutEventsInput = {
    id?: number
    partner_id: number
    title: string
    title_ur?: string | null
    description: string
    target_category: string
    min_monthly_spend: Decimal | DecimalJsLike | number | string
    trigger_event: string
    promo_code?: string | null
    redemption_type?: string
    deeplink_url?: string | null
    valid_from: Date | string
    valid_until: Date | string
    max_redemptions?: number
    current_redemptions?: number
    is_active?: boolean
    created_at?: Date | string
  }

  export type OfferCreateOrConnectWithoutEventsInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutEventsInput, OfferUncheckedCreateWithoutEventsInput>
  }

  export type UserUpsertWithoutOffer_eventsInput = {
    update: XOR<UserUpdateWithoutOffer_eventsInput, UserUncheckedUpdateWithoutOffer_eventsInput>
    create: XOR<UserCreateWithoutOffer_eventsInput, UserUncheckedCreateWithoutOffer_eventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOffer_eventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOffer_eventsInput, UserUncheckedUpdateWithoutOffer_eventsInput>
  }

  export type UserUpdateWithoutOffer_eventsInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    linked_partner?: UserUpdateOneWithoutPartner_ofNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOffer_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linked_partner_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OfferUpsertWithoutEventsInput = {
    update: XOR<OfferUpdateWithoutEventsInput, OfferUncheckedUpdateWithoutEventsInput>
    create: XOR<OfferCreateWithoutEventsInput, OfferUncheckedCreateWithoutEventsInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutEventsInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutEventsInput, OfferUncheckedUpdateWithoutEventsInput>
  }

  export type OfferUpdateWithoutEventsInput = {
    title?: StringFieldUpdateOperationsInput | string
    title_ur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    target_category?: StringFieldUpdateOperationsInput | string
    min_monthly_spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    redemption_type?: StringFieldUpdateOperationsInput | string
    deeplink_url?: NullableStringFieldUpdateOperationsInput | string | null
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    max_redemptions?: IntFieldUpdateOperationsInput | number
    current_redemptions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: OfferPartnerUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_ur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    target_category?: StringFieldUpdateOperationsInput | string
    min_monthly_spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    redemption_type?: StringFieldUpdateOperationsInput | string
    deeplink_url?: NullableStringFieldUpdateOperationsInput | string | null
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    max_redemptions?: IntFieldUpdateOperationsInput | number
    current_redemptions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category?: string
    sub_category?: string | null
    merchant?: string | null
    transaction_date: Date | string
    source?: string
    is_recurring?: boolean
    ai_confidence?: Decimal | DecimalJsLike | number | string | null
    user_corrected?: boolean
    created_at?: Date | string
  }

  export type BudgetCreateManyUserInput = {
    id?: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    month: Date | string
    alert_at_percent?: number
    created_at?: Date | string
  }

  export type GoalCreateManyUserInput = {
    id?: number
    title: string
    target_amount: Decimal | DecimalJsLike | number | string
    saved_amount?: Decimal | DecimalJsLike | number | string
    deadline: Date | string
    status?: string
    created_at?: Date | string
  }

  export type AiInsightCreateManyUserInput = {
    id?: number
    type: string
    content_en: string
    content_ur?: string | null
    is_read?: boolean
    rating?: string | null
    generated_at?: Date | string
    valid_until?: Date | string | null
  }

  export type ReportCardCreateManyUserInput = {
    id?: number
    month: Date | string
    overall_grade: string
    budget_score: number
    savings_score: number
    trend_score: number
    summary_en: string
    summary_ur?: string | null
    created_at?: Date | string
  }

  export type UserOfferEventCreateManyUserInput = {
    id?: number
    offer_id: number
    event_type: string
    spend_amount?: Decimal | DecimalJsLike | number | string | null
    event_at?: Date | string
  }

  export type UserCreateManyLinked_partnerInput = {
    id?: number
    account_number?: string | null
    name: string
    email: string
    password_hash: string
    phone?: string | null
    preferred_language?: string
    monthly_income?: Decimal | DecimalJsLike | number | string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    account_balance?: Decimal | DecimalJsLike | number | string
    is_admin?: boolean
    reset_token_hash?: string | null
    reset_token_expires?: Date | string | null
    created_at?: Date | string
    last_login?: Date | string | null
  }

  export type SpendingLimitCreateManyOwnerInput = {
    id?: number
    target_user_id: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    alert_at_percent?: number
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: Date | string
  }

  export type SpendingLimitCreateManyTarget_userInput = {
    id?: number
    owner_id: number
    category: string
    monthly_limit: Decimal | DecimalJsLike | number | string
    alert_at_percent?: number
    is_hard_limit?: boolean
    is_active?: boolean
    created_at?: Date | string
  }

  export type UserHoldingCreateManyUserInput = {
    id?: number
    ticker: string
    display_name: string
    asset_type?: string
    quantity: Decimal | DecimalJsLike | number | string
    avg_cost_pkr: Decimal | DecimalJsLike | number | string
    acquired_at?: Date | string
  }

  export type StockTradeCreateManyUserInput = {
    id?: number
    ticker: string
    display_name: string
    side: string
    quantity: Decimal | DecimalJsLike | number | string
    price_pkr: Decimal | DecimalJsLike | number | string
    total_pkr: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sub_category?: NullableStringFieldUpdateOperationsInput | string | null
    merchant?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    ai_confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sub_category?: NullableStringFieldUpdateOperationsInput | string | null
    merchant?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    ai_confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sub_category?: NullableStringFieldUpdateOperationsInput | string | null
    merchant?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    ai_confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user_corrected?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUpdateWithoutUserInput = {
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saved_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInsightUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_ur?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AiInsightUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_ur?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AiInsightUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_ur?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCardUpdateWithoutUserInput = {
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    overall_grade?: StringFieldUpdateOperationsInput | string
    budget_score?: IntFieldUpdateOperationsInput | number
    savings_score?: IntFieldUpdateOperationsInput | number
    trend_score?: IntFieldUpdateOperationsInput | number
    summary_en?: StringFieldUpdateOperationsInput | string
    summary_ur?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    overall_grade?: StringFieldUpdateOperationsInput | string
    budget_score?: IntFieldUpdateOperationsInput | number
    savings_score?: IntFieldUpdateOperationsInput | number
    trend_score?: IntFieldUpdateOperationsInput | number
    summary_en?: StringFieldUpdateOperationsInput | string
    summary_ur?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    overall_grade?: StringFieldUpdateOperationsInput | string
    budget_score?: IntFieldUpdateOperationsInput | number
    savings_score?: IntFieldUpdateOperationsInput | number
    trend_score?: IntFieldUpdateOperationsInput | number
    summary_en?: StringFieldUpdateOperationsInput | string
    summary_ur?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOfferEventUpdateWithoutUserInput = {
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    offer?: OfferUpdateOneRequiredWithoutEventsNestedInput
  }

  export type UserOfferEventUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    offer_id?: IntFieldUpdateOperationsInput | number
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOfferEventUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    offer_id?: IntFieldUpdateOperationsInput | number
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutLinked_partnerInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUpdateManyWithoutUserNestedInput
    partner_of?: UserUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinked_partnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    ai_insights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    report_cards?: ReportCardUncheckedUpdateManyWithoutUserNestedInput
    offer_events?: UserOfferEventUncheckedUpdateManyWithoutUserNestedInput
    partner_of?: UserUncheckedUpdateManyWithoutLinked_partnerNestedInput
    limits_set?: SpendingLimitUncheckedUpdateManyWithoutOwnerNestedInput
    limits_received?: SpendingLimitUncheckedUpdateManyWithoutTarget_userNestedInput
    holdings?: UserHoldingUncheckedUpdateManyWithoutUserNestedInput
    stock_trades?: StockTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLinked_partnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_language?: StringFieldUpdateOperationsInput | string
    monthly_income?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    account_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    reset_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SpendingLimitUpdateWithoutOwnerInput = {
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    target_user?: UserUpdateOneRequiredWithoutLimits_receivedNestedInput
  }

  export type SpendingLimitUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    target_user_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendingLimitUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    target_user_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendingLimitUpdateWithoutTarget_userInput = {
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLimits_setNestedInput
  }

  export type SpendingLimitUncheckedUpdateWithoutTarget_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpendingLimitUncheckedUpdateManyWithoutTarget_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    monthly_limit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alert_at_percent?: IntFieldUpdateOperationsInput | number
    is_hard_limit?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHoldingUpdateWithoutUserInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHoldingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHoldingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    asset_type?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avg_cost_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acquired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockTradeUpdateWithoutUserInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockTradeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockTradeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pkr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateManyPartnerInput = {
    id?: number
    title: string
    title_ur?: string | null
    description: string
    target_category: string
    min_monthly_spend: Decimal | DecimalJsLike | number | string
    trigger_event: string
    promo_code?: string | null
    redemption_type?: string
    deeplink_url?: string | null
    valid_from: Date | string
    valid_until: Date | string
    max_redemptions?: number
    current_redemptions?: number
    is_active?: boolean
    created_at?: Date | string
  }

  export type OfferUpdateWithoutPartnerInput = {
    title?: StringFieldUpdateOperationsInput | string
    title_ur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    target_category?: StringFieldUpdateOperationsInput | string
    min_monthly_spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    redemption_type?: StringFieldUpdateOperationsInput | string
    deeplink_url?: NullableStringFieldUpdateOperationsInput | string | null
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    max_redemptions?: IntFieldUpdateOperationsInput | number
    current_redemptions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: UserOfferEventUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutPartnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_ur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    target_category?: StringFieldUpdateOperationsInput | string
    min_monthly_spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    redemption_type?: StringFieldUpdateOperationsInput | string
    deeplink_url?: NullableStringFieldUpdateOperationsInput | string | null
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    max_redemptions?: IntFieldUpdateOperationsInput | number
    current_redemptions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: UserOfferEventUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutPartnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    title_ur?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    target_category?: StringFieldUpdateOperationsInput | string
    min_monthly_spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trigger_event?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    redemption_type?: StringFieldUpdateOperationsInput | string
    deeplink_url?: NullableStringFieldUpdateOperationsInput | string | null
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_until?: DateTimeFieldUpdateOperationsInput | Date | string
    max_redemptions?: IntFieldUpdateOperationsInput | number
    current_redemptions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOfferEventCreateManyOfferInput = {
    id?: number
    user_id: number
    event_type: string
    spend_amount?: Decimal | DecimalJsLike | number | string | null
    event_at?: Date | string
  }

  export type UserOfferEventUpdateWithoutOfferInput = {
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOffer_eventsNestedInput
  }

  export type UserOfferEventUncheckedUpdateWithoutOfferInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOfferEventUncheckedUpdateManyWithoutOfferInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_type?: StringFieldUpdateOperationsInput | string
    spend_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    event_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferPartnerCountOutputTypeDefaultArgs instead
     */
    export type OfferPartnerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferPartnerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferCountOutputTypeDefaultArgs instead
     */
    export type OfferCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpendingLimitDefaultArgs instead
     */
    export type SpendingLimitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpendingLimitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BudgetDefaultArgs instead
     */
    export type BudgetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BudgetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoalDefaultArgs instead
     */
    export type GoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarketCacheDefaultArgs instead
     */
    export type MarketCacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketCacheDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserHoldingDefaultArgs instead
     */
    export type UserHoldingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserHoldingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockTradeDefaultArgs instead
     */
    export type StockTradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockTradeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AiInsightDefaultArgs instead
     */
    export type AiInsightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiInsightDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReportCardDefaultArgs instead
     */
    export type ReportCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReportCardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferPartnerDefaultArgs instead
     */
    export type OfferPartnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferPartnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfferDefaultArgs instead
     */
    export type OfferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfferDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserOfferEventDefaultArgs instead
     */
    export type UserOfferEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserOfferEventDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}