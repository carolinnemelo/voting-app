import { ReusableCard } from "@/components";
import { Main } from "@/components/main";
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
