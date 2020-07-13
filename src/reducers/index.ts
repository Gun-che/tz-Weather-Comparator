import { combineReducers } from 'redux'
import { weatherReducer } from './weather'
import { weatherComparatorReducer } from './wc'


export const rootReducer = combineReducers({
  weather: weatherReducer,
  wc: weatherComparatorReducer,
})