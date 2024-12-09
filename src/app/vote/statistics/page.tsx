import { ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { PublicVote } from "@/features";

export default async function Statistics() {
  return (
    <>
      <Main>
        <ReusableCard cardTitle="Statistics">
        <PublicVote />
        </ReusableCard>
      </Main>
    </>
  );
}
