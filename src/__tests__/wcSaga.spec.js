import {
  put,
  takeEvery,
  apply
} from 'redux-saga/effects'
import * as A from '../actions/wc'
import { api } from '../helpers/api'
import * as S from '../sagas/wc'

describe('weather comparator Saga', () => {
  describe('weather comparator Saga worker', () => {
    describe('handler weather comparator request saga test', () => {
      const action = {
        type: A.WEATHER_COMPARATOR_REQUEST,
        payload: ['moscow', 'barnaul', 'roma'],
      }
      let cityResponse = [
        { data: 1 }, { data: 2 }, { data: 3 }
      ];
      const gen = S.handlerWCRequest(action);

      it('weather request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.get, [action.payload[0]]),
        );
      });

      it('weather request', () => {

        const eff = gen.next(cityResponse[0]).value;

        expect(eff).toEqual(
          apply(api, api.get, [action.payload[1]]),
        );
      });

      it('weather request', () => {

        const eff = gen.next(cityResponse[1]).value;

        expect(eff).toEqual(
          apply(api, api.get, [action.payload[2]]),
        );
      });

      it('dispatch success', () => {

        const eff = gen.next(cityResponse[2]).value;

        expect(eff).toEqual(
          put({
            type: A.WEATHER_COMPARATOR_SUCCESS,
            payload: {
              data: [
                cityResponse[0].data,
                cityResponse[1].data,
                cityResponse[2].data,],
            },
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })

    describe('watcher weather comparator request saga test', () => {
      const gen = S.watchWCRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(A.WEATHER_COMPARATOR_REQUEST, S.handlerWCRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })
  })
})