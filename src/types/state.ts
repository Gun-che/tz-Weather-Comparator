interface IState {
  isFetching: boolean;
  message: string;
}

export interface IWeatherState extends IState {
  city: string;
  data: object;
  timestamp: Date;
}