"use server"
export async function createPublicVoteAndVoteAction(formData: FormData) {
  if(!formData) {
    return;
  }
  const publicVoteName = formData.get("publicVoteName") as string;
  const representativeId = formData.get("representativeSelect") as string;
  await publicVoteFeature.service.createPublicVoteAndVote({publicVoteName, representativeId});

}
