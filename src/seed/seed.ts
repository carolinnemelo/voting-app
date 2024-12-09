import { seedIssues, seedRepresentatives } from "@/features/issues/seed/seed";
import { seedPublicVote } from "@/features/representatives/seed/seed";

(async () => {
  await seedIssues();
  await seedRepresentatives();
  await seedPublicVote();
})();
