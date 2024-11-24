import { Button, Input, ReusableAccordion, ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { issueFeature, createIssueAction } from "@/features";

export default async function Issue() {
  const issueList = await issueFeature.service.getAllIssuesAndChoices();
  const issuesNamesList = issueList.map(issue => issue.issueName);
  return (
    <>
      <Main>
        <ReusableCard cardTitle="Create new Issue">
          <ReusableAccordion label="All Issues" list={issuesNamesList}/>
          <form action={createIssueAction}>
            <Input typeOfInput="text" label="Issue name" nameOfInput="issueName" />
            <Input typeOfInput="text" label="Choice 1" nameOfInput="choice1" />
            <Input typeOfInput="text" label="Choice 2" nameOfInput="choice2" />
            <Button label="Create issue" type="submit"/>
          </form>
        </ReusableCard>
      </Main>
    </>
  );
}