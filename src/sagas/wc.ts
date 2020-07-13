import {
  put,
  takeEvery,
  apply,
} from 'redux-saga/effects'
import * as A from '../actions/wc'
import { IWeatherComparatorRequest } from '../types/actions'
import { api } from '../helpers/api'

export function* handlerWCRequest(action: IWeatherComparatorRequest) {
  try {
    const response1: IWeatherResponse = yield apply(api, api.get, [action.payload.city1])

    const response2: IWeatherResponse = yield apply(api, api.get, [action.payload.city2])

    yield put({
      type: A.WEATHER_COMPARATOR_SUCCESS,
      payload: {
        data: [response1.data, response2.data]
      }
    })

  } catch (error) {
    console.error();
    yield put({
      type: A.WEATHER_COMPARATOR_FAILURE,
      payload: error,
    })
  }
}

export function* watchWCRequest() {

  yield takeEvery(A.WEATHER_COMPARATOR_REQUEST, handlerWCRequest)
}

interface IWeatherResponse {
  status: number;
  data: object;
}
