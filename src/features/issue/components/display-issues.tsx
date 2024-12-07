import { issueFeature } from "@/features";

export async function DisplayIssues() {
  const issues = await issueFeature.service.getAllIssuesAndChoices();
  const [selectedIssue, setSelectedIssue] = useState("");
  return (
    <div>
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}