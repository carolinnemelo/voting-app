import { createPublicVoteAndVoteAction } from "@/features";
import { Select } from "../../../components/select";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

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
