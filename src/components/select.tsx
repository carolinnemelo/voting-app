export function Select({
  representativeList,
}: {
  representativeList: JSX.Element[];
}) {
  return (
    <>
      <label htmlFor="representativeSelect">Choose Representative</label>
      <select name="representativeSelect" id="representativeSelect">
        <option value="">Please choose an option</option>
        {representativeList}
      </select>
    </>
  );
}
