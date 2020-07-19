import React, { SyntheticEvent, ChangeEvent } from 'react'

import { PropsFromRedux } from '../../containers/WeatherComparatorContainer'
import { errorMsg } from '../../helpers/messages'
import { ComparisonCard } from '../../components/ComparisonCard'
import { WeatherCard } from '../../components/WeatherCard'
import { CityInput } from '../../components/CityInput'
import { ComparisonInfo } from '../../components/ComparisonInfo'
import s from './index.module.scss'
import { ErrorMessage } from '../../components/ErrorMessage'

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

    if (cities.some(i => i[0])) {
      const post = cities
        .filter(i => i[0])
        .map(i => i[0])

      getWeather(post)
      formMessage && setFormMessage('')

    } else {
      setFormMessage(errorMsg.empty2['ru'])
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement & { dataset: { index: number } }>) => {
    const target = e.currentTarget;
    let arr = [...cities];
    arr[target.dataset.index][0] = target.value;

    setSities(arr);
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
    return (data.length === 2 || data.length === 4) ? s.two :
      data.length === 0 ? s.empty : ''
  }

  const tmpMsg = (): string => {
    const fullMsg = errorMsg[code] ? errorMsg[code]['ru'] : message
    return fullMsg || formMessage ?
      `${fullMsg} ${formMessage}` :
      ''
  }

  return (
    <div className={s.wrap + ' ' + tmpGridClass() + ' containerCust'}>

      <div className={s.message}>
        <h2>Введите названия городов, погоду в которых вы хотите сравнить</h2>
        <ErrorMessage message={tmpMsg()} />
      </div>

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
        <><ComparisonCard data={data} />
          <div className={s.infoBlock}><ComparisonInfo data={data} /></div>
        </> : null}

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

