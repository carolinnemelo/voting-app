import {
  issueFeature,
  createPublicVoteAndVoteAction,
  publicVoteFeature,
} from "@/features";

export default async function Home() {
  const representativeList = await generateRepresentativeList();
  return (
    <>
      <h1>Public Vote Form</h1>
   
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
