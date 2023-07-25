import {
  Accordion,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion"

const Forecast = ({ data }) => {
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <Accordion>
            <AccordionItemHeading>
              <AccordionItemButton>Hello</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </Accordion>
        ))}
      </Accordion>
    </>
  )
}

export default Forecast
