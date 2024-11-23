"use server";

import { electionFeature } from "./instance";

export async function createElectionAction(formData: FormData) {
  const electionName = formData.get("electionName") as string;
  if (!electionName) {
    return;
  }
  await electionFeature.service.createElection(electionName);
}

export async function createRepresentativeAction(formData: FormData) {
  const name = formData.get("representativeName") as string;
  const email = formData.get("representativeName") as string;
  if (!name || !email) {
    return;
  }
  await electionFeature.service.addRepresentative(name, email);
}
