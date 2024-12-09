import { representativesService } from "../instance";

export async function PublicVote() {
  const results = await representativesService.getPublicVotes();

  return (
    <div>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
