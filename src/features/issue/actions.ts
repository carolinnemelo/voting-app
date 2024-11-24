"use server";

import { revalidatePath } from "next/cache";
import { issueFeature } from "./instance";
import { z } from "zod";

const issueSchema = z.object({
  issueName: z.string().min(1, "Name can not be empty"),
  choice1: z.string().min(1, "Can not be empty"),
  choice2: z.string().min(1, "Can not be empty"),
});

export async function createIssueAction(formData: FormData) {
  const data = {
    issueName: formData.get("issueName") as string,
    choice1: formData.get("choice1") as string,
    choice2: formData.get("choice2") as string,
  };
  const parsedData = issueSchema.safeParse(data);
  if (!parsedData.success) {
    console.log(parsedData.error);
    return;
  }

  await issueFeature.service.createIssue({ ...parsedData.data });
  revalidatePath("/issue");
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
  return await issueFeature.service.getChoicesByIssueId(issueId);
}

export async function fetchIssuesList() {
  const fetchIssuesList = await issueFeature.service.getAll();
}
