import { all } from 'redux-saga/effects'
import { watchWeatherRequest } from './weather'
import { watchWCRequest } from './wc'

export function* rootSaga() {
  yield all([
    watchWeatherRequest(),
    watchWCRequest(),
  ])
}