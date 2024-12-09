import { representativesService } from "../instance";
import { countPublicVotes } from "../logic";

export async function PublicVote() {
  const publicVotes = await representativesService.getPublicVotes();
  const representativesVotes = countPublicVotes(publicVotes);
  return (
    <div>
      <pre>{JSON.stringify(representativesVotes, null, 2)}</pre>
    </div>
  );
}
