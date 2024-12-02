"use server";

import { revalidatePath } from "next/cache";
import { issueFeature } from "./instance";
import { z } from "zod";
import { RepresentativeInsert } from "@/db";

export async function createIssueAction(formData: FormData) {
  await issueFeature.service.createIssue(formData);
  revalidatePath("/issue");
}

const representativeSchema = z.object({
  representativeName: z.string().min(1),
  email: z.string().email(),
});

export async function createRepresentativeAction(
  prevState: RepresentativeInsert,
  formData: FormData
) {

  const validatedFields = representativeSchema.safeParse({
    representativeName: formData.get("representativeName"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields",
    };
  }

  await issueFeature.service.addRepresentative({ ...validatedFields.data });
  revalidatePath("/new-representative")
}

export async function fetchChoicesByIssue(issueId: number) {
  return await issueFeature.service.getChoicesByIssueId(issueId);
}

// export async function fetchIssuesList() {
//   const fetchIssuesList = await issueFeature.service.getAll();
// }
