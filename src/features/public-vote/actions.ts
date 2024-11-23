"use server"
export async function createPublicVoteAndVoteAction(formData: FormData) {
  if(!formData) {
    return;
  }
  // const publicVoteName = formData.get("publicVoteName") as string;
  console.log(formData)

}
