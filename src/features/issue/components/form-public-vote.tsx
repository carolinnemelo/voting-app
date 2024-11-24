export function FormPublicVote(representativeList) {
  return (
    <form action={createPublicVoteAndVoteAction}>
      <label htmlFor="publicVoteName">Public Vote Name</label>
      <input type="text" name="publicVoteName" id="publicVoteName" />
      <label htmlFor="representativeSelect">Choose Representative</label>
      <select name="representativeSelect" id="representativeSelect">
        <option value="">Please choose an option</option>
        {representativeList}
      </select>
      <button type="submit">Vote</button>
    </form>
  );
}
