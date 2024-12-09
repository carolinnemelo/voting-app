import { ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { FormPublicVote, representativesService } from "@/features";

export default async function PublicVote() {
  const representatives =
    await representativesService.getAllRepresentatives();
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
