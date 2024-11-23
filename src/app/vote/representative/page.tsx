"use client";
import { EventHandler, useState } from "react";

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
  const [selectedChoices, setSelectedChoices] = useState([""]);
  function handleIssueChange(event: { target: { value: string; }; }) {
    const issueId = Number(event.target.value);
    const issue = mockData.find((issue) => issue.id === issueId);
    if (!issue) {
      setSelectedChoices([]);
      return;
    }
    const issueChoices = issue.choices.map((choice) => choice.choiceName);
    setSelectedChoices(issueChoices);
  }
  return (
    <>
      <h1>Representative Vote Page</h1>
      <select onChange={handleIssueChange}>
        {mockData.map((issue) => (
          <option value={issue.id} key={issue.id}>
            {issue.issueName}
          </option>
        ))}
      </select>

      <ul>
        {selectedChoices.map((choice, index) => (
          <li key={index}> {choice}</li>
        ))}
      </ul>
    </>
  );
}
