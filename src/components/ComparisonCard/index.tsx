import React from 'react'
import { IWeatherData } from '../../types/apiResponse'
import img from './wp.jpg'

export const ComparisonCard: React.FC<{ data: IWeatherData[] }> = ({ data }) => {

  const sortByTemp = (): [string, number, number] => {
    let temp = -50
    let feelsLike = 0
    let city = ''
    data.forEach(i => {
      if (i.main.feels_like > temp) {
        temp = i.main.feels_like;
        city = i.name;
        feelsLike = i.main.feels_like
      }
    })
    return [city, temp, feelsLike]
  }

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={img} alt="sky" />
          <span className="card-title">{sortByTemp()[0]} cамый тёплый город, из выбранных вами!</span>
        </div>
        <div className="card-content">
          <p>Температура здесь сегодня {Math.round(sortByTemp()[1]) + `°C!`}</p>
          <p>По ощущениям {Math.round(sortByTemp()[2]) + `°C`}</p>
        </div>
      </div>
    </div>
  )
}
