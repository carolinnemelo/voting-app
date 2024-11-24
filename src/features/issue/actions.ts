"use server";

import { revalidatePath } from "next/cache";
import { issueFeature } from "./instance";
import { z } from "zod";
import { redirect } from "next/navigation";

const issueSchema = z.object({
  issueName: z.string().min(1, "Name can not be empty"),
  choice1: z.string().min(1, "Can not be empty"),
  choice2: z.string().min(1, "Can not be empty"),
});

export type State = {
  errors: {
    issueName?: string[] | undefined;
    choice1?: string[] | undefined;
    choice2?: string[] | undefined;
  };
  message?: string | null;
};

export async function createIssueAction(prevState: State, formData: FormData) {
  const validatedFields = issueSchema.safeParse({
    issueName: formData.get("issueName") as string,
    choice1: formData.get("choice1") as string,
    choice2: formData.get("choice2") as string,
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  await issueFeature.service.createIssue({ ...validatedFields.data });
  revalidatePath("/issue");
  redirect("/issue");
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
