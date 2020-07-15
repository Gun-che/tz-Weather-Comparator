import React, { SyntheticEvent, ChangeEvent } from 'react'
import { PropsFromRedux } from '../../containers/WeatherComparatorContainer'
import s from './index.module.scss'
import { errorMsg } from '../../helpers/messages'
import { ComparisonField } from '../../components/ComparisonCard'
import { WeatherCard } from '../../components/WeatherCard'
import { CityInput } from '../../components/CityInput'

export const WeatherComparator: React.FC<PropsFromRedux> = ({
  data,
  getWeather,
  message,
  code,
}) => {

  const [cities, setSities] = React.useState<[string, number][]>([['', 0], ['', 1]])
  const [formMessage, setFormMessage] = React.useState<string>('')
  const [key, setKey] = React.useState<number>(2)

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cities.some(i => !i[0])) {
      getWeather(cities.map(i => i[0]))
      formMessage && setFormMessage('')

    } else {
      setFormMessage(errorMsg.empty['ru'])
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement & { dataset: { index: number } }>) => {
    const target = e.currentTarget;

    let arr = [...cities];
    arr[target.dataset.index][0] = target.value;

    console.log(target.dataset.index)

    setSities(arr)
  }

  const onAdd = (e: SyntheticEvent) => {
    setSities([...cities, ['', key]])
    setKey(key + 1)
  }

  const onClose = (i: number): (e: SyntheticEvent) => void => e => {
    let arr = [...cities];
    arr.splice(i, 1);
    setSities(arr)
  }


  const tmpGridClass = (): string => {
    if (data.length === 2 || data.length === 4) {
      return s.two
    }
    if (data.length === 0) {
      return s.empty

    } else {
      return ''
    }
  }


  return (
    <div className={s.wrap + ' ' + tmpGridClass() + ' container'}>
      <h2>Введите названия городов, погоду в которых вы хотите сравнить</h2>
      <form onSubmit={onSubmit} className={s.form}>
        {cities.map((item, index) => {
          return <div key={item[1]}>
            <CityInput
              onClose={onClose}
              item={item}
              index={index}
              onChange={onChange}
            />
          </div>
        })}
        <div className={s.btns}>
          <button
            onClick={onAdd}
            className="waves-effect waves-light btn blue lighten-3">
            <i className="material-icons left">add_location</i>Add location</button>
          <button
            type="submit"
            className="waves-effect waves-light btn blue lighten-3">
            <i className="material-icons left">search</i>Search</button>
        </div>
      </form>
      {data.length ?
        <ComparisonField data={data} /> : null}
      <div className={s.grid}>
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

