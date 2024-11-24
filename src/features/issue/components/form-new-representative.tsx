"use client";

import { useActionState } from "react";
import { createRepresentativeAction } from "../actions";
import { Button, Input } from "@/components";
import { ErrorMessage } from "./error-message";

export function FormNewRepresentative() {
  const initialState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createRepresentativeAction, initialState);

  return (
    <form action={formAction}>
      <Input typeOfInput="text" label="Representative name" nameOfInput="representativeName" />
      {state?.errors.representativeName && (
        <ErrorMessage errors={state.errors.representativeName} />
      )}
      <Input typeOfInput="email" label="Email" nameOfInput="email" />
      {state?.errors.email && (
        <ErrorMessage errors={state.errors.email} />
      )}
      <Button label="Create Representative" type="submit" />
    </form>
  );
}
