import { createRepresentativeAction } from "@/features/election/actions";
import { electionFeature } from "@/features/election/instance";



export default async function NewRepresentative() {
  const representativeList =
    await electionFeature.service.getAllRepresentatives();

  return (
    <>
      <h1>Add new representative Page</h1>
      <pre>{JSON.stringify(representativeList, null, 2)}</pre>

      <form action={createRepresentativeAction}>
        <input type="text" name="representativeName" />
        <input type="email" name="email" />
        <button type="submit">Create Election</button>
      </form>
    </>
  );
}
