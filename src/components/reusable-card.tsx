import { ReactNode } from "react";
import { Card, CardTitle } from "./shad-components/card";

type Props = {
  cardTitle: string,
  children: ReactNode;
};

export function ReusableCard({ cardTitle, children }: Props) {
  return (
    <>
      <Card className="my-auto p-4 justify-center">
        <CardTitle>{cardTitle}</CardTitle>
        {children}
      </Card>
    </>
  );
}
