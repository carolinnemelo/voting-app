import { ReusableCard } from "@/components";
import { Main } from "@/components/main";
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
