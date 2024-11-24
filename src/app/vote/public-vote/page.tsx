import {
  issueFeature,
  FormPublicVote,
} from "@/features";

export default async function Home() {
  const representativesTableRows  =
  await issueFeature.service.getAllRepresentatives();
  console.log(representativesTableRows)
  return (
    <>
      <h1>Public Vote Form</h1>
      <FormPublicVote representativeTableRows={representativesTableRows}/>
    </>
  );
}

