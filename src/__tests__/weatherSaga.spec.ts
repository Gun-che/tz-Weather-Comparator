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

      it('weather request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.get, [action.payload.city]),
        );
      });

      it('dispatch success', () => {

        const news: S.IWeatherResponse = {
          data: {
            name: "string",
            visibility: 100,
            weather: [{ id: 1, icon: '1', description: '1' }],
            wind: { speed: 1 },
            coord: { lon: 1, lat: 1 },
            main: {
              feels_like: 1,
              humidity: 1,
              pressure: 1,
              temp: 1,
            },
          },
          status: 200,
        }
        const eff = gen.next(news).value;

        expect(eff).toEqual(
          put({
            type: A.WEATHER_CURRENT_SUCCESS,
            payload: news.data
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })


    describe('handler news item request saga test', () => {
      const action = {
        payload: 'aaa'
      }
      const gen = s.handlerNewsItemRequest(action);

      it('news item request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.get, [`feeds/${action.payload}`]),
        );
      });

      it('dispatch success', () => {

        const news = {
          data: {
            feed: {}
          }
        }
        const eff = gen.next(news).value;

        expect(eff).toEqual(
          put({
            type: a.GET_NEWS_ITEM_SUCCESS,
            payload: [news.data.feed]
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })



    describe('watcher news request saga test', () => {
      const gen = s.watchNewsRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(a.GET_NEWS_REQUEST, s.handlerNewsRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })



    describe('watcher news item request saga test', () => {
      const gen = s.watchNewsItemRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(a.GET_NEWS_ITEM_REQUEST, s.handlerNewsItemRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })
  })
})