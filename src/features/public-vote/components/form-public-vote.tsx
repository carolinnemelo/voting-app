"use client";
import { useState } from "react";
import { Representative } from "../types";
import { Button } from "@/components";

type Props = { representatives: Representative[] };

export function FormPublicVote({ representatives }: Props) {
  const [representative, setRepresentative] = useState("");


  const representativeOptions = representatives.map((representative) => {
    return (
      <option key={representative.id} value={representative.email}>
        {representative.representativeName}
      </option>
    );
  });

  return (
    <>
      <label
        className="px-2 py-1.5 text-sm font-semibold"
        htmlFor="representativeSelect"
      >
        Choose Representative
      </label>
      <select
        className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        name="representativeSelect"
        id="representativeSelect"
        onChange={(e) => setRepresentative(e.target.value)}
        value={representative}
      >
        <option value="">Please choose an option</option>
        {representativeOptions}
      </select>
    </>
  );
}
