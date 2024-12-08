import { publicVoteService } from ".";

export async function voteAction(formData: FormData) {
  await publicVoteService.savePublicVote(formData);
}
