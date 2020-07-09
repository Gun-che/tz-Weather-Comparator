import * as A from '../actions/weather'
import { IWeatherState } from '../types/state'
import { IAction } from '../types/actions'

export const initState: IWeatherState = {
  city: '',
  data: {},
  timestamp: new Date(),
  isFetching: false,
  message: '',
}

export function weatherReducer(
  state: IWeatherState = initState,
  action: IAction
): IWeatherState {

  switch (action.type) {
    case A.WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case A.WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }

    case A.WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    default:
      return state;
  }
}