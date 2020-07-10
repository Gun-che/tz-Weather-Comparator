import React from 'react'
import { IWeatherData } from '../../types/state'



export const WeatherItem: React.FC<{ data: IWeatherData }> = ({
  data: {
    name,
    visibility,
    weather: [{ id, icon, description }],
    wind: { speed },
    main: { feels_like, humidity, pressure, temp }

  }
}) => {
  return (
    <div>
      <h2>Погода в населенном пункте {name}</h2>
    </div>
  )
}
