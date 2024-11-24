"use server";

import { revalidatePath } from "next/cache";
import { issueFeature } from "./instance";
import { z } from "zod";
import { RepresentativeInsert } from "@/db";

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
      message: "Missing Fields",
    };
  }
  await issueFeature.service.createIssue({ ...validatedFields.data });
  revalidatePath("/issue");
}

const representativeSchema = z.object({
  representativeName: z.string().min(1, "Name can not be empty"),
  email: z.string().email("Insert Valid Email"),
});


export async function createRepresentativeAction(
  prevState: RepresentativeInsert,
  formData: FormData
) {

  const validatedFields = representativeSchema.safeParse({
    name: formData.get("representativeName"),
    email: formData.get("email"),
})


  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields",
    }
  }
  await issueFeature.service.addRepresentative({...validatedFields.data});
}

export async function fetchChoicesByIssue(issueId: number) {
  return await issueFeature.service.getChoicesByIssueId(issueId);
}

export async function fetchIssuesList() {
  const fetchIssuesList = await issueFeature.service.getAll();
}
