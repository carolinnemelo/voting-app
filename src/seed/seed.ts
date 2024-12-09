import { seedIssues, seedRepresentatives } from "@/features/issues/seed/seed";
import { seedPublicVote } from "@/features/public-vote/seed/seed";

(async () => {
  await seedIssues();
  await seedRepresentatives();
  await seedPublicVote();
})();
