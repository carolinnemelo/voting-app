"use client";

import { fetchChoicesByIssue, issueFeature, voteOnChoice } from "@/features";
import { useEffect, useState } from "react";


export async function fetchIssuesList() {
  return await issueFeature.service.getAll();
}


export default function Representative() {
  const [issuesListWithChoices, setIssuesListWithChoices] = useState<Issue[]>(
    []
  );
  const [selectedChoices, setSelectedChoices] = useState<Choice[]>([]);

  useEffect(() => {
    const list = await  fetchIssuesList();
    setIssuesListWithChoices(list)
  }, []);

  async function handleIssueChange(event: { target: { value: string } }) {
    const issueId = Number(event.target.value);
    const issue = issuesList.find((issue) => issue.id === issueId);

    if (!issue) {
      setSelectedChoices([]);
      return;
    }

    const choicesByIssue = await fetchChoicesByIssue(issueId);
    setSelectedChoices(choicesByIssue);
  }

  return (
    <>
      <h1>Representative Vote Page</h1>
        <select name="selectedIssue" onChange={handleIssueChange}>
          <option value="">Choose an issue</option>
          {issuesList.map((issue) => (
            <option value={issue.id} key={issue.id}>
              {issue.issueName}
            </option>
          ))}
        </select>
      <form action={voteOnChoice}>
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

type Issue = {
  issueName: string;
  id: number;
  createdAt: Date;
  endTime: Date | null;
}
