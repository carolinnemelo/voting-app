import { ReusableCard } from "@/components";
import { issueFeature, createIssueAction } from "@/features";

const issueList = await issueFeature.service.getAllIssuesAndChoices();

export default function Issue() {
  return (
    <>
      <ReusableCard>
        <h1>Create new Issue</h1>
        <pre>{JSON.stringify(issueList, null, 2)}</pre>
        <form action={createIssueAction}>
          <input type="text" name="issueName" />
          <label htmlFor="choice1">Choice 1</label>
          <input type="text" name="choice1" id="choice1" />
          <label htmlFor="choice2">Choice 2</label>
          <input type="text" name="choice2" id="choice2" />
          <button type="submit">Create Issue</button>
        </form>
      </ReusableCard>
    </>
  );
}
