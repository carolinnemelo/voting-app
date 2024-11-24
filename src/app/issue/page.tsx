import { Button, Input, ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { issueFeature, createIssueAction } from "@/features";

const issueList = await issueFeature.service.getAllIssuesAndChoices();

export default function Issue() {
  return (
    <>
      <Main>
        <ReusableCard>
          <h1>Create new Issue</h1>
          <pre>{JSON.stringify(issueList, null, 2)}</pre>
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
