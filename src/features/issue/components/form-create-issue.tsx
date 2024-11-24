import { Button, Input } from "@/components";
import { createIssueAction, State } from "../actions";
import { useActionState } from "react";

export function Form({}) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createIssueAction, initialState);
  return (
    <form action={formAction}>
      <Input typeOfInput="text" label="Issue name" nameOfInput="issueName" />
      <Input typeOfInput="text" label="Choice 1" nameOfInput="choice1" />
      <Input typeOfInput="text" label="Choice 2" nameOfInput="choice2" />

      <Button label="Create issue" type="submit" />
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.issueName &&
          state.errors.issueName.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </form>
  );
}
