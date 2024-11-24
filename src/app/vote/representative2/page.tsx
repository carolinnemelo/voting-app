import { issueFeature, SelectIssue } from "@/features";

export default async function VoteRepresentative() {
  const rawData: IssueWithChoices[] = await issueFeature.service.getAllIssuesAndChoices();
  const groupedData = rawData.reduce((accumulatorObject: any, currentIssue) => {
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
  }, [])

  console.log({groupedData})
  return (
    <>
      <h1>Respira, tu vais conseguir</h1>
      <SelectIssue issuesWithChoicesList={groupedData} />
    </>
  );
}
type Choice = {
  id: number;
  choiceName: string;
};

export type IssueWithChoices = {
  issueId: number;
  issueName: string;
  choiceId: number | null;
  choiceName: string | null;
}