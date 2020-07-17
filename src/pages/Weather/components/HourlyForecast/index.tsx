import React from 'react'
import { IHourlyWeatherData } from '../../../../types/apiResponse'
import { timeFormater } from '../../../../helpers/dateFormater'
import { withACapitalLetter } from '../../../../helpers/withACapitalLetter'
import { weatherMsg } from '../../../../helpers/messages'
import { baseIconUrl } from '../../../../helpers/api'

import s from './index.module.scss'

export const HourlyForecast: React.FC<{ data: IHourlyWeatherData[], name: string }> = ({ data, name }) => {
  return (
    <section className={s.wrap}>
      <h2>Прогноз на неделю в городе {name}</h2>
      {
        data.map(({
          weather: [{ id, icon, description }],
          temp,
          wind_speed,
          humidity,
          dt
        }) => {

          const anotation = withACapitalLetter(weatherMsg[id]['ru'])
          const date = timeFormater(dt)

          return (
            <div key={dt} className={s['h' + date.hour] + s.sec}>
              <div>
                <p className={s.time}>{date.time}</p>
                <p className={s.date}>{date.date}</p>
              </div>
              <div className={s.img}>
                <img src={`${baseIconUrl}${icon}@4x.png`} alt={description} title={anotation} />
              </div>
              <div className={s.temp}>
                <div className=""><i className="material-icons left">flare</i>{temp}</div>
                <div><i className="material-icons left">navigate_next</i>{wind_speed}</div>
              </div>
            </div>
          )
        })
      }
    </section >
  )
}
