"use server";

import { publicVoteFeature } from "./instance";

export async function createPublicVoteAndVoteAction(formData: FormData) {
  if (!formData) {
    return;
  }
  const voterName = formData.get("publicVoteName") as string;
  const representativeId = Number(formData.get("representativeSelect"));
  await publicVoteFeature.service.createPublicVoteAndVote({
    voterName,
    representativeId,
  });
}

export async function voteOnIssueAction(formData: FormData, choicesTableRows: []) {
  const issueId = Number(formData.get("issueSelect"));
  console.log({choicesTableRows, issueId})

}
