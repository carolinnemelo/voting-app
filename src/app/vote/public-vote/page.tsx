import {
  electionFeature,
  createPublicVoteAndVoteAction,
  publicVoteFeature,
} from "@/features";

export default async function Home() {
  const allPublicVotes = await publicVoteFeature.service.getAll();
  const representativeList = await generateRepresentativeList();
  return (
    <>
      <h1>Public Vote Form</h1>
      <pre>{JSON.stringify(allPublicVotes, null, 2)}</pre>
      <form action={createPublicVoteAndVoteAction}>
        <label htmlFor="publicVoteName">Public Vote Name</label>
        <input type="text" name="publicVoteName" id="publicVoteName" />
        <label htmlFor="representativeSelect">Choose Representative</label>
        <select name="representativeSelect" id="representativeSelect">
          <option value="">Please choose an option</option>
          {representativeList}
        </select>
        <button type="submit">Vote</button>
      </form>
    </>
  );
}

async function generateRepresentativeList() {
  const representativesTableRows =
    await electionFeature.service.getAllRepresentatives();
  const representativeList = representativesTableRows.map((representative) => {
    return (
      <option key={representative.id} value={representative.id}>
        {representative.representativeName}
      </option>
    );
  });
  return representativeList;
}
