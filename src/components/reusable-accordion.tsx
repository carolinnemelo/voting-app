import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";

type Props = {
  label: string;
  list: string[];
};

export function ReusableAccordion({ label, list }: Props) {
  const content = list.map((e, index) => {
    return <AccordionContent key={index}>{e}</AccordionContent>;
  });
  return (
    <Accordion className="mb-3" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{label}</AccordionTrigger>
        {content}
      </AccordionItem>
    </Accordion>
  );
}
