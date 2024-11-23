import { voteOnIssueAction } from "../actions";

export function SelectIssue(issueList) {
  return (
    <form action={voteOnIssueAction}>
      <select name="issueSelect" id="issueSelect">
        <option value="">Please choose an option</option>
        {issueList}
      </select>
      <button type="submit">Select issue</button>
    </form>
  );
}
