
const mockData = [
  {
    id: 1,
    issueName: "Cats vs Dogs",
    choices: [
      { id: 101, choiceName: "Cats" },
      { id: 102, choiceName: "Dogs" },
    ],
  },
  {
    id: 2,
    issueName: "Pizza vs Burger",
    choices: [
      { id: 201, choiceName: "Pizza" },
      { id: 202, choiceName: "Burger" },
    ],
  },
  {
    id: 3,
    issueName: "Tea vs Coffee",
    choices: [
      { id: 301, choiceName: "Tea" },
      { id: 302, choiceName: "Coffee" },
    ],
  },
];


export default async function Representative() {
  return (
    <>
      <h1>Representative Vote Page</h1>
      <ul>
        {mockData.map((issue) => (
          <li key={issue.id}>{issue.issueName}</li>
        ))}
      </ul>
    </>
  );
}
