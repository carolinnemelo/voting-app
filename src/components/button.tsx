import { ButtonShad } from "./shad-components/button-shad";

type Props = {
  label: string;
  type: "button" | "submit" | "reset";
};

export function Button({ label, type }: Props) {
  return <ButtonShad className="mt-3" type={type}>{label}</ButtonShad>;
}