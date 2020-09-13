import { IAction } from './../types/actions';
import * as A from '../actions/wc'
import { IWCState } from '../types/state'

export const initState: IWCState = {
  data: [],
  timestamp: new Date(),
  isFetching: false,
  message: '',
  code: 0,
}

export function weatherComparatorReducer(
  state: IWCState = initState,
  action: IAction
): IWCState {

  switch (action.type) {
    case A.WEATHER_COMPARATOR_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: '',
        code: 0,
      }

    case A.WEATHER_COMPARATOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data
      }

    case A.WEATHER_COMPARATOR_FAILURE:
      return {
        ...state,
        isFetching: false,
        code: action.payload.response.status,
        message: action.payload.message,
      }

    default:
      return state;
  }
}