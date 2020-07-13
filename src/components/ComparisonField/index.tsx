import React from 'react'
import { IWeatherData } from '../../types/state'

export const ComparisonField: React.FC<{ data: IWeatherData[] }> = ({ data }) => {
  return (
    <div>

      {data.length ? <h2>{data[0].main.temp} ? {data[1].main.temp}</h2> : null}
    </div>
  )
}
