import {
  Accordion,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItem,
} from "react-accessible-accordion"

import "./forecast.css"

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  )

  console.log(data)

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                    alt="weather"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_max)}°C /
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default Forecast
