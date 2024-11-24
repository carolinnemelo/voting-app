import { ReactNode } from "react";
import { Card, CardTitle } from "./shad-components/card";

type Props = {
  cardTitle: string,
  children: ReactNode;
};

export function ReusableCard({ cardTitle, children }: Props) {
  return (
    <>
      <Card className="mt-10 p-4">
        <CardTitle>{cardTitle}</CardTitle>
        {children}</Card>
    </>
  );
}
