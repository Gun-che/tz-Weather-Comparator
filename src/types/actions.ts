export interface IAction {
  type: string;
  payload?: object;
}

export interface IWeatherRequestArgs {
  city: string;
  country?: string;
}