import { issueFeature, selectIssueAction } from "..";

export async function SelectIssue() {
  const issueList = await generateIssueList();

  return (
    <form action={selectIssueAction}>
      <select name="issueSelect" id="issueSelect">
        <option value="">Please choose an option</option>
        {issueList}
      </select>
      <button type="submit">Select issue</button>
    </form>
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
