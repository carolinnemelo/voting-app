import { representativesService } from "@/features/representatives";
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
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const representativeName = `${firstName} ${lastName}`;
  const email = faker.internet.email({ firstName, lastName }).toLocaleLowerCase();
  formData.append("representativeName", representativeName);
  formData.append("email", email);
  return formData;
}


export async function seedIssues() {
  const issues = Array.from({ length: 10 }).map(() => simulateIssueFormData());
  for (const issue of issues) {
    await issueService.createIssue(issue);
  }
  console.log("Done seeding issues!");
};

export async function seedRepresentatives() {
  const representatives = Array.from({ length: 10 }).map(() => simulateRepresentativeFormData());
  for (const representative of representatives) {
    await representativesService.addRepresentative(representative);
  }
  console.log("Done seeding representatives!");
};


