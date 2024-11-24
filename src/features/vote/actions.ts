"use server";

import { InsertPublicVote } from "@/db";
import { publicVoteFeature } from "./instance";
import { z } from "zod";

const publicVoteSchema = z.object({
  voterName: z.string().min(1, "Name can not be empty"),
  representativeId: z.number(),
  preferenceId: z.number(),
});

export async function createPublicVoteAndVoteAction(prevState: InsertPublicVote,formData: FormData) {
  const validatedFields = publicVoteSchema.safeParse({
    voterName: formData.get("publicVoteName"),
    representativeId: formData.get("representativeSelect"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields",
    };
  }
  if (!formData) {
    return;
  }
  await publicVoteFeature.service.createPublicVoteAndVote({...validatedFields.data});
}

export async function voteOnChoice(formData: FormData) {
  console.log(formData)
}