import { publicVoteService } from ".";

export async function publicVoteAction(representatives) {
  console.log("publicVoteAction", formData);
  await publicVoteService.savePublicVote(formData);
  return;
}
