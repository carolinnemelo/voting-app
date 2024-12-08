import { seedIssues, seedRepresentatives } from "@/features/issue/seed/seed";
import { seedPublicVote } from "@/features/public-vote/seed/seed";

(async () => {
  await seedIssues();
  await seedRepresentatives();
  await seedPublicVote();
})();
