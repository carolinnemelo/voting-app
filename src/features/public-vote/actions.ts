"use server";

import { publicVoteFeature } from "./instance";

export async function createPublicVoteAndVoteAction(formData: FormData) {
  if (!formData) {
    return;
  }
  const publicVoteName = formData.get("publicVoteName") as string;
  const myRepresentativeId = Number(formData.get("representativeSelect")) as number;
  await publicVoteFeature.service.createPublicVoteAndVote({
    publicVoteName,
    myRepresentative: myRepresentativeId,
  });
}
