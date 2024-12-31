import { PublicVoteSelect } from "./schema";
import { publicVoteSchema, representativeSchema } from "./zod-schema";

export function countPublicVotes(publicVotes: PublicVoteSelect[]) {
  const emails = publicVotes.map((vote) => vote.email);
  const countVotes = emails.reduce((acc, email) => {
    if (!acc[email]) {
      acc[email] = 1;
    } else {
      acc[email] = acc[email] + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  const result = Object.entries(countVotes).map(([email, count]) => ({
    email,
    count,
  }));
  return result;
}

export function validatePublicVoteFields(formData: FormData) {
  const validatedFields = publicVoteSchema.safeParse({
    email: formData.get("representativeSelect"),
  });
  if (!validatedFields.success) {
    return null;
  }
  return validatedFields.data;
}

export function validateRepresentativeFields(formData: FormData) {
  const validatedFields = representativeSchema.safeParse({
    representativeName: formData.get("representativeName"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    return;
  }
  return validatedFields.data;
}