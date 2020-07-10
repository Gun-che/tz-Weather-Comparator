import React, { Dispatch } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IStoreState } from '../types/state'
import { createWeatherRequest } from '../actions/weather'
import { IAction, IWeatherRequestArgs } from '../types/actions'
import Weather from '../components/Weather'


const mapStateToProps = (state: IStoreState) => ({
  city: state.weather.city,
  data: state.weather.data,
  isFetching: state.weather.isFetching,
  message: state.weather.message,
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
  city,
  getWeather,
  data,
  isFetching,
  message,
}) => {
  return (
    <div>
      <button onClick={() => getWeather({ city: 'london' })}>click</button>
      <Weather
        city={city}
        getWeather={getWeather}
        data={data}
        isFetching={isFetching}
        message={message}
      />
    </div>
  )
}


export default connector(WeatherContainer)
