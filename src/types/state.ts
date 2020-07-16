import { IWeatherData } from "./apiResponse";

interface IState {
  isFetching: boolean;
  message: string;
  code: number;
}

export interface IWeatherState extends IState {
  data: IWeatherData[];
  timestamp: Date;
}

export interface IWCState extends IWeatherState { }


export interface IStoreState {
  weather: IWeatherState,
  wc: IWeatherState,
} 