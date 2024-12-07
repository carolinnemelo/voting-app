import { ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { issueService } from "@/features";

export default async function Home() {
  const representativesTableRows =
    await issueService.getAllRepresentatives();
  return (
    <>
      <Main>
        <ReusableCard cardTitle="Public Vote Form">
          <FormPublicVote representativeTableRows={representativesTableRows} />
        </ReusableCard>
      </Main>
    </>
  );
}
