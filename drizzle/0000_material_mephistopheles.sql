CREATE TABLE IF NOT EXISTS "choices" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "choices_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"choiceName" varchar NOT NULL,
	"electionId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "elections" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "elections_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"electionName" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"endTime" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "publicVotes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "publicVotes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"publicVoteName" varchar NOT NULL,
	"vote" integer,
	"choiceId" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "representatives" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "representatives_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"representativeName" varchar NOT NULL,
	"email" varchar NOT NULL,
	"vote" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "choices" ADD CONSTRAINT "choices_electionId_elections_id_fk" FOREIGN KEY ("electionId") REFERENCES "public"."elections"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "publicVotes" ADD CONSTRAINT "publicVotes_vote_representatives_id_fk" FOREIGN KEY ("vote") REFERENCES "public"."representatives"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "publicVotes" ADD CONSTRAINT "publicVotes_choiceId_choices_id_fk" FOREIGN KEY ("choiceId") REFERENCES "public"."choices"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "representatives" ADD CONSTRAINT "representatives_vote_choices_id_fk" FOREIGN KEY ("vote") REFERENCES "public"."choices"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
