import { Main } from "@/components/main";
import {
  issueFeature,
  FormNewRepresentative,
} from "@/features";

export default async function NewRepresentative() {
  const representativeList = await issueFeature.service.getAllRepresentatives();

  return (
    <>
      <Main>
        <h1>Add new representative Page</h1>
        <pre>{JSON.stringify(representativeList, null, 2)}</pre>
          <FormNewRepresentative />
        
      </Main>
    </>
  );
}
