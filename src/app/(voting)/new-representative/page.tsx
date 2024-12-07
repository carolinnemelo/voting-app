import {  ReusableCard } from "@/components";
import { Main } from "@/components/main";
// import {  issueFeature } from "@/features";
import { FormNewRepresentative } from "@/features/issue/components/form-new-representative";

export default async function NewRepresentative() {
  // const representativeList = await issueFeature.service.getAllRepresentatives();
  // const representativeNamesList = representativeList.map(
  //   (representative) => representative.representativeName
  // );
  return (
    <>
      <Main>
        <ReusableCard cardTitle="Add new representative Page">
          AI MEU DEUS
          {/* <ReusableAccordion
            label="All Representatives"
            list={representativeNamesList}
          />  */}
           <FormNewRepresentative />
        </ReusableCard>
      </Main>
    </>
  );
}
