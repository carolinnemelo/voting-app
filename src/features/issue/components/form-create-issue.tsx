"use client";
import { Button, Input} from "@/components";
import { createIssueAction, State } from "../actions";
import { useActionState } from "react";
import { ErrorMessage } from ".";

export function FormCreateIssue() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createIssueAction, initialState);

  return (
    <form action={formAction}>
      <Input typeOfInput="text" label="Issue name" nameOfInput="issueName" />
      {state?.errors.issueName && (
        <ErrorMessage errors={state.errors.issueName} />
      )}

      <Input typeOfInput="text" label="Choice 1" nameOfInput="choice1" />
      {state?.errors.choice1 && <ErrorMessage errors={state.errors.choice1} />}

      <Input typeOfInput="text" label="Choice 2" nameOfInput="choice2" />
      {state?.errors.choice2 && <ErrorMessage errors={state.errors.choice2} />}

      <Button label="Create issue" type="submit" />
    </form>
  );
}

