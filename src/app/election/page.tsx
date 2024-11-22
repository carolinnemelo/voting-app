export default function Election() {
  return (
    <form action={createElectionAction}>
      <input type="text" name="electionName"/>
      <button type="submit">Create Election</button>
    </form>
  );
}
