import {
  issueFeature,
  createPublicVoteAndVoteAction,
  publicVoteFeature,
  FormPublicVote,
} from "@/features";

export default async function Home() {
  const representativesTableRows: RepresentativesTableRows[]  =
  await issueFeature.service.getAllRepresentatives();
  console.log(representativesTableRows)
  return (
    <>
      <h1>Public Vote Form</h1>
      <FormPublicVote representativeTableRows={representativesTableRows}/>
    </>
  );
}

type RepresentativesTableRows= {
  email: string;
  id: number;
  createdAt: Date;
  representativeName: string;
  vote: number | null;
}