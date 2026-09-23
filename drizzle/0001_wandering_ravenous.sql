ALTER TABLE "demo_users" RENAME TO "questions";--> statement-breakpoint
ALTER TABLE "questions" DROP CONSTRAINT "difficulty_range";--> statement-breakpoint
ALTER TABLE "questions" DROP CONSTRAINT "answer_range";--> statement-breakpoint
ALTER TABLE "questions" ADD COLUMN "created_at" "cal::local_datetime" DEFAULT now();--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "difficulty_range" CHECK ("questions"."difficulty" between 0 and 2);--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "answer_range" CHECK ("questions"."answer" in ('a', 'b', 'c', 'd'));