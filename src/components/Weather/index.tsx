import React, { SyntheticEvent } from 'react'
import s from './index.module.scss'
import { PropsFromRedux } from '../../containers/WeatherContainer'
import { WeatherItem } from '../WeatherItem'
import { errorMsg } from '../../helpers/messages'

export const Weather: React.FC<PropsFromRedux> = ({ getWeather, data, message, code }) => {

  const [searchValue, setSearchValue] = React.useState<string>('')
  const [formMessage, setFormMessage] = React.useState<string>('')

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue) {
      getWeather({ city: searchValue })
      formMessage && setFormMessage('')

    } else {
      setFormMessage(errorMsg.empty['ru'])
    }
  }

  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const tmpMsg = (): React.ReactElement => {
    const fullMsg = errorMsg[code] ? errorMsg[code]['ru'] : message
    return (
      <>{fullMsg} {formMessage}</>
    )
  }

  return (
    <section className={s.wrap + ' container'}>
      <div className={s.message}>
        <h3>{tmpMsg()}</h3>
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="search">Введите город</label>
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={onChange}
        />
        <button
          type="submit"
          className="waves-effect waves-light btn blue lighten-3">
          <i className="material-icons left">search</i>Search</button>
      </form>
      {data.length ? <WeatherItem data={data[0]} /> : null}
    </section>
  )
}

export default Weather