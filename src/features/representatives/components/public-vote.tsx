import { representativesService } from "../instance";
import { PublicVoteSelect } from "../schema";

export async function PublicVote() {
  const publicVotes = await representativesService.getPublicVotes();

  countPublicVotes(publicVotes);
  return (
    <div>
      <pre>{JSON.stringify(publicVotes, null, 2)}</pre>
    </div>
  );
}

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

  console.log(countVotes);
}
