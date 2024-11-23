import { issueFeature, voteOnIssueAction } from "@/features";

export default async function Representative() {
  const issueList = await generateIssueList();
  const choicesTableRows = await issueFeature.service.getAllChoices();

  return (
    <>
      <h1>Representative Vote Page</h1>
      <form action={(formData) => voteOnIssueAction(formData, choicesTableRows)}>
        <select name="issueSelect" id="issueSelect">
          <option value="">Please choose an option</option>
          {issueList}
        </select>
        <button type="submit">Select issue</button>
      </form>
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
