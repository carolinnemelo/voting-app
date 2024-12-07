"use client";
import { createRepresentativeAction } from "../actions";
import { Button, Input } from "@/components";

export function FormNewRepresentative() {
  return (
    <form action={createRepresentativeAction}>
      <Input
        typeOfInput="text"
        label="Representative name"
        nameOfInput="representativeName"
      />
      <Input typeOfInput="email" label="Email" nameOfInput="email" />
      <Button label="Create Representative" type="submit" />
    </form>
  );
}
