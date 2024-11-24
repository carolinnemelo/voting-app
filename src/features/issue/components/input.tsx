type Props = {
  nameOfInput: string;
  typeOfInput: "text" | "email";
};

export function Input({ nameOfInput, typeOfInput }: Props) {
  return (
    <>
      <label htmlFor={nameOfInput}>Public Vote Name</label>
      <input type={typeOfInput} name={nameOfInput} id={nameOfInput} />
    </>
  );
}
