import React, { Dispatch } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IStoreState } from '../types/state'
import { createWeatherRequest } from '../actions/weather'
import { IAction, IWeatherRequestArgs } from '../types/actions'
import { Weather } from '../pages/Weather'


const mapStateToProps = (state: IStoreState) => ({
  data: state.weather.data,
  isFetching: state.weather.isFetching,
  message: state.weather.message,
  code: state.weather.code,
  daily: state.weather.dailyForecastData,
  hourly: state.weather.hourlyForecastData,
})

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  getWeather: (data: IWeatherRequestArgs) => dispatch(createWeatherRequest(data)),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>
// type Props = PropsFromRedux & {background?: string}
// or
// interface IProps extends ConnectedProps<typeof connector> {
//   background?: string;
// } 

export const WeatherContainer: React.FC<ConnectedProps<typeof connector>> = ({
  getWeather,
  data,
  isFetching,
  message,
  code,
  daily,
  hourly
}) => {
  return (
    <div>
      <Weather
        daily={daily}
        hourly={hourly}
        getWeather={getWeather}
        data={data}
        isFetching={isFetching}
        message={message}
        code={code}
      />
    </div>
  )
}


export default connector(WeatherContainer)
