import { InputShad } from "./shad-components";

type Props = {
  label: string;
  nameOfInput: string;
  typeOfInput: "text" | "email";
};

export function Input({ label, nameOfInput, typeOfInput }: Props) {
  return (
    <>
      <label className="px-2 py-1.5 text-sm font-semibold" htmlFor={nameOfInput}>{label}</label>
      <InputShad type={typeOfInput} name={nameOfInput} id={nameOfInput} />
    </>
  );
}

