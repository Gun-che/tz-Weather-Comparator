import React from 'react'
import { IWeatherData } from '../../../../types/apiResponse'
import s from './index.module.scss'
import { weatherMsg } from '../../../../helpers/messages'
import { baseIconUrl } from '../../../../helpers/api'
import { withACapitalLetter } from '../../../../helpers/withACapitalLetter'



export const CurrentWeather: React.FC<{ data: IWeatherData }> = ({
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
        <h4>{withACapitalLetter(weatherMsg[id]['ru'])}</h4>
        <div className={s.grid}>
          <div className={s.sec}>
            <p>Ветер: {speed}м/с</p>
            <p>Давление: {pressure}гПа</p>
          </div>
          <div className={s.sec}>
            <p>Влажность: {humidity}%</p>
            <p>Видимость: {visibility}м</p>
          </div>
        </div>
      </div>
      <div className={s.img}>
        <img src={`${baseIconUrl}${icon}@4x.png`} alt="" />
      </div>
    </div>
  )
}
