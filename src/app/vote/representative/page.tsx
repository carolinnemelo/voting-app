"use client";

import { voteOnChoice } from "@/features";
import { useState } from "react";

const mockData = [
  {
    id: 1,
    issueName: "Cats vs Dogs",
    choices: [
      { id: 101, choiceName: "Cats" },
      { id: 102, choiceName: "Dogs" },
    ],
  },
  {
    id: 2,
    issueName: "Pizza vs Burger",
    choices: [
      { id: 201, choiceName: "Pizza" },
      { id: 202, choiceName: "Burger" },
    ],
  },
  {
    id: 3,
    issueName: "Tea vs Coffee",
    choices: [
      { id: 301, choiceName: "Tea" },
      { id: 302, choiceName: "Coffee" },
    ],
  },
];

export default function Representative() {
  const [selectedChoices, setSelectedChoices] = useState<Choice[]>([]);
  
  function handleIssueChange(event: { target: { value: string } }) {
    const issueId = Number(event.target.value);
    const issue = mockData.find((issue) => issue.id === issueId);

    if (!issue) {
      setSelectedChoices([]);
      return;
    }

    const issueChoices = issue.choices.map((choice) => {
      return { choiceName: choice.choiceName, id: choice.id };
    });
    console.log(issueChoices);
    setSelectedChoices(issueChoices);
  }
  return (
    <>
      <h1>Representative Vote Page</h1>
      <form action={voteOnChoice}>
        <select name="selectedIssue" onChange={handleIssueChange}>
          <option value="">Choose an issue</option>
          {mockData.map((issue) => (
            <option value={issue.id} key={issue.id}>
              {issue.issueName}
            </option>
          ))}
        </select>
        <select name="selectedChoice">
          <option value="">Select your choice</option>
          {selectedChoices.map((choice) => (
            <option value={choice.id} key={choice.id}>
              {choice.choiceName}
            </option>
          ))}
        </select>
        <button type="submit">Vote</button>
      </form>
    </>
  );
}

type Choice = {
  id: number;
  choiceName: string;
};
