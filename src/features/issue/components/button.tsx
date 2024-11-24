type Props = {
  label: string;
  type: "button" | "submit" | "reset";
};

export function Button({ label, type }: Props) {
  return <button type={type}>{label}</button>;
}
