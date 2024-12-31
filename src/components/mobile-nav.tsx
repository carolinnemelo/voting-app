"use client";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import { SideNav } from "./side-nav";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden m-2 p-1 z-20 absolute top-0"
        onClick={() => {
          setIsOpen(!isOpen);
          console.log({ isOpen });
        }}
      >
        {isOpen ? <XIcon size={30} /> : <Menu size={30} />}
      </button>
      {isOpen && <SideNav />}
    </>
  );
}
