
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.6.0
 * Query Engine version: 2e719efb80b56a3f32d18a62489de95bb9c130e3
 */
Prisma.prismaVersion = {
  client: "4.6.0",
  engine: "2e719efb80b56a3f32d18a62489de95bb9c130e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


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
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.BackendOrderByRelevanceFieldEnum = makeEnum({
  sourceCode: 'sourceCode',
  url: 'url',
  description: 'description'
});

exports.Prisma.BackendScalarFieldEnum = makeEnum({
  id: 'id',
  isActive: 'isActive',
  sourceCode: 'sourceCode',
  url: 'url',
  description: 'description',
  projectId: 'projectId'
});

exports.Prisma.CommentOrderByRelevanceFieldEnum = makeEnum({
  comment: 'comment',
  username: 'username'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  comment: 'comment',
  username: 'username',
  projectId: 'projectId',
  createdAt: 'createdAt'
});

exports.Prisma.DatabaseOrderByRelevanceFieldEnum = makeEnum({
  url: 'url',
  dbname: 'dbname',
  username: 'username',
  password: 'password',
  description: 'description'
});

exports.Prisma.DatabaseScalarFieldEnum = makeEnum({
  id: 'id',
  isActive: 'isActive',
  url: 'url',
  dbname: 'dbname',
  username: 'username',
  password: 'password',
  description: 'description',
  projectId: 'projectId'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.LecturerOrderByRelevanceFieldEnum = makeEnum({
  name: 'name',
  image: 'image',
  nip: 'nip',
  bio: 'bio'
});

exports.Prisma.LecturerScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  nip: 'nip',
  bio: 'bio',
  userId: 'userId',
  isActive: 'isActive'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.PortListScalarFieldEnum = makeEnum({
  id: 'id',
  port: 'port',
  status: 'status'
});

exports.Prisma.ProjectOrderByRelevanceFieldEnum = makeEnum({
  title: 'title',
  description: 'description',
  abstract: 'abstract',
  images: 'images',
  video: 'video',
  sourceCode: 'sourceCode',
  url: 'url'
});

exports.Prisma.ProjectScalarFieldEnum = makeEnum({
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
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ResearchFieldOrderByRelevanceFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.ResearchFieldScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.ResearchMethodOrderByRelevanceFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.ResearchMethodScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudentOrderByRelevanceFieldEnum = makeEnum({
  name: 'name',
  nrp: 'nrp',
  image: 'image',
  bio: 'bio'
});

exports.Prisma.StudentScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  nrp: 'nrp',
  image: 'image',
  bio: 'bio',
  userId: 'userId',
  isActive: 'isActive'
});

exports.Prisma.TechListOrderByRelevanceFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.TechListScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserOrderByRelevanceFieldEnum = makeEnum({
  username: 'username',
  email: 'email'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  email: 'email',
  role: 'role'
});
exports.ProjectType = makeEnum({
  Generals: 'Generals',
  StaticWeb: 'StaticWeb',
  SelfHostedWeb: 'SelfHostedWeb'
});

exports.Role = makeEnum({
  Admin: 'Admin',
  Student: 'Student',
  Lecturer: 'Lecturer',
  Guest: 'Guest'
});

exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
