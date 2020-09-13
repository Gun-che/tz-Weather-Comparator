import React, { Dispatch } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IStoreState } from '../types/state'
import { createWCRequest } from '../actions/wc'
import { IAction, IWeatherComparatorRequestArgs } from '../types/actions'
import { WeatherComparator } from '../pages/WeatherComparator'


const mapStateToProps = (state: IStoreState) => ({
  data: state.wc.data,
  isFetching: state.wc.isFetching,
  message: state.wc.message,
  code: state.wc.code,
})

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  getWeather: (data: IWeatherComparatorRequestArgs) => dispatch(createWCRequest(data)),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

export const WeatherComparatorContainer: React.FC<PropsFromRedux> = ({
  getWeather,
  data,
  isFetching,
  message,
  code,
}) => {

  return (
    <div>
      <WeatherComparator
        getWeather={getWeather}
        data={data}
        isFetching={isFetching}
        message={message}
        code={code}
      />
    </div>
  )
}

export default connector(WeatherComparatorContainer)
