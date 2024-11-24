import { Button, Input, Select } from "@/components";
import { createPublicVoteAndVoteAction } from "@/features";


export function FormPublicVote({
  representativeList,
}: {
  representativeList: JSX.Element[];
}) {
  return (
    <form action={createPublicVoteAndVoteAction}>
      <Input label="Public Vote Name" nameOfInput="publicVoteName" typeOfInput="text"/> 
      <Select representativeList={representativeList} />
      <Button type="submit" label="Vote"/>
    </form>
  );
}
