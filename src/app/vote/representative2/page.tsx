import { issueFeature, SelectIssue } from "@/features";

export default async function VoteRepresentative() {
  const rawData = await issueFeature.service.getAllIssuesAndChoices();
  const groupedData = rawData.reduce((accumulatorObject, currentIssue) => {
    if (!accumulatorObject[currentIssue.issueId]) {
      accumulatorObject[currentIssue.issueId] = {
        id: currentIssue.issueId,
        issueName: currentIssue.issueName,
        choices: [
          {
            choiceId: currentIssue.choiceId,
            choiceName: currentIssue.choiceName,
          },
        ],
      };
    }

    accumulatorObject[currentIssue.issueId].choices.push({
      choiceId: currentIssue.choiceId,
      choiceName: currentIssue.choiceName,
    });
    return accumulatorObject;
  });
  console.log(groupedData)
  return (
    <>
      <pre>{JSON.stringify("", null, 2)}</pre>
      <h1>Respira, tu vais conseguir</h1>
      {/* <SelectIssue issuesWithChoicesList={issuesListWithChoices } /> */}
    </>
  );
}
