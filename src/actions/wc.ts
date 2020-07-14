import { IWeatherComparatorRequestArgs, IWeatherComparatorRequest } from '../types/actions'

export const WEATHER_COMPARATOR_REQUEST: string = 'WEATHER_COMPARATOR_REQUEST'
export const WEATHER_COMPARATOR_SUCCESS: string = 'WEATHER_COMPARATOR_SUCCESS'
export const WEATHER_COMPARATOR_FAILURE: string = 'WEATHER_COMPARATOR_FAILURE'

export const createWCRequest = (cities: IWeatherComparatorRequestArgs): IWeatherComparatorRequest => ({
  type: WEATHER_COMPARATOR_REQUEST,
  payload: cities,
})