import React from 'react'
import { WeatherBox } from './Styled'



function RenderWeather({location}) {
  return (
    <WeatherBox>
      <name>  {location.place} </name>
      <div>   {location.temp} </div>
      <div>   {location.wind}</div>
      <div>   {location.humidity}</div>
    </WeatherBox>
  )
}

export default RenderWeather