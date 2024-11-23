"use server";

import { issueFeature } from "./instance";

export async function createIssueAction(formData: FormData) {
  const issueName = formData.get("issueName") as string;
  const choice1 = formData.get("choice1") as string;
  const choice2 = formData.get("choice2") as string;
  if (!issueName) {
    return;
  }
  await issueFeature.service.createIssue({ issueName, choice1, choice2 });
}

export async function createRepresentativeAction(formData: FormData) {
  const name = formData.get("representativeName") as string;
  const email = formData.get("email") as string;
  if (!name || !email) {
    return;
  }
  await issueFeature.service.addRepresentative(name, email);
}