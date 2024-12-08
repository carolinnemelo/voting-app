"use server";

import { revalidatePath } from "next/cache";
import { issueService } from ".";

export async function createIssueAction(formData: FormData) {
  await issueService.createIssue(formData);
  revalidatePath("/issue");
}


export async function createRepresentativeAction(formData: FormData) {
  await issueService.addRepresentative(formData);
  revalidatePath("/new-representative");
}

export async function fetchChoicesByIssue(issueId: number) {
  return await issueService.getChoicesByIssueId(issueId);
}
