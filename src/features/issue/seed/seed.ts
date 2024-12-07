import { issueService } from "../instance";
import { faker } from "@faker-js/faker";


function simulateFormData() {
  const formData = new globalThis.FormData();
  formData.append("issueName", faker.commerce.product());
  formData.append("choice1", faker.commerce.productName());
  formData.append("choice2", faker.commerce.productName());
  return formData;
}

export const seedIssues = async () => {
  const issues = Array.from({ length: 10 }).map(() => simulateFormData());

  for (const issue of issues) {
    await issueService.createIssue(issue);
  }

  console.log("Done seeding!");
};

seedIssues();
