import React, { SyntheticEvent } from 'react'
import s from './index.module.scss'
import { PropsFromRedux } from '../../containers/WeatherContainer'
import { WeatherItem } from '../WeatherItem'

export const Weather: React.FC<PropsFromRedux> = ({ getWeather, data }) => {

  const [searchValue, setSearchValue] = React.useState<string>('')

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    getWeather({ city: searchValue })
  }

  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  return (
    <section className={s.wrap}>
      <form onSubmit={onSubmit}>
        <label htmlFor="search">Введите город</label>
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
      {data.length ? <WeatherItem data={data[0]} /> : null}
    </section>
  )
}

export default Weather