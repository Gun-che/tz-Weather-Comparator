import { IWeatherData, IDailyWeatherData, IHourlyWeatherData } from "./apiResponse";

interface IState {
  isFetching: boolean;
  message: string;
  code: number;
}

export interface IWeatherState extends IWCState {
  dailyForecastData: IDailyWeatherData[];
  hourlyForecastData: IHourlyWeatherData[];
}

export interface IWCState extends IState {
  data: IWeatherData[];
  timestamp: Date;
}

export interface IStoreState {
  weather: IWeatherState,
  wc: IWeatherState,
} 