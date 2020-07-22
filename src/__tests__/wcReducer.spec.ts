import { IWeatherComparatorRequest } from './../types/actions';
import { initState, weatherComparatorReducer } from '../reducers/wc'
import * as A from '../actions/wc'


describe('weather comparator reducers', () => {
  describe('get wc reducer', () => {

    it(A.WEATHER_COMPARATOR_REQUEST, () => {
      const action: IWeatherComparatorRequest = {
        type: A.WEATHER_COMPARATOR_REQUEST,
        payload: ['city1', 'city1'],
      }

      expect(weatherComparatorReducer(initState, action)).toEqual({
        ...initState,
        isFetching: true,
        message: '',
        code: 0,
      })
    })

    it('GET_WEATHER_COMPARATOR_REQUEST after error', () => {
      const action = {
        type: A.WEATHER_COMPARATOR_REQUEST,
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

      expect(weatherComparatorReducer(initState, action)).toEqual({
        ...initState,
        isFetching: true,
        message: '',
        code: 0,
      })
    })

    it(A.WEATHER_COMPARATOR_SUCCESS, () => {
      const action = {
        type: A.WEATHER_COMPARATOR_SUCCESS,
        payload: { data: [{}, {}, {}] }
      }

      expect(weatherComparatorReducer(initState, action)).toEqual({
        ...initState,
        isFetching: false,
        data: action.payload.data,
      })

    })

    it(A.WEATHER_COMPARATOR_FAILURE, () => {
      const action = {
        type: A.WEATHER_COMPARATOR_FAILURE,
        payload: {
          message: 'err',
          response: {
            status: 400,
          }
        }
      }

      expect(weatherComparatorReducer(initState, action)).toEqual({
        ...initState,
        isFetching: false,
        code: action.payload.response.status,
        message: action.payload.message,
      })
    })
  })

  it('should return the initial state', () => {
    expect(weatherComparatorReducer(undefined, {})).toEqual(initState)
  })
})