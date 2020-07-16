import {
  put,
  takeEvery,
  apply
} from 'redux-saga/effects'
import * as A from '../actions/weather'
import { IWeatherRequest } from '../types/actions'
import { api } from '../helpers/api'
import { IWeatherData } from '../types/apiResponse'

export function* handlerWeatherRequest(action: IWeatherRequest) {
  try {
    const transitResponse: IWeatherResponse = yield apply(api, api.get, [action.payload.city])

    const { data: { coord: { lat, lon } } } = transitResponse

    yield put({
      type: A.WEATHER_CURRENT_SUCCESS,
      payload: {
        data: transitResponse.data
      }
    })

    const response: IWeatherResponse = yield apply(api, api.getAll, [{ lat, lon }])

    yield put({
      type: A.WEATHER_ALL_SUCCESS,
      payload: {
        data: response.data
      }
    })

  } catch (error) {
    console.error();
    yield put({
      type: A.WEATHER_FAILURE,
      payload: error,
    })
  }
}

export function* watchWeatherRequest() {

  yield takeEvery(A.WEATHER_REQUEST, handlerWeatherRequest)
}

interface IWeatherResponse {
  status: number;
  data: IWeatherData;
}
