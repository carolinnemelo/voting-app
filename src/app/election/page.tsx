import { createElectionAction } from "@/features/election/actions";

export default function Election() {
  return (
    <>
    <h1>Create new Election</h1>
      <form action={createElectionAction}>
        <input type="text" name="electionName" />
        <button type="submit">Create Election</button>
      </form>
    </>
  );
}
