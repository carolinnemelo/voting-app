import { issueFeature } from "../instance";

export async function SelectIssue() {
  const issuesOptions = await generateOptions("issues")
  return (
    <div>
      <h1>Respira meu bem</h1>
    </div>
  );
}


async function generateOptions(label: string) {
  if(label === "issues") {
    const issuesList = await issueFeature.service.getAllIssuesAndChoices()
  }
  if(label === "choices") {

  }
}