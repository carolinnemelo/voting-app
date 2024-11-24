import {
  issueFeature,
  createPublicVoteAndVoteAction,
  publicVoteFeature,
  FormPublicVote,
} from "@/features";

export default async function Home() {
  const representativeList = await generateRepresentativeList();
  return (
    <>
      <h1>Public Vote Form</h1>
      <FormPublicVote representativeList={representativeList}/>
    </>
  );
}

async function generateRepresentativeList() {
  const representativesTableRows =
    await issueFeature.service.getAllRepresentatives();
  const representativeList = representativesTableRows.map((representative) => {
    return (
      <option key={representative.id} value={representative.id}>
        {representative.representativeName}
      </option>
    );
  });
  return representativeList;
}
