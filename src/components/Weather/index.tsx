import React, { SyntheticEvent } from 'react'
import s from './index.module.scss'
import { PropsFromRedux } from '../../containers/WeatherContainer'
import { WeatherItem } from '../WeatherItem'
import { isEmpty } from '../../helpers/isEmpty'
import { isObject } from 'util'

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
      {/* {isObject(data) ? null : <WeatherItem data={data} />} */}
    </section>
  )
}

export default Weather