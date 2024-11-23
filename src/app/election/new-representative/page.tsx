export default function NewRepresentative() {
  return (
    <>
      <h1>Add new representative Page</h1>
      <form action={createRepresentativeAction}>
        <input type="text" name="representativeName" />
        <input type="email" name="email" />
        <button type="submit">Create Election</button>
      </form>
    </>
  );
}
