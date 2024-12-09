import { faker } from "@faker-js/faker";
import { representativesService } from "../instance";

async function simulatePublicVoteFormData() {
  const emails = await representativesService.getAllRepresentativesEmails();
  const representativeSelected = faker.helpers.arrayElement(emails).email;
  const formData = new globalThis.FormData();
  formData.append("representativeSelect", representativeSelected);
  return formData;
}

  export async function seedPublicVote() {
    for (let i = 0; i < 100; i++) {
      const formData = await simulatePublicVoteFormData(); 
      await representativesService.savePublicVote(formData); 
    }
    console.log("Done seeding Public vote!");
  };

