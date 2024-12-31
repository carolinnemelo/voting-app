import { ReusableCard, Main } from "@/components";
import { FormNewRepresentative } from "@/features";

export default async function NewRepresentative() {
  return (
    <>
      <Main>
        <ReusableCard cardTitle="Add new representative Page">
         <FormNewRepresentative />
        </ReusableCard>
      </Main>
    </>
  );
}
