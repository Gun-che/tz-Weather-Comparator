import { initState, weatherReducer } from '../reducers/weather'
import * as A from '../actions/weather'
import { IWeatherRequest } from '../types/actions'


describe('weather item reducers', () => {
  describe('get weather reducer', () => {

    it(A.WEATHER_REQUEST, () => {
      const action: IWeatherRequest = {
        type: A.WEATHER_REQUEST,
        payload: { city: 'london' },
      }

      expect(weatherReducer(initState, action)).toEqual({
        ...initState,
        isFetching: true,
        message: '',
        code: 0,
      })
    })

    it('WEATHER_REQUEST after error', () => {
      const action = {
        type: A.WEATHER_REQUEST,
        payload: { city: 'london' },
      }

      const initState = {
        data: [],
        timestamp: new Date(),
        isFetching: false,
        message: 'err',
        code: 400,
        dailyForecastData: [],
        hourlyForecastData: [],
      }

      expect(weatherReducer(initState, action)).toEqual({
        ...initState,
        isFetching: true,
        message: '',
        code: 0,
      })
    })

    it(A.WEATHER_CURRENT_SUCCESS, () => {
      const action = {
        type: A.WEATHER_CURRENT_SUCCESS,
        payload: { data: {} }
      }

      expect(weatherReducer(initState, action)).toEqual({
        ...initState,
        data: [action.payload.data]
      })

    })

    it(A.WEATHER_ALL_SUCCESS, () => {
      const action = {
        type: A.WEATHER_ALL_SUCCESS,
        payload: {
          data: {
            daily: {},
            hourly: {},
          }
        }
      }

      expect(weatherReducer(initState, action)).toEqual({
        ...initState,
        isFetching: false,
        dailyForecastData: action.payload.data.daily,
        hourlyForecastData: action.payload.data.hourly,
      })

    })

    it(A.WEATHER_FAILURE, () => {
      const action = {
        type: A.WEATHER_FAILURE,
        payload: {
          message: 'err',
          response: {
            status: 400,
          }
        }
      }

      expect(weatherReducer(initState, action)).toEqual({
        ...initState,
        isFetching: false,
        code: action.payload.response.status,
        message: action.payload.message,
      })
    })
  })

  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(initState)
  })
})