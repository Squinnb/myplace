
import './App.css'
import {  useState } from "react";
import useForcast from "./hooks/useForcast.js"
import WeatherDay from "./components/WeatherDay.tsx"



function App() {
  const cities: Array<string> = ["New York", "London", "Paris", "Tokyo", "Seoul"]
  const [city, setCity] = useState<string>(cities[0])
  const [isMetric, setIsMetric] = useState<boolean>(false)
  const { data, error, isLoading} = useForcast(city)
  
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <>Error...</>
  
  return (
    <>
    <h1>
      Weather for {city}
    </h1>
    <button style={{fontSize: "smaller", backgroundColor: "#d8d7d7"}} onClick={(e) => { setIsMetric(!isMetric)}} >{isMetric ? " Use Fahrenheit" : "Use Celsius"}</button>
    <select onChange={(e) => {setCity(e.target.value)}} id="cities" name="cities">
       {cities.map((c) => {
        return <option selected={c === city} value={c}>{c}</option>
       })}
      </select>
    <div id='weather-days'>
      {data.forecast.forecastday.map((f) => {
        return (
        <WeatherDay
          date={f.date}
          condition={f.day.condition.text}
          icon={f.day.condition.icon}
          maxTemp={ isMetric ? `${f.day.maxtemp_c}°C`: `${f.day.maxtemp_f}°F`}
          minTemp={ isMetric ? `${f.day.mintemp_c}°C`: `${f.day.mintemp_f}°F`}
         />
        )
      })}
    </div>

    </>
  )
}

export default App

