import React from 'react'
import { IWeatherData } from '../../types/state'
import s from './index.module.scss'
import { weatherMsg } from '../../helpers/messages'
import { baseIconUrl } from '../../helpers/api'

export const WeatherCard: React.FC<{ data: IWeatherData }> = ({
  data: {
    name,
    weather: [{ id, icon }],
    wind: { speed },
    main: { feels_like, humidity, temp }

  }
}) => {
  return (
    <div className={s.wrap}>

      <div className={s.img}>
        <img src={`${baseIconUrl}${icon}@4x.png`} alt="" />
      </div>
      <div className={s.info}>
        <h2>{name}</h2>
        <h3>{temp}°C по ощущениям: {feels_like}°C</h3>
        <h4>{weatherMsg[id]['ru']}</h4>
        <h4>Ветер: {speed}м/с</h4>
        <p>Влажность: {humidity}%</p>
      </div>
    </div>
  )
}
