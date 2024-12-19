"use server";

import { revalidatePath } from "next/cache";
import { representativesService } from "./instance";
import { redirect } from "next/navigation";

export async function createRepresentativeAction(formData: FormData) {
  await representativesService.addRepresentative(formData);
  revalidatePath("/");
}


export async function publicVoteAction(formData: FormData) {
  await representativesService.savePublicVote(formData);
  redirect("/vote/statistics");
}

