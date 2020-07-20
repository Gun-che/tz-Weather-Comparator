import React from 'react'
import { IDailyWeatherData } from '../../../../types/apiResponse'
import { withACapitalLetter } from '../../../../helpers/withACapitalLetter'
import { weatherMsg } from '../../../../helpers/messages'
import { baseIconUrl } from '../../../../helpers/api'
import { dateFormater } from '../../../../helpers/dateFormater'
import s from './index.module.scss'

export const DailyForecast: React.FC<{ data: IDailyWeatherData[], name: string }> = ({ data, name }) => {

  return (
    <section className={s.wrap + ' animEl'}>
      <h2>Прогноз на неделю в городе {name}</h2>
      <div className={s.grid}>

        {data.map(({
          clouds,
          weather: [{ id, icon, description }],
          feels_like: { day, night, eve, morn },
          temp,
          pressure,
          wind_speed,
          humidity,
          sunrise,
          dt
        }) => {

          const anotation = withACapitalLetter(weatherMsg[id]['ru'])
          const date = dateFormater(dt)

          return (
            <div key={sunrise} className={s.card}>
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={`${baseIconUrl}${icon}@4x.png`} alt={description} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{date}<i className="material-icons right">more_vert</i></span>
                  <div>{Math.round(temp.day)}°C по ощущениям: {Math.round(day)}°C</div>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{date}<i className="material-icons right">close</i></span>
                  <div>
                    <p>{anotation}</p>
                    <p>
                      Температура: <br />
                      ночью: {Math.round(temp.night)}°C по ощущениям: {Math.round(night)}°C,<br />
                      утром: {Math.round(temp.morn)}°C по ощущениям: {Math.round(morn)}°C,<br />
                      днём: {Math.round(temp.day)}°C по ощущениям: {Math.round(day)}°C,<br />
                      вечером: {Math.round(temp.eve)}°C по ощущениям: {Math.round(eve)}°C,
                      </p>
                    <p>Ветер: {wind_speed}м/с</p>
                    <p>Влажность: {humidity}%</p>
                    <p>Давление: {pressure}гПа</p>
                    <p>Облачность: {clouds}%</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
