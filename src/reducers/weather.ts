import * as A from '../actions/weather'
import { IWeatherState } from '../types/state'

export const initState: IWeatherState = {
  city: '',
  data: null,
  timestamp: new Date(),
  isFetching: false,
  message: '',
}

export function weatherReducer(
  state: IWeatherState = initState,
  action: any
): IWeatherState {

  switch (action.type) {
    case A.WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: ''
      }

    case A.WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data
      }

    case A.WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: action.payload.message
      }

    default:
      return state;
  }
}