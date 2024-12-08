import { faker } from "@faker-js/faker";
import { publicVoteService } from "../instance";

async function simulatePublicVoteFormData() {
  const emails = await publicVoteService.getRepresentativesEmails();
  const representativeSelected = faker.helpers.arrayElement(emails);
  const formData = new globalThis.FormData();
  formData.append("representativeSelect",  representativeSelected.email);
  return formData;
}

export async function seedPublicVote() {
  const formData = await simulatePublicVoteFormData();
  await publicVoteService.savePublicVote(formData);
  console.log("Done seeding Public vote!");
};

