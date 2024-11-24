import { createPublicVoteAndVoteAction } from "@/features";
import { Select } from "./select";

export function FormPublicVote({
  representativeList,
}: {
  representativeList: JSX.Element[];
}) {
  return (
    <form action={createPublicVoteAndVoteAction}>
      <label htmlFor="publicVoteName">Public Vote Name</label>
      <input type="text" name="publicVoteName" id="publicVoteName" />
      <Select representativeList={representativeList} />
    </form>
  );
}
