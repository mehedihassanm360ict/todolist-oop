import { Knex } from 'knex';

// Db or Transaction connection types
export type TDB = Knex | Knex.Transaction;