import { InputShad, Label } from "./shad-components";

type Props = {
  label: string;
  nameOfInput: string;
  typeOfInput: "text" | "email";
};

export function Input({ label, nameOfInput, typeOfInput }: Props) {
  return (
    <>
      <Label htmlFor={nameOfInput}>{label}</Label>
      <InputShad type={typeOfInput} name={nameOfInput} id={nameOfInput} />
    </>
  );
}
