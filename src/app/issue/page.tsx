import { Button, Input, ReusableAccordion, ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { issueFeature, createIssueAction } from "@/features";

const issueList = await issueFeature.service.getAllIssuesAndChoices();
const parsedlist = issueList.map(issue => issue.issueName)
export default function Issue() {
  return (
    <>
      <Main>
        <ReusableCard>
          <h1>Create new Issue</h1>
          <ReusableAccordion list={issueList}/>
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
