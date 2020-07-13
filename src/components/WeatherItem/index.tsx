import React from 'react'
import { IWeatherData } from '../../types/state'
import s from './index.module.scss'
import { weatherMsg } from '../../helpers/messages'
import { baseIconUrl } from '../../helpers/api'



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
    <div className={s.wrap}>

      <h2>Погода в населенном пункте {name}</h2>
      <div className={s.info}>
        <h3>Температура: {temp}°C по ощущениям: {feels_like}°C</h3>
        <h4>{weatherMsg[id]['ru']}</h4>
        <h4>Ветер: {speed}м/с</h4>
        <p>Давление: {pressure}гПа</p>
        <p>Влажность: {humidity}%</p>
        <p>Видимость: {visibility}м</p>
      </div>
      <div className={s.img}>
        <img src={`${baseIconUrl}${icon}@4x.png`} alt="" />
      </div>
    </div>
  )
}
