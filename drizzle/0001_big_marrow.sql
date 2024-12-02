ALTER TABLE "elections" RENAME TO "issues";--> statement-breakpoint
ALTER TABLE "choices" RENAME COLUMN "electionId" TO "issueId";--> statement-breakpoint
ALTER TABLE "issues" RENAME COLUMN "electionName" TO "issueName";--> statement-breakpoint
ALTER TABLE "publicVotes" RENAME COLUMN "publicVoteName" TO "voterName";--> statement-breakpoint
ALTER TABLE "publicVotes" RENAME COLUMN "vote" TO "representativeId";--> statement-breakpoint
ALTER TABLE "publicVotes" RENAME COLUMN "choiceId" TO "preferenceId";--> statement-breakpoint
ALTER TABLE "choices" DROP CONSTRAINT "choices_electionId_elections_id_fk";
--> statement-breakpoint
ALTER TABLE "publicVotes" DROP CONSTRAINT "publicVotes_vote_representatives_id_fk";
--> statement-breakpoint
ALTER TABLE "publicVotes" DROP CONSTRAINT "publicVotes_choiceId_choices_id_fk";
--> statement-breakpoint
ALTER TABLE "representatives" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "choices" ADD CONSTRAINT "choices_issueId_issues_id_fk" FOREIGN KEY ("issueId") REFERENCES "public"."issues"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "publicVotes" ADD CONSTRAINT "publicVotes_representativeId_representatives_id_fk" FOREIGN KEY ("representativeId") REFERENCES "public"."representatives"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "publicVotes" ADD CONSTRAINT "publicVotes_preferenceId_choices_id_fk" FOREIGN KEY ("preferenceId") REFERENCES "public"."choices"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
