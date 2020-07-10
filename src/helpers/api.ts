import axios, { AxiosInstance } from 'axios'

interface IApi {
  get(city: string): Promise<any>,
  baseUrl: string,
  _tmp: AxiosInstance,
  key: string,
}

class Api implements IApi {
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  key = process.env.REACT_APP_OPEN_WEATHER_KEY || '';

  _tmp = axios.create({
    baseURL: this.baseUrl,
    responseType: 'json',
  })

  get = (city: string): Promise<any> => {
    return this._tmp.get(`weather?q=${city}&appid=${this.key}`)
  }
}

export const api: IApi = new Api();