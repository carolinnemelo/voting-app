import { faker } from "@faker-js/faker";

function simulatePublicVoteFormData() {
  const formData = new globalThis.FormData();
  formData.append("representativeSelect", );
  return formData;
}

async function seedIssues() {
  const issues = Array.from({ length: 10 }).map(() => simulateIssueFormData());
  for (const issue of issues) {
    await issueService.createIssue(issue);
  }
  console.log("Done seeding issues!");
};
