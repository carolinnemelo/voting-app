import { ButtonShad } from "./shad-components/button-shad";

type Props = {
  label: string;
  type: "button" | "submit" | "reset";
};

export function Button({ label, type }: Props) {
  return (
    <div className="flex mt-4">
      <ButtonShad className="flex-grow" type={type}>
        {label}
      </ButtonShad>
    </div>
  );
}