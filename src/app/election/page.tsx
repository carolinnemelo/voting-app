import { createElectionAction } from "@/features/election/actions";
import { electionFeature } from "@/features/election/instance";

const electionList = await electionFeature.service.getAll()
export default function Election() {

  return (
    <>
    <h1>Create new Election</h1>
    <pre>{JSON.stringify(electionList, null, 2)}</pre>
      <form action={createElectionAction}>
        <input type="text" name="electionName" />
        <button type="submit">Create Election</button>
      </form>
    </>
  );
}
