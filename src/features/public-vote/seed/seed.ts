import { faker } from "@faker-js/faker";
import { publicVoteService } from "../instance";

async function simulatePublicVoteFormData() {
    const emails = await publicVoteService.getRepresentativesEmails();
    const representativeSelected = faker.helpers.arrayElement(emails).email;
    const formData = new globalThis.FormData();
    formData.append("representativeSelect",  representativeSelected);
    return formData;
  }

  export async function seedPublicVote() {
    for (let i = 0; i < 100; i++) {
      const formData = await simulatePublicVoteFormData(); 
      await publicVoteService.savePublicVote(formData); 
    }
    console.log("Done seeding Public vote!");
  };

