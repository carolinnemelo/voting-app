"use server";

import { revalidatePath } from "next/cache";
import { issueFeature } from "./instance";
import { z } from "zod";


const IssueSchema = z.object({
  issueName: z.string().min(1, "Name can not be empty"),
  choice1: z.string().min(1, "Can not be empty"),
  choice2: z.string().min(1, "Can not be empty")
});

export async function createIssueAction(formData: FormData) {
  const issueName = formData.get("issueName") as string;
  const choice1 = formData.get("choice1") as string;
  const choice2 = formData.get("choice2") as string;
  if (!issueName) {
    return;
  }
  await issueFeature.service.createIssue({ issueName, choice1, choice2 });
  revalidatePath("/issue")
}

export async function createRepresentativeAction(formData: FormData) {
  const name = formData.get("representativeName") as string;
  const email = formData.get("email") as string;
  if (!name || !email) {
    return;
  }
  await issueFeature.service.addRepresentative(name, email);
}

export async function fetchChoicesByIssue(issueId: number) {
  return await issueFeature.service.getChoicesByIssueId(issueId)
}

export async function fetchIssuesList() {
  const fetchIssuesList =  await issueFeature.service.getAll();
}
