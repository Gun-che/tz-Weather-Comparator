export interface IWeatherData {
  name: string;
  visibility: number;
  weather: IWeatherItem[];
  wind: { speed: number };
  coord: { lon: number, lat: number }
  main: IWeatherMain;
}

interface IWeatherItem {
  id: number;
  icon: string;
  description: string;
}

interface IWeatherMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
}

export interface IAllWeatherData {
  hourly: IHourlyWeatherData[];
  daily: IDailyWeatherData[];
}

export interface IHourlyWeatherData {
  clouds: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  weather: IWeatherItem[];
  wind_speed: number;
  dt: number;
}

export interface IDailyWeatherData {
  clouds: number;
  weather: IWeatherItem[];
  pressure: number;
  feels_like: { day: number, night: number, eve: number, morn: number };
  humidity: number;
  sunrise: number;
  sunset: number;
  temp: { day: number, night: number, eve: number, morn: number };
  wind_speed: number;
  dt: number;
}