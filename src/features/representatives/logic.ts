import { PublicVoteSelect } from "./schema";

export function countPublicVotes(publicVotes: PublicVoteSelect[]) {
  const emails = publicVotes.map((vote) => vote.email);
  const countVotes = emails.reduce((acc, email) => {
    if (!acc[email]) {
      acc[email] = 1;
    } else {
      acc[email] = acc[email] + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  return countVotes;
}
