import { createElectionAction } from "@/features/election/actions";
import { electionFeature } from "@/features/election/instance";

const electionList = await electionFeature.service.getAllElectionsAndChoices()
export default function Election() {

  return (
    <>
    <h1>Create new Election</h1>
    <pre>{JSON.stringify(electionList, null, 2)}</pre>
      <form action={createElectionAction}>
        <input type="text" name="electionName" />
        <label htmlFor="choice1">Choice 1</label>
        <input type="text" name="choice1" id="choice1"/>
        <label htmlFor="choice2">Choice 2</label>
        <input type="text" name="choice2" id="choice2"/>
        <button type="submit">Create Election</button>
      </form>
    </>
  );
}
