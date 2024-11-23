export default async function Home() {
  const representativeList =
  await electionFeature.service.getAllRepresentatives();
  return (
    <>
      <h1>Public Vote Form</h1>
      <form action="">
        <label htmlFor="publicVoteName">Public Vote Name</label>
        <input type="text" name="publicVoteName" id="publicVoteName" />
        <label htmlFor="representativeSelect">Choose Representative</label>
        <select name="representativeSelect" id="representativeSelect">
          <option value="">Please choose an option</option>
          {representativeList}
        </select>
      </form>
    </>
  );
}
