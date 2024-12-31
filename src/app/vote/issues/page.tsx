import { ReusableCard, Main } from "@/components";
import { DisplayIssues } from "@/features";

export default function Page() {
  return (
    <Main>
      <ReusableCard cardTitle="Vote on Issues">
        <DisplayIssues />
      </ReusableCard>
    </Main>
  );
}
