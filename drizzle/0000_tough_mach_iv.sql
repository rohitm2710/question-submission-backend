CREATE TABLE "demo_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"statement" varchar(200) NOT NULL,
	"difficulty" smallint NOT NULL,
	"option_a" varchar(50) NOT NULL,
	"option_b" varchar(50) NOT NULL,
	"option_c" varchar(50) NOT NULL,
	"option_d" varchar(50) NOT NULL,
	"answer" char(1) NOT NULL,
	CONSTRAINT "difficulty_range" CHECK ("demo_users"."difficulty" between 0 and 2),
	CONSTRAINT "answer_range" CHECK ("demo_users"."answer" in ('a', 'b', 'c', 'd'))
);
