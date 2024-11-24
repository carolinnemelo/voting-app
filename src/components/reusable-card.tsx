import { ReactNode } from "react";
import { Card } from "./shad-components/card";

type Props = {
  children: ReactNode;
};

export function ReusableCard({ children }: Props) {
  return (
    <>
      <Card>{children}</Card>
    </>
  );
}
