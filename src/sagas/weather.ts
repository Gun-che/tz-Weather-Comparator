import {
  put,
  takeEvery,
  apply
} from 'redux-saga/effects'
import * as A from '../actions/weather'
import { IWeatherRequest } from '../types/actions'
import { api } from '../helpers/api'

export function* handlerWeatherRequest(action: IWeatherRequest) {
  try {
    const response: IWeatherResponse = yield apply(api, api.get, [action.payload.city])

    yield put({
      type: A.WEATHER_SUCCESS,
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
  data: object;
}
