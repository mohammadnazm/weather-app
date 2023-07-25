import "./App.css"
import Search from "./components/search/search"
import CurrentWeather from "./components/current-weather/current-weather"
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api"

function App() {
  const handleOnSearchChange = searchData => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(
      `${WEATHER_API_KEY}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    )

    const forecastFetch = fetch(
      `${WEATHER_API_KEY}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    )

    Promise.all([currentWeatherFetch, forecastFetch]).then(async response => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()
    })
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  )
}

export default App
