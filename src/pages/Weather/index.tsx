import React, { SyntheticEvent } from 'react'
import { Route, Link, useLocation } from 'react-router-dom'
import { PropsFromRedux } from '../../containers/WeatherContainer'
import { CurrentWeather } from './components/CurrentWeather'
import { errorMsg } from '../../helpers/messages'
import { HourlyForecast } from './components/HourlyForecast'
import { LoadingThin } from '../../components/Loading'
import { DailyForecast } from './components/DailyForecast'

import s from './index.module.scss'

export const Weather: React.FC<PropsFromRedux> = ({
  getWeather,
  daily,
  hourly,
  data,
  message,
  code,
  isFetching
}) => {

  const tmpLocation = useLocation()
  console.log(tmpLocation)

  const [searchValue, setSearchValue] = React.useState<string>('')
  const [formMessage, setFormMessage] = React.useState<string>('')
  const [location, setLocation] = React.useState(tmpLocation.pathname)
  const [tabsClass, setTabsClass] = React.useState(s.cw)

  React.useEffect(() => {
    const loc = tmpLocation.pathname;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    loc === '/weather' && tabsClass !== s.cw ? setTabsClass(s.cw) :
      loc === '/weather/hourly' ? setTabsClass(s.hf) :
        loc === '/weather/daily' ? setTabsClass(s.df) :
          null

  }, [tabsClass, tmpLocation.pathname])

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

  const tmpTabClass = () => { }

  return (
    <section className={s.wrap + ' container'}>
      <div className={tabsClass + ' card-tabs'}>
        <ul className="tabs">
          <li className={s.cw + " tab"}>
            <Link to="/weather">Текущая погода</Link>
          </li>
          <li className={s.hf + " tab"}>
            <Link to="/weather/hourly">Почасовой прогноз</Link>
          </li>
          <li className={s.df + " tab"}>
            <Link to="/weather/daily">Прогноз на неделю</Link>
          </li>
        </ul>
      </div>
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

      <Route path="/weather" exact>
        {data.length ?
          <CurrentWeather data={data[0]} /> :
          isFetching ? <LoadingThin /> :
            <h2 className={s.input}>Введите название города</h2>}
      </Route>

      <Route path="/weather/hourly">
        {hourly.length ?
          <HourlyForecast data={hourly} name={data[0].name} /> :
          isFetching ? <LoadingThin /> :
            <h2 className={s.input}>Введите название города</h2>}
      </Route>

      <Route path="/weather/daily">
        {daily.length ?
          <DailyForecast name={data[0].name} data={daily} /> :
          isFetching ? <LoadingThin /> :
            <h2 className={s.input}>Введите название города</h2>}
      </Route>
    </section>
  )
}