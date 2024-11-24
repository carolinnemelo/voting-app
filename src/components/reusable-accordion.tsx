import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";

type Props = {
  label: string;
  list: []
}

export function ReusableAccordion({label, list}: Props) {
 return ( <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>
        {}
      </AccordionContent>
    </AccordionItem>
  </Accordion>)
}
