import React from 'react'
import { IWeatherData } from '../../types/apiResponse'
import { IWeatherSortResult, IWeatherDistributionResult, weatherDistribution, weatherSort } from '../../helpers/weatherDistributionHelpers'

import s from './index.module.scss'


export const ComparisonInfo: React.FC<{ data: IWeatherData[] }> = ({ data }) => {

  const {
    warmCity,
    coldCity,
    windyCity,
    windlessCity,
    wetCity,
    dryCity, }: IWeatherSortResult = weatherSort(data)

  const {
    rainyCities,
    dryCities,
    snowyCities,
    cataclysmCities, }: IWeatherDistributionResult = weatherDistribution(data)

  return (
    <div>
      <div className={`${s.wrap} card blue lighten-2`}>
        <div className="card-content white-text">
          <span className={`${s.title} card-title`}>Таблица сравнений</span>
          <div className={s.body}>
            <div>
              <p>Теплее прочего: {warmCity}</p>
              <p>Холоднее прочего: {coldCity}</p>
              <p>Ветренее прочего: {windyCity}</p>
              <p>Наименее ветренно: {windlessCity}</p>
            </div>
            <div>
              <p>Самая высокая влажность: {wetCity}</p>
              <p>Суше прочего: {dryCity}</p>
              {rainyCities.length ? <p>Дождь сейчас идёт в городах: {rainyCities.map(i => ` ${i},`)}</p> : null}
              {dryCities.length ? <p>В следующих городах нет дождя: {dryCities.map(i => ` ${i},`)}</p> : null}
              {snowyCities.length ? <p>Снег сейчас идёт в городах: {snowyCities.map(i => ` ${i},`)}</p> : null}
              {cataclysmCities.length ? <p>Тут происходит что-то страшное: {cataclysmCities.map(i => ` ${i},`)}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
