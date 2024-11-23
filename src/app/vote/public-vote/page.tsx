import { electionFeature } from "@/features/election/instance";
import { createPublicVoteAndVoteAction } from "@/features/public-vote/actions";

export default async function Home() {
  const representativeList = await generateRepresentativeList()
  return (
    <>
      <h1>Public Vote Form</h1>
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
  const representativesTableRows = await electionFeature.service.getAllRepresentatives();
  const representativeList  = representativesTableRows.map((representative) => {
    return <option key={representative.id} value={representative.id}>{representative.representativeName}</option>
  })
  return representativeList;
}

