import { issueService } from "../instance";

export async function DisplayIssues() {
  const issues = await issueService.getAll();
  return (
    <div>
      {issues.map((issue) => (
        <section key={issue.id}>
          <p>{issue.issueName}</p>
        </section>
      ))}
    </div>
  );
}
