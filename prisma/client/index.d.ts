
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  username: string
  email: string
  role: Role
}

/**
 * Model Lecturer
 * 
 */
export type Lecturer = {
  id: number
  name: string
  image: string | null
  nip: string
  bio: string | null
  userId: number
  isActive: boolean
}

/**
 * Model Student
 * 
 */
export type Student = {
  id: number
  name: string
  nrp: string
  image: string | null
  bio: string | null
  userId: number
  isActive: boolean
}

/**
 * Model Project
 * 
 */
export type Project = {
  id: number
  title: string
  description: string
  abstract: string
  documents: Prisma.JsonValue | null
  images: string[]
  video: string | null
  sourceCode: string | null
  url: string | null
  isActive: boolean
  type: ProjectType
  studentId: number
}

/**
 * Model Backend
 * 
 */
export type Backend = {
  id: number
  isActive: boolean
  sourceCode: string
  url: string
  description: string
  projectId: number
}

/**
 * Model Database
 * 
 */
export type Database = {
  id: number
  isActive: boolean
  url: string
  dbname: string
  username: string
  password: string
  description: string
  projectId: number
}

/**
 * Model Comment
 * 
 */
export type Comment = {
  id: number
  comment: string
  username: string
  projectId: number | null
  createdAt: Date
}

/**
 * Model TechList
 * 
 */
export type TechList = {
  id: number
  name: string
}

/**
 * Model ResearchField
 * 
 */
export type ResearchField = {
  id: number
  name: string
}

/**
 * Model ResearchMethod
 * 
 */
export type ResearchMethod = {
  id: number
  name: string
}

/**
 * Model PortList
 * 
 */
