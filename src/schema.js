import { pgTable, serial, varchar, smallint, char, check, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const questions = pgTable(
    'questions', {
        id: serial('id').primaryKey(),
        statement: varchar({ length: 200 }).notNull(),
        subject: varchar({ length: 50 }).notNull(),
        difficulty: smallint().notNull(),
        option_a: varchar({ length: 50 }).notNull(),
        option_b: varchar({ length: 50 }).notNull(),
        option_c: varchar({ length: 50 }).notNull(),
        option_d: varchar({ length: 50 }).notNull(),
        answer: char({ length: 1 }).notNull(),
        created_at: timestamp().defaultNow()
    },
    (table) => [
        check('difficulty_range', sql `${table.difficulty} between 0 and 2`),
        check('answer_range', sql `${table.answer} in ('a', 'b', 'c', 'd')`)
    ]
);