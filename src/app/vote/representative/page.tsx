import { choicesTable } from "@/db";
import { issueFeature, voteOnIssueAction } from "@/features";

export default async function Representative() {
  const issueList = await generateIssueList();

  return (
    <>
      <h1>Representative Vote Page</h1>
      <form action={voteOnIssueAction}>
        <select name="issueSelect" id="issueSelect">
          <option value="">Please choose an option</option>
          {issueList}
        </select>
      </form>
      <form action=""></form>
    </>
  );
}

async function generateIssueList() {
  const issuesTableRows = await issueFeature.service.getAll();
  const issueList = issuesTableRows.map((issue) => {
    return (
      <option key={issue.id} value={issue.id}>
        {issue.issueName}
      </option>
    );
  });
  return issueList;
}

async function generateChoiceList() {
  const choicesTableRows = await issueFeature.service.getAllChoices();
  const choiceList = choicesTableRows.map((choice) => {
    return (
      <option key={choice.id} value={choice.id}>
        {choice.}
      </option>
    );
  });
  return choiceList;
}