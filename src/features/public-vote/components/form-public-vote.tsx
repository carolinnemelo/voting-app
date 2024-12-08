import { Select } from "@/features/public-vote/components/select";
import { Representative } from "./types";
import { Button } from "@/components";

type Props = { representatives: Representative[] };

export function FormPublicVote({ representatives }: Props) {
  return (
    <>
      <Select representatives={representatives} />
      <Button type="submit" label="Vote"/>
    </>
  );
}
