import { Button, Input, Select } from "@/components";
import { createPublicVoteAndVoteAction } from "@/features";

export function FormPublicVote({ representativeTableRows }:{representativeTableRows:RepresentativesTableRows}) {
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

type RepresentativesTableRows = {
  id: number;
  createdAt: Date;
  representativeName: string;
  email: string;
  vote: number | null;
}[];