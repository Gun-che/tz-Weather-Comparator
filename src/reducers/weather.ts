import * as A from '../actions/weather'
import { IWeatherState } from '../types/state'

export const initState: IWeatherState = {
  data: [],
  timestamp: new Date(),
  isFetching: false,
  message: '',
  code: 0,
  dailyForecastData: [],
  hourlyForecastData: [],
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
        message: '',
        code: 0,
      }

    case A.WEATHER_CURRENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [action.payload.data]
      }


    case A.WEATHER_ALL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dailyForecastData: action.payload.data.daily,
        hourlyForecastData: action.payload.data.hourly,
      }

    case A.WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        code: action.payload.response.status,
        message: action.payload.message,
      }

    default:
      return state;
  }
}