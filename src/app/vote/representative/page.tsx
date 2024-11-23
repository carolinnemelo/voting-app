import { issueFeature, voteOnIssueAction } from "@/features";
import { useState } from "react";

export default async function Representative() {
  const issueList = await generateIssueList();
  const [selectedIssue, setSelectedIssueId] = useState("")

  function setSelectedIssue(issueId) {

  }

  return (
    <>
      <h1>Representative Vote Page</h1>
      <form action={voteOnIssueAction}>
        <select name="issueSelect" id="issueSelect" onChange={ (e) => {
            const issueId =  e.target.value;
            setSelectedIssueId(issueId)
        }}>
          <option value="">Please choose an option</option>
          {issueList}
        </select>

      </form>
    </>
  );
}


async function generateIssueList() {
  const issuesTableRows = await issueFeature.service.getAll();
  const issueList = issuesTableRows.map((issue) => {
    return (
      <option key={issue.id} value={issue.id}>
        {issue.issueName}
      </option>
    );
  });
  return issueList;
}

async function generateChoiceList(id: number) {
  if(!id){
    return;
  }
  const choicesTableRows = await issueFeature.service.getChoicesById(id);
  const choiceList = choicesTableRows.map((choice) => {
    return (
      <option key={choice.id} value={choice.id}>
        {choice.choiceName}
      </option>
    );
  });

  return choiceList;
}