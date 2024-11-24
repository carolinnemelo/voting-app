"use client";
import { Button, Input } from "@/components";
import { createIssueAction, State } from "../actions";
import { useActionState } from "react";

export function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createIssueAction, initialState);

  return (
    <form action={formAction}>
      <Input typeOfInput="text" label="Issue name" nameOfInput="issueName" />
      {state?.errors.issueName && <ErrorMessage errors={state.errors.issueName} />}
    
      <Input typeOfInput="text" label="Choice 1" nameOfInput="choice1" />
      {state?.errors.choice1 && <ErrorMessage errors={state.errors.choice1} />}

      <Input typeOfInput="text" label="Choice 2" nameOfInput="choice2" />
      {state?.errors.choice2 && <ErrorMessage errors={state.errors.choice2} />}

      <Button label="Create issue" type="submit" />
      <div id="customer-error" aria-live="polite" aria-atomic="true"></div>
    </form>
  );
}

type Props = {
  errors: string[];
};

export function ErrorMessage({ errors }: Props) {
  return (errors.map((error) => {
    return (
      <p className="mt-2 text-sm text-red-500" key={error}>
        {error}
      </p>
    );
  }))
}