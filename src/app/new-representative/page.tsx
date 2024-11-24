import { ReusableAccordion, ReusableCard } from "@/components";
import { Main } from "@/components/main";
import { issueFeature, FormNewRepresentative } from "@/features";

export default async function NewRepresentative() {
  const representativeList = await issueFeature.service.getAllRepresentatives();
  const representativeNamesList = representativeList.map(
    (representative) => representative.representativeName
  );
  return (
    <>
      <Main>
        <ReusableCard cardTitle="Add new representative Page">
          <ReusableAccordion
            label="All Representatives"
            list={representativeNamesList}
          />
          <FormNewRepresentative />
        </ReusableCard>
      </Main>
    </>
  );
}
