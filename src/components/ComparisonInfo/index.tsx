import React from 'react'
import { IWeatherData } from '../../types/state'

interface ISortResult {
  warmCity: string;
  coldCity: string;
  windyCity: string;
  windlessCity: string;
  wetCity: string;
  dryCity: string;
}

export const ComparisonInfo: React.FC<{ data: IWeatherData[] }> = ({ data }) => {

  const sort = (): ISortResult => {
    let warm = -100
    let cold = 100
    let windy = 0
    let windless = 100
    let wet = 0
    let dry = 100
    let warmCity = ''
    let coldCity = ''
    let windyCity = ''
    let windlessCity = ''
    let wetCity = ''
    let dryCity = ''

    data.forEach(i => {

      if (i.main.feels_like > warm) {
        warmCity = i.name;
        warm = i.main.feels_like
      }

      if (i.main.feels_like < cold) {
        coldCity = i.name;
        cold = i.main.feels_like
      }

      if (i.wind.speed > windy) {
        windyCity = i.name;
        windy = i.main.feels_like
      }

      if (i.wind.speed < windless) {
        windlessCity = i.name;
        windless = i.main.feels_like
      }

      if (i.main.humidity > wet) {
        wetCity = i.name;
        wet = i.main.feels_like
      }

      if (i.main.humidity < dry) {
        dryCity = i.name;
        dry = i.main.feels_like
      }
    })

    return {
      warmCity,
      coldCity,
      windyCity,
      windlessCity,
      wetCity,
      dryCity,
    }
  }

  const {
    warmCity,
    coldCity,
    windyCity,
    windlessCity,
    wetCity,
    dryCity, }: ISortResult = sort()

  return (
    <div>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
          <p>Теплее прочего: {warmCity}</p>
          <p>Холоднее прочего: {coldCity}</p>
          <p>Ветренее прочего: {windyCity}</p>
          <p>Наиенее ветренно: {windlessCity}</p>
          <p>Самая высокая влажность: {wetCity}</p>
          <p>Суше прочего: {dryCity}</p>
        </div>
      </div>
    </div>
  )
}
