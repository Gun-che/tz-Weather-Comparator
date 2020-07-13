interface IState {
  isFetching: boolean;
  message: string;
  code: number;
}

export interface IWeatherState extends IState {
  city: string;
  data: IWeatherData[];
  timestamp: Date;
}


export interface IWeatherData {
  name: string;
  visibility: number;
  weather: IWeatherItem[];
  wind: { speed: number };
  main: IWeatherMain
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

export interface IStoreState {
  weather: IWeatherState
}