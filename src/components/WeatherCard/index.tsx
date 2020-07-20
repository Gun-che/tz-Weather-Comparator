import React from 'react'
import { withACapitalLetter } from '../../helpers/withACapitalLetter'
import { baseIconUrl } from '../../helpers/api'
import { IWeatherData } from '../../types/apiResponse'
import { weatherMsg } from '../../helpers/messages'

export const WeatherCard: React.FC<{ data: IWeatherData }> = ({
  data: {
    name,
    visibility,
    weather: [{ id, icon, description }],
    wind: { speed },
    main: { feels_like, humidity, pressure, temp }
  }
}) => {

  const anotation = withACapitalLetter(weatherMsg[id]['ru'])

  return (

    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img alt={description} className="activator" src={`${baseIconUrl}${icon}@4x.png`} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
        <p>{Math.round(temp)}°C по ощущениям: {Math.round(feels_like)}°C</p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>

        <p>{anotation}</p>
        <p>{Math.round(temp)}°C по ощущениям: {Math.round(feels_like)}°C</p>
        <p>Ветер: {speed}м/с</p>
        <p>Влажность: {humidity}%</p>
        <p>Давление: {pressure}гПа</p>
        <p>Видимость: {visibility}м</p>
      </div>
    </div>
  )
}
