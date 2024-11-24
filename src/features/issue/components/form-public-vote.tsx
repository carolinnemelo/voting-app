import { createPublicVoteAndVoteAction } from "@/features";
import { Select } from "./select";
import { Button } from "./button";

export function FormPublicVote({
  representativeList,
}: {
  representativeList: JSX.Element[];
}) {
  return (
    <form action={createPublicVoteAndVoteAction}>

      <Select representativeList={representativeList} />
      <Button type="submit" label="Vote"/>
    </form>
  );
}
