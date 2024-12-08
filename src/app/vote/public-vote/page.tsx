import { ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { issueService, FormPublicVote } from "@/features";

export default async function PublicVote() {
  const representatives =
    await issueService.getAllRepresentatives();
  return (
    <>
      <Main>
        <ReusableCard cardTitle="Public Vote Form">
          <FormPublicVote representatives={representatives} />
        </ReusableCard>
      </Main>
    </>
  );
}
