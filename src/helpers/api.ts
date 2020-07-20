import axios, { AxiosInstance } from 'axios'

export const baseIconUrl = 'http://openweathermap.org/img/wn/';

interface IApi {
  get(city: string): Promise<any>,
  getAll(coord: { lat: number, lon: number }): Promise<any>,
  baseUrl: string,
  _tmp: AxiosInstance,
  key: string,
}

class Api implements IApi {
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  key = process.env.REACT_APP_OPEN_WEATHER_KEY || '7155342732aa29bc9d0c9f5cd5e4554b';

  _tmp = axios.create({
    baseURL: this.baseUrl,
    responseType: 'json',
  })

  get = (city: string): Promise<any> => {
    return this._tmp.get(`weather?q=${city}&units=metric&lang=ru&appid=${this.key}`)
  }

  getAll = (coord: { lat: number, lon: number }): Promise<any> => {
    return this._tmp.get(`onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,current&units=metric&appid=${this.key}`)
  }
}

export const api: IApi = new Api();