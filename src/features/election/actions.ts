"use server"

import { electionFeature } from "./instance";

export async function createElectionAction(formData: FormData) {
  const electionName = formData.get("electionName");
  await electionFeature.service.createElection(electionName)
}
