import {
  put,
  takeEvery,
  apply,
  // all,
} from 'redux-saga/effects'
import * as A from '../actions/wc'
import { IWeatherComparatorRequest } from '../types/actions'
import { api } from '../helpers/api'
import { IWeatherData } from '../types/apiResponse';

export function* handlerWCRequest(action: IWeatherComparatorRequest) {
  try {

    const cities = action.payload;

    let citiesResponse: IWeatherData[] = [];

    // const response: IWeatherResponse[] = yield all(cities.map(i => apply(api, api.get, [i])))

    // const citiesResponse = response.map(i => i.data)

    for (let i = 0; i < cities.length; i++) {
      const response: IWeatherResponse = yield apply(api, api.get, [cities[i]])
      citiesResponse.push(response.data)
    }

    yield put({
      type: A.WEATHER_COMPARATOR_SUCCESS,
      payload: {
        data: citiesResponse
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
  data: IWeatherData;
}
