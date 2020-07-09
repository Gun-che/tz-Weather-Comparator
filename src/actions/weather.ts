import { IAction, IWeatherRequestArgs } from '../types/actions'

export const WEATHER_REQUEST: string = 'WEATHER_REQUEST'
export const WEATHER_SUCCESS: string = 'WEATHER_SUCCESS'
export const WEATHER_FAILURE: string = 'WEATHER_FAILURE'

export const createWeatherRequest = ({ city }: IWeatherRequestArgs): IAction => ({
  type: WEATHER_REQUEST,
  payload: { city }
})