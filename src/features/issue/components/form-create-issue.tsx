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
      {state?.errors.issueName &&
        state.errors.issueName.map((error) => {
          return (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          );
        })}
      <Input typeOfInput="text" label="Choice 1" nameOfInput="choice1" />
      {state?.errors.choice1 &&
        state.errors.choice1.map((error) => {
          return (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          );
        })}
      <Input typeOfInput="text" label="Choice 2" nameOfInput="choice2" />
      {state?.errors.choice2 &&
        state.errors.choice2.map((error) => {
          return (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          );
        })}

      <Button label="Create issue" type="submit" />
      <div id="customer-error" aria-live="polite" aria-atomic="true"></div>
    </form>
  );
}
