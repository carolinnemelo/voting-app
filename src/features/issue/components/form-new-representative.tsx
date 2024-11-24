"use client";

import { useActionState } from "react";
import { createRepresentativeAction } from "../actions";
import { Button, Input } from "@/components";

export function FormNewRepresentative() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createRepresentativeAction, initialState);

  return (
    <form action={formAction}>
      <Input typeOfInput="text" label="Representative name" nameOfInput="representativeName" />
      <Input typeOfInput="email" label="Email" nameOfInput="email" />
      <Button label="Create Representative" type="submit" />
    </form>
  );
}
