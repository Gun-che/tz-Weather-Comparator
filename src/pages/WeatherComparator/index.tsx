import React, { SyntheticEvent, ChangeEvent } from 'react'
import { PropsFromRedux } from '../../containers/WeatherComparatorContainer'
import s from './index.module.scss'
import { errorMsg } from '../../helpers/messages'
import { ComparisonField } from '../../components/ComparisonField'
import { WeatherCard } from '../../components/WeatherCard'
import { CityInput } from '../../components/CityInput'

export const WeatherComparator: React.FC<PropsFromRedux> = ({
  data,
  getWeather,
  message,
  code,
}) => {

  const [cities, setSities] = React.useState<string[]>(['', ''])
  const [formMessage, setFormMessage] = React.useState<string>('')

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cities.includes('')) {
      getWeather(cities)
      formMessage && setFormMessage('')

    } else {
      setFormMessage(errorMsg.empty['ru'])
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement & { dataset: { key: number } }>) => {
    const target = e.currentTarget;

    let arr = [...cities];
    arr[target.dataset.key] = target.value;
    console.log()

    setSities(arr)
  }

  const onAdd = (e: SyntheticEvent) => {
    setSities([...cities, ''])
  }

  const tmpGridClass = (): string => {
    if (data.length === 2 || data.length === 4) {
      return s.two

    } else {
      return ''
    }
  }


  return (
    <div className={s.wrap + ' container'}>
      <h2>Введите названия городов, погоду в которых вы хотите сравнить</h2>
      <form onSubmit={onSubmit}>
        {cities.map((item, index) => {
          return <CityInput
            item={item}
            index={index}
            onChange={onChange}
          />
        })}
        <button
          onClick={onAdd}
          className="waves-effect waves-light btn blue lighten-3">
          <i className="material-icons left">add_location</i>Add location</button>
        <button
          type="submit"
          className="waves-effect waves-light btn blue lighten-3">
          <i className="material-icons left">search</i>Search</button>
      </form>
      {data.length ? <div className={s.answer}>
        <ComparisonField data={data} />
      </div> : null}
      <div className={s.grid + ' ' + tmpGridClass()}>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <WeatherCard data={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

