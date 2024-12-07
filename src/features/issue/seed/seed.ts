import { issueService } from "../instance";
import { faker } from "@faker-js/faker";

function simulateIssueFormData() {
  const formData = new globalThis.FormData();
  formData.append("issueName", faker.commerce.product());
  formData.append("choice1", faker.commerce.productName());
  formData.append("choice2", faker.commerce.productName());
  return formData;
}
function simulateRepresentativeFormData() {
  const formData = new globalThis.FormData();
  formData.append("representativeName", faker.person.fullName());
  formData.append("email", faker.internet.email());
  return formData;
}

async function seedIssues() {
  const issues = Array.from({ length: 10 }).map(() => simulateIssueFormData());
  for (const issue of issues) {
    await issueService.createIssue(issue);
  }
  console.log("Done seeding!");
};

async function seedRepresentatives() {
  const representatives = Array.from({ length: 10 }).map(() => simulateRepresentativeFormData());
  for (const representative of representatives) {
    await issueService.addRepresentative(representative);
  }
  console.log("Done seeding!");
};



seedIssues();
seedRepresentatives();
