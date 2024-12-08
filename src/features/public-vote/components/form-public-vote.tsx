import { Select } from "@/features/public-vote/components/select";
import { Representative } from "./types";
import { Button } from "@/components";
import Form from 'next/form'


type Props = { representatives: Representative[] };

export function FormPublicVote({ representatives }: Props) {
  return (
    <Form action={voteAction}>
      <Select representatives={representatives} />
      <Button type="submit" label="Vote"/>
    </Form>
  );
}
