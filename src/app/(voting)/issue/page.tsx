
import { ReusableAccordion, ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { issueFeature, FormCreateIssue } from "@/features";

export default async function Issue() {
  const issueList = await issueFeature.service.getAllIssuesAndChoices();
  const issuesNamesList = issueList.map((issue) => issue.issueName);

  return (
    <>
      <Main>
        <ReusableCard cardTitle="Create new Issue">
          <ReusableAccordion label="All Issues" list={issuesNamesList} />
          <FormCreateIssue />
        </ReusableCard>
      </Main>
    </>
  );
}
