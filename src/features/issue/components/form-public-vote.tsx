import { Button, Input } from "@/components";
import { RepresentativesTableRows } from "@/db";
import { createPublicVoteAndVoteAction } from "@/features";
import { Select } from "./select";

export function FormPublicVote({ representativeTableRows }:{representativeTableRows:RepresentativesTableRows[]}) {
  return (
    <form action={createPublicVoteAndVoteAction}>
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

