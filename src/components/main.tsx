import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export function Main({children}: Props) {
  return <main className="container mx-auto h-screen flex pt-12 items-center justify-center  md:mt-0">{children}</main>
}