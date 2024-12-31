import { ReusableCard, Main } from "@/components";
import { PublicVote } from "@/features";

export default async function Statistics() {
  return (
    <>
      <Main>
        <ReusableCard cardTitle="Representatives">
          <PublicVote />
        </ReusableCard>
      </Main>
    </>
  );
}
