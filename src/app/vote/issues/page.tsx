import { ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { DisplayIssues } from "@/features/issues/components/display-issues";

export default function Page() {
  return (
    <Main>
      <ReusableCard cardTitle="Vote on Issues">
        <DisplayIssues />
      </ReusableCard>
    </Main>
  );
}
