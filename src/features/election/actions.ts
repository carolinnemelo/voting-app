"use server";

import { electionFeature } from "./instance";

export async function createElectionAction(formData: FormData) {
  const electionName = formData.get("electionName") as string;
  const choice1 = formData.get("choice1") as string;
  const choice2 = formData.get("choice2") as string;
  if (!electionName) {
    return;
  }
  await electionFeature.service.createElection({electionName, choice1, choice2});
}

export async function createRepresentativeAction(formData: FormData) {
  const name = formData.get("representativeName") as string;
  const email = formData.get("email") as string;
  if (!name || !email) {
    return;
  }
  await electionFeature.service.addRepresentative(name, email);
}
