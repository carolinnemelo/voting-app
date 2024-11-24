import { Button, Input, ReusableAccordion, ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { issueFeature, createIssueAction, State } from "@/features";
import { useActionState } from "react";




export default async function Issue() {
  const initialState: State = { message: null, errors: {} };

  const issueList = await issueFeature.service.getAllIssuesAndChoices();
  const issuesNamesList = issueList.map((issue) => issue.issueName);
  const [state, formAction] = useActionState(createIssueAction, initialState);

  return (
    <>
      <Main>
        <ReusableCard cardTitle="Create new Issue">
          <ReusableAccordion label="All Issues" list={issuesNamesList} />
          <form action={formAction}>
            <Input
              typeOfInput="text"
              label="Issue name"
              nameOfInput="issueName"
            />
            <Input typeOfInput="text" label="Choice 1" nameOfInput="choice1" />
            <Input typeOfInput="text" label="Choice 2" nameOfInput="choice2" />

            <Button label="Create issue" type="submit" />
          </form>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.issueName &&
              state.errors.issueName.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </ReusableCard>
      </Main>
    </>
  );
}