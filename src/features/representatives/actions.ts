"use server";

import { publicVoteService } from "./instance";

export async function publicVoteAction(formData: FormData) {
  return await publicVoteService.savePublicVote(formData);

}
