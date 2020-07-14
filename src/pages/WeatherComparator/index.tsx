import React, { SyntheticEvent, ChangeEvent } from 'react'
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


  return (
    <div className={s.wrap + ' container'}>
      <h2>Введите названия городов, погоду в которых вы хотите сравнить</h2>
      <form onSubmit={onSubmit}>
        {cities.map((item, index) => {
          return (<div key={index}>
            <label htmlFor="city1">{index + 1 + ' город'}</label>
            <input
              data-key={index}
              type="text"
              placeholder={index + 1 + ' город'}
              onChange={onChange}
              id="city1"
              value={item}
            />
          </div>)
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
        <WeatherItem data={data[0]} />
        <ComparisonField data={data} />
        <WeatherItem data={data[1]} />
      </div> : null}
    </div>
  )
}

