"use client"
import { Button, Input } from "@/components";
import { RepresentativesTableRows } from "@/db";
import { createPublicVoteAndVoteAction } from "@/features";
import { Select } from "@/features/issue/components/select"; // make a reusable component, it is taking from the other feature
import { useActionState } from "react";

export function FormPublicVote({
  representativeTableRows,
}: {
  representativeTableRows: RepresentativesTableRows[];
}) {
  const initialState = { message: null, errors: {} };
  const [state, formAction] = useActionState(
    createPublicVoteAndVoteAction,
    initialState
  );
  return (
    <form action={formAction}>
      <Input
        label="Public Vote Name"
        nameOfInput="publicVoteName"
        typeOfInput="text"
      />
      <Select representativeTableRows={representativeTableRows} />
      <Button type="submit" label="Vote" />
    </form>
  );
}
