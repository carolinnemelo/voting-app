
export async function voteAction(formData: FormData) {
  await voteService.savePublicVote(formData);
}
