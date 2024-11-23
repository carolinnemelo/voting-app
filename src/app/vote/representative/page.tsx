const issueList = ["Animals", "Colors", "Best season"];

export default async function Representative() {
  return (
    <>
      <h1>Representative Vote Page</h1>
      <ul>
        {issueList.map((issue, index) => (
          <li key={index}>{issue}</li>
        ))}
      </ul>
    </>
  );
}
