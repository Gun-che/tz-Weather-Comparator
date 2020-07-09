import {
  put,
  takeEvery,
  call,
} from 'redux-saga/effects'
import * as A from '../actions/weather'
import { IAction } from '../types/actions'

export function* handlerWeatherRequest(action: IAction) {
  try {
    const response = yield call(fetchmock, 'london')

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

interface IWeather {
  temperature: string;
  pressure: string;
  wind: string;
}

interface IWeatherResponse {
  status: number;
  data: IWeather;
  errorMsg?: string;
}

const fetchmock = (city: string): Promise<IWeatherResponse> => {
  return new Promise((resolve) => {
    resolve({
      status: 200,
      data: {
        temperature: '23',
        pressure: '122',
        wind: '11'
      }
    })
  })
}