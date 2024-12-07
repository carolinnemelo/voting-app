import { Select } from "@/features/public-vote/components/select";
import { RepresentativesTableRows } from "./types";

type Props = { representatives: RepresentativesTableRows[] };

export function FormPublicVote({ representatives }: Props) {
  return (
    <>
    
      <Select representativeTableRows={representatives} />
    </>
  );
}
