import { ChoicesTableRows } from "@/db";


export async function SelectChoices(choicesTableRows: ChoicesTableRows) {
const choiceList = await generateChoiceList(choicesTableRows)
  return (
    <form action={voteOnChoice}>
      <select name="issueSelect" id="issueSelect">
        <option value="">Please choose an option</option>
        {choiceList}
      </select>
      <button type="submit">Vote</button>
    </form>
  );
}

async function generateChoiceList(choicesTableRows: ChoicesTableRows) {
  return choicesTableRows.map((choice) => {
    return (
      <option key={choice.id} value={choice.id}>
        {choice.choiceName}
      </option>
    );
  });
}
