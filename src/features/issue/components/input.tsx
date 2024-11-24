type Props = {
  label: string;
  nameOfInput: string;
  typeOfInput: "text" | "email";
};

export function Input({ label, nameOfInput, typeOfInput }: Props) {
  return (
    <>
      <label htmlFor={nameOfInput}>{label}</label>
      <input type={typeOfInput} name={nameOfInput} id={nameOfInput} />
    </>
  );
}
