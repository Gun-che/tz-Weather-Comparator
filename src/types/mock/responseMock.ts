import { IDailyWeatherData, IHourlyWeatherData, IWeatherData, IAllWeatherData } from "../apiResponse";

export const weatherDataMock: IWeatherData = {
  name: '1',
  visibility: 1,
  weather: [{
    id: 1,
    icon: '1',
    description: '1',
  }],
  wind: { speed: 1 },
  coord: { lon: 1, lat: 1 },
  main: {
    feels_like: 1,
    humidity: 1,
    pressure: 1,
    temp: 1,
  },
}

export const hourlyWeatherDataMock: IHourlyWeatherData = {
  clouds: 1,
  feels_like: 1,
  humidity: 1,
  pressure: 1,
  temp: 1,
  weather: [{
    id: 1,
    icon: '1',
    description: '1',
  }],
  wind_speed: 1,
  dt: 1,
}

export const dailyWeatherDataMock: IDailyWeatherData = {
  clouds: 10,
  weather: [{
    id: 1,
    icon: '1',
    description: '1',
  }],
  pressure: 10,
  feels_like: { day: 1, night: 1, eve: 1, morn: 1 },
  humidity: 1,
  sunrise: 1,
  sunset: 1,
  temp: { day: 1, night: 1, eve: 1, morn: 1 },
  wind_speed: 1,
  dt: 1,
}

export const allWeatherDataMock: IAllWeatherData = {
  hourly: [hourlyWeatherDataMock],
  daily: [dailyWeatherDataMock],
}