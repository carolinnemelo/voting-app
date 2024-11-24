import { IssueWithChoices } from "@/app/vote/representative2/page";
import { issueFeature } from "../instance";

export function SelectIssue({
  issuesWithChoicesList,
}: {
  issuesWithChoicesList:IssueWithChoices[];
}) {


  return (
    <div>
      <h1>Respira meu bem</h1>
      <pre>{JSON.stringify(issuesWithChoicesList, null, 2)}</pre>

      <select name="" id="">
        {issuesWithChoicesList.map((issue) => {
          return <option value={issue.issueId}>{issue.issueName}</option>;
        })}
      </select>
    </div>
  );
}
