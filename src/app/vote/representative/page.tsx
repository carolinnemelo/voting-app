import { SelectIssue } from "@/features/issue/components/select-issue";

export default async function Representative() {
  // const choicesTableRows = await issueFeature.service.getAllChoices();

  return (
    <>
      <h1>Representative Vote Page</h1>
      <SelectIssue />
    </>
  );
}
