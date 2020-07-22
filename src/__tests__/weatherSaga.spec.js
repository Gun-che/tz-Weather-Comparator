import {
  put,
  takeEvery,
  apply
} from 'redux-saga/effects'
import * as A from '../actions/weather'
import { api } from '../helpers/api'
import * as S from '../sagas/weather'

describe('weather Sagas', () => {
  describe('weather Sagas worker', () => {
    describe('handler weather request saga test', () => {
      const action = {
        type: A.WEATHER_REQUEST,
        payload: { city: 'moscow' }
      }
      const gen = S.handlerWeatherRequest(action);
      const weather = {
        data: {
          coord: { lon: 1, lat: 1 },
        },
        status: 200,
      }

      it('weather request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.get, [action.payload.city]),
        );
      });

      it('dispatch transit success', () => {

        const eff = gen.next(weather).value;

        expect(eff).toEqual(
          put({
            type: A.WEATHER_CURRENT_SUCCESS,
            payload: { data: weather.data }
          }),
        );
      });

      it('hourly & daily forecast request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.getAll, [{ lat: weather.data.coord.lat, lon: weather.data.coord.lon }]),
        );
      });

      it('dispatch success', () => {
        const response = {
          data: {
            hourly: [{}],
            daily: [{}],
          },
          status: 200,
        }

        const eff = gen.next(response).value;

        expect(eff).toEqual(
          put({
            type: A.WEATHER_ALL_SUCCESS,
            payload: { data: response.data, }
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })

    describe('watcher worker request saga test', () => {
      const gen = S.watchWeatherRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(A.WEATHER_REQUEST, S.handlerWeatherRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })
  })
})