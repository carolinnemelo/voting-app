import { ReusableCard } from "@/components";
import { Main } from "@/components/main";
// import { issueFeature, FormPublicVote } from "@/features";

export default function Home() {
  // const representativesTableRows =
  //   await issueFeature.service.getAllRepresentatives();
  return (
    <>
      <Main>
        <ReusableCard cardTitle="Public Vote Form">
          AI AI AI 
          {/* <FormPublicVote representativeTableRows={representativesTableRows} /> */}
        </ReusableCard>
      </Main>
    </>
  );
}