export type PortList = {
  id: number
  port: number
  status: boolean
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ProjectType: {
  Generals: 'Generals',
  StaticWeb: 'StaticWeb',
  SelfHostedWeb: 'SelfHostedWeb'
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType]


export const Role: {
  Admin: 'Admin',
  Student: 'Student',
  Lecturer: 'Lecturer',
  Guest: 'Guest'
};

export type Role = (typeof Role)[keyof typeof Role]


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.lecturer`: Exposes CRUD operations for the **Lecturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecturers
    * const lecturers = await prisma.lecturer.findMany()
    * ```
    */
  get lecturer(): Prisma.LecturerDelegate<GlobalReject>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<GlobalReject>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.backend`: Exposes CRUD operations for the **Backend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Backends
    * const backends = await prisma.backend.findMany()
    * ```
    */
  get backend(): Prisma.BackendDelegate<GlobalReject>;

  /**
   * `prisma.database`: Exposes CRUD operations for the **Database** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Databases
    * const databases = await prisma.database.findMany()
    * ```
    */
  get database(): Prisma.DatabaseDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.techList`: Exposes CRUD operations for the **TechList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechLists
    * const techLists = await prisma.techList.findMany()
    * ```
    */
  get techList(): Prisma.TechListDelegate<GlobalReject>;

  /**
   * `prisma.researchField`: Exposes CRUD operations for the **ResearchField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearchFields
    * const researchFields = await prisma.researchField.findMany()
    * ```
    */
  get researchField(): Prisma.ResearchFieldDelegate<GlobalReject>;

  /**
   * `prisma.researchMethod`: Exposes CRUD operations for the **ResearchMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearchMethods
    * const researchMethods = await prisma.researchMethod.findMany()
    * ```
    */
  get researchMethod(): Prisma.ResearchMethodDelegate<GlobalReject>;

  /**
   * `prisma.portList`: Exposes CRUD operations for the **PortList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortLists
    * const portLists = await prisma.portList.findMany()
    * ```
    */
  get portList(): Prisma.PortListDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 4.6.0
   * Query Engine version: 2e719efb80b56a3f32d18a62489de95bb9c130e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Lecturer: 'Lecturer',
    Student: 'Student',
    Project: 'Project',
    Backend: 'Backend',
    Database: 'Database',
    Comment: 'Comment',
    TechList: 'TechList',
    ResearchField: 'ResearchField',
    ResearchMethod: 'ResearchMethod',
    PortList: 'PortList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LecturerCountOutputType
   */


  export type LecturerCountOutputType = {
    project: number
  }

  export type LecturerCountOutputTypeSelect = {
    project?: boolean
  }

  export type LecturerCountOutputTypeGetPayload<S extends boolean | null | undefined | LecturerCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LecturerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LecturerCountOutputTypeArgs)
    ? LecturerCountOutputType 
    : S extends { select: any } & (LecturerCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof LecturerCountOutputType ? LecturerCountOutputType[P] : never
  } 
      : LecturerCountOutputType




  // Custom InputTypes

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LecturerCountOutputType
     * 
    **/
    select?: LecturerCountOutputTypeSelect | null
  }



  /**
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    tech: number
    researchFields: number
    methods: number
    lecturers: number
    comments: number
  }

  export type ProjectCountOutputTypeSelect = {
    tech?: boolean
    researchFields?: boolean
    methods?: boolean
    lecturers?: boolean
    comments?: boolean
  }

  export type ProjectCountOutputTypeGetPayload<S extends boolean | null | undefined | ProjectCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProjectCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProjectCountOutputTypeArgs)
    ? ProjectCountOutputType 
    : S extends { select: any } & (ProjectCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProjectCountOutputType ? ProjectCountOutputType[P] : never
  } 
      : ProjectCountOutputType




  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     * 
    **/
    select?: ProjectCountOutputTypeSelect | null
  }



  /**
   * Count Type TechListCountOutputType
   */


  export type TechListCountOutputType = {
    Project: number
  }

  export type TechListCountOutputTypeSelect = {
    Project?: boolean
  }

  export type TechListCountOutputTypeGetPayload<S extends boolean | null | undefined | TechListCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TechListCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TechListCountOutputTypeArgs)
    ? TechListCountOutputType 
    : S extends { select: any } & (TechListCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TechListCountOutputType ? TechListCountOutputType[P] : never
  } 
      : TechListCountOutputType




  // Custom InputTypes

  /**
   * TechListCountOutputType without action
   */
  export type TechListCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TechListCountOutputType
     * 
    **/
    select?: TechListCountOutputTypeSelect | null
  }



  /**
   * Count Type ResearchFieldCountOutputType
   */


  export type ResearchFieldCountOutputType = {
    Project: number
  }

  export type ResearchFieldCountOutputTypeSelect = {
    Project?: boolean
  }

  export type ResearchFieldCountOutputTypeGetPayload<S extends boolean | null | undefined | ResearchFieldCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ResearchFieldCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ResearchFieldCountOutputTypeArgs)
    ? ResearchFieldCountOutputType 
    : S extends { select: any } & (ResearchFieldCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ResearchFieldCountOutputType ? ResearchFieldCountOutputType[P] : never
  } 
      : ResearchFieldCountOutputType




  // Custom InputTypes

  /**
   * ResearchFieldCountOutputType without action
   */
  export type ResearchFieldCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ResearchFieldCountOutputType
     * 
    **/
    select?: ResearchFieldCountOutputTypeSelect | null
  }



  /**
   * Count Type ResearchMethodCountOutputType
   */


  export type ResearchMethodCountOutputType = {
    Project: number
  }

  export type ResearchMethodCountOutputTypeSelect = {
    Project?: boolean
  }

  export type ResearchMethodCountOutputTypeGetPayload<S extends boolean | null | undefined | ResearchMethodCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ResearchMethodCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ResearchMethodCountOutputTypeArgs)
    ? ResearchMethodCountOutputType 
    : S extends { select: any } & (ResearchMethodCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ResearchMethodCountOutputType ? ResearchMethodCountOutputType[P] : never
  } 
      : ResearchMethodCountOutputType




  // Custom InputTypes

  /**
   * ResearchMethodCountOutputType without action
   */
  export type ResearchMethodCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ResearchMethodCountOutputType
     * 
    **/
    select?: ResearchMethodCountOutputTypeSelect | null
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    role: Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    role: Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
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
    username: string
    email: string
    role: Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    studentAccount?: boolean | StudentArgs
    lecturerAccount?: boolean | LecturerArgs
  }


  export type UserInclude = {
    studentAccount?: boolean | StudentArgs
    lecturerAccount?: boolean | LecturerArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'studentAccount' ? StudentGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'lecturerAccount' ? LecturerGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'studentAccount' ? StudentGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'lecturerAccount' ? LecturerGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    studentAccount<T extends StudentArgs= {}>(args?: Subset<T, StudentArgs>): Prisma__StudentClient<StudentGetPayload<T> | Null>;

    lecturerAccount<T extends LecturerArgs= {}>(args?: Subset<T, LecturerArgs>): Prisma__LecturerClient<LecturerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Lecturer
   */


  export type AggregateLecturer = {
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  export type LecturerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LecturerSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LecturerMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    nip: string | null
    bio: string | null
    userId: number | null
    isActive: boolean | null
  }

  export type LecturerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    nip: string | null
    bio: string | null
    userId: number | null
    isActive: boolean | null
  }

  export type LecturerCountAggregateOutputType = {
    id: number
    name: number
    image: number
    nip: number
    bio: number
    userId: number
    isActive: number
    _all: number
  }


  export type LecturerAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LecturerSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LecturerMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    nip?: true
    bio?: true
    userId?: true
    isActive?: true
  }

  export type LecturerMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    nip?: true
    bio?: true
    userId?: true
    isActive?: true
  }

  export type LecturerCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    nip?: true
    bio?: true
    userId?: true
    isActive?: true
    _all?: true
  }

  export type LecturerAggregateArgs = {
    /**
     * Filter which Lecturer to aggregate.
     * 
    **/
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     * 
    **/
    orderBy?: Enumerable<LecturerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lecturers
    **/
    _count?: true | LecturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecturerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecturerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturerMaxAggregateInputType
  }

  export type GetLecturerAggregateType<T extends LecturerAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturer[P]>
      : GetScalarType<T[P], AggregateLecturer[P]>
  }




  export type LecturerGroupByArgs = {
    where?: LecturerWhereInput
    orderBy?: Enumerable<LecturerOrderByWithAggregationInput>
    by: Array<LecturerScalarFieldEnum>
    having?: LecturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturerCountAggregateInputType | true
    _avg?: LecturerAvgAggregateInputType
    _sum?: LecturerSumAggregateInputType
    _min?: LecturerMinAggregateInputType
    _max?: LecturerMaxAggregateInputType
  }


  export type LecturerGroupByOutputType = {
    id: number
    name: string
    image: string | null
    nip: string
    bio: string | null
    userId: number
    isActive: boolean
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  type GetLecturerGroupByPayload<T extends LecturerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LecturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturerGroupByOutputType[P]>
            : GetScalarType<T[P], LecturerGroupByOutputType[P]>
        }
      >
    >


  export type LecturerSelect = {
    id?: boolean
    name?: boolean
    image?: boolean
    nip?: boolean
    bio?: boolean
    project?: boolean | ProjectFindManyArgs
    userId?: boolean
    user?: boolean | UserArgs
    isActive?: boolean
    _count?: boolean | LecturerCountOutputTypeArgs
  }


  export type LecturerInclude = {
    project?: boolean | ProjectFindManyArgs
    user?: boolean | UserArgs
    _count?: boolean | LecturerCountOutputTypeArgs
  } 

  export type LecturerGetPayload<S extends boolean | null | undefined | LecturerArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Lecturer :
    S extends undefined ? never :
    S extends { include: any } & (LecturerArgs | LecturerFindManyArgs)
    ? Lecturer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? Array < ProjectGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends '_count' ? LecturerCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (LecturerArgs | LecturerFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? Array < ProjectGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends '_count' ? LecturerCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Lecturer ? Lecturer[P] : never
  } 
      : Lecturer


  type LecturerCountArgs = Merge<
    Omit<LecturerFindManyArgs, 'select' | 'include'> & {
      select?: LecturerCountAggregateInputType | true
    }
  >

  export interface LecturerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Lecturer that matches the filter.
     * @param {LecturerFindUniqueArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LecturerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LecturerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Lecturer'> extends True ? Prisma__LecturerClient<LecturerGetPayload<T>> : Prisma__LecturerClient<LecturerGetPayload<T> | null, null>

    /**
     * Find the first Lecturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LecturerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LecturerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Lecturer'> extends True ? Prisma__LecturerClient<LecturerGetPayload<T>> : Prisma__LecturerClient<LecturerGetPayload<T> | null, null>

    /**
     * Find zero or more Lecturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecturers
     * const lecturers = await prisma.lecturer.findMany()
     * 
     * // Get first 10 Lecturers
     * const lecturers = await prisma.lecturer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LecturerFindManyArgs>(
      args?: SelectSubset<T, LecturerFindManyArgs>
    ): PrismaPromise<Array<LecturerGetPayload<T>>>

    /**
     * Create a Lecturer.
     * @param {LecturerCreateArgs} args - Arguments to create a Lecturer.
     * @example
     * // Create one Lecturer
     * const Lecturer = await prisma.lecturer.create({
     *   data: {
     *     // ... data to create a Lecturer
     *   }
     * })
     * 
    **/
    create<T extends LecturerCreateArgs>(
      args: SelectSubset<T, LecturerCreateArgs>
    ): Prisma__LecturerClient<LecturerGetPayload<T>>

    /**
     * Create many Lecturers.
     *     @param {LecturerCreateManyArgs} args - Arguments to create many Lecturers.
     *     @example
     *     // Create many Lecturers
     *     const lecturer = await prisma.lecturer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LecturerCreateManyArgs>(
      args?: SelectSubset<T, LecturerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Lecturer.
     * @param {LecturerDeleteArgs} args - Arguments to delete one Lecturer.
     * @example
     * // Delete one Lecturer
     * const Lecturer = await prisma.lecturer.delete({
     *   where: {
     *     // ... filter to delete one Lecturer
     *   }
     * })
     * 
    **/
    delete<T extends LecturerDeleteArgs>(
      args: SelectSubset<T, LecturerDeleteArgs>
    ): Prisma__LecturerClient<LecturerGetPayload<T>>

    /**
     * Update one Lecturer.
     * @param {LecturerUpdateArgs} args - Arguments to update one Lecturer.
     * @example
     * // Update one Lecturer
     * const lecturer = await prisma.lecturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LecturerUpdateArgs>(
      args: SelectSubset<T, LecturerUpdateArgs>
    ): Prisma__LecturerClient<LecturerGetPayload<T>>

    /**
     * Delete zero or more Lecturers.
     * @param {LecturerDeleteManyArgs} args - Arguments to filter Lecturers to delete.
     * @example
     * // Delete a few Lecturers
     * const { count } = await prisma.lecturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LecturerDeleteManyArgs>(
      args?: SelectSubset<T, LecturerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecturers
     * const lecturer = await prisma.lecturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LecturerUpdateManyArgs>(
      args: SelectSubset<T, LecturerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Lecturer.
     * @param {LecturerUpsertArgs} args - Arguments to update or create a Lecturer.
     * @example
     * // Update or create a Lecturer
     * const lecturer = await prisma.lecturer.upsert({
     *   create: {
     *     // ... data to create a Lecturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecturer we want to update
     *   }
     * })
    **/
    upsert<T extends LecturerUpsertArgs>(
      args: SelectSubset<T, LecturerUpsertArgs>
    ): Prisma__LecturerClient<LecturerGetPayload<T>>

    /**
     * Find one Lecturer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {LecturerFindUniqueOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LecturerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LecturerFindUniqueOrThrowArgs>
    ): Prisma__LecturerClient<LecturerGetPayload<T>>

    /**
     * Find the first Lecturer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LecturerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LecturerFindFirstOrThrowArgs>
    ): Prisma__LecturerClient<LecturerGetPayload<T>>

    /**
     * Count the number of Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerCountArgs} args - Arguments to filter Lecturers to count.
     * @example
     * // Count the number of Lecturers
     * const count = await prisma.lecturer.count({
     *   where: {
     *     // ... the filter for the Lecturers we want to count
     *   }
     * })
    **/
    count<T extends LecturerCountArgs>(
      args?: Subset<T, LecturerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecturerAggregateArgs>(args: Subset<T, LecturerAggregateArgs>): PrismaPromise<GetLecturerAggregateType<T>>

    /**
     * Group by Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerGroupByArgs} args - Group by arguments.
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
      T extends LecturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturerGroupByArgs['orderBy'] }
        : { orderBy?: LecturerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LecturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LecturerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectFindManyArgs= {}>(args?: Subset<T, ProjectFindManyArgs>): PrismaPromise<Array<ProjectGetPayload<T>>| Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Lecturer base type for findUnique actions
   */
  export type LecturerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Lecturer
     * 
    **/
    select?: LecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LecturerInclude | null
    /**
     * Filter, which Lecturer to fetch.
     * 
    **/
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer: findUnique
   */
  export interface LecturerFindUniqueArgs extends LecturerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lecturer base type for findFirst actions
   */
  export type LecturerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Lecturer
     * 
    **/
    select?: LecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LecturerInclude | null
    /**
     * Filter, which Lecturer to fetch.
     * 
    **/
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     * 
    **/
    orderBy?: Enumerable<LecturerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     * 
    **/
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     * 
    **/
    distinct?: Enumerable<LecturerScalarFieldEnum>
  }

  /**
   * Lecturer: findFirst
   */
  export interface LecturerFindFirstArgs extends LecturerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lecturer findMany
   */
  export type LecturerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Lecturer
     * 
    **/
    select?: LecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LecturerInclude | null
    /**
     * Filter, which Lecturers to fetch.
     * 
    **/
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     * 
    **/
    orderBy?: Enumerable<LecturerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lecturers.
     * 
    **/
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LecturerScalarFieldEnum>
  }


  /**
   * Lecturer create
   */
  export type LecturerCreateArgs = {
    /**
     * Select specific fields to fetch from the Lecturer
     * 
    **/
    select?: LecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LecturerInclude | null
    /**
     * The data needed to create a Lecturer.
     * 
    **/
    data: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
  }


  /**
   * Lecturer createMany
   */
  export type LecturerCreateManyArgs = {
    /**
     * The data used to create many Lecturers.
     * 
    **/
    data: Enumerable<LecturerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Lecturer update
   */
  export type LecturerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Lecturer
     * 
    **/
    select?: LecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LecturerInclude | null
    /**
     * The data needed to update a Lecturer.
     * 
    **/
    data: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
    /**
     * Choose, which Lecturer to update.
     * 
    **/
    where: LecturerWhereUniqueInput
  }


  /**
   * Lecturer updateMany
   */
  export type LecturerUpdateManyArgs = {
    /**
     * The data used to update Lecturers.
     * 
    **/
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyInput>
    /**
     * Filter which Lecturers to update
     * 
    **/
    where?: LecturerWhereInput
  }


  /**
   * Lecturer upsert
   */
  export type LecturerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Lecturer
     * 
    **/
    select?: LecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LecturerInclude | null
    /**
     * The filter to search for the Lecturer to update in case it exists.
     * 
    **/
    where: LecturerWhereUniqueInput
    /**
     * In case the Lecturer found by the `where` argument doesn't exist, create a new Lecturer with this data.
     * 
    **/
    create: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
    /**
     * In case the Lecturer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
  }


  /**
   * Lecturer delete
   */
  export type LecturerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Lecturer
     * 
    **/
    select?: LecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LecturerInclude | null
    /**
     * Filter which Lecturer to delete.
     * 
    **/
    where: LecturerWhereUniqueInput
  }


  /**
   * Lecturer deleteMany
   */
  export type LecturerDeleteManyArgs = {
    /**
     * Filter which Lecturers to delete
     * 
    **/
    where?: LecturerWhereInput
  }


  /**
   * Lecturer: findUniqueOrThrow
   */
  export type LecturerFindUniqueOrThrowArgs = LecturerFindUniqueArgsBase
      

  /**
   * Lecturer: findFirstOrThrow
   */
  export type LecturerFindFirstOrThrowArgs = LecturerFindFirstArgsBase
      

  /**
   * Lecturer without action
   */
  export type LecturerArgs = {
    /**
     * Select specific fields to fetch from the Lecturer
     * 
    **/
    select?: LecturerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LecturerInclude | null
  }



  /**
   * Model Student
   */


  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    name: string | null
    nrp: string | null
    image: string | null
    bio: string | null
    userId: number | null
    isActive: boolean | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nrp: string | null
    image: string | null
    bio: string | null
    userId: number | null
    isActive: boolean | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    nrp: number
    image: number
    bio: number
    userId: number
    isActive: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    nrp?: true
    image?: true
    bio?: true
    userId?: true
    isActive?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    nrp?: true
    image?: true
    bio?: true
    userId?: true
    isActive?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    nrp?: true
    image?: true
    bio?: true
    userId?: true
    isActive?: true
    _all?: true
  }

  export type StudentAggregateArgs = {
    /**
     * Filter which Student to aggregate.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs = {
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithAggregationInput>
    by: Array<StudentScalarFieldEnum>
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }


  export type StudentGroupByOutputType = {
    id: number
    name: string
    nrp: string
    image: string | null
    bio: string | null
    userId: number
    isActive: boolean
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect = {
    id?: boolean
    name?: boolean
    nrp?: boolean
    image?: boolean
    bio?: boolean
    project?: boolean | ProjectArgs
    userId?: boolean
    user?: boolean | UserArgs
    isActive?: boolean
  }


  export type StudentInclude = {
    project?: boolean | ProjectArgs
    user?: boolean | UserArgs
  } 

  export type StudentGetPayload<S extends boolean | null | undefined | StudentArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Student :
    S extends undefined ? never :
    S extends { include: any } & (StudentArgs | StudentFindManyArgs)
    ? Student  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (StudentArgs | StudentFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Student ? Student[P] : never
  } 
      : Student


  type StudentCountArgs = Merge<
    Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }
  >

  export interface StudentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Student'> extends True ? Prisma__StudentClient<StudentGetPayload<T>> : Prisma__StudentClient<StudentGetPayload<T> | null, null>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Student'> extends True ? Prisma__StudentClient<StudentGetPayload<T>> : Prisma__StudentClient<StudentGetPayload<T> | null, null>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs>(
      args?: SelectSubset<T, StudentFindManyArgs>
    ): PrismaPromise<Array<StudentGetPayload<T>>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs>(
      args: SelectSubset<T, StudentCreateArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs>(
      args?: SelectSubset<T, StudentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs>(
      args: SelectSubset<T, StudentDeleteArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs>(
      args: SelectSubset<T, StudentUpdateArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs>(
      args?: SelectSubset<T, StudentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs>(
      args: SelectSubset<T, StudentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs>(
      args: SelectSubset<T, StudentUpsertArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Find one Student that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Find the first Student that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs= {}>(args?: Subset<T, ProjectArgs>): Prisma__ProjectClient<ProjectGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Student base type for findUnique actions
   */
  export type StudentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where: StudentWhereUniqueInput
  }

  /**
   * Student: findUnique
   */
  export interface StudentFindUniqueArgs extends StudentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student base type for findFirst actions
   */
  export type StudentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     * 
    **/
    distinct?: Enumerable<StudentScalarFieldEnum>
  }

  /**
   * Student: findFirst
   */
  export interface StudentFindFirstArgs extends StudentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student findMany
   */
  export type StudentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Students to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student create
   */
  export type StudentCreateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to create a Student.
     * 
    **/
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs = {
    /**
     * The data used to create many Students.
     * 
    **/
    data: Enumerable<StudentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to update a Student.
     * 
    **/
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs = {
    /**
     * The data used to update Students.
     * 
    **/
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     * 
    **/
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The filter to search for the Student to update in case it exists.
     * 
    **/
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     * 
    **/
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter which Student to delete.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs = {
    /**
     * Filter which Students to delete
     * 
    **/
    where?: StudentWhereInput
  }


  /**
   * Student: findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs = StudentFindUniqueArgsBase
      

  /**
   * Student: findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs = StudentFindFirstArgsBase
      

  /**
   * Student without action
   */
  export type StudentArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
  }



  /**
   * Model Project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    abstract: string | null
    video: string | null
    sourceCode: string | null
    url: string | null
    isActive: boolean | null
    type: ProjectType | null
    studentId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    abstract: string | null
    video: string | null
    sourceCode: string | null
    url: string | null
    isActive: boolean | null
    type: ProjectType | null
    studentId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    abstract: number
    documents: number
    images: number
    video: number
    sourceCode: number
    url: number
    isActive: number
    type: number
    studentId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    abstract?: true
    video?: true
    sourceCode?: true
    url?: true
    isActive?: true
    type?: true
    studentId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    abstract?: true
    video?: true
    sourceCode?: true
    url?: true
    isActive?: true
    type?: true
    studentId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    abstract?: true
    documents?: true
    images?: true
    video?: true
    sourceCode?: true
    url?: true
    isActive?: true
    type?: true
    studentId?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs = {
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithAggregationInput>
    by: Array<ProjectScalarFieldEnum>
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    id: number
    title: string
    description: string
    abstract: string
    documents: JsonValue | null
    images: string[]
    video: string | null
    sourceCode: string | null
    url: string | null
    isActive: boolean
    type: ProjectType
    studentId: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    abstract?: boolean
    documents?: boolean
    images?: boolean
    video?: boolean
    sourceCode?: boolean
    url?: boolean
    isActive?: boolean
    type?: boolean
    tech?: boolean | TechListFindManyArgs
    researchFields?: boolean | ResearchFieldFindManyArgs
    methods?: boolean | ResearchMethodFindManyArgs
    studentId?: boolean
    student?: boolean | StudentArgs
    lecturers?: boolean | LecturerFindManyArgs
    comments?: boolean | CommentFindManyArgs
    Backend?: boolean | BackendArgs
    Database?: boolean | DatabaseArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }


  export type ProjectInclude = {
    tech?: boolean | TechListFindManyArgs
    researchFields?: boolean | ResearchFieldFindManyArgs
    methods?: boolean | ResearchMethodFindManyArgs
    student?: boolean | StudentArgs
    lecturers?: boolean | LecturerFindManyArgs
    comments?: boolean | CommentFindManyArgs
    Backend?: boolean | BackendArgs
    Database?: boolean | DatabaseArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  } 

  export type ProjectGetPayload<S extends boolean | null | undefined | ProjectArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Project :
    S extends undefined ? never :
    S extends { include: any } & (ProjectArgs | ProjectFindManyArgs)
    ? Project  & {
    [P in TrueKeys<S['include']>]:
        P extends 'tech' ? Array < TechListGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'researchFields' ? Array < ResearchFieldGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'methods' ? Array < ResearchMethodGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'student' ? StudentGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'lecturers' ? Array < LecturerGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'Backend' ? BackendGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'Database' ? DatabaseGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (ProjectArgs | ProjectFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'tech' ? Array < TechListGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'researchFields' ? Array < ResearchFieldGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'methods' ? Array < ResearchMethodGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'student' ? StudentGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'lecturers' ? Array < LecturerGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'Backend' ? BackendGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'Database' ? DatabaseGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Project ? Project[P] : never
  } 
      : Project


  type ProjectCountArgs = Merge<
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }
  >

  export interface ProjectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? Prisma__ProjectClient<ProjectGetPayload<T>> : Prisma__ProjectClient<ProjectGetPayload<T> | null, null>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? Prisma__ProjectClient<ProjectGetPayload<T>> : Prisma__ProjectClient<ProjectGetPayload<T> | null, null>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): PrismaPromise<Array<ProjectGetPayload<T>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Find one Project that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Find the first Project that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tech<T extends TechListFindManyArgs= {}>(args?: Subset<T, TechListFindManyArgs>): PrismaPromise<Array<TechListGetPayload<T>>| Null>;

    researchFields<T extends ResearchFieldFindManyArgs= {}>(args?: Subset<T, ResearchFieldFindManyArgs>): PrismaPromise<Array<ResearchFieldGetPayload<T>>| Null>;

    methods<T extends ResearchMethodFindManyArgs= {}>(args?: Subset<T, ResearchMethodFindManyArgs>): PrismaPromise<Array<ResearchMethodGetPayload<T>>| Null>;

    student<T extends StudentArgs= {}>(args?: Subset<T, StudentArgs>): Prisma__StudentClient<StudentGetPayload<T> | Null>;

    lecturers<T extends LecturerFindManyArgs= {}>(args?: Subset<T, LecturerFindManyArgs>): PrismaPromise<Array<LecturerGetPayload<T>>| Null>;

    comments<T extends CommentFindManyArgs= {}>(args?: Subset<T, CommentFindManyArgs>): PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    Backend<T extends BackendArgs= {}>(args?: Subset<T, BackendArgs>): Prisma__BackendClient<BackendGetPayload<T> | Null>;

    Database<T extends DatabaseArgs= {}>(args?: Subset<T, DatabaseArgs>): Prisma__DatabaseClient<DatabaseGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Project base type for findUnique actions
   */
  export type ProjectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where: ProjectWhereUniqueInput
  }

  /**
   * Project: findUnique
   */
  export interface ProjectFindUniqueArgs extends ProjectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project base type for findFirst actions
   */
  export type ProjectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     * 
    **/
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }

  /**
   * Project: findFirst
   */
  export interface ProjectFindFirstArgs extends ProjectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
     * 
    **/
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs = {
    /**
     * The data used to create many Projects.
     * 
    **/
    data: Enumerable<ProjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
     * 
    **/
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    /**
     * The data used to update Projects.
     * 
    **/
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
     * 
    **/
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     * 
    **/
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project: findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs = ProjectFindUniqueArgsBase
      

  /**
   * Project: findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs = ProjectFindFirstArgsBase
      

  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
  }



  /**
   * Model Backend
   */


  export type AggregateBackend = {
    _count: BackendCountAggregateOutputType | null
    _avg: BackendAvgAggregateOutputType | null
    _sum: BackendSumAggregateOutputType | null
    _min: BackendMinAggregateOutputType | null
    _max: BackendMaxAggregateOutputType | null
  }

  export type BackendAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type BackendSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type BackendMinAggregateOutputType = {
    id: number | null
    isActive: boolean | null
    sourceCode: string | null
    url: string | null
    description: string | null
    projectId: number | null
  }

  export type BackendMaxAggregateOutputType = {
    id: number | null
    isActive: boolean | null
    sourceCode: string | null
    url: string | null
    description: string | null
    projectId: number | null
  }

  export type BackendCountAggregateOutputType = {
    id: number
    isActive: number
    sourceCode: number
    url: number
    description: number
    projectId: number
    _all: number
  }


  export type BackendAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type BackendSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type BackendMinAggregateInputType = {
    id?: true
    isActive?: true
    sourceCode?: true
    url?: true
    description?: true
    projectId?: true
  }

  export type BackendMaxAggregateInputType = {
    id?: true
    isActive?: true
    sourceCode?: true
    url?: true
    description?: true
    projectId?: true
  }

  export type BackendCountAggregateInputType = {
    id?: true
    isActive?: true
    sourceCode?: true
    url?: true
    description?: true
    projectId?: true
    _all?: true
  }

  export type BackendAggregateArgs = {
    /**
     * Filter which Backend to aggregate.
     * 
    **/
    where?: BackendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backends to fetch.
     * 
    **/
    orderBy?: Enumerable<BackendOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BackendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backends from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backends.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Backends
    **/
    _count?: true | BackendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BackendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BackendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackendMaxAggregateInputType
  }

  export type GetBackendAggregateType<T extends BackendAggregateArgs> = {
        [P in keyof T & keyof AggregateBackend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackend[P]>
      : GetScalarType<T[P], AggregateBackend[P]>
  }




  export type BackendGroupByArgs = {
    where?: BackendWhereInput
    orderBy?: Enumerable<BackendOrderByWithAggregationInput>
    by: Array<BackendScalarFieldEnum>
    having?: BackendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackendCountAggregateInputType | true
    _avg?: BackendAvgAggregateInputType
    _sum?: BackendSumAggregateInputType
    _min?: BackendMinAggregateInputType
    _max?: BackendMaxAggregateInputType
  }


  export type BackendGroupByOutputType = {
    id: number
    isActive: boolean
    sourceCode: string
    url: string
    description: string
    projectId: number
    _count: BackendCountAggregateOutputType | null
    _avg: BackendAvgAggregateOutputType | null
    _sum: BackendSumAggregateOutputType | null
    _min: BackendMinAggregateOutputType | null
    _max: BackendMaxAggregateOutputType | null
  }

  type GetBackendGroupByPayload<T extends BackendGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BackendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackendGroupByOutputType[P]>
            : GetScalarType<T[P], BackendGroupByOutputType[P]>
        }
      >
    >


  export type BackendSelect = {
    id?: boolean
    isActive?: boolean
    sourceCode?: boolean
    url?: boolean
    description?: boolean
    projectId?: boolean
    project?: boolean | ProjectArgs
  }


  export type BackendInclude = {
    project?: boolean | ProjectArgs
  } 

  export type BackendGetPayload<S extends boolean | null | undefined | BackendArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Backend :
    S extends undefined ? never :
    S extends { include: any } & (BackendArgs | BackendFindManyArgs)
    ? Backend  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (BackendArgs | BackendFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Backend ? Backend[P] : never
  } 
      : Backend


  type BackendCountArgs = Merge<
    Omit<BackendFindManyArgs, 'select' | 'include'> & {
      select?: BackendCountAggregateInputType | true
    }
  >

  export interface BackendDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Backend that matches the filter.
     * @param {BackendFindUniqueArgs} args - Arguments to find a Backend
     * @example
     * // Get one Backend
     * const backend = await prisma.backend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BackendFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BackendFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Backend'> extends True ? Prisma__BackendClient<BackendGetPayload<T>> : Prisma__BackendClient<BackendGetPayload<T> | null, null>

    /**
     * Find the first Backend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendFindFirstArgs} args - Arguments to find a Backend
     * @example
     * // Get one Backend
     * const backend = await prisma.backend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BackendFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BackendFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Backend'> extends True ? Prisma__BackendClient<BackendGetPayload<T>> : Prisma__BackendClient<BackendGetPayload<T> | null, null>

    /**
     * Find zero or more Backends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Backends
     * const backends = await prisma.backend.findMany()
     * 
     * // Get first 10 Backends
     * const backends = await prisma.backend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backendWithIdOnly = await prisma.backend.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BackendFindManyArgs>(
      args?: SelectSubset<T, BackendFindManyArgs>
    ): PrismaPromise<Array<BackendGetPayload<T>>>

    /**
     * Create a Backend.
     * @param {BackendCreateArgs} args - Arguments to create a Backend.
     * @example
     * // Create one Backend
     * const Backend = await prisma.backend.create({
     *   data: {
     *     // ... data to create a Backend
     *   }
     * })
     * 
    **/
    create<T extends BackendCreateArgs>(
      args: SelectSubset<T, BackendCreateArgs>
    ): Prisma__BackendClient<BackendGetPayload<T>>

    /**
     * Create many Backends.
     *     @param {BackendCreateManyArgs} args - Arguments to create many Backends.
     *     @example
     *     // Create many Backends
     *     const backend = await prisma.backend.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BackendCreateManyArgs>(
      args?: SelectSubset<T, BackendCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Backend.
     * @param {BackendDeleteArgs} args - Arguments to delete one Backend.
     * @example
     * // Delete one Backend
     * const Backend = await prisma.backend.delete({
     *   where: {
     *     // ... filter to delete one Backend
     *   }
     * })
     * 
    **/
    delete<T extends BackendDeleteArgs>(
      args: SelectSubset<T, BackendDeleteArgs>
    ): Prisma__BackendClient<BackendGetPayload<T>>

    /**
     * Update one Backend.
     * @param {BackendUpdateArgs} args - Arguments to update one Backend.
     * @example
     * // Update one Backend
     * const backend = await prisma.backend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BackendUpdateArgs>(
      args: SelectSubset<T, BackendUpdateArgs>
    ): Prisma__BackendClient<BackendGetPayload<T>>

    /**
     * Delete zero or more Backends.
     * @param {BackendDeleteManyArgs} args - Arguments to filter Backends to delete.
     * @example
     * // Delete a few Backends
     * const { count } = await prisma.backend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BackendDeleteManyArgs>(
      args?: SelectSubset<T, BackendDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Backends
     * const backend = await prisma.backend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BackendUpdateManyArgs>(
      args: SelectSubset<T, BackendUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Backend.
     * @param {BackendUpsertArgs} args - Arguments to update or create a Backend.
     * @example
     * // Update or create a Backend
     * const backend = await prisma.backend.upsert({
     *   create: {
     *     // ... data to create a Backend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Backend we want to update
     *   }
     * })
    **/
    upsert<T extends BackendUpsertArgs>(
      args: SelectSubset<T, BackendUpsertArgs>
    ): Prisma__BackendClient<BackendGetPayload<T>>

    /**
     * Find one Backend that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {BackendFindUniqueOrThrowArgs} args - Arguments to find a Backend
     * @example
     * // Get one Backend
     * const backend = await prisma.backend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BackendFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BackendFindUniqueOrThrowArgs>
    ): Prisma__BackendClient<BackendGetPayload<T>>

    /**
     * Find the first Backend that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendFindFirstOrThrowArgs} args - Arguments to find a Backend
     * @example
     * // Get one Backend
     * const backend = await prisma.backend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BackendFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BackendFindFirstOrThrowArgs>
    ): Prisma__BackendClient<BackendGetPayload<T>>

    /**
     * Count the number of Backends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendCountArgs} args - Arguments to filter Backends to count.
     * @example
     * // Count the number of Backends
     * const count = await prisma.backend.count({
     *   where: {
     *     // ... the filter for the Backends we want to count
     *   }
     * })
    **/
    count<T extends BackendCountArgs>(
      args?: Subset<T, BackendCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Backend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BackendAggregateArgs>(args: Subset<T, BackendAggregateArgs>): PrismaPromise<GetBackendAggregateType<T>>

    /**
     * Group by Backend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendGroupByArgs} args - Group by arguments.
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
      T extends BackendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BackendGroupByArgs['orderBy'] }
        : { orderBy?: BackendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BackendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackendGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Backend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BackendClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs= {}>(args?: Subset<T, ProjectArgs>): Prisma__ProjectClient<ProjectGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Backend base type for findUnique actions
   */
  export type BackendFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Backend
     * 
    **/
    select?: BackendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BackendInclude | null
    /**
     * Filter, which Backend to fetch.
     * 
    **/
    where: BackendWhereUniqueInput
  }

  /**
   * Backend: findUnique
   */
  export interface BackendFindUniqueArgs extends BackendFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Backend base type for findFirst actions
   */
  export type BackendFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Backend
     * 
    **/
    select?: BackendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BackendInclude | null
    /**
     * Filter, which Backend to fetch.
     * 
    **/
    where?: BackendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backends to fetch.
     * 
    **/
    orderBy?: Enumerable<BackendOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backends.
     * 
    **/
    cursor?: BackendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backends from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backends.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backends.
     * 
    **/
    distinct?: Enumerable<BackendScalarFieldEnum>
  }

  /**
   * Backend: findFirst
   */
  export interface BackendFindFirstArgs extends BackendFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Backend findMany
   */
  export type BackendFindManyArgs = {
    /**
     * Select specific fields to fetch from the Backend
     * 
    **/
    select?: BackendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BackendInclude | null
    /**
     * Filter, which Backends to fetch.
     * 
    **/
    where?: BackendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backends to fetch.
     * 
    **/
    orderBy?: Enumerable<BackendOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Backends.
     * 
    **/
    cursor?: BackendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backends from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backends.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BackendScalarFieldEnum>
  }


  /**
   * Backend create
   */
  export type BackendCreateArgs = {
    /**
     * Select specific fields to fetch from the Backend
     * 
    **/
    select?: BackendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BackendInclude | null
    /**
     * The data needed to create a Backend.
     * 
    **/
    data: XOR<BackendCreateInput, BackendUncheckedCreateInput>
  }


  /**
   * Backend createMany
   */
  export type BackendCreateManyArgs = {
    /**
     * The data used to create many Backends.
     * 
    **/
    data: Enumerable<BackendCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Backend update
   */
  export type BackendUpdateArgs = {
    /**
     * Select specific fields to fetch from the Backend
     * 
    **/
    select?: BackendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BackendInclude | null
    /**
     * The data needed to update a Backend.
     * 
    **/
    data: XOR<BackendUpdateInput, BackendUncheckedUpdateInput>
    /**
     * Choose, which Backend to update.
     * 
    **/
    where: BackendWhereUniqueInput
  }


  /**
   * Backend updateMany
   */
  export type BackendUpdateManyArgs = {
    /**
     * The data used to update Backends.
     * 
    **/
    data: XOR<BackendUpdateManyMutationInput, BackendUncheckedUpdateManyInput>
    /**
     * Filter which Backends to update
     * 
    **/
    where?: BackendWhereInput
  }


  /**
   * Backend upsert
   */
  export type BackendUpsertArgs = {
    /**
     * Select specific fields to fetch from the Backend
     * 
    **/
    select?: BackendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BackendInclude | null
    /**
     * The filter to search for the Backend to update in case it exists.
     * 
    **/
    where: BackendWhereUniqueInput
    /**
     * In case the Backend found by the `where` argument doesn't exist, create a new Backend with this data.
     * 
    **/
    create: XOR<BackendCreateInput, BackendUncheckedCreateInput>
    /**
     * In case the Backend was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BackendUpdateInput, BackendUncheckedUpdateInput>
  }


  /**
   * Backend delete
   */
  export type BackendDeleteArgs = {
    /**
     * Select specific fields to fetch from the Backend
     * 
    **/
    select?: BackendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BackendInclude | null
    /**
     * Filter which Backend to delete.
     * 
    **/
    where: BackendWhereUniqueInput
  }


  /**
   * Backend deleteMany
   */
  export type BackendDeleteManyArgs = {
    /**
     * Filter which Backends to delete
     * 
    **/
    where?: BackendWhereInput
  }


  /**
   * Backend: findUniqueOrThrow
   */
  export type BackendFindUniqueOrThrowArgs = BackendFindUniqueArgsBase
      

  /**
   * Backend: findFirstOrThrow
   */
  export type BackendFindFirstOrThrowArgs = BackendFindFirstArgsBase
      

  /**
   * Backend without action
   */
  export type BackendArgs = {
    /**
     * Select specific fields to fetch from the Backend
     * 
    **/
    select?: BackendSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BackendInclude | null
  }



  /**
   * Model Database
   */


  export type AggregateDatabase = {
    _count: DatabaseCountAggregateOutputType | null
    _avg: DatabaseAvgAggregateOutputType | null
    _sum: DatabaseSumAggregateOutputType | null
    _min: DatabaseMinAggregateOutputType | null
    _max: DatabaseMaxAggregateOutputType | null
  }

  export type DatabaseAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type DatabaseSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type DatabaseMinAggregateOutputType = {
    id: number | null
    isActive: boolean | null
    url: string | null
    dbname: string | null
    username: string | null
    password: string | null
    description: string | null
    projectId: number | null
  }

  export type DatabaseMaxAggregateOutputType = {
    id: number | null
    isActive: boolean | null
    url: string | null
    dbname: string | null
    username: string | null
    password: string | null
    description: string | null
    projectId: number | null
  }

  export type DatabaseCountAggregateOutputType = {
    id: number
    isActive: number
    url: number
    dbname: number
    username: number
    password: number
    description: number
    projectId: number
    _all: number
  }


  export type DatabaseAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type DatabaseSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type DatabaseMinAggregateInputType = {
    id?: true
    isActive?: true
    url?: true
    dbname?: true
    username?: true
    password?: true
    description?: true
    projectId?: true
  }

  export type DatabaseMaxAggregateInputType = {
    id?: true
    isActive?: true
    url?: true
    dbname?: true
    username?: true
    password?: true
    description?: true
    projectId?: true
  }

  export type DatabaseCountAggregateInputType = {
    id?: true
    isActive?: true
    url?: true
    dbname?: true
    username?: true
    password?: true
    description?: true
    projectId?: true
    _all?: true
  }

  export type DatabaseAggregateArgs = {
    /**
     * Filter which Database to aggregate.
     * 
    **/
    where?: DatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Databases to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Databases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Databases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Databases
    **/
    _count?: true | DatabaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatabaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatabaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseMaxAggregateInputType
  }

  export type GetDatabaseAggregateType<T extends DatabaseAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabase[P]>
      : GetScalarType<T[P], AggregateDatabase[P]>
  }




  export type DatabaseGroupByArgs = {
    where?: DatabaseWhereInput
    orderBy?: Enumerable<DatabaseOrderByWithAggregationInput>
    by: Array<DatabaseScalarFieldEnum>
    having?: DatabaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseCountAggregateInputType | true
    _avg?: DatabaseAvgAggregateInputType
    _sum?: DatabaseSumAggregateInputType
    _min?: DatabaseMinAggregateInputType
    _max?: DatabaseMaxAggregateInputType
  }


  export type DatabaseGroupByOutputType = {
    id: number
    isActive: boolean
    url: string
    dbname: string
    username: string
    password: string
    description: string
    projectId: number
    _count: DatabaseCountAggregateOutputType | null
    _avg: DatabaseAvgAggregateOutputType | null
    _sum: DatabaseSumAggregateOutputType | null
    _min: DatabaseMinAggregateOutputType | null
    _max: DatabaseMaxAggregateOutputType | null
  }

  type GetDatabaseGroupByPayload<T extends DatabaseGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DatabaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabaseGroupByOutputType[P]>
            : GetScalarType<T[P], DatabaseGroupByOutputType[P]>
        }
      >
    >


  export type DatabaseSelect = {
    id?: boolean
    isActive?: boolean
    url?: boolean
    dbname?: boolean
    username?: boolean
    password?: boolean
    description?: boolean
    projectId?: boolean
    project?: boolean | ProjectArgs
  }


  export type DatabaseInclude = {
    project?: boolean | ProjectArgs
  } 

  export type DatabaseGetPayload<S extends boolean | null | undefined | DatabaseArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Database :
    S extends undefined ? never :
    S extends { include: any } & (DatabaseArgs | DatabaseFindManyArgs)
    ? Database  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (DatabaseArgs | DatabaseFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Database ? Database[P] : never
  } 
      : Database


  type DatabaseCountArgs = Merge<
    Omit<DatabaseFindManyArgs, 'select' | 'include'> & {
      select?: DatabaseCountAggregateInputType | true
    }
  >

  export interface DatabaseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Database that matches the filter.
     * @param {DatabaseFindUniqueArgs} args - Arguments to find a Database
     * @example
     * // Get one Database
     * const database = await prisma.database.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatabaseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DatabaseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Database'> extends True ? Prisma__DatabaseClient<DatabaseGetPayload<T>> : Prisma__DatabaseClient<DatabaseGetPayload<T> | null, null>

    /**
     * Find the first Database that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseFindFirstArgs} args - Arguments to find a Database
     * @example
     * // Get one Database
     * const database = await prisma.database.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatabaseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DatabaseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Database'> extends True ? Prisma__DatabaseClient<DatabaseGetPayload<T>> : Prisma__DatabaseClient<DatabaseGetPayload<T> | null, null>

    /**
     * Find zero or more Databases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Databases
     * const databases = await prisma.database.findMany()
     * 
     * // Get first 10 Databases
     * const databases = await prisma.database.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseWithIdOnly = await prisma.database.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatabaseFindManyArgs>(
      args?: SelectSubset<T, DatabaseFindManyArgs>
    ): PrismaPromise<Array<DatabaseGetPayload<T>>>

    /**
     * Create a Database.
     * @param {DatabaseCreateArgs} args - Arguments to create a Database.
     * @example
     * // Create one Database
     * const Database = await prisma.database.create({
     *   data: {
     *     // ... data to create a Database
     *   }
     * })
     * 
    **/
    create<T extends DatabaseCreateArgs>(
      args: SelectSubset<T, DatabaseCreateArgs>
    ): Prisma__DatabaseClient<DatabaseGetPayload<T>>

    /**
     * Create many Databases.
     *     @param {DatabaseCreateManyArgs} args - Arguments to create many Databases.
     *     @example
     *     // Create many Databases
     *     const database = await prisma.database.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DatabaseCreateManyArgs>(
      args?: SelectSubset<T, DatabaseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Database.
     * @param {DatabaseDeleteArgs} args - Arguments to delete one Database.
     * @example
     * // Delete one Database
     * const Database = await prisma.database.delete({
     *   where: {
     *     // ... filter to delete one Database
     *   }
     * })
     * 
    **/
    delete<T extends DatabaseDeleteArgs>(
      args: SelectSubset<T, DatabaseDeleteArgs>
    ): Prisma__DatabaseClient<DatabaseGetPayload<T>>

    /**
     * Update one Database.
     * @param {DatabaseUpdateArgs} args - Arguments to update one Database.
     * @example
     * // Update one Database
     * const database = await prisma.database.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatabaseUpdateArgs>(
      args: SelectSubset<T, DatabaseUpdateArgs>
    ): Prisma__DatabaseClient<DatabaseGetPayload<T>>

    /**
     * Delete zero or more Databases.
     * @param {DatabaseDeleteManyArgs} args - Arguments to filter Databases to delete.
     * @example
     * // Delete a few Databases
     * const { count } = await prisma.database.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatabaseDeleteManyArgs>(
      args?: SelectSubset<T, DatabaseDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Databases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Databases
     * const database = await prisma.database.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatabaseUpdateManyArgs>(
      args: SelectSubset<T, DatabaseUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Database.
     * @param {DatabaseUpsertArgs} args - Arguments to update or create a Database.
     * @example
     * // Update or create a Database
     * const database = await prisma.database.upsert({
     *   create: {
     *     // ... data to create a Database
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Database we want to update
     *   }
     * })
    **/
    upsert<T extends DatabaseUpsertArgs>(
      args: SelectSubset<T, DatabaseUpsertArgs>
    ): Prisma__DatabaseClient<DatabaseGetPayload<T>>

    /**
     * Find one Database that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DatabaseFindUniqueOrThrowArgs} args - Arguments to find a Database
     * @example
     * // Get one Database
     * const database = await prisma.database.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DatabaseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DatabaseFindUniqueOrThrowArgs>
    ): Prisma__DatabaseClient<DatabaseGetPayload<T>>

    /**
     * Find the first Database that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseFindFirstOrThrowArgs} args - Arguments to find a Database
     * @example
     * // Get one Database
     * const database = await prisma.database.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DatabaseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DatabaseFindFirstOrThrowArgs>
    ): Prisma__DatabaseClient<DatabaseGetPayload<T>>

    /**
     * Count the number of Databases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseCountArgs} args - Arguments to filter Databases to count.
     * @example
     * // Count the number of Databases
     * const count = await prisma.database.count({
     *   where: {
     *     // ... the filter for the Databases we want to count
     *   }
     * })
    **/
    count<T extends DatabaseCountArgs>(
      args?: Subset<T, DatabaseCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Database.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatabaseAggregateArgs>(args: Subset<T, DatabaseAggregateArgs>): PrismaPromise<GetDatabaseAggregateType<T>>

    /**
     * Group by Database.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseGroupByArgs} args - Group by arguments.
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
      T extends DatabaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DatabaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Database.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DatabaseClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs= {}>(args?: Subset<T, ProjectArgs>): Prisma__ProjectClient<ProjectGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Database base type for findUnique actions
   */
  export type DatabaseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Database
     * 
    **/
    select?: DatabaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseInclude | null
    /**
     * Filter, which Database to fetch.
     * 
    **/
    where: DatabaseWhereUniqueInput
  }

  /**
   * Database: findUnique
   */
  export interface DatabaseFindUniqueArgs extends DatabaseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Database base type for findFirst actions
   */
  export type DatabaseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Database
     * 
    **/
    select?: DatabaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseInclude | null
    /**
     * Filter, which Database to fetch.
     * 
    **/
    where?: DatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Databases to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Databases.
     * 
    **/
    cursor?: DatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Databases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Databases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Databases.
     * 
    **/
    distinct?: Enumerable<DatabaseScalarFieldEnum>
  }

  /**
   * Database: findFirst
   */
  export interface DatabaseFindFirstArgs extends DatabaseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Database findMany
   */
  export type DatabaseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Database
     * 
    **/
    select?: DatabaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseInclude | null
    /**
     * Filter, which Databases to fetch.
     * 
    **/
    where?: DatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Databases to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Databases.
     * 
    **/
    cursor?: DatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Databases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Databases.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DatabaseScalarFieldEnum>
  }


  /**
   * Database create
   */
  export type DatabaseCreateArgs = {
    /**
     * Select specific fields to fetch from the Database
     * 
    **/
    select?: DatabaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseInclude | null
    /**
     * The data needed to create a Database.
     * 
    **/
    data: XOR<DatabaseCreateInput, DatabaseUncheckedCreateInput>
  }


  /**
   * Database createMany
   */
  export type DatabaseCreateManyArgs = {
    /**
     * The data used to create many Databases.
     * 
    **/
    data: Enumerable<DatabaseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Database update
   */
  export type DatabaseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Database
     * 
    **/
    select?: DatabaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseInclude | null
    /**
     * The data needed to update a Database.
     * 
    **/
    data: XOR<DatabaseUpdateInput, DatabaseUncheckedUpdateInput>
    /**
     * Choose, which Database to update.
     * 
    **/
    where: DatabaseWhereUniqueInput
  }


  /**
   * Database updateMany
   */
  export type DatabaseUpdateManyArgs = {
    /**
     * The data used to update Databases.
     * 
    **/
    data: XOR<DatabaseUpdateManyMutationInput, DatabaseUncheckedUpdateManyInput>
    /**
     * Filter which Databases to update
     * 
    **/
    where?: DatabaseWhereInput
  }


  /**
   * Database upsert
   */
  export type DatabaseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Database
     * 
    **/
    select?: DatabaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseInclude | null
    /**
     * The filter to search for the Database to update in case it exists.
     * 
    **/
    where: DatabaseWhereUniqueInput
    /**
     * In case the Database found by the `where` argument doesn't exist, create a new Database with this data.
     * 
    **/
    create: XOR<DatabaseCreateInput, DatabaseUncheckedCreateInput>
    /**
     * In case the Database was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DatabaseUpdateInput, DatabaseUncheckedUpdateInput>
  }


  /**
   * Database delete
   */
  export type DatabaseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Database
     * 
    **/
    select?: DatabaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseInclude | null
    /**
     * Filter which Database to delete.
     * 
    **/
    where: DatabaseWhereUniqueInput
  }


  /**
   * Database deleteMany
   */
  export type DatabaseDeleteManyArgs = {
    /**
     * Filter which Databases to delete
     * 
    **/
    where?: DatabaseWhereInput
  }


  /**
   * Database: findUniqueOrThrow
   */
  export type DatabaseFindUniqueOrThrowArgs = DatabaseFindUniqueArgsBase
      

  /**
   * Database: findFirstOrThrow
   */
  export type DatabaseFindFirstOrThrowArgs = DatabaseFindFirstArgsBase
      

  /**
   * Database without action
   */
  export type DatabaseArgs = {
    /**
     * Select specific fields to fetch from the Database
     * 
    **/
    select?: DatabaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    comment: string | null
    username: string | null
    projectId: number | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    username: string | null
    projectId: number | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    comment: number
    username: number
    projectId: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    comment?: true
    username?: true
    projectId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    comment?: true
    username?: true
    projectId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    comment?: true
    username?: true
    projectId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithAggregationInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: number
    comment: string
    username: string
    projectId: number | null
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect = {
    id?: boolean
    comment?: boolean
    username?: boolean
    Project?: boolean | ProjectArgs
    projectId?: boolean
    createdAt?: boolean
  }


  export type CommentInclude = {
    Project?: boolean | ProjectArgs
  } 

  export type CommentGetPayload<S extends boolean | null | undefined | CommentArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Comment :
    S extends undefined ? never :
    S extends { include: any } & (CommentArgs | CommentFindManyArgs)
    ? Comment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Project' ? ProjectGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : S extends { select: any } & (CommentArgs | CommentFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Project' ? ProjectGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof Comment ? Comment[P] : never
  } 
      : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): PrismaPromise<Array<CommentGetPayload<T>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find one Comment that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find the first Comment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Project<T extends ProjectArgs= {}>(args?: Subset<T, ProjectArgs>): Prisma__ProjectClient<ProjectGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Comment base type for findUnique actions
   */
  export type CommentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }

  /**
   * Comment: findUnique
   */
  export interface CommentFindUniqueArgs extends CommentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment base type for findFirst actions
   */
  export type CommentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }

  /**
   * Comment: findFirst
   */
  export interface CommentFindFirstArgs extends CommentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     * 
    **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    /**
     * The data used to create many Comments.
     * 
    **/
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     * 
    **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    /**
     * The data used to update Comments.
     * 
    **/
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     * 
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     * 
    **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    /**
     * Filter which Comments to delete
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment: findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs = CommentFindUniqueArgsBase
      

  /**
   * Comment: findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs = CommentFindFirstArgsBase
      

  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
  }



  /**
   * Model TechList
   */


  export type AggregateTechList = {
    _count: TechListCountAggregateOutputType | null
    _avg: TechListAvgAggregateOutputType | null
    _sum: TechListSumAggregateOutputType | null
    _min: TechListMinAggregateOutputType | null
    _max: TechListMaxAggregateOutputType | null
  }

  export type TechListAvgAggregateOutputType = {
    id: number | null
  }

  export type TechListSumAggregateOutputType = {
    id: number | null
  }

  export type TechListMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TechListMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TechListCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TechListAvgAggregateInputType = {
    id?: true
  }

  export type TechListSumAggregateInputType = {
    id?: true
  }

  export type TechListMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TechListMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TechListCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TechListAggregateArgs = {
    /**
     * Filter which TechList to aggregate.
     * 
    **/
    where?: TechListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechLists to fetch.
     * 
    **/
    orderBy?: Enumerable<TechListOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TechListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechLists
    **/
    _count?: true | TechListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechListMaxAggregateInputType
  }

  export type GetTechListAggregateType<T extends TechListAggregateArgs> = {
        [P in keyof T & keyof AggregateTechList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechList[P]>
      : GetScalarType<T[P], AggregateTechList[P]>
  }




  export type TechListGroupByArgs = {
    where?: TechListWhereInput
    orderBy?: Enumerable<TechListOrderByWithAggregationInput>
    by: Array<TechListScalarFieldEnum>
    having?: TechListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechListCountAggregateInputType | true
    _avg?: TechListAvgAggregateInputType
    _sum?: TechListSumAggregateInputType
    _min?: TechListMinAggregateInputType
    _max?: TechListMaxAggregateInputType
  }


  export type TechListGroupByOutputType = {
    id: number
    name: string
    _count: TechListCountAggregateOutputType | null
    _avg: TechListAvgAggregateOutputType | null
    _sum: TechListSumAggregateOutputType | null
    _min: TechListMinAggregateOutputType | null
    _max: TechListMaxAggregateOutputType | null
  }

  type GetTechListGroupByPayload<T extends TechListGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TechListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechListGroupByOutputType[P]>
            : GetScalarType<T[P], TechListGroupByOutputType[P]>
        }
      >
    >


  export type TechListSelect = {
    id?: boolean
    name?: boolean
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | TechListCountOutputTypeArgs
  }


  export type TechListInclude = {
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | TechListCountOutputTypeArgs
  } 

  export type TechListGetPayload<S extends boolean | null | undefined | TechListArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TechList :
    S extends undefined ? never :
    S extends { include: any } & (TechListArgs | TechListFindManyArgs)
    ? TechList  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? TechListCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (TechListArgs | TechListFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? TechListCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof TechList ? TechList[P] : never
  } 
      : TechList


  type TechListCountArgs = Merge<
    Omit<TechListFindManyArgs, 'select' | 'include'> & {
      select?: TechListCountAggregateInputType | true
    }
  >

  export interface TechListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one TechList that matches the filter.
     * @param {TechListFindUniqueArgs} args - Arguments to find a TechList
     * @example
     * // Get one TechList
     * const techList = await prisma.techList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TechListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TechListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TechList'> extends True ? Prisma__TechListClient<TechListGetPayload<T>> : Prisma__TechListClient<TechListGetPayload<T> | null, null>

    /**
     * Find the first TechList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechListFindFirstArgs} args - Arguments to find a TechList
     * @example
     * // Get one TechList
     * const techList = await prisma.techList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TechListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TechListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TechList'> extends True ? Prisma__TechListClient<TechListGetPayload<T>> : Prisma__TechListClient<TechListGetPayload<T> | null, null>

    /**
     * Find zero or more TechLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechLists
     * const techLists = await prisma.techList.findMany()
     * 
     * // Get first 10 TechLists
     * const techLists = await prisma.techList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const techListWithIdOnly = await prisma.techList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TechListFindManyArgs>(
      args?: SelectSubset<T, TechListFindManyArgs>
    ): PrismaPromise<Array<TechListGetPayload<T>>>

    /**
     * Create a TechList.
     * @param {TechListCreateArgs} args - Arguments to create a TechList.
     * @example
     * // Create one TechList
     * const TechList = await prisma.techList.create({
     *   data: {
     *     // ... data to create a TechList
     *   }
     * })
     * 
    **/
    create<T extends TechListCreateArgs>(
      args: SelectSubset<T, TechListCreateArgs>
    ): Prisma__TechListClient<TechListGetPayload<T>>

    /**
     * Create many TechLists.
     *     @param {TechListCreateManyArgs} args - Arguments to create many TechLists.
     *     @example
     *     // Create many TechLists
     *     const techList = await prisma.techList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TechListCreateManyArgs>(
      args?: SelectSubset<T, TechListCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TechList.
     * @param {TechListDeleteArgs} args - Arguments to delete one TechList.
     * @example
     * // Delete one TechList
     * const TechList = await prisma.techList.delete({
     *   where: {
     *     // ... filter to delete one TechList
     *   }
     * })
     * 
    **/
    delete<T extends TechListDeleteArgs>(
      args: SelectSubset<T, TechListDeleteArgs>
    ): Prisma__TechListClient<TechListGetPayload<T>>

    /**
     * Update one TechList.
     * @param {TechListUpdateArgs} args - Arguments to update one TechList.
     * @example
     * // Update one TechList
     * const techList = await prisma.techList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TechListUpdateArgs>(
      args: SelectSubset<T, TechListUpdateArgs>
    ): Prisma__TechListClient<TechListGetPayload<T>>

    /**
     * Delete zero or more TechLists.
     * @param {TechListDeleteManyArgs} args - Arguments to filter TechLists to delete.
     * @example
     * // Delete a few TechLists
     * const { count } = await prisma.techList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TechListDeleteManyArgs>(
      args?: SelectSubset<T, TechListDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechLists
     * const techList = await prisma.techList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TechListUpdateManyArgs>(
      args: SelectSubset<T, TechListUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TechList.
     * @param {TechListUpsertArgs} args - Arguments to update or create a TechList.
     * @example
     * // Update or create a TechList
     * const techList = await prisma.techList.upsert({
     *   create: {
     *     // ... data to create a TechList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechList we want to update
     *   }
     * })
    **/
    upsert<T extends TechListUpsertArgs>(
      args: SelectSubset<T, TechListUpsertArgs>
    ): Prisma__TechListClient<TechListGetPayload<T>>

    /**
     * Find one TechList that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TechListFindUniqueOrThrowArgs} args - Arguments to find a TechList
     * @example
     * // Get one TechList
     * const techList = await prisma.techList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TechListFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TechListFindUniqueOrThrowArgs>
    ): Prisma__TechListClient<TechListGetPayload<T>>

    /**
     * Find the first TechList that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechListFindFirstOrThrowArgs} args - Arguments to find a TechList
     * @example
     * // Get one TechList
     * const techList = await prisma.techList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TechListFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TechListFindFirstOrThrowArgs>
    ): Prisma__TechListClient<TechListGetPayload<T>>

    /**
     * Count the number of TechLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechListCountArgs} args - Arguments to filter TechLists to count.
     * @example
     * // Count the number of TechLists
     * const count = await prisma.techList.count({
     *   where: {
     *     // ... the filter for the TechLists we want to count
     *   }
     * })
    **/
    count<T extends TechListCountArgs>(
      args?: Subset<T, TechListCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechListAggregateArgs>(args: Subset<T, TechListAggregateArgs>): PrismaPromise<GetTechListAggregateType<T>>

    /**
     * Group by TechList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechListGroupByArgs} args - Group by arguments.
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
      T extends TechListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechListGroupByArgs['orderBy'] }
        : { orderBy?: TechListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TechListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechListGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TechList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TechListClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Project<T extends ProjectFindManyArgs= {}>(args?: Subset<T, ProjectFindManyArgs>): PrismaPromise<Array<ProjectGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TechList base type for findUnique actions
   */
  export type TechListFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TechList
     * 
    **/
    select?: TechListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TechListInclude | null
    /**
     * Filter, which TechList to fetch.
     * 
    **/
    where: TechListWhereUniqueInput
  }

  /**
   * TechList: findUnique
   */
  export interface TechListFindUniqueArgs extends TechListFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TechList base type for findFirst actions
   */
  export type TechListFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TechList
     * 
    **/
    select?: TechListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TechListInclude | null
    /**
     * Filter, which TechList to fetch.
     * 
    **/
    where?: TechListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechLists to fetch.
     * 
    **/
    orderBy?: Enumerable<TechListOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechLists.
     * 
    **/
    cursor?: TechListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechLists.
     * 
    **/
    distinct?: Enumerable<TechListScalarFieldEnum>
  }

  /**
   * TechList: findFirst
   */
  export interface TechListFindFirstArgs extends TechListFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TechList findMany
   */
  export type TechListFindManyArgs = {
    /**
     * Select specific fields to fetch from the TechList
     * 
    **/
    select?: TechListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TechListInclude | null
    /**
     * Filter, which TechLists to fetch.
     * 
    **/
    where?: TechListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechLists to fetch.
     * 
    **/
    orderBy?: Enumerable<TechListOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechLists.
     * 
    **/
    cursor?: TechListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechLists.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TechListScalarFieldEnum>
  }


  /**
   * TechList create
   */
  export type TechListCreateArgs = {
    /**
     * Select specific fields to fetch from the TechList
     * 
    **/
    select?: TechListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TechListInclude | null
    /**
     * The data needed to create a TechList.
     * 
    **/
    data: XOR<TechListCreateInput, TechListUncheckedCreateInput>
  }


  /**
   * TechList createMany
   */
  export type TechListCreateManyArgs = {
    /**
     * The data used to create many TechLists.
     * 
    **/
    data: Enumerable<TechListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TechList update
   */
  export type TechListUpdateArgs = {
    /**
     * Select specific fields to fetch from the TechList
     * 
    **/
    select?: TechListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TechListInclude | null
    /**
     * The data needed to update a TechList.
     * 
    **/
    data: XOR<TechListUpdateInput, TechListUncheckedUpdateInput>
    /**
     * Choose, which TechList to update.
     * 
    **/
    where: TechListWhereUniqueInput
  }


  /**
   * TechList updateMany
   */
  export type TechListUpdateManyArgs = {
    /**
     * The data used to update TechLists.
     * 
    **/
    data: XOR<TechListUpdateManyMutationInput, TechListUncheckedUpdateManyInput>
    /**
     * Filter which TechLists to update
     * 
    **/
    where?: TechListWhereInput
  }


  /**
   * TechList upsert
   */
  export type TechListUpsertArgs = {
    /**
     * Select specific fields to fetch from the TechList
     * 
    **/
    select?: TechListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TechListInclude | null
    /**
     * The filter to search for the TechList to update in case it exists.
     * 
    **/
    where: TechListWhereUniqueInput
    /**
     * In case the TechList found by the `where` argument doesn't exist, create a new TechList with this data.
     * 
    **/
    create: XOR<TechListCreateInput, TechListUncheckedCreateInput>
    /**
     * In case the TechList was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TechListUpdateInput, TechListUncheckedUpdateInput>
  }


  /**
   * TechList delete
   */
  export type TechListDeleteArgs = {
    /**
     * Select specific fields to fetch from the TechList
     * 
    **/
    select?: TechListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TechListInclude | null
    /**
     * Filter which TechList to delete.
     * 
    **/
    where: TechListWhereUniqueInput
  }


  /**
   * TechList deleteMany
   */
  export type TechListDeleteManyArgs = {
    /**
     * Filter which TechLists to delete
     * 
    **/
    where?: TechListWhereInput
  }


  /**
   * TechList: findUniqueOrThrow
   */
  export type TechListFindUniqueOrThrowArgs = TechListFindUniqueArgsBase
      

  /**
   * TechList: findFirstOrThrow
   */
  export type TechListFindFirstOrThrowArgs = TechListFindFirstArgsBase
      

  /**
   * TechList without action
   */
  export type TechListArgs = {
    /**
     * Select specific fields to fetch from the TechList
     * 
    **/
    select?: TechListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TechListInclude | null
  }



  /**
   * Model ResearchField
   */


  export type AggregateResearchField = {
    _count: ResearchFieldCountAggregateOutputType | null
    _avg: ResearchFieldAvgAggregateOutputType | null
    _sum: ResearchFieldSumAggregateOutputType | null
    _min: ResearchFieldMinAggregateOutputType | null
    _max: ResearchFieldMaxAggregateOutputType | null
  }

  export type ResearchFieldAvgAggregateOutputType = {
    id: number | null
  }

  export type ResearchFieldSumAggregateOutputType = {
    id: number | null
  }

  export type ResearchFieldMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ResearchFieldMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ResearchFieldCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ResearchFieldAvgAggregateInputType = {
    id?: true
  }

  export type ResearchFieldSumAggregateInputType = {
    id?: true
  }

  export type ResearchFieldMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ResearchFieldMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ResearchFieldCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ResearchFieldAggregateArgs = {
    /**
     * Filter which ResearchField to aggregate.
     * 
    **/
    where?: ResearchFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchFields to fetch.
     * 
    **/
    orderBy?: Enumerable<ResearchFieldOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ResearchFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchFields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchFields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearchFields
    **/
    _count?: true | ResearchFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResearchFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResearchFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearchFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearchFieldMaxAggregateInputType
  }

  export type GetResearchFieldAggregateType<T extends ResearchFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateResearchField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearchField[P]>
      : GetScalarType<T[P], AggregateResearchField[P]>
  }




  export type ResearchFieldGroupByArgs = {
    where?: ResearchFieldWhereInput
    orderBy?: Enumerable<ResearchFieldOrderByWithAggregationInput>
    by: Array<ResearchFieldScalarFieldEnum>
    having?: ResearchFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearchFieldCountAggregateInputType | true
    _avg?: ResearchFieldAvgAggregateInputType
    _sum?: ResearchFieldSumAggregateInputType
    _min?: ResearchFieldMinAggregateInputType
    _max?: ResearchFieldMaxAggregateInputType
  }


  export type ResearchFieldGroupByOutputType = {
    id: number
    name: string
    _count: ResearchFieldCountAggregateOutputType | null
    _avg: ResearchFieldAvgAggregateOutputType | null
    _sum: ResearchFieldSumAggregateOutputType | null
    _min: ResearchFieldMinAggregateOutputType | null
    _max: ResearchFieldMaxAggregateOutputType | null
  }

  type GetResearchFieldGroupByPayload<T extends ResearchFieldGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ResearchFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearchFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearchFieldGroupByOutputType[P]>
            : GetScalarType<T[P], ResearchFieldGroupByOutputType[P]>
        }
      >
    >


  export type ResearchFieldSelect = {
    id?: boolean
    name?: boolean
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | ResearchFieldCountOutputTypeArgs
  }


  export type ResearchFieldInclude = {
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | ResearchFieldCountOutputTypeArgs
  } 

  export type ResearchFieldGetPayload<S extends boolean | null | undefined | ResearchFieldArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ResearchField :
    S extends undefined ? never :
    S extends { include: any } & (ResearchFieldArgs | ResearchFieldFindManyArgs)
    ? ResearchField  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ResearchFieldCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (ResearchFieldArgs | ResearchFieldFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ResearchFieldCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof ResearchField ? ResearchField[P] : never
  } 
      : ResearchField


  type ResearchFieldCountArgs = Merge<
    Omit<ResearchFieldFindManyArgs, 'select' | 'include'> & {
      select?: ResearchFieldCountAggregateInputType | true
    }
  >

  export interface ResearchFieldDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ResearchField that matches the filter.
     * @param {ResearchFieldFindUniqueArgs} args - Arguments to find a ResearchField
     * @example
     * // Get one ResearchField
     * const researchField = await prisma.researchField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResearchFieldFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ResearchFieldFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ResearchField'> extends True ? Prisma__ResearchFieldClient<ResearchFieldGetPayload<T>> : Prisma__ResearchFieldClient<ResearchFieldGetPayload<T> | null, null>

    /**
     * Find the first ResearchField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchFieldFindFirstArgs} args - Arguments to find a ResearchField
     * @example
     * // Get one ResearchField
     * const researchField = await prisma.researchField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResearchFieldFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ResearchFieldFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ResearchField'> extends True ? Prisma__ResearchFieldClient<ResearchFieldGetPayload<T>> : Prisma__ResearchFieldClient<ResearchFieldGetPayload<T> | null, null>

    /**
     * Find zero or more ResearchFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchFieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearchFields
     * const researchFields = await prisma.researchField.findMany()
     * 
     * // Get first 10 ResearchFields
     * const researchFields = await prisma.researchField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researchFieldWithIdOnly = await prisma.researchField.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResearchFieldFindManyArgs>(
      args?: SelectSubset<T, ResearchFieldFindManyArgs>
    ): PrismaPromise<Array<ResearchFieldGetPayload<T>>>

    /**
     * Create a ResearchField.
     * @param {ResearchFieldCreateArgs} args - Arguments to create a ResearchField.
     * @example
     * // Create one ResearchField
     * const ResearchField = await prisma.researchField.create({
     *   data: {
     *     // ... data to create a ResearchField
     *   }
     * })
     * 
    **/
    create<T extends ResearchFieldCreateArgs>(
      args: SelectSubset<T, ResearchFieldCreateArgs>
    ): Prisma__ResearchFieldClient<ResearchFieldGetPayload<T>>

    /**
     * Create many ResearchFields.
     *     @param {ResearchFieldCreateManyArgs} args - Arguments to create many ResearchFields.
     *     @example
     *     // Create many ResearchFields
     *     const researchField = await prisma.researchField.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResearchFieldCreateManyArgs>(
      args?: SelectSubset<T, ResearchFieldCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ResearchField.
     * @param {ResearchFieldDeleteArgs} args - Arguments to delete one ResearchField.
     * @example
     * // Delete one ResearchField
     * const ResearchField = await prisma.researchField.delete({
     *   where: {
     *     // ... filter to delete one ResearchField
     *   }
     * })
     * 
    **/
    delete<T extends ResearchFieldDeleteArgs>(
      args: SelectSubset<T, ResearchFieldDeleteArgs>
    ): Prisma__ResearchFieldClient<ResearchFieldGetPayload<T>>

    /**
     * Update one ResearchField.
     * @param {ResearchFieldUpdateArgs} args - Arguments to update one ResearchField.
     * @example
     * // Update one ResearchField
     * const researchField = await prisma.researchField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResearchFieldUpdateArgs>(
      args: SelectSubset<T, ResearchFieldUpdateArgs>
    ): Prisma__ResearchFieldClient<ResearchFieldGetPayload<T>>

    /**
     * Delete zero or more ResearchFields.
     * @param {ResearchFieldDeleteManyArgs} args - Arguments to filter ResearchFields to delete.
     * @example
     * // Delete a few ResearchFields
     * const { count } = await prisma.researchField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResearchFieldDeleteManyArgs>(
      args?: SelectSubset<T, ResearchFieldDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearchFields
     * const researchField = await prisma.researchField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResearchFieldUpdateManyArgs>(
      args: SelectSubset<T, ResearchFieldUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ResearchField.
     * @param {ResearchFieldUpsertArgs} args - Arguments to update or create a ResearchField.
     * @example
     * // Update or create a ResearchField
     * const researchField = await prisma.researchField.upsert({
     *   create: {
     *     // ... data to create a ResearchField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearchField we want to update
     *   }
     * })
    **/
    upsert<T extends ResearchFieldUpsertArgs>(
      args: SelectSubset<T, ResearchFieldUpsertArgs>
    ): Prisma__ResearchFieldClient<ResearchFieldGetPayload<T>>

    /**
     * Find one ResearchField that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ResearchFieldFindUniqueOrThrowArgs} args - Arguments to find a ResearchField
     * @example
     * // Get one ResearchField
     * const researchField = await prisma.researchField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResearchFieldFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ResearchFieldFindUniqueOrThrowArgs>
    ): Prisma__ResearchFieldClient<ResearchFieldGetPayload<T>>

    /**
     * Find the first ResearchField that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchFieldFindFirstOrThrowArgs} args - Arguments to find a ResearchField
     * @example
     * // Get one ResearchField
     * const researchField = await prisma.researchField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResearchFieldFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ResearchFieldFindFirstOrThrowArgs>
    ): Prisma__ResearchFieldClient<ResearchFieldGetPayload<T>>

    /**
     * Count the number of ResearchFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchFieldCountArgs} args - Arguments to filter ResearchFields to count.
     * @example
     * // Count the number of ResearchFields
     * const count = await prisma.researchField.count({
     *   where: {
     *     // ... the filter for the ResearchFields we want to count
     *   }
     * })
    **/
    count<T extends ResearchFieldCountArgs>(
      args?: Subset<T, ResearchFieldCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearchField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResearchFieldAggregateArgs>(args: Subset<T, ResearchFieldAggregateArgs>): PrismaPromise<GetResearchFieldAggregateType<T>>

    /**
     * Group by ResearchField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchFieldGroupByArgs} args - Group by arguments.
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
      T extends ResearchFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearchFieldGroupByArgs['orderBy'] }
        : { orderBy?: ResearchFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ResearchFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearchFieldGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearchField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ResearchFieldClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Project<T extends ProjectFindManyArgs= {}>(args?: Subset<T, ProjectFindManyArgs>): PrismaPromise<Array<ProjectGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ResearchField base type for findUnique actions
   */
  export type ResearchFieldFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ResearchField
     * 
    **/
    select?: ResearchFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchFieldInclude | null
    /**
     * Filter, which ResearchField to fetch.
     * 
    **/
    where: ResearchFieldWhereUniqueInput
  }

  /**
   * ResearchField: findUnique
   */
  export interface ResearchFieldFindUniqueArgs extends ResearchFieldFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ResearchField base type for findFirst actions
   */
  export type ResearchFieldFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ResearchField
     * 
    **/
    select?: ResearchFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchFieldInclude | null
    /**
     * Filter, which ResearchField to fetch.
     * 
    **/
    where?: ResearchFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchFields to fetch.
     * 
    **/
    orderBy?: Enumerable<ResearchFieldOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchFields.
     * 
    **/
    cursor?: ResearchFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchFields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchFields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchFields.
     * 
    **/
    distinct?: Enumerable<ResearchFieldScalarFieldEnum>
  }

  /**
   * ResearchField: findFirst
   */
  export interface ResearchFieldFindFirstArgs extends ResearchFieldFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ResearchField findMany
   */
  export type ResearchFieldFindManyArgs = {
    /**
     * Select specific fields to fetch from the ResearchField
     * 
    **/
    select?: ResearchFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchFieldInclude | null
    /**
     * Filter, which ResearchFields to fetch.
     * 
    **/
    where?: ResearchFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchFields to fetch.
     * 
    **/
    orderBy?: Enumerable<ResearchFieldOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearchFields.
     * 
    **/
    cursor?: ResearchFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchFields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchFields.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ResearchFieldScalarFieldEnum>
  }


  /**
   * ResearchField create
   */
  export type ResearchFieldCreateArgs = {
    /**
     * Select specific fields to fetch from the ResearchField
     * 
    **/
    select?: ResearchFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchFieldInclude | null
    /**
     * The data needed to create a ResearchField.
     * 
    **/
    data: XOR<ResearchFieldCreateInput, ResearchFieldUncheckedCreateInput>
  }


  /**
   * ResearchField createMany
   */
  export type ResearchFieldCreateManyArgs = {
    /**
     * The data used to create many ResearchFields.
     * 
    **/
    data: Enumerable<ResearchFieldCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ResearchField update
   */
  export type ResearchFieldUpdateArgs = {
    /**
     * Select specific fields to fetch from the ResearchField
     * 
    **/
    select?: ResearchFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchFieldInclude | null
    /**
     * The data needed to update a ResearchField.
     * 
    **/
    data: XOR<ResearchFieldUpdateInput, ResearchFieldUncheckedUpdateInput>
    /**
     * Choose, which ResearchField to update.
     * 
    **/
    where: ResearchFieldWhereUniqueInput
  }


  /**
   * ResearchField updateMany
   */
  export type ResearchFieldUpdateManyArgs = {
    /**
     * The data used to update ResearchFields.
     * 
    **/
    data: XOR<ResearchFieldUpdateManyMutationInput, ResearchFieldUncheckedUpdateManyInput>
    /**
     * Filter which ResearchFields to update
     * 
    **/
    where?: ResearchFieldWhereInput
  }


  /**
   * ResearchField upsert
   */
  export type ResearchFieldUpsertArgs = {
    /**
     * Select specific fields to fetch from the ResearchField
     * 
    **/
    select?: ResearchFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchFieldInclude | null
    /**
     * The filter to search for the ResearchField to update in case it exists.
     * 
    **/
    where: ResearchFieldWhereUniqueInput
    /**
     * In case the ResearchField found by the `where` argument doesn't exist, create a new ResearchField with this data.
     * 
    **/
    create: XOR<ResearchFieldCreateInput, ResearchFieldUncheckedCreateInput>
    /**
     * In case the ResearchField was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ResearchFieldUpdateInput, ResearchFieldUncheckedUpdateInput>
  }


  /**
   * ResearchField delete
   */
  export type ResearchFieldDeleteArgs = {
    /**
     * Select specific fields to fetch from the ResearchField
     * 
    **/
    select?: ResearchFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchFieldInclude | null
    /**
     * Filter which ResearchField to delete.
     * 
    **/
    where: ResearchFieldWhereUniqueInput
  }


  /**
   * ResearchField deleteMany
   */
  export type ResearchFieldDeleteManyArgs = {
    /**
     * Filter which ResearchFields to delete
     * 
    **/
    where?: ResearchFieldWhereInput
  }


  /**
   * ResearchField: findUniqueOrThrow
   */
  export type ResearchFieldFindUniqueOrThrowArgs = ResearchFieldFindUniqueArgsBase
      

  /**
   * ResearchField: findFirstOrThrow
   */
  export type ResearchFieldFindFirstOrThrowArgs = ResearchFieldFindFirstArgsBase
      

  /**
   * ResearchField without action
   */
  export type ResearchFieldArgs = {
    /**
     * Select specific fields to fetch from the ResearchField
     * 
    **/
    select?: ResearchFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchFieldInclude | null
  }



  /**
   * Model ResearchMethod
   */


  export type AggregateResearchMethod = {
    _count: ResearchMethodCountAggregateOutputType | null
    _avg: ResearchMethodAvgAggregateOutputType | null
    _sum: ResearchMethodSumAggregateOutputType | null
    _min: ResearchMethodMinAggregateOutputType | null
    _max: ResearchMethodMaxAggregateOutputType | null
  }

  export type ResearchMethodAvgAggregateOutputType = {
    id: number | null
  }

  export type ResearchMethodSumAggregateOutputType = {
    id: number | null
  }

  export type ResearchMethodMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ResearchMethodMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ResearchMethodCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ResearchMethodAvgAggregateInputType = {
    id?: true
  }

  export type ResearchMethodSumAggregateInputType = {
    id?: true
  }

  export type ResearchMethodMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ResearchMethodMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ResearchMethodCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ResearchMethodAggregateArgs = {
    /**
     * Filter which ResearchMethod to aggregate.
     * 
    **/
    where?: ResearchMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<ResearchMethodOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ResearchMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchMethods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearchMethods
    **/
    _count?: true | ResearchMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResearchMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResearchMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearchMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearchMethodMaxAggregateInputType
  }

  export type GetResearchMethodAggregateType<T extends ResearchMethodAggregateArgs> = {
        [P in keyof T & keyof AggregateResearchMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearchMethod[P]>
      : GetScalarType<T[P], AggregateResearchMethod[P]>
  }




  export type ResearchMethodGroupByArgs = {
    where?: ResearchMethodWhereInput
    orderBy?: Enumerable<ResearchMethodOrderByWithAggregationInput>
    by: Array<ResearchMethodScalarFieldEnum>
    having?: ResearchMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearchMethodCountAggregateInputType | true
    _avg?: ResearchMethodAvgAggregateInputType
    _sum?: ResearchMethodSumAggregateInputType
    _min?: ResearchMethodMinAggregateInputType
    _max?: ResearchMethodMaxAggregateInputType
  }


  export type ResearchMethodGroupByOutputType = {
    id: number
    name: string
    _count: ResearchMethodCountAggregateOutputType | null
    _avg: ResearchMethodAvgAggregateOutputType | null
    _sum: ResearchMethodSumAggregateOutputType | null
    _min: ResearchMethodMinAggregateOutputType | null
    _max: ResearchMethodMaxAggregateOutputType | null
  }

  type GetResearchMethodGroupByPayload<T extends ResearchMethodGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ResearchMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearchMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearchMethodGroupByOutputType[P]>
            : GetScalarType<T[P], ResearchMethodGroupByOutputType[P]>
        }
      >
    >


  export type ResearchMethodSelect = {
    id?: boolean
    name?: boolean
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | ResearchMethodCountOutputTypeArgs
  }


  export type ResearchMethodInclude = {
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | ResearchMethodCountOutputTypeArgs
  } 

  export type ResearchMethodGetPayload<S extends boolean | null | undefined | ResearchMethodArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ResearchMethod :
    S extends undefined ? never :
    S extends { include: any } & (ResearchMethodArgs | ResearchMethodFindManyArgs)
    ? ResearchMethod  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ResearchMethodCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (ResearchMethodArgs | ResearchMethodFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ResearchMethodCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof ResearchMethod ? ResearchMethod[P] : never
  } 
      : ResearchMethod


  type ResearchMethodCountArgs = Merge<
    Omit<ResearchMethodFindManyArgs, 'select' | 'include'> & {
      select?: ResearchMethodCountAggregateInputType | true
    }
  >

  export interface ResearchMethodDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ResearchMethod that matches the filter.
     * @param {ResearchMethodFindUniqueArgs} args - Arguments to find a ResearchMethod
     * @example
     * // Get one ResearchMethod
     * const researchMethod = await prisma.researchMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResearchMethodFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ResearchMethodFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ResearchMethod'> extends True ? Prisma__ResearchMethodClient<ResearchMethodGetPayload<T>> : Prisma__ResearchMethodClient<ResearchMethodGetPayload<T> | null, null>

    /**
     * Find the first ResearchMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchMethodFindFirstArgs} args - Arguments to find a ResearchMethod
     * @example
     * // Get one ResearchMethod
     * const researchMethod = await prisma.researchMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResearchMethodFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ResearchMethodFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ResearchMethod'> extends True ? Prisma__ResearchMethodClient<ResearchMethodGetPayload<T>> : Prisma__ResearchMethodClient<ResearchMethodGetPayload<T> | null, null>

    /**
     * Find zero or more ResearchMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchMethodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearchMethods
     * const researchMethods = await prisma.researchMethod.findMany()
     * 
     * // Get first 10 ResearchMethods
     * const researchMethods = await prisma.researchMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researchMethodWithIdOnly = await prisma.researchMethod.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResearchMethodFindManyArgs>(
      args?: SelectSubset<T, ResearchMethodFindManyArgs>
    ): PrismaPromise<Array<ResearchMethodGetPayload<T>>>

    /**
     * Create a ResearchMethod.
     * @param {ResearchMethodCreateArgs} args - Arguments to create a ResearchMethod.
     * @example
     * // Create one ResearchMethod
     * const ResearchMethod = await prisma.researchMethod.create({
     *   data: {
     *     // ... data to create a ResearchMethod
     *   }
     * })
     * 
    **/
    create<T extends ResearchMethodCreateArgs>(
      args: SelectSubset<T, ResearchMethodCreateArgs>
    ): Prisma__ResearchMethodClient<ResearchMethodGetPayload<T>>

    /**
     * Create many ResearchMethods.
     *     @param {ResearchMethodCreateManyArgs} args - Arguments to create many ResearchMethods.
     *     @example
     *     // Create many ResearchMethods
     *     const researchMethod = await prisma.researchMethod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResearchMethodCreateManyArgs>(
      args?: SelectSubset<T, ResearchMethodCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ResearchMethod.
     * @param {ResearchMethodDeleteArgs} args - Arguments to delete one ResearchMethod.
     * @example
     * // Delete one ResearchMethod
     * const ResearchMethod = await prisma.researchMethod.delete({
     *   where: {
     *     // ... filter to delete one ResearchMethod
     *   }
     * })
     * 
    **/
    delete<T extends ResearchMethodDeleteArgs>(
      args: SelectSubset<T, ResearchMethodDeleteArgs>
    ): Prisma__ResearchMethodClient<ResearchMethodGetPayload<T>>

    /**
     * Update one ResearchMethod.
     * @param {ResearchMethodUpdateArgs} args - Arguments to update one ResearchMethod.
     * @example
     * // Update one ResearchMethod
     * const researchMethod = await prisma.researchMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResearchMethodUpdateArgs>(
      args: SelectSubset<T, ResearchMethodUpdateArgs>
    ): Prisma__ResearchMethodClient<ResearchMethodGetPayload<T>>

    /**
     * Delete zero or more ResearchMethods.
     * @param {ResearchMethodDeleteManyArgs} args - Arguments to filter ResearchMethods to delete.
     * @example
     * // Delete a few ResearchMethods
     * const { count } = await prisma.researchMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResearchMethodDeleteManyArgs>(
      args?: SelectSubset<T, ResearchMethodDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearchMethods
     * const researchMethod = await prisma.researchMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResearchMethodUpdateManyArgs>(
      args: SelectSubset<T, ResearchMethodUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ResearchMethod.
     * @param {ResearchMethodUpsertArgs} args - Arguments to update or create a ResearchMethod.
     * @example
     * // Update or create a ResearchMethod
     * const researchMethod = await prisma.researchMethod.upsert({
     *   create: {
     *     // ... data to create a ResearchMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearchMethod we want to update
     *   }
     * })
    **/
    upsert<T extends ResearchMethodUpsertArgs>(
      args: SelectSubset<T, ResearchMethodUpsertArgs>
    ): Prisma__ResearchMethodClient<ResearchMethodGetPayload<T>>

    /**
     * Find one ResearchMethod that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ResearchMethodFindUniqueOrThrowArgs} args - Arguments to find a ResearchMethod
     * @example
     * // Get one ResearchMethod
     * const researchMethod = await prisma.researchMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResearchMethodFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ResearchMethodFindUniqueOrThrowArgs>
    ): Prisma__ResearchMethodClient<ResearchMethodGetPayload<T>>

    /**
     * Find the first ResearchMethod that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchMethodFindFirstOrThrowArgs} args - Arguments to find a ResearchMethod
     * @example
     * // Get one ResearchMethod
     * const researchMethod = await prisma.researchMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResearchMethodFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ResearchMethodFindFirstOrThrowArgs>
    ): Prisma__ResearchMethodClient<ResearchMethodGetPayload<T>>

    /**
     * Count the number of ResearchMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchMethodCountArgs} args - Arguments to filter ResearchMethods to count.
     * @example
     * // Count the number of ResearchMethods
     * const count = await prisma.researchMethod.count({
     *   where: {
     *     // ... the filter for the ResearchMethods we want to count
     *   }
     * })
    **/
    count<T extends ResearchMethodCountArgs>(
      args?: Subset<T, ResearchMethodCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearchMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResearchMethodAggregateArgs>(args: Subset<T, ResearchMethodAggregateArgs>): PrismaPromise<GetResearchMethodAggregateType<T>>

    /**
     * Group by ResearchMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchMethodGroupByArgs} args - Group by arguments.
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
      T extends ResearchMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearchMethodGroupByArgs['orderBy'] }
        : { orderBy?: ResearchMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ResearchMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearchMethodGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearchMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ResearchMethodClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Project<T extends ProjectFindManyArgs= {}>(args?: Subset<T, ProjectFindManyArgs>): PrismaPromise<Array<ProjectGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ResearchMethod base type for findUnique actions
   */
  export type ResearchMethodFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ResearchMethod
     * 
    **/
    select?: ResearchMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchMethodInclude | null
    /**
     * Filter, which ResearchMethod to fetch.
     * 
    **/
    where: ResearchMethodWhereUniqueInput
  }

  /**
   * ResearchMethod: findUnique
   */
  export interface ResearchMethodFindUniqueArgs extends ResearchMethodFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ResearchMethod base type for findFirst actions
   */
  export type ResearchMethodFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ResearchMethod
     * 
    **/
    select?: ResearchMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchMethodInclude | null
    /**
     * Filter, which ResearchMethod to fetch.
     * 
    **/
    where?: ResearchMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<ResearchMethodOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchMethods.
     * 
    **/
    cursor?: ResearchMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchMethods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchMethods.
     * 
    **/
    distinct?: Enumerable<ResearchMethodScalarFieldEnum>
  }

  /**
   * ResearchMethod: findFirst
   */
  export interface ResearchMethodFindFirstArgs extends ResearchMethodFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ResearchMethod findMany
   */
  export type ResearchMethodFindManyArgs = {
    /**
     * Select specific fields to fetch from the ResearchMethod
     * 
    **/
    select?: ResearchMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchMethodInclude | null
    /**
     * Filter, which ResearchMethods to fetch.
     * 
    **/
    where?: ResearchMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<ResearchMethodOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearchMethods.
     * 
    **/
    cursor?: ResearchMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchMethods.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ResearchMethodScalarFieldEnum>
  }


  /**
   * ResearchMethod create
   */
  export type ResearchMethodCreateArgs = {
    /**
     * Select specific fields to fetch from the ResearchMethod
     * 
    **/
    select?: ResearchMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchMethodInclude | null
    /**
     * The data needed to create a ResearchMethod.
     * 
    **/
    data: XOR<ResearchMethodCreateInput, ResearchMethodUncheckedCreateInput>
  }


  /**
   * ResearchMethod createMany
   */
  export type ResearchMethodCreateManyArgs = {
    /**
     * The data used to create many ResearchMethods.
     * 
    **/
    data: Enumerable<ResearchMethodCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ResearchMethod update
   */
  export type ResearchMethodUpdateArgs = {
    /**
     * Select specific fields to fetch from the ResearchMethod
     * 
    **/
    select?: ResearchMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchMethodInclude | null
    /**
     * The data needed to update a ResearchMethod.
     * 
    **/
    data: XOR<ResearchMethodUpdateInput, ResearchMethodUncheckedUpdateInput>
    /**
     * Choose, which ResearchMethod to update.
     * 
    **/
    where: ResearchMethodWhereUniqueInput
  }


  /**
   * ResearchMethod updateMany
   */
  export type ResearchMethodUpdateManyArgs = {
    /**
     * The data used to update ResearchMethods.
     * 
    **/
    data: XOR<ResearchMethodUpdateManyMutationInput, ResearchMethodUncheckedUpdateManyInput>
    /**
     * Filter which ResearchMethods to update
     * 
    **/
    where?: ResearchMethodWhereInput
  }


  /**
   * ResearchMethod upsert
   */
  export type ResearchMethodUpsertArgs = {
    /**
     * Select specific fields to fetch from the ResearchMethod
     * 
    **/
    select?: ResearchMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchMethodInclude | null
    /**
     * The filter to search for the ResearchMethod to update in case it exists.
     * 
    **/
    where: ResearchMethodWhereUniqueInput
    /**
     * In case the ResearchMethod found by the `where` argument doesn't exist, create a new ResearchMethod with this data.
     * 
    **/
    create: XOR<ResearchMethodCreateInput, ResearchMethodUncheckedCreateInput>
    /**
     * In case the ResearchMethod was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ResearchMethodUpdateInput, ResearchMethodUncheckedUpdateInput>
  }


  /**
   * ResearchMethod delete
   */
  export type ResearchMethodDeleteArgs = {
    /**
     * Select specific fields to fetch from the ResearchMethod
     * 
    **/
    select?: ResearchMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchMethodInclude | null
    /**
     * Filter which ResearchMethod to delete.
     * 
    **/
    where: ResearchMethodWhereUniqueInput
  }


  /**
   * ResearchMethod deleteMany
   */
  export type ResearchMethodDeleteManyArgs = {
    /**
     * Filter which ResearchMethods to delete
     * 
    **/
    where?: ResearchMethodWhereInput
  }


  /**
   * ResearchMethod: findUniqueOrThrow
   */
  export type ResearchMethodFindUniqueOrThrowArgs = ResearchMethodFindUniqueArgsBase
      

  /**
   * ResearchMethod: findFirstOrThrow
   */
  export type ResearchMethodFindFirstOrThrowArgs = ResearchMethodFindFirstArgsBase
      

  /**
   * ResearchMethod without action
   */
  export type ResearchMethodArgs = {
    /**
     * Select specific fields to fetch from the ResearchMethod
     * 
    **/
    select?: ResearchMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ResearchMethodInclude | null
  }



  /**
   * Model PortList
   */


  export type AggregatePortList = {
    _count: PortListCountAggregateOutputType | null
    _avg: PortListAvgAggregateOutputType | null
    _sum: PortListSumAggregateOutputType | null
    _min: PortListMinAggregateOutputType | null
    _max: PortListMaxAggregateOutputType | null
  }

  export type PortListAvgAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type PortListSumAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type PortListMinAggregateOutputType = {
    id: number | null
    port: number | null
    status: boolean | null
  }

  export type PortListMaxAggregateOutputType = {
    id: number | null
    port: number | null
    status: boolean | null
  }

  export type PortListCountAggregateOutputType = {
    id: number
    port: number
    status: number
    _all: number
  }


  export type PortListAvgAggregateInputType = {
    id?: true
    port?: true
  }

  export type PortListSumAggregateInputType = {
    id?: true
    port?: true
  }

  export type PortListMinAggregateInputType = {
    id?: true
    port?: true
    status?: true
  }

  export type PortListMaxAggregateInputType = {
    id?: true
    port?: true
    status?: true
  }

  export type PortListCountAggregateInputType = {
    id?: true
    port?: true
    status?: true
    _all?: true
  }

  export type PortListAggregateArgs = {
    /**
     * Filter which PortList to aggregate.
     * 
    **/
    where?: PortListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortLists to fetch.
     * 
    **/
    orderBy?: Enumerable<PortListOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PortListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortLists
    **/
    _count?: true | PortListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortListMaxAggregateInputType
  }

  export type GetPortListAggregateType<T extends PortListAggregateArgs> = {
        [P in keyof T & keyof AggregatePortList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortList[P]>
      : GetScalarType<T[P], AggregatePortList[P]>
  }




  export type PortListGroupByArgs = {
    where?: PortListWhereInput
    orderBy?: Enumerable<PortListOrderByWithAggregationInput>
    by: Array<PortListScalarFieldEnum>
    having?: PortListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortListCountAggregateInputType | true
    _avg?: PortListAvgAggregateInputType
    _sum?: PortListSumAggregateInputType
    _min?: PortListMinAggregateInputType
    _max?: PortListMaxAggregateInputType
  }


  export type PortListGroupByOutputType = {
    id: number
    port: number
    status: boolean
    _count: PortListCountAggregateOutputType | null
    _avg: PortListAvgAggregateOutputType | null
    _sum: PortListSumAggregateOutputType | null
    _min: PortListMinAggregateOutputType | null
    _max: PortListMaxAggregateOutputType | null
  }

  type GetPortListGroupByPayload<T extends PortListGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PortListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortListGroupByOutputType[P]>
            : GetScalarType<T[P], PortListGroupByOutputType[P]>
        }
      >
    >


  export type PortListSelect = {
    id?: boolean
    port?: boolean
    status?: boolean
  }


  export type PortListGetPayload<S extends boolean | null | undefined | PortListArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PortList :
    S extends undefined ? never :
    S extends { include: any } & (PortListArgs | PortListFindManyArgs)
    ? PortList 
    : S extends { select: any } & (PortListArgs | PortListFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PortList ? PortList[P] : never
  } 
      : PortList


  type PortListCountArgs = Merge<
    Omit<PortListFindManyArgs, 'select' | 'include'> & {
      select?: PortListCountAggregateInputType | true
    }
  >

  export interface PortListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one PortList that matches the filter.
     * @param {PortListFindUniqueArgs} args - Arguments to find a PortList
     * @example
     * // Get one PortList
     * const portList = await prisma.portList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PortListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PortListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PortList'> extends True ? Prisma__PortListClient<PortListGetPayload<T>> : Prisma__PortListClient<PortListGetPayload<T> | null, null>

    /**
     * Find the first PortList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortListFindFirstArgs} args - Arguments to find a PortList
     * @example
     * // Get one PortList
     * const portList = await prisma.portList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PortListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PortListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PortList'> extends True ? Prisma__PortListClient<PortListGetPayload<T>> : Prisma__PortListClient<PortListGetPayload<T> | null, null>

    /**
     * Find zero or more PortLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortLists
     * const portLists = await prisma.portList.findMany()
     * 
     * // Get first 10 PortLists
     * const portLists = await prisma.portList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portListWithIdOnly = await prisma.portList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PortListFindManyArgs>(
      args?: SelectSubset<T, PortListFindManyArgs>
    ): PrismaPromise<Array<PortListGetPayload<T>>>

    /**
     * Create a PortList.
     * @param {PortListCreateArgs} args - Arguments to create a PortList.
     * @example
     * // Create one PortList
     * const PortList = await prisma.portList.create({
     *   data: {
     *     // ... data to create a PortList
     *   }
     * })
     * 
    **/
    create<T extends PortListCreateArgs>(
      args: SelectSubset<T, PortListCreateArgs>
    ): Prisma__PortListClient<PortListGetPayload<T>>

    /**
     * Create many PortLists.
     *     @param {PortListCreateManyArgs} args - Arguments to create many PortLists.
     *     @example
     *     // Create many PortLists
     *     const portList = await prisma.portList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PortListCreateManyArgs>(
      args?: SelectSubset<T, PortListCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PortList.
     * @param {PortListDeleteArgs} args - Arguments to delete one PortList.
     * @example
     * // Delete one PortList
     * const PortList = await prisma.portList.delete({
     *   where: {
     *     // ... filter to delete one PortList
     *   }
     * })
     * 
    **/
    delete<T extends PortListDeleteArgs>(
      args: SelectSubset<T, PortListDeleteArgs>
    ): Prisma__PortListClient<PortListGetPayload<T>>

    /**
     * Update one PortList.
     * @param {PortListUpdateArgs} args - Arguments to update one PortList.
     * @example
     * // Update one PortList
     * const portList = await prisma.portList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PortListUpdateArgs>(
      args: SelectSubset<T, PortListUpdateArgs>
    ): Prisma__PortListClient<PortListGetPayload<T>>

    /**
     * Delete zero or more PortLists.
     * @param {PortListDeleteManyArgs} args - Arguments to filter PortLists to delete.
     * @example
     * // Delete a few PortLists
     * const { count } = await prisma.portList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PortListDeleteManyArgs>(
      args?: SelectSubset<T, PortListDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortLists
     * const portList = await prisma.portList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PortListUpdateManyArgs>(
      args: SelectSubset<T, PortListUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PortList.
     * @param {PortListUpsertArgs} args - Arguments to update or create a PortList.
     * @example
     * // Update or create a PortList
     * const portList = await prisma.portList.upsert({
     *   create: {
     *     // ... data to create a PortList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortList we want to update
     *   }
     * })
    **/
    upsert<T extends PortListUpsertArgs>(
      args: SelectSubset<T, PortListUpsertArgs>
    ): Prisma__PortListClient<PortListGetPayload<T>>

    /**
     * Find one PortList that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PortListFindUniqueOrThrowArgs} args - Arguments to find a PortList
     * @example
     * // Get one PortList
     * const portList = await prisma.portList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PortListFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PortListFindUniqueOrThrowArgs>
    ): Prisma__PortListClient<PortListGetPayload<T>>

    /**
     * Find the first PortList that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortListFindFirstOrThrowArgs} args - Arguments to find a PortList
     * @example
     * // Get one PortList
     * const portList = await prisma.portList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PortListFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PortListFindFirstOrThrowArgs>
    ): Prisma__PortListClient<PortListGetPayload<T>>

    /**
     * Count the number of PortLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortListCountArgs} args - Arguments to filter PortLists to count.
     * @example
     * // Count the number of PortLists
     * const count = await prisma.portList.count({
     *   where: {
     *     // ... the filter for the PortLists we want to count
     *   }
     * })
    **/
    count<T extends PortListCountArgs>(
      args?: Subset<T, PortListCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortListAggregateArgs>(args: Subset<T, PortListAggregateArgs>): PrismaPromise<GetPortListAggregateType<T>>

    /**
     * Group by PortList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortListGroupByArgs} args - Group by arguments.
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
      T extends PortListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortListGroupByArgs['orderBy'] }
        : { orderBy?: PortListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PortListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortListGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PortList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PortListClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PortList base type for findUnique actions
   */
  export type PortListFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PortList
     * 
    **/
    select?: PortListSelect | null
    /**
     * Filter, which PortList to fetch.
     * 
    **/
    where: PortListWhereUniqueInput
  }

  /**
   * PortList: findUnique
   */
  export interface PortListFindUniqueArgs extends PortListFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PortList base type for findFirst actions
   */
  export type PortListFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PortList
     * 
    **/
    select?: PortListSelect | null
    /**
     * Filter, which PortList to fetch.
     * 
    **/
    where?: PortListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortLists to fetch.
     * 
    **/
    orderBy?: Enumerable<PortListOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortLists.
     * 
    **/
    cursor?: PortListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortLists.
     * 
    **/
    distinct?: Enumerable<PortListScalarFieldEnum>
  }

  /**
   * PortList: findFirst
   */
  export interface PortListFindFirstArgs extends PortListFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PortList findMany
   */
  export type PortListFindManyArgs = {
    /**
     * Select specific fields to fetch from the PortList
     * 
    **/
    select?: PortListSelect | null
    /**
     * Filter, which PortLists to fetch.
     * 
    **/
    where?: PortListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortLists to fetch.
     * 
    **/
    orderBy?: Enumerable<PortListOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortLists.
     * 
    **/
    cursor?: PortListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortLists.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PortListScalarFieldEnum>
  }


  /**
   * PortList create
   */
  export type PortListCreateArgs = {
    /**
     * Select specific fields to fetch from the PortList
     * 
    **/
    select?: PortListSelect | null
    /**
     * The data needed to create a PortList.
     * 
    **/
    data: XOR<PortListCreateInput, PortListUncheckedCreateInput>
  }


  /**
   * PortList createMany
   */
  export type PortListCreateManyArgs = {
    /**
     * The data used to create many PortLists.
     * 
    **/
    data: Enumerable<PortListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PortList update
   */
  export type PortListUpdateArgs = {
    /**
     * Select specific fields to fetch from the PortList
     * 
    **/
    select?: PortListSelect | null
    /**
     * The data needed to update a PortList.
     * 
    **/
    data: XOR<PortListUpdateInput, PortListUncheckedUpdateInput>
    /**
     * Choose, which PortList to update.
     * 
    **/
    where: PortListWhereUniqueInput
  }


  /**
   * PortList updateMany
   */
  export type PortListUpdateManyArgs = {
    /**
     * The data used to update PortLists.
     * 
    **/
    data: XOR<PortListUpdateManyMutationInput, PortListUncheckedUpdateManyInput>
    /**
     * Filter which PortLists to update
     * 
    **/
    where?: PortListWhereInput
  }


  /**
   * PortList upsert
   */
  export type PortListUpsertArgs = {
    /**
     * Select specific fields to fetch from the PortList
     * 
    **/
    select?: PortListSelect | null
    /**
     * The filter to search for the PortList to update in case it exists.
     * 
    **/
    where: PortListWhereUniqueInput
    /**
     * In case the PortList found by the `where` argument doesn't exist, create a new PortList with this data.
     * 
    **/
    create: XOR<PortListCreateInput, PortListUncheckedCreateInput>
    /**
     * In case the PortList was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PortListUpdateInput, PortListUncheckedUpdateInput>
  }


  /**
   * PortList delete
   */
  export type PortListDeleteArgs = {
    /**
     * Select specific fields to fetch from the PortList
     * 
    **/
    select?: PortListSelect | null
    /**
     * Filter which PortList to delete.
     * 
    **/
    where: PortListWhereUniqueInput
  }


  /**
   * PortList deleteMany
   */
  export type PortListDeleteManyArgs = {
    /**
     * Filter which PortLists to delete
     * 
    **/
    where?: PortListWhereInput
  }


  /**
   * PortList: findUniqueOrThrow
   */
  export type PortListFindUniqueOrThrowArgs = PortListFindUniqueArgsBase
      

  /**
   * PortList: findFirstOrThrow
   */
  export type PortListFindFirstOrThrowArgs = PortListFindFirstArgsBase
      

  /**
   * PortList without action
   */
  export type PortListArgs = {
    /**
     * Select specific fields to fetch from the PortList
     * 
    **/
    select?: PortListSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BackendOrderByRelevanceFieldEnum: {
    sourceCode: 'sourceCode',
    url: 'url',
    description: 'description'
  };

  export type BackendOrderByRelevanceFieldEnum = (typeof BackendOrderByRelevanceFieldEnum)[keyof typeof BackendOrderByRelevanceFieldEnum]


  export const BackendScalarFieldEnum: {
    id: 'id',
    isActive: 'isActive',
    sourceCode: 'sourceCode',
    url: 'url',
    description: 'description',
    projectId: 'projectId'
  };

  export type BackendScalarFieldEnum = (typeof BackendScalarFieldEnum)[keyof typeof BackendScalarFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    comment: 'comment',
    username: 'username'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    username: 'username',
    projectId: 'projectId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const DatabaseOrderByRelevanceFieldEnum: {
    url: 'url',
    dbname: 'dbname',
    username: 'username',
    password: 'password',
    description: 'description'
  };

  export type DatabaseOrderByRelevanceFieldEnum = (typeof DatabaseOrderByRelevanceFieldEnum)[keyof typeof DatabaseOrderByRelevanceFieldEnum]


  export const DatabaseScalarFieldEnum: {
    id: 'id',
    isActive: 'isActive',
    url: 'url',
    dbname: 'dbname',
    username: 'username',
    password: 'password',
    description: 'description',
    projectId: 'projectId'
  };

  export type DatabaseScalarFieldEnum = (typeof DatabaseScalarFieldEnum)[keyof typeof DatabaseScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const LecturerOrderByRelevanceFieldEnum: {
    name: 'name',
    image: 'image',
    nip: 'nip',
    bio: 'bio'
  };

  export type LecturerOrderByRelevanceFieldEnum = (typeof LecturerOrderByRelevanceFieldEnum)[keyof typeof LecturerOrderByRelevanceFieldEnum]


  export const LecturerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    nip: 'nip',
    bio: 'bio',
    userId: 'userId',
    isActive: 'isActive'
  };

  export type LecturerScalarFieldEnum = (typeof LecturerScalarFieldEnum)[keyof typeof LecturerScalarFieldEnum]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const PortListScalarFieldEnum: {
    id: 'id',
    port: 'port',
    status: 'status'
  };

  export type PortListScalarFieldEnum = (typeof PortListScalarFieldEnum)[keyof typeof PortListScalarFieldEnum]


  export const ProjectOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    abstract: 'abstract',
    images: 'images',
    video: 'video',
    sourceCode: 'sourceCode',
    url: 'url'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    abstract: 'abstract',
    documents: 'documents',
    images: 'images',
    video: 'video',
    sourceCode: 'sourceCode',
    url: 'url',
    isActive: 'isActive',
    type: 'type',
    studentId: 'studentId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ResearchFieldOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ResearchFieldOrderByRelevanceFieldEnum = (typeof ResearchFieldOrderByRelevanceFieldEnum)[keyof typeof ResearchFieldOrderByRelevanceFieldEnum]


  export const ResearchFieldScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ResearchFieldScalarFieldEnum = (typeof ResearchFieldScalarFieldEnum)[keyof typeof ResearchFieldScalarFieldEnum]


  export const ResearchMethodOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ResearchMethodOrderByRelevanceFieldEnum = (typeof ResearchMethodOrderByRelevanceFieldEnum)[keyof typeof ResearchMethodOrderByRelevanceFieldEnum]


  export const ResearchMethodScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ResearchMethodScalarFieldEnum = (typeof ResearchMethodScalarFieldEnum)[keyof typeof ResearchMethodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentOrderByRelevanceFieldEnum: {
    name: 'name',
    nrp: 'nrp',
    image: 'image',
    bio: 'bio'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nrp: 'nrp',
    image: 'image',
    bio: 'bio',
    userId: 'userId',
    isActive: 'isActive'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TechListOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type TechListOrderByRelevanceFieldEnum = (typeof TechListOrderByRelevanceFieldEnum)[keyof typeof TechListOrderByRelevanceFieldEnum]


  export const TechListScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TechListScalarFieldEnum = (typeof TechListScalarFieldEnum)[keyof typeof TechListScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    email?: StringFilter | string
    role?: EnumRoleFilter | Role
    studentAccount?: XOR<StudentRelationFilter, StudentWhereInput> | null
    lecturerAccount?: XOR<LecturerRelationFilter, LecturerWhereInput> | null
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    studentAccount?: StudentOrderByWithRelationAndSearchRelevanceInput
    lecturerAccount?: LecturerOrderByWithRelationAndSearchRelevanceInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
  }

  export type LecturerWhereInput = {
    AND?: Enumerable<LecturerWhereInput>
    OR?: Enumerable<LecturerWhereInput>
    NOT?: Enumerable<LecturerWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringNullableFilter | string | null
    nip?: StringFilter | string
    bio?: StringNullableFilter | string | null
    project?: ProjectListRelationFilter
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    isActive?: BoolFilter | boolean
  }

  export type LecturerOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    nip?: SortOrder
    bio?: SortOrder
    project?: ProjectOrderByRelationAggregateInput
    userId?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    isActive?: SortOrder
    _relevance?: LecturerOrderByRelevanceInput
  }

  export type LecturerWhereUniqueInput = {
    id?: number
    name?: string
    nip?: string
    userId?: number
  }

  export type LecturerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    nip?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    _count?: LecturerCountOrderByAggregateInput
    _avg?: LecturerAvgOrderByAggregateInput
    _max?: LecturerMaxOrderByAggregateInput
    _min?: LecturerMinOrderByAggregateInput
    _sum?: LecturerSumOrderByAggregateInput
  }

  export type LecturerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LecturerScalarWhereWithAggregatesInput>
    OR?: Enumerable<LecturerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LecturerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    nip?: StringWithAggregatesFilter | string
    bio?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
    isActive?: BoolWithAggregatesFilter | boolean
  }

  export type StudentWhereInput = {
    AND?: Enumerable<StudentWhereInput>
    OR?: Enumerable<StudentWhereInput>
    NOT?: Enumerable<StudentWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    nrp?: StringFilter | string
    image?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    isActive?: BoolFilter | boolean
  }

  export type StudentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    nrp?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    project?: ProjectOrderByWithRelationAndSearchRelevanceInput
    userId?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    isActive?: SortOrder
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = {
    id?: number
    name?: string
    nrp?: string
    userId?: number
  }

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nrp?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    nrp?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    bio?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
    isActive?: BoolWithAggregatesFilter | boolean
  }

  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    abstract?: StringFilter | string
    documents?: JsonNullableFilter
    images?: StringNullableListFilter
    video?: StringNullableFilter | string | null
    sourceCode?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    isActive?: BoolFilter | boolean
    type?: EnumProjectTypeFilter | ProjectType
    tech?: TechListListRelationFilter
    researchFields?: ResearchFieldListRelationFilter
    methods?: ResearchMethodListRelationFilter
    studentId?: IntFilter | number
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    lecturers?: LecturerListRelationFilter
    comments?: CommentListRelationFilter
    Backend?: XOR<BackendRelationFilter, BackendWhereInput> | null
    Database?: XOR<DatabaseRelationFilter, DatabaseWhereInput> | null
  }

  export type ProjectOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    abstract?: SortOrder
    documents?: SortOrder
    images?: SortOrder
    video?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    tech?: TechListOrderByRelationAggregateInput
    researchFields?: ResearchFieldOrderByRelationAggregateInput
    methods?: ResearchMethodOrderByRelationAggregateInput
    studentId?: SortOrder
    student?: StudentOrderByWithRelationAndSearchRelevanceInput
    lecturers?: LecturerOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    Backend?: BackendOrderByWithRelationAndSearchRelevanceInput
    Database?: DatabaseOrderByWithRelationAndSearchRelevanceInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = {
    id?: number
    title?: string
    studentId?: number
  }

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    abstract?: SortOrder
    documents?: SortOrder
    images?: SortOrder
    video?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    studentId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    abstract?: StringWithAggregatesFilter | string
    documents?: JsonNullableWithAggregatesFilter
    images?: StringNullableListFilter
    video?: StringNullableWithAggregatesFilter | string | null
    sourceCode?: StringNullableWithAggregatesFilter | string | null
    url?: StringNullableWithAggregatesFilter | string | null
    isActive?: BoolWithAggregatesFilter | boolean
    type?: EnumProjectTypeWithAggregatesFilter | ProjectType
    studentId?: IntWithAggregatesFilter | number
  }

  export type BackendWhereInput = {
    AND?: Enumerable<BackendWhereInput>
    OR?: Enumerable<BackendWhereInput>
    NOT?: Enumerable<BackendWhereInput>
    id?: IntFilter | number
    isActive?: BoolFilter | boolean
    sourceCode?: StringFilter | string
    url?: StringFilter | string
    description?: StringFilter | string
    projectId?: IntFilter | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type BackendOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    isActive?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationAndSearchRelevanceInput
    _relevance?: BackendOrderByRelevanceInput
  }

  export type BackendWhereUniqueInput = {
    id?: number
    projectId?: number
  }

  export type BackendOrderByWithAggregationInput = {
    id?: SortOrder
    isActive?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
    _count?: BackendCountOrderByAggregateInput
    _avg?: BackendAvgOrderByAggregateInput
    _max?: BackendMaxOrderByAggregateInput
    _min?: BackendMinOrderByAggregateInput
    _sum?: BackendSumOrderByAggregateInput
  }

  export type BackendScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BackendScalarWhereWithAggregatesInput>
    OR?: Enumerable<BackendScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BackendScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    isActive?: BoolWithAggregatesFilter | boolean
    sourceCode?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    projectId?: IntWithAggregatesFilter | number
  }

  export type DatabaseWhereInput = {
    AND?: Enumerable<DatabaseWhereInput>
    OR?: Enumerable<DatabaseWhereInput>
    NOT?: Enumerable<DatabaseWhereInput>
    id?: IntFilter | number
    isActive?: BoolFilter | boolean
    url?: StringFilter | string
    dbname?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    description?: StringFilter | string
    projectId?: IntFilter | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type DatabaseOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    isActive?: SortOrder
    url?: SortOrder
    dbname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationAndSearchRelevanceInput
    _relevance?: DatabaseOrderByRelevanceInput
  }

  export type DatabaseWhereUniqueInput = {
    id?: number
    projectId?: number
  }

  export type DatabaseOrderByWithAggregationInput = {
    id?: SortOrder
    isActive?: SortOrder
    url?: SortOrder
    dbname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
    _count?: DatabaseCountOrderByAggregateInput
    _avg?: DatabaseAvgOrderByAggregateInput
    _max?: DatabaseMaxOrderByAggregateInput
    _min?: DatabaseMinOrderByAggregateInput
    _sum?: DatabaseSumOrderByAggregateInput
  }

  export type DatabaseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DatabaseScalarWhereWithAggregatesInput>
    OR?: Enumerable<DatabaseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DatabaseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    isActive?: BoolWithAggregatesFilter | boolean
    url?: StringWithAggregatesFilter | string
    dbname?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    projectId?: IntWithAggregatesFilter | number
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    comment?: StringFilter | string
    username?: StringFilter | string
    Project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
    projectId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type CommentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    comment?: SortOrder
    username?: SortOrder
    Project?: ProjectOrderByWithRelationAndSearchRelevanceInput
    projectId?: SortOrder
    createdAt?: SortOrder
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = {
    id?: number
  }

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    username?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    comment?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    projectId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TechListWhereInput = {
    AND?: Enumerable<TechListWhereInput>
    OR?: Enumerable<TechListWhereInput>
    NOT?: Enumerable<TechListWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    Project?: ProjectListRelationFilter
  }

  export type TechListOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
    _relevance?: TechListOrderByRelevanceInput
  }

  export type TechListWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type TechListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TechListCountOrderByAggregateInput
    _avg?: TechListAvgOrderByAggregateInput
    _max?: TechListMaxOrderByAggregateInput
    _min?: TechListMinOrderByAggregateInput
    _sum?: TechListSumOrderByAggregateInput
  }

  export type TechListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TechListScalarWhereWithAggregatesInput>
    OR?: Enumerable<TechListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TechListScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type ResearchFieldWhereInput = {
    AND?: Enumerable<ResearchFieldWhereInput>
    OR?: Enumerable<ResearchFieldWhereInput>
    NOT?: Enumerable<ResearchFieldWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    Project?: ProjectListRelationFilter
  }

  export type ResearchFieldOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
    _relevance?: ResearchFieldOrderByRelevanceInput
  }

  export type ResearchFieldWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ResearchFieldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ResearchFieldCountOrderByAggregateInput
    _avg?: ResearchFieldAvgOrderByAggregateInput
    _max?: ResearchFieldMaxOrderByAggregateInput
    _min?: ResearchFieldMinOrderByAggregateInput
    _sum?: ResearchFieldSumOrderByAggregateInput
  }

  export type ResearchFieldScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ResearchFieldScalarWhereWithAggregatesInput>
    OR?: Enumerable<ResearchFieldScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ResearchFieldScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type ResearchMethodWhereInput = {
    AND?: Enumerable<ResearchMethodWhereInput>
    OR?: Enumerable<ResearchMethodWhereInput>
    NOT?: Enumerable<ResearchMethodWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    Project?: ProjectListRelationFilter
  }

  export type ResearchMethodOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
    _relevance?: ResearchMethodOrderByRelevanceInput
  }

  export type ResearchMethodWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ResearchMethodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ResearchMethodCountOrderByAggregateInput
    _avg?: ResearchMethodAvgOrderByAggregateInput
    _max?: ResearchMethodMaxOrderByAggregateInput
    _min?: ResearchMethodMinOrderByAggregateInput
    _sum?: ResearchMethodSumOrderByAggregateInput
  }

  export type ResearchMethodScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ResearchMethodScalarWhereWithAggregatesInput>
    OR?: Enumerable<ResearchMethodScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ResearchMethodScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type PortListWhereInput = {
    AND?: Enumerable<PortListWhereInput>
    OR?: Enumerable<PortListWhereInput>
    NOT?: Enumerable<PortListWhereInput>
    id?: IntFilter | number
    port?: IntFilter | number
    status?: BoolFilter | boolean
  }

  export type PortListOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    port?: SortOrder
    status?: SortOrder
  }

  export type PortListWhereUniqueInput = {
    id?: number
    port?: number
  }

  export type PortListOrderByWithAggregationInput = {
    id?: SortOrder
    port?: SortOrder
    status?: SortOrder
    _count?: PortListCountOrderByAggregateInput
    _avg?: PortListAvgOrderByAggregateInput
    _max?: PortListMaxOrderByAggregateInput
    _min?: PortListMinOrderByAggregateInput
    _sum?: PortListSumOrderByAggregateInput
  }

  export type PortListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PortListScalarWhereWithAggregatesInput>
    OR?: Enumerable<PortListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PortListScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    port?: IntWithAggregatesFilter | number
    status?: BoolWithAggregatesFilter | boolean
  }

  export type UserCreateInput = {
    username: string
    email: string
    role?: Role
    studentAccount?: StudentCreateNestedOneWithoutUserInput
    lecturerAccount?: LecturerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    role?: Role
    studentAccount?: StudentUncheckedCreateNestedOneWithoutUserInput
    lecturerAccount?: LecturerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    studentAccount?: StudentUpdateOneWithoutUserNestedInput
    lecturerAccount?: LecturerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    studentAccount?: StudentUncheckedUpdateOneWithoutUserNestedInput
    lecturerAccount?: LecturerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    role?: Role
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type LecturerCreateInput = {
    name: string
    image?: string | null
    nip: string
    bio?: string | null
    project?: ProjectCreateNestedManyWithoutLecturersInput
    user: UserCreateNestedOneWithoutLecturerAccountInput
    isActive?: boolean
  }

  export type LecturerUncheckedCreateInput = {
    id?: number
    name: string
    image?: string | null
    nip: string
    bio?: string | null
    project?: ProjectUncheckedCreateNestedManyWithoutLecturersInput
    userId: number
    isActive?: boolean
  }

  export type LecturerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateManyWithoutLecturersNestedInput
    user?: UserUpdateOneRequiredWithoutLecturerAccountNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LecturerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUncheckedUpdateManyWithoutLecturersNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LecturerCreateManyInput = {
    id?: number
    name: string
    image?: string | null
    nip: string
    bio?: string | null
    userId: number
    isActive?: boolean
  }

  export type LecturerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LecturerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentCreateInput = {
    name: string
    nrp: string
    image?: string | null
    bio?: string | null
    project?: ProjectCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentAccountInput
    isActive?: boolean
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    name: string
    nrp: string
    image?: string | null
    bio?: string | null
    project?: ProjectUncheckedCreateNestedOneWithoutStudentInput
    userId: number
    isActive?: boolean
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentAccountNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUncheckedUpdateOneWithoutStudentNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentCreateManyInput = {
    id?: number
    name: string
    nrp: string
    image?: string | null
    bio?: string | null
    userId: number
    isActive?: boolean
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCreateInput = {
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodCreateNestedManyWithoutProjectInput
    student: StudentCreateNestedOneWithoutProjectInput
    lecturers?: LecturerCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    Backend?: BackendCreateNestedOneWithoutProjectInput
    Database?: DatabaseCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListUncheckedCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldUncheckedCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodUncheckedCreateNestedManyWithoutProjectInput
    studentId: number
    lecturers?: LecturerUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    Backend?: BackendUncheckedCreateNestedOneWithoutProjectInput
    Database?: DatabaseUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUpdateManyWithoutProjectNestedInput
    student?: StudentUpdateOneRequiredWithoutProjectNestedInput
    lecturers?: LecturerUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    Backend?: BackendUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUncheckedUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUncheckedUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUncheckedUpdateManyWithoutProjectNestedInput
    studentId?: IntFieldUpdateOperationsInput | number
    lecturers?: LecturerUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    Backend?: BackendUncheckedUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    studentId: number
  }

  export type ProjectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type BackendCreateInput = {
    isActive?: boolean
    sourceCode: string
    url: string
    description: string
    project: ProjectCreateNestedOneWithoutBackendInput
  }

  export type BackendUncheckedCreateInput = {
    id?: number
    isActive?: boolean
    sourceCode: string
    url: string
    description: string
    projectId: number
  }

  export type BackendUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sourceCode?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutBackendNestedInput
  }

  export type BackendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sourceCode?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type BackendCreateManyInput = {
    id?: number
    isActive?: boolean
    sourceCode: string
    url: string
    description: string
    projectId: number
  }

  export type BackendUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sourceCode?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BackendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sourceCode?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type DatabaseCreateInput = {
    isActive?: boolean
    url: string
    dbname: string
    username: string
    password: string
    description: string
    project: ProjectCreateNestedOneWithoutDatabaseInput
  }

  export type DatabaseUncheckedCreateInput = {
    id?: number
    isActive?: boolean
    url: string
    dbname: string
    username: string
    password: string
    description: string
    projectId: number
  }

  export type DatabaseUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    url?: StringFieldUpdateOperationsInput | string
    dbname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutDatabaseNestedInput
  }

  export type DatabaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    url?: StringFieldUpdateOperationsInput | string
    dbname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type DatabaseCreateManyInput = {
    id?: number
    isActive?: boolean
    url: string
    dbname: string
    username: string
    password: string
    description: string
    projectId: number
  }

  export type DatabaseUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    url?: StringFieldUpdateOperationsInput | string
    dbname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    url?: StringFieldUpdateOperationsInput | string
    dbname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    comment: string
    username: string
    Project?: ProjectCreateNestedOneWithoutCommentsInput
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    comment: string
    username: string
    projectId?: number | null
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateOneWithoutCommentsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    comment: string
    username: string
    projectId?: number | null
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechListCreateInput = {
    name: string
    Project?: ProjectCreateNestedManyWithoutTechInput
  }

  export type TechListUncheckedCreateInput = {
    id?: number
    name: string
    Project?: ProjectUncheckedCreateNestedManyWithoutTechInput
  }

  export type TechListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateManyWithoutTechNestedInput
  }

  export type TechListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUncheckedUpdateManyWithoutTechNestedInput
  }

  export type TechListCreateManyInput = {
    id?: number
    name: string
  }

  export type TechListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TechListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchFieldCreateInput = {
    name: string
    Project?: ProjectCreateNestedManyWithoutResearchFieldsInput
  }

  export type ResearchFieldUncheckedCreateInput = {
    id?: number
    name: string
    Project?: ProjectUncheckedCreateNestedManyWithoutResearchFieldsInput
  }

  export type ResearchFieldUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateManyWithoutResearchFieldsNestedInput
  }

  export type ResearchFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUncheckedUpdateManyWithoutResearchFieldsNestedInput
  }

  export type ResearchFieldCreateManyInput = {
    id?: number
    name: string
  }

  export type ResearchFieldUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchMethodCreateInput = {
    name: string
    Project?: ProjectCreateNestedManyWithoutMethodsInput
  }

  export type ResearchMethodUncheckedCreateInput = {
    id?: number
    name: string
    Project?: ProjectUncheckedCreateNestedManyWithoutMethodsInput
  }

  export type ResearchMethodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateManyWithoutMethodsNestedInput
  }

  export type ResearchMethodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUncheckedUpdateManyWithoutMethodsNestedInput
  }

  export type ResearchMethodCreateManyInput = {
    id?: number
    name: string
  }

  export type ResearchMethodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchMethodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PortListCreateInput = {
    port: number
    status: boolean
  }

  export type PortListUncheckedCreateInput = {
    id?: number
    port: number
    status: boolean
  }

  export type PortListUpdateInput = {
    port?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PortListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    port?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PortListCreateManyInput = {
    id?: number
    port: number
    status: boolean
  }

  export type PortListUpdateManyMutationInput = {
    port?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PortListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    port?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type LecturerRelationFilter = {
    is?: LecturerWhereInput | null
    isNot?: LecturerWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: Enumerable<UserOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LecturerOrderByRelevanceInput = {
    fields: Enumerable<LecturerOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type LecturerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    nip?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
  }

  export type LecturerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LecturerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    nip?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
  }

  export type LecturerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    nip?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
  }

  export type LecturerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type StudentOrderByRelevanceInput = {
    fields: Enumerable<StudentOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nrp?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nrp?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nrp?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type EnumProjectTypeFilter = {
    equals?: ProjectType
    in?: Enumerable<ProjectType>
    notIn?: Enumerable<ProjectType>
    not?: NestedEnumProjectTypeFilter | ProjectType
  }

  export type TechListListRelationFilter = {
    every?: TechListWhereInput
    some?: TechListWhereInput
    none?: TechListWhereInput
  }

  export type ResearchFieldListRelationFilter = {
    every?: ResearchFieldWhereInput
    some?: ResearchFieldWhereInput
    none?: ResearchFieldWhereInput
  }

  export type ResearchMethodListRelationFilter = {
    every?: ResearchMethodWhereInput
    some?: ResearchMethodWhereInput
    none?: ResearchMethodWhereInput
  }

  export type LecturerListRelationFilter = {
    every?: LecturerWhereInput
    some?: LecturerWhereInput
    none?: LecturerWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type BackendRelationFilter = {
    is?: BackendWhereInput | null
    isNot?: BackendWhereInput | null
  }

  export type DatabaseRelationFilter = {
    is?: DatabaseWhereInput | null
    isNot?: DatabaseWhereInput | null
  }

  export type TechListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResearchFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResearchMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LecturerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: Enumerable<ProjectOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    abstract?: SortOrder
    documents?: SortOrder
    images?: SortOrder
    video?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    studentId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    abstract?: SortOrder
    video?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    studentId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    abstract?: SortOrder
    video?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    type?: SortOrder
    studentId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type EnumProjectTypeWithAggregatesFilter = {
    equals?: ProjectType
    in?: Enumerable<ProjectType>
    notIn?: Enumerable<ProjectType>
    not?: NestedEnumProjectTypeWithAggregatesFilter | ProjectType
    _count?: NestedIntFilter
    _min?: NestedEnumProjectTypeFilter
    _max?: NestedEnumProjectTypeFilter
  }

  export type BackendOrderByRelevanceInput = {
    fields: Enumerable<BackendOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type BackendCountOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
  }

  export type BackendAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type BackendMaxOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
  }

  export type BackendMinOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    sourceCode?: SortOrder
    url?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
  }

  export type BackendSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type DatabaseOrderByRelevanceInput = {
    fields: Enumerable<DatabaseOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type DatabaseCountOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    url?: SortOrder
    dbname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
  }

  export type DatabaseAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type DatabaseMaxOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    url?: SortOrder
    dbname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
  }

  export type DatabaseMinOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    url?: SortOrder
    dbname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    description?: SortOrder
    projectId?: SortOrder
  }

  export type DatabaseSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CommentOrderByRelevanceInput = {
    fields: Enumerable<CommentOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    username?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    username?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    username?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type TechListOrderByRelevanceInput = {
    fields: Enumerable<TechListOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type TechListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TechListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TechListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TechListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TechListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResearchFieldOrderByRelevanceInput = {
    fields: Enumerable<ResearchFieldOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type ResearchFieldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ResearchFieldAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResearchFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ResearchFieldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ResearchFieldSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResearchMethodOrderByRelevanceInput = {
    fields: Enumerable<ResearchMethodOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type ResearchMethodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ResearchMethodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResearchMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ResearchMethodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ResearchMethodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PortListCountOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    status?: SortOrder
  }

  export type PortListAvgOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type PortListMaxOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    status?: SortOrder
  }

  export type PortListMinOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    status?: SortOrder
  }

  export type PortListSumOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type LecturerCreateNestedOneWithoutUserInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    connect?: LecturerWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type LecturerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    connect?: LecturerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type LecturerUpdateOneWithoutUserNestedInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    upsert?: LecturerUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: LecturerWhereUniqueInput
    update?: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type LecturerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    upsert?: LecturerUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: LecturerWhereUniqueInput
    update?: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type ProjectCreateNestedManyWithoutLecturersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutLecturersInput>, Enumerable<ProjectUncheckedCreateWithoutLecturersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutLecturersInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutLecturerAccountInput = {
    create?: XOR<UserCreateWithoutLecturerAccountInput, UserUncheckedCreateWithoutLecturerAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerAccountInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedManyWithoutLecturersInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutLecturersInput>, Enumerable<ProjectUncheckedCreateWithoutLecturersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutLecturersInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateManyWithoutLecturersNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutLecturersInput>, Enumerable<ProjectUncheckedCreateWithoutLecturersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutLecturersInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutLecturersInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutLecturersInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutLecturersInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutLecturerAccountNestedInput = {
    create?: XOR<UserCreateWithoutLecturerAccountInput, UserUncheckedCreateWithoutLecturerAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerAccountInput
    upsert?: UserUpsertWithoutLecturerAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLecturerAccountInput, UserUncheckedUpdateWithoutLecturerAccountInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUncheckedUpdateManyWithoutLecturersNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutLecturersInput>, Enumerable<ProjectUncheckedCreateWithoutLecturersInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutLecturersInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutLecturersInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutLecturersInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutLecturersInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ProjectCreateNestedOneWithoutStudentInput = {
    create?: XOR<ProjectCreateWithoutStudentInput, ProjectUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudentInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentAccountInput = {
    create?: XOR<UserCreateWithoutStudentAccountInput, UserUncheckedCreateWithoutStudentAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentAccountInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<ProjectCreateWithoutStudentInput, ProjectUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudentInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutStudentNestedInput = {
    create?: XOR<ProjectCreateWithoutStudentInput, ProjectUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudentInput
    upsert?: ProjectUpsertWithoutStudentInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutStudentInput, ProjectUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateOneRequiredWithoutStudentAccountNestedInput = {
    create?: XOR<UserCreateWithoutStudentAccountInput, UserUncheckedCreateWithoutStudentAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentAccountInput
    upsert?: UserUpsertWithoutStudentAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutStudentAccountInput, UserUncheckedUpdateWithoutStudentAccountInput>
  }

  export type ProjectUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<ProjectCreateWithoutStudentInput, ProjectUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudentInput
    upsert?: ProjectUpsertWithoutStudentInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutStudentInput, ProjectUncheckedUpdateWithoutStudentInput>
  }

  export type ProjectCreateimagesInput = {
    set: Enumerable<string>
  }

  export type TechListCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<TechListCreateWithoutProjectInput>, Enumerable<TechListUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TechListCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<TechListWhereUniqueInput>
  }

  export type ResearchFieldCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ResearchFieldCreateWithoutProjectInput>, Enumerable<ResearchFieldUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ResearchFieldCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<ResearchFieldWhereUniqueInput>
  }

  export type ResearchMethodCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ResearchMethodCreateWithoutProjectInput>, Enumerable<ResearchMethodUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ResearchMethodCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<ResearchMethodWhereUniqueInput>
  }

  export type StudentCreateNestedOneWithoutProjectInput = {
    create?: XOR<StudentCreateWithoutProjectInput, StudentUncheckedCreateWithoutProjectInput>
    connectOrCreate?: StudentCreateOrConnectWithoutProjectInput
    connect?: StudentWhereUniqueInput
  }

  export type LecturerCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<LecturerCreateWithoutProjectInput>, Enumerable<LecturerUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<LecturerCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<LecturerWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<CommentCreateWithoutProjectInput>, Enumerable<CommentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutProjectInput>
    createMany?: CommentCreateManyProjectInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type BackendCreateNestedOneWithoutProjectInput = {
    create?: XOR<BackendCreateWithoutProjectInput, BackendUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BackendCreateOrConnectWithoutProjectInput
    connect?: BackendWhereUniqueInput
  }

  export type DatabaseCreateNestedOneWithoutProjectInput = {
    create?: XOR<DatabaseCreateWithoutProjectInput, DatabaseUncheckedCreateWithoutProjectInput>
    connectOrCreate?: DatabaseCreateOrConnectWithoutProjectInput
    connect?: DatabaseWhereUniqueInput
  }

  export type TechListUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<TechListCreateWithoutProjectInput>, Enumerable<TechListUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TechListCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<TechListWhereUniqueInput>
  }

  export type ResearchFieldUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ResearchFieldCreateWithoutProjectInput>, Enumerable<ResearchFieldUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ResearchFieldCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<ResearchFieldWhereUniqueInput>
  }

  export type ResearchMethodUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ResearchMethodCreateWithoutProjectInput>, Enumerable<ResearchMethodUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ResearchMethodCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<ResearchMethodWhereUniqueInput>
  }

  export type LecturerUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<LecturerCreateWithoutProjectInput>, Enumerable<LecturerUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<LecturerCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<LecturerWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<CommentCreateWithoutProjectInput>, Enumerable<CommentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutProjectInput>
    createMany?: CommentCreateManyProjectInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type BackendUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<BackendCreateWithoutProjectInput, BackendUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BackendCreateOrConnectWithoutProjectInput
    connect?: BackendWhereUniqueInput
  }

  export type DatabaseUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<DatabaseCreateWithoutProjectInput, DatabaseUncheckedCreateWithoutProjectInput>
    connectOrCreate?: DatabaseCreateOrConnectWithoutProjectInput
    connect?: DatabaseWhereUniqueInput
  }

  export type ProjectUpdateimagesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: ProjectType
  }

  export type TechListUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<TechListCreateWithoutProjectInput>, Enumerable<TechListUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TechListCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<TechListUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<TechListWhereUniqueInput>
    disconnect?: Enumerable<TechListWhereUniqueInput>
    delete?: Enumerable<TechListWhereUniqueInput>
    connect?: Enumerable<TechListWhereUniqueInput>
    update?: Enumerable<TechListUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<TechListUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<TechListScalarWhereInput>
  }

  export type ResearchFieldUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<ResearchFieldCreateWithoutProjectInput>, Enumerable<ResearchFieldUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ResearchFieldCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ResearchFieldUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<ResearchFieldWhereUniqueInput>
    disconnect?: Enumerable<ResearchFieldWhereUniqueInput>
    delete?: Enumerable<ResearchFieldWhereUniqueInput>
    connect?: Enumerable<ResearchFieldWhereUniqueInput>
    update?: Enumerable<ResearchFieldUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ResearchFieldUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ResearchFieldScalarWhereInput>
  }

  export type ResearchMethodUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<ResearchMethodCreateWithoutProjectInput>, Enumerable<ResearchMethodUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ResearchMethodCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ResearchMethodUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<ResearchMethodWhereUniqueInput>
    disconnect?: Enumerable<ResearchMethodWhereUniqueInput>
    delete?: Enumerable<ResearchMethodWhereUniqueInput>
    connect?: Enumerable<ResearchMethodWhereUniqueInput>
    update?: Enumerable<ResearchMethodUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ResearchMethodUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ResearchMethodScalarWhereInput>
  }

  export type StudentUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<StudentCreateWithoutProjectInput, StudentUncheckedCreateWithoutProjectInput>
    connectOrCreate?: StudentCreateOrConnectWithoutProjectInput
    upsert?: StudentUpsertWithoutProjectInput
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutProjectInput, StudentUncheckedUpdateWithoutProjectInput>
  }

  export type LecturerUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<LecturerCreateWithoutProjectInput>, Enumerable<LecturerUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<LecturerCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<LecturerUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<LecturerWhereUniqueInput>
    disconnect?: Enumerable<LecturerWhereUniqueInput>
    delete?: Enumerable<LecturerWhereUniqueInput>
    connect?: Enumerable<LecturerWhereUniqueInput>
    update?: Enumerable<LecturerUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<LecturerUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<LecturerScalarWhereInput>
  }

  export type CommentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutProjectInput>, Enumerable<CommentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: CommentCreateManyProjectInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type BackendUpdateOneWithoutProjectNestedInput = {
    create?: XOR<BackendCreateWithoutProjectInput, BackendUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BackendCreateOrConnectWithoutProjectInput
    upsert?: BackendUpsertWithoutProjectInput
    disconnect?: boolean
    delete?: boolean
    connect?: BackendWhereUniqueInput
    update?: XOR<BackendUpdateWithoutProjectInput, BackendUncheckedUpdateWithoutProjectInput>
  }

  export type DatabaseUpdateOneWithoutProjectNestedInput = {
    create?: XOR<DatabaseCreateWithoutProjectInput, DatabaseUncheckedCreateWithoutProjectInput>
    connectOrCreate?: DatabaseCreateOrConnectWithoutProjectInput
    upsert?: DatabaseUpsertWithoutProjectInput
    disconnect?: boolean
    delete?: boolean
    connect?: DatabaseWhereUniqueInput
    update?: XOR<DatabaseUpdateWithoutProjectInput, DatabaseUncheckedUpdateWithoutProjectInput>
  }

  export type TechListUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<TechListCreateWithoutProjectInput>, Enumerable<TechListUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TechListCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<TechListUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<TechListWhereUniqueInput>
    disconnect?: Enumerable<TechListWhereUniqueInput>
    delete?: Enumerable<TechListWhereUniqueInput>
    connect?: Enumerable<TechListWhereUniqueInput>
    update?: Enumerable<TechListUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<TechListUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<TechListScalarWhereInput>
  }

  export type ResearchFieldUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<ResearchFieldCreateWithoutProjectInput>, Enumerable<ResearchFieldUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ResearchFieldCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ResearchFieldUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<ResearchFieldWhereUniqueInput>
    disconnect?: Enumerable<ResearchFieldWhereUniqueInput>
    delete?: Enumerable<ResearchFieldWhereUniqueInput>
    connect?: Enumerable<ResearchFieldWhereUniqueInput>
    update?: Enumerable<ResearchFieldUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ResearchFieldUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ResearchFieldScalarWhereInput>
  }

  export type ResearchMethodUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<ResearchMethodCreateWithoutProjectInput>, Enumerable<ResearchMethodUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ResearchMethodCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ResearchMethodUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<ResearchMethodWhereUniqueInput>
    disconnect?: Enumerable<ResearchMethodWhereUniqueInput>
    delete?: Enumerable<ResearchMethodWhereUniqueInput>
    connect?: Enumerable<ResearchMethodWhereUniqueInput>
    update?: Enumerable<ResearchMethodUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ResearchMethodUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ResearchMethodScalarWhereInput>
  }

  export type LecturerUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<LecturerCreateWithoutProjectInput>, Enumerable<LecturerUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<LecturerCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<LecturerUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<LecturerWhereUniqueInput>
    disconnect?: Enumerable<LecturerWhereUniqueInput>
    delete?: Enumerable<LecturerWhereUniqueInput>
    connect?: Enumerable<LecturerWhereUniqueInput>
    update?: Enumerable<LecturerUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<LecturerUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<LecturerScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutProjectInput>, Enumerable<CommentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: CommentCreateManyProjectInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type BackendUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<BackendCreateWithoutProjectInput, BackendUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BackendCreateOrConnectWithoutProjectInput
    upsert?: BackendUpsertWithoutProjectInput
    disconnect?: boolean
    delete?: boolean
    connect?: BackendWhereUniqueInput
    update?: XOR<BackendUpdateWithoutProjectInput, BackendUncheckedUpdateWithoutProjectInput>
  }

  export type DatabaseUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<DatabaseCreateWithoutProjectInput, DatabaseUncheckedCreateWithoutProjectInput>
    connectOrCreate?: DatabaseCreateOrConnectWithoutProjectInput
    upsert?: DatabaseUpsertWithoutProjectInput
    disconnect?: boolean
    delete?: boolean
    connect?: DatabaseWhereUniqueInput
    update?: XOR<DatabaseUpdateWithoutProjectInput, DatabaseUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCreateNestedOneWithoutBackendInput = {
    create?: XOR<ProjectCreateWithoutBackendInput, ProjectUncheckedCreateWithoutBackendInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBackendInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutBackendNestedInput = {
    create?: XOR<ProjectCreateWithoutBackendInput, ProjectUncheckedCreateWithoutBackendInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBackendInput
    upsert?: ProjectUpsertWithoutBackendInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutBackendInput, ProjectUncheckedUpdateWithoutBackendInput>
  }

  export type ProjectCreateNestedOneWithoutDatabaseInput = {
    create?: XOR<ProjectCreateWithoutDatabaseInput, ProjectUncheckedCreateWithoutDatabaseInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDatabaseInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutDatabaseNestedInput = {
    create?: XOR<ProjectCreateWithoutDatabaseInput, ProjectUncheckedCreateWithoutDatabaseInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDatabaseInput
    upsert?: ProjectUpsertWithoutDatabaseInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutDatabaseInput, ProjectUncheckedUpdateWithoutDatabaseInput>
  }

  export type ProjectCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput
    upsert?: ProjectUpsertWithoutCommentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutCommentsInput, ProjectUncheckedUpdateWithoutCommentsInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectCreateNestedManyWithoutTechInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutTechInput>, Enumerable<ProjectUncheckedCreateWithoutTechInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutTechInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutTechInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutTechInput>, Enumerable<ProjectUncheckedCreateWithoutTechInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutTechInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUpdateManyWithoutTechNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutTechInput>, Enumerable<ProjectUncheckedCreateWithoutTechInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutTechInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutTechInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutTechInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutTechInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutTechNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutTechInput>, Enumerable<ProjectUncheckedCreateWithoutTechInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutTechInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutTechInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutTechInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutTechInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ProjectCreateNestedManyWithoutResearchFieldsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutResearchFieldsInput>, Enumerable<ProjectUncheckedCreateWithoutResearchFieldsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutResearchFieldsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutResearchFieldsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutResearchFieldsInput>, Enumerable<ProjectUncheckedCreateWithoutResearchFieldsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutResearchFieldsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUpdateManyWithoutResearchFieldsNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutResearchFieldsInput>, Enumerable<ProjectUncheckedCreateWithoutResearchFieldsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutResearchFieldsInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutResearchFieldsInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutResearchFieldsInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutResearchFieldsInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutResearchFieldsNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutResearchFieldsInput>, Enumerable<ProjectUncheckedCreateWithoutResearchFieldsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutResearchFieldsInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutResearchFieldsInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutResearchFieldsInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutResearchFieldsInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ProjectCreateNestedManyWithoutMethodsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutMethodsInput>, Enumerable<ProjectUncheckedCreateWithoutMethodsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutMethodsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutMethodsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutMethodsInput>, Enumerable<ProjectUncheckedCreateWithoutMethodsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutMethodsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUpdateManyWithoutMethodsNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutMethodsInput>, Enumerable<ProjectUncheckedCreateWithoutMethodsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutMethodsInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutMethodsInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutMethodsInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutMethodsInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutMethodsNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutMethodsInput>, Enumerable<ProjectUncheckedCreateWithoutMethodsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutMethodsInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutMethodsInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutMethodsInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutMethodsInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumProjectTypeFilter = {
    equals?: ProjectType
    in?: Enumerable<ProjectType>
    notIn?: Enumerable<ProjectType>
    not?: NestedEnumProjectTypeFilter | ProjectType
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedEnumProjectTypeWithAggregatesFilter = {
    equals?: ProjectType
    in?: Enumerable<ProjectType>
    notIn?: Enumerable<ProjectType>
    not?: NestedEnumProjectTypeWithAggregatesFilter | ProjectType
    _count?: NestedIntFilter
    _min?: NestedEnumProjectTypeFilter
    _max?: NestedEnumProjectTypeFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StudentCreateWithoutUserInput = {
    name: string
    nrp: string
    image?: string | null
    bio?: string | null
    project?: ProjectCreateNestedOneWithoutStudentInput
    isActive?: boolean
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    nrp: string
    image?: string | null
    bio?: string | null
    project?: ProjectUncheckedCreateNestedOneWithoutStudentInput
    isActive?: boolean
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type LecturerCreateWithoutUserInput = {
    name: string
    image?: string | null
    nip: string
    bio?: string | null
    project?: ProjectCreateNestedManyWithoutLecturersInput
    isActive?: boolean
  }

  export type LecturerUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    image?: string | null
    nip: string
    bio?: string | null
    project?: ProjectUncheckedCreateNestedManyWithoutLecturersInput
    isActive?: boolean
  }

  export type LecturerCreateOrConnectWithoutUserInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneWithoutStudentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUncheckedUpdateOneWithoutStudentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LecturerUpsertWithoutUserInput = {
    update: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
  }

  export type LecturerUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateManyWithoutLecturersNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LecturerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUncheckedUpdateManyWithoutLecturersNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCreateWithoutLecturersInput = {
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodCreateNestedManyWithoutProjectInput
    student: StudentCreateNestedOneWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    Backend?: BackendCreateNestedOneWithoutProjectInput
    Database?: DatabaseCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLecturersInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListUncheckedCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldUncheckedCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodUncheckedCreateNestedManyWithoutProjectInput
    studentId: number
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    Backend?: BackendUncheckedCreateNestedOneWithoutProjectInput
    Database?: DatabaseUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLecturersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLecturersInput, ProjectUncheckedCreateWithoutLecturersInput>
  }

  export type UserCreateWithoutLecturerAccountInput = {
    username: string
    email: string
    role?: Role
    studentAccount?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLecturerAccountInput = {
    id?: number
    username: string
    email: string
    role?: Role
    studentAccount?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLecturerAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLecturerAccountInput, UserUncheckedCreateWithoutLecturerAccountInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutLecturersInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutLecturersInput, ProjectUncheckedUpdateWithoutLecturersInput>
    create: XOR<ProjectCreateWithoutLecturersInput, ProjectUncheckedCreateWithoutLecturersInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutLecturersInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutLecturersInput, ProjectUncheckedUpdateWithoutLecturersInput>
  }

  export type ProjectUpdateManyWithWhereWithoutLecturersInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: Enumerable<ProjectScalarWhereInput>
    OR?: Enumerable<ProjectScalarWhereInput>
    NOT?: Enumerable<ProjectScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    abstract?: StringFilter | string
    documents?: JsonNullableFilter
    images?: StringNullableListFilter
    video?: StringNullableFilter | string | null
    sourceCode?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    isActive?: BoolFilter | boolean
    type?: EnumProjectTypeFilter | ProjectType
    studentId?: IntFilter | number
  }

  export type UserUpsertWithoutLecturerAccountInput = {
    update: XOR<UserUpdateWithoutLecturerAccountInput, UserUncheckedUpdateWithoutLecturerAccountInput>
    create: XOR<UserCreateWithoutLecturerAccountInput, UserUncheckedCreateWithoutLecturerAccountInput>
  }

  export type UserUpdateWithoutLecturerAccountInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    studentAccount?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLecturerAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    studentAccount?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProjectCreateWithoutStudentInput = {
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodCreateNestedManyWithoutProjectInput
    lecturers?: LecturerCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    Backend?: BackendCreateNestedOneWithoutProjectInput
    Database?: DatabaseCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStudentInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListUncheckedCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldUncheckedCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodUncheckedCreateNestedManyWithoutProjectInput
    lecturers?: LecturerUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    Backend?: BackendUncheckedCreateNestedOneWithoutProjectInput
    Database?: DatabaseUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStudentInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStudentInput, ProjectUncheckedCreateWithoutStudentInput>
  }

  export type UserCreateWithoutStudentAccountInput = {
    username: string
    email: string
    role?: Role
    lecturerAccount?: LecturerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentAccountInput = {
    id?: number
    username: string
    email: string
    role?: Role
    lecturerAccount?: LecturerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentAccountInput, UserUncheckedCreateWithoutStudentAccountInput>
  }

  export type ProjectUpsertWithoutStudentInput = {
    update: XOR<ProjectUpdateWithoutStudentInput, ProjectUncheckedUpdateWithoutStudentInput>
    create: XOR<ProjectCreateWithoutStudentInput, ProjectUncheckedCreateWithoutStudentInput>
  }

  export type ProjectUpdateWithoutStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUpdateManyWithoutProjectNestedInput
    lecturers?: LecturerUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    Backend?: BackendUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUncheckedUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUncheckedUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUncheckedUpdateManyWithoutProjectNestedInput
    lecturers?: LecturerUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    Backend?: BackendUncheckedUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type UserUpsertWithoutStudentAccountInput = {
    update: XOR<UserUpdateWithoutStudentAccountInput, UserUncheckedUpdateWithoutStudentAccountInput>
    create: XOR<UserCreateWithoutStudentAccountInput, UserUncheckedCreateWithoutStudentAccountInput>
  }

  export type UserUpdateWithoutStudentAccountInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    lecturerAccount?: LecturerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    lecturerAccount?: LecturerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TechListCreateWithoutProjectInput = {
    name: string
  }

  export type TechListUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
  }

  export type TechListCreateOrConnectWithoutProjectInput = {
    where: TechListWhereUniqueInput
    create: XOR<TechListCreateWithoutProjectInput, TechListUncheckedCreateWithoutProjectInput>
  }

  export type ResearchFieldCreateWithoutProjectInput = {
    name: string
  }

  export type ResearchFieldUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
  }

  export type ResearchFieldCreateOrConnectWithoutProjectInput = {
    where: ResearchFieldWhereUniqueInput
    create: XOR<ResearchFieldCreateWithoutProjectInput, ResearchFieldUncheckedCreateWithoutProjectInput>
  }

  export type ResearchMethodCreateWithoutProjectInput = {
    name: string
  }

  export type ResearchMethodUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
  }

  export type ResearchMethodCreateOrConnectWithoutProjectInput = {
    where: ResearchMethodWhereUniqueInput
    create: XOR<ResearchMethodCreateWithoutProjectInput, ResearchMethodUncheckedCreateWithoutProjectInput>
  }

  export type StudentCreateWithoutProjectInput = {
    name: string
    nrp: string
    image?: string | null
    bio?: string | null
    user: UserCreateNestedOneWithoutStudentAccountInput
    isActive?: boolean
  }

  export type StudentUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    nrp: string
    image?: string | null
    bio?: string | null
    userId: number
    isActive?: boolean
  }

  export type StudentCreateOrConnectWithoutProjectInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutProjectInput, StudentUncheckedCreateWithoutProjectInput>
  }

  export type LecturerCreateWithoutProjectInput = {
    name: string
    image?: string | null
    nip: string
    bio?: string | null
    user: UserCreateNestedOneWithoutLecturerAccountInput
    isActive?: boolean
  }

  export type LecturerUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    image?: string | null
    nip: string
    bio?: string | null
    userId: number
    isActive?: boolean
  }

  export type LecturerCreateOrConnectWithoutProjectInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutProjectInput, LecturerUncheckedCreateWithoutProjectInput>
  }

  export type CommentCreateWithoutProjectInput = {
    comment: string
    username: string
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutProjectInput = {
    id?: number
    comment: string
    username: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutProjectInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput>
  }

  export type CommentCreateManyProjectInputEnvelope = {
    data: Enumerable<CommentCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type BackendCreateWithoutProjectInput = {
    isActive?: boolean
    sourceCode: string
    url: string
    description: string
  }

  export type BackendUncheckedCreateWithoutProjectInput = {
    id?: number
    isActive?: boolean
    sourceCode: string
    url: string
    description: string
  }

  export type BackendCreateOrConnectWithoutProjectInput = {
    where: BackendWhereUniqueInput
    create: XOR<BackendCreateWithoutProjectInput, BackendUncheckedCreateWithoutProjectInput>
  }

  export type DatabaseCreateWithoutProjectInput = {
    isActive?: boolean
    url: string
    dbname: string
    username: string
    password: string
    description: string
  }

  export type DatabaseUncheckedCreateWithoutProjectInput = {
    id?: number
    isActive?: boolean
    url: string
    dbname: string
    username: string
    password: string
    description: string
  }

  export type DatabaseCreateOrConnectWithoutProjectInput = {
    where: DatabaseWhereUniqueInput
    create: XOR<DatabaseCreateWithoutProjectInput, DatabaseUncheckedCreateWithoutProjectInput>
  }

  export type TechListUpsertWithWhereUniqueWithoutProjectInput = {
    where: TechListWhereUniqueInput
    update: XOR<TechListUpdateWithoutProjectInput, TechListUncheckedUpdateWithoutProjectInput>
    create: XOR<TechListCreateWithoutProjectInput, TechListUncheckedCreateWithoutProjectInput>
  }

  export type TechListUpdateWithWhereUniqueWithoutProjectInput = {
    where: TechListWhereUniqueInput
    data: XOR<TechListUpdateWithoutProjectInput, TechListUncheckedUpdateWithoutProjectInput>
  }

  export type TechListUpdateManyWithWhereWithoutProjectInput = {
    where: TechListScalarWhereInput
    data: XOR<TechListUpdateManyMutationInput, TechListUncheckedUpdateManyWithoutTechInput>
  }

  export type TechListScalarWhereInput = {
    AND?: Enumerable<TechListScalarWhereInput>
    OR?: Enumerable<TechListScalarWhereInput>
    NOT?: Enumerable<TechListScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type ResearchFieldUpsertWithWhereUniqueWithoutProjectInput = {
    where: ResearchFieldWhereUniqueInput
    update: XOR<ResearchFieldUpdateWithoutProjectInput, ResearchFieldUncheckedUpdateWithoutProjectInput>
    create: XOR<ResearchFieldCreateWithoutProjectInput, ResearchFieldUncheckedCreateWithoutProjectInput>
  }

  export type ResearchFieldUpdateWithWhereUniqueWithoutProjectInput = {
    where: ResearchFieldWhereUniqueInput
    data: XOR<ResearchFieldUpdateWithoutProjectInput, ResearchFieldUncheckedUpdateWithoutProjectInput>
  }

  export type ResearchFieldUpdateManyWithWhereWithoutProjectInput = {
    where: ResearchFieldScalarWhereInput
    data: XOR<ResearchFieldUpdateManyMutationInput, ResearchFieldUncheckedUpdateManyWithoutResearchFieldsInput>
  }

  export type ResearchFieldScalarWhereInput = {
    AND?: Enumerable<ResearchFieldScalarWhereInput>
    OR?: Enumerable<ResearchFieldScalarWhereInput>
    NOT?: Enumerable<ResearchFieldScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type ResearchMethodUpsertWithWhereUniqueWithoutProjectInput = {
    where: ResearchMethodWhereUniqueInput
    update: XOR<ResearchMethodUpdateWithoutProjectInput, ResearchMethodUncheckedUpdateWithoutProjectInput>
    create: XOR<ResearchMethodCreateWithoutProjectInput, ResearchMethodUncheckedCreateWithoutProjectInput>
  }

  export type ResearchMethodUpdateWithWhereUniqueWithoutProjectInput = {
    where: ResearchMethodWhereUniqueInput
    data: XOR<ResearchMethodUpdateWithoutProjectInput, ResearchMethodUncheckedUpdateWithoutProjectInput>
  }

  export type ResearchMethodUpdateManyWithWhereWithoutProjectInput = {
    where: ResearchMethodScalarWhereInput
    data: XOR<ResearchMethodUpdateManyMutationInput, ResearchMethodUncheckedUpdateManyWithoutMethodsInput>
  }

  export type ResearchMethodScalarWhereInput = {
    AND?: Enumerable<ResearchMethodScalarWhereInput>
    OR?: Enumerable<ResearchMethodScalarWhereInput>
    NOT?: Enumerable<ResearchMethodScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type StudentUpsertWithoutProjectInput = {
    update: XOR<StudentUpdateWithoutProjectInput, StudentUncheckedUpdateWithoutProjectInput>
    create: XOR<StudentCreateWithoutProjectInput, StudentUncheckedCreateWithoutProjectInput>
  }

  export type StudentUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutStudentAccountNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nrp?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LecturerUpsertWithWhereUniqueWithoutProjectInput = {
    where: LecturerWhereUniqueInput
    update: XOR<LecturerUpdateWithoutProjectInput, LecturerUncheckedUpdateWithoutProjectInput>
    create: XOR<LecturerCreateWithoutProjectInput, LecturerUncheckedCreateWithoutProjectInput>
  }

  export type LecturerUpdateWithWhereUniqueWithoutProjectInput = {
    where: LecturerWhereUniqueInput
    data: XOR<LecturerUpdateWithoutProjectInput, LecturerUncheckedUpdateWithoutProjectInput>
  }

  export type LecturerUpdateManyWithWhereWithoutProjectInput = {
    where: LecturerScalarWhereInput
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyWithoutLecturersInput>
  }

  export type LecturerScalarWhereInput = {
    AND?: Enumerable<LecturerScalarWhereInput>
    OR?: Enumerable<LecturerScalarWhereInput>
    NOT?: Enumerable<LecturerScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringNullableFilter | string | null
    nip?: StringFilter | string
    bio?: StringNullableFilter | string | null
    userId?: IntFilter | number
    isActive?: BoolFilter | boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutProjectInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutProjectInput, CommentUncheckedUpdateWithoutProjectInput>
    create: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutProjectInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutProjectInput, CommentUncheckedUpdateWithoutProjectInput>
  }

  export type CommentUpdateManyWithWhereWithoutProjectInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: IntFilter | number
    comment?: StringFilter | string
    username?: StringFilter | string
    projectId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type BackendUpsertWithoutProjectInput = {
    update: XOR<BackendUpdateWithoutProjectInput, BackendUncheckedUpdateWithoutProjectInput>
    create: XOR<BackendCreateWithoutProjectInput, BackendUncheckedCreateWithoutProjectInput>
  }

  export type BackendUpdateWithoutProjectInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sourceCode?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BackendUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sourceCode?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUpsertWithoutProjectInput = {
    update: XOR<DatabaseUpdateWithoutProjectInput, DatabaseUncheckedUpdateWithoutProjectInput>
    create: XOR<DatabaseCreateWithoutProjectInput, DatabaseUncheckedCreateWithoutProjectInput>
  }

  export type DatabaseUpdateWithoutProjectInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    url?: StringFieldUpdateOperationsInput | string
    dbname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    url?: StringFieldUpdateOperationsInput | string
    dbname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateWithoutBackendInput = {
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodCreateNestedManyWithoutProjectInput
    student: StudentCreateNestedOneWithoutProjectInput
    lecturers?: LecturerCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    Database?: DatabaseCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBackendInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListUncheckedCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldUncheckedCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodUncheckedCreateNestedManyWithoutProjectInput
    studentId: number
    lecturers?: LecturerUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    Database?: DatabaseUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBackendInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBackendInput, ProjectUncheckedCreateWithoutBackendInput>
  }

  export type ProjectUpsertWithoutBackendInput = {
    update: XOR<ProjectUpdateWithoutBackendInput, ProjectUncheckedUpdateWithoutBackendInput>
    create: XOR<ProjectCreateWithoutBackendInput, ProjectUncheckedCreateWithoutBackendInput>
  }

  export type ProjectUpdateWithoutBackendInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUpdateManyWithoutProjectNestedInput
    student?: StudentUpdateOneRequiredWithoutProjectNestedInput
    lecturers?: LecturerUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    Database?: DatabaseUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBackendInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUncheckedUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUncheckedUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUncheckedUpdateManyWithoutProjectNestedInput
    studentId?: IntFieldUpdateOperationsInput | number
    lecturers?: LecturerUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    Database?: DatabaseUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutDatabaseInput = {
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodCreateNestedManyWithoutProjectInput
    student: StudentCreateNestedOneWithoutProjectInput
    lecturers?: LecturerCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    Backend?: BackendCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDatabaseInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListUncheckedCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldUncheckedCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodUncheckedCreateNestedManyWithoutProjectInput
    studentId: number
    lecturers?: LecturerUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    Backend?: BackendUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDatabaseInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDatabaseInput, ProjectUncheckedCreateWithoutDatabaseInput>
  }

  export type ProjectUpsertWithoutDatabaseInput = {
    update: XOR<ProjectUpdateWithoutDatabaseInput, ProjectUncheckedUpdateWithoutDatabaseInput>
    create: XOR<ProjectCreateWithoutDatabaseInput, ProjectUncheckedCreateWithoutDatabaseInput>
  }

  export type ProjectUpdateWithoutDatabaseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUpdateManyWithoutProjectNestedInput
    student?: StudentUpdateOneRequiredWithoutProjectNestedInput
    lecturers?: LecturerUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    Backend?: BackendUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDatabaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUncheckedUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUncheckedUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUncheckedUpdateManyWithoutProjectNestedInput
    studentId?: IntFieldUpdateOperationsInput | number
    lecturers?: LecturerUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    Backend?: BackendUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutCommentsInput = {
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodCreateNestedManyWithoutProjectInput
    student: StudentCreateNestedOneWithoutProjectInput
    lecturers?: LecturerCreateNestedManyWithoutProjectInput
    Backend?: BackendCreateNestedOneWithoutProjectInput
    Database?: DatabaseCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListUncheckedCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldUncheckedCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodUncheckedCreateNestedManyWithoutProjectInput
    studentId: number
    lecturers?: LecturerUncheckedCreateNestedManyWithoutProjectInput
    Backend?: BackendUncheckedCreateNestedOneWithoutProjectInput
    Database?: DatabaseUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCommentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
  }

  export type ProjectUpsertWithoutCommentsInput = {
    update: XOR<ProjectUpdateWithoutCommentsInput, ProjectUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
  }

  export type ProjectUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUpdateManyWithoutProjectNestedInput
    student?: StudentUpdateOneRequiredWithoutProjectNestedInput
    lecturers?: LecturerUpdateManyWithoutProjectNestedInput
    Backend?: BackendUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUncheckedUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUncheckedUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUncheckedUpdateManyWithoutProjectNestedInput
    studentId?: IntFieldUpdateOperationsInput | number
    lecturers?: LecturerUncheckedUpdateManyWithoutProjectNestedInput
    Backend?: BackendUncheckedUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutTechInput = {
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    researchFields?: ResearchFieldCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodCreateNestedManyWithoutProjectInput
    student: StudentCreateNestedOneWithoutProjectInput
    lecturers?: LecturerCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    Backend?: BackendCreateNestedOneWithoutProjectInput
    Database?: DatabaseCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTechInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    researchFields?: ResearchFieldUncheckedCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodUncheckedCreateNestedManyWithoutProjectInput
    studentId: number
    lecturers?: LecturerUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    Backend?: BackendUncheckedCreateNestedOneWithoutProjectInput
    Database?: DatabaseUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTechInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTechInput, ProjectUncheckedCreateWithoutTechInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutTechInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTechInput, ProjectUncheckedUpdateWithoutTechInput>
    create: XOR<ProjectCreateWithoutTechInput, ProjectUncheckedCreateWithoutTechInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTechInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTechInput, ProjectUncheckedUpdateWithoutTechInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTechInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutResearchFieldsInput = {
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodCreateNestedManyWithoutProjectInput
    student: StudentCreateNestedOneWithoutProjectInput
    lecturers?: LecturerCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    Backend?: BackendCreateNestedOneWithoutProjectInput
    Database?: DatabaseCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutResearchFieldsInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListUncheckedCreateNestedManyWithoutProjectInput
    methods?: ResearchMethodUncheckedCreateNestedManyWithoutProjectInput
    studentId: number
    lecturers?: LecturerUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    Backend?: BackendUncheckedCreateNestedOneWithoutProjectInput
    Database?: DatabaseUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutResearchFieldsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutResearchFieldsInput, ProjectUncheckedCreateWithoutResearchFieldsInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutResearchFieldsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutResearchFieldsInput, ProjectUncheckedUpdateWithoutResearchFieldsInput>
    create: XOR<ProjectCreateWithoutResearchFieldsInput, ProjectUncheckedCreateWithoutResearchFieldsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutResearchFieldsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutResearchFieldsInput, ProjectUncheckedUpdateWithoutResearchFieldsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutResearchFieldsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutMethodsInput = {
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldCreateNestedManyWithoutProjectInput
    student: StudentCreateNestedOneWithoutProjectInput
    lecturers?: LecturerCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    Backend?: BackendCreateNestedOneWithoutProjectInput
    Database?: DatabaseCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMethodsInput = {
    id?: number
    title: string
    description: string
    abstract: string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectCreateimagesInput | Enumerable<string>
    video?: string | null
    sourceCode?: string | null
    url?: string | null
    isActive?: boolean
    type?: ProjectType
    tech?: TechListUncheckedCreateNestedManyWithoutProjectInput
    researchFields?: ResearchFieldUncheckedCreateNestedManyWithoutProjectInput
    studentId: number
    lecturers?: LecturerUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    Backend?: BackendUncheckedCreateNestedOneWithoutProjectInput
    Database?: DatabaseUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMethodsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMethodsInput, ProjectUncheckedCreateWithoutMethodsInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutMethodsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutMethodsInput, ProjectUncheckedUpdateWithoutMethodsInput>
    create: XOR<ProjectCreateWithoutMethodsInput, ProjectUncheckedCreateWithoutMethodsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutMethodsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutMethodsInput, ProjectUncheckedUpdateWithoutMethodsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutMethodsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectUpdateWithoutLecturersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUpdateManyWithoutProjectNestedInput
    student?: StudentUpdateOneRequiredWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    Backend?: BackendUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLecturersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUncheckedUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUncheckedUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUncheckedUpdateManyWithoutProjectNestedInput
    studentId?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    Backend?: BackendUncheckedUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyProjectInput = {
    id?: number
    comment: string
    username: string
    createdAt?: Date | string
  }

  export type TechListUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TechListUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TechListUncheckedUpdateManyWithoutTechInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchFieldUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchFieldUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchFieldUncheckedUpdateManyWithoutResearchFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchMethodUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchMethodUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResearchMethodUncheckedUpdateManyWithoutMethodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LecturerUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutLecturerAccountNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LecturerUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LecturerUncheckedUpdateManyWithoutLecturersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentUpdateWithoutProjectInput = {
    comment?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutTechInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    researchFields?: ResearchFieldUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUpdateManyWithoutProjectNestedInput
    student?: StudentUpdateOneRequiredWithoutProjectNestedInput
    lecturers?: LecturerUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    Backend?: BackendUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTechInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    researchFields?: ResearchFieldUncheckedUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUncheckedUpdateManyWithoutProjectNestedInput
    studentId?: IntFieldUpdateOperationsInput | number
    lecturers?: LecturerUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    Backend?: BackendUncheckedUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUpdateWithoutResearchFieldsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUpdateManyWithoutProjectNestedInput
    student?: StudentUpdateOneRequiredWithoutProjectNestedInput
    lecturers?: LecturerUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    Backend?: BackendUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutResearchFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUncheckedUpdateManyWithoutProjectNestedInput
    methods?: ResearchMethodUncheckedUpdateManyWithoutProjectNestedInput
    studentId?: IntFieldUpdateOperationsInput | number
    lecturers?: LecturerUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    Backend?: BackendUncheckedUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUpdateWithoutMethodsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUpdateManyWithoutProjectNestedInput
    student?: StudentUpdateOneRequiredWithoutProjectNestedInput
    lecturers?: LecturerUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    Backend?: BackendUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMethodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    documents?: NullableJsonNullValueInput | InputJsonValue
    images?: ProjectUpdateimagesInput | Enumerable<string>
    video?: NullableStringFieldUpdateOperationsInput | string | null
    sourceCode?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectTypeFieldUpdateOperationsInput | ProjectType
    tech?: TechListUncheckedUpdateManyWithoutProjectNestedInput
    researchFields?: ResearchFieldUncheckedUpdateManyWithoutProjectNestedInput
    studentId?: IntFieldUpdateOperationsInput | number
    lecturers?: LecturerUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    Backend?: BackendUncheckedUpdateOneWithoutProjectNestedInput
    Database?: DatabaseUncheckedUpdateOneWithoutProjectNestedInput
  }



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