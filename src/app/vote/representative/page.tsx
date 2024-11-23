import { issueFeature } from "@/features";
import { SelectIssue } from "@/features/issue/components/select-issue";
import { SelectChoices } from "@/features/vote/components/select-choices";

export default async function Representative() {
  const choicesTableRows = await issueFeature.service.getAllChoices();

  return (
    <>
      <h1>Representative Vote Page</h1>
      <SelectIssue />
      <SelectChoices choicesTableRows={choicesTableRows}/>
    </>
  );
}
