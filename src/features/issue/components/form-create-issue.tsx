import { Button, Input} from "@/components";
import { createIssueAction } from "../actions";

export function FormCreateIssue() {
  return (
    <form action={createIssueAction}>
      <Input typeOfInput="text" label="Issue name" nameOfInput="issueName" />
      <Input typeOfInput="text" label="Choice 1" nameOfInput="choice1" />
      <Input typeOfInput="text" label="Choice 2" nameOfInput="choice2" />
      <Button label="Create issue" type="submit" />
    </form>
  );
}

