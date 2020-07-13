import React, { SyntheticEvent } from 'react'
import { PropsFromRedux } from '../../containers/WeatherComparatorContainer'
import s from './index.module.scss'
import { errorMsg } from '../../helpers/messages'
import { WeatherItem } from '../../components/WeatherItem'
import { ComparisonField } from '../../components/ComparisonField'

export const WeatherComparator: React.FC<PropsFromRedux> = ({
  data,
  getWeather,
  message,
  code,
}) => {

  const [city1, setCity1] = React.useState<string>('')
  const [city2, setCity2] = React.useState<string>('')
  const [formMessage, setFormMessage] = React.useState<string>('')

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city1 && city2) {
      getWeather({ city1, city2 })
      formMessage && setFormMessage('')

    } else {
      setFormMessage(errorMsg.empty['ru'])
    }
  }

  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    if (target.id === 'city1') {
      setCity1(target.value)

    } else {
      setCity2(target.value)
    }

  }

  return (
    <div className={s.wrap + ' container'}>
      <h2>Введите названия городов, погоду в которых вы хотите сравнить</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="city1">Первый город</label>
        <input
          type="text"
          placeholder="Первый город"
          onChange={onChange}
          id="city1"
          value={city1}
        />
        <label htmlFor="city2">Второй город</label>
        <input
          type="text"
          placeholder="Второй город"
          onChange={onChange}
          id="city2"
          value={city2}
        />
        <button
          type="submit"
          className="waves-effect waves-light btn blue lighten-3">
          <i className="material-icons left">search</i>Search</button>
      </form>
      {data.length ? <div className={s.answer}>
        <WeatherItem data={data[0]} />
        <ComparisonField data={data} />
        <WeatherItem data={data[1]} />
      </div> : null}
    </div>
  )
}

