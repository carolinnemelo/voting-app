import { ReusableCard, Main } from "@/components";
import { FormCreateIssue } from "@/features";

export default function IssuePage() {
  return (
    <Main>
      <ReusableCard cardTitle="Create Issue">
        <FormCreateIssue />
      </ReusableCard>
    </Main>
  );
}
