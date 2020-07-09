import { all } from 'redux-saga/effects'
import { watchWeatherRequest } from './weather'

export function* rootSaga() {
  yield all([
    watchWeatherRequest(),
  ])
}