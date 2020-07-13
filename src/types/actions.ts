import { IWeatherData } from "./state";

export interface IAction {
  type: string;
  payload?: object;
}

export interface IWeatherRequestArgs {
  city: string;
  country?: string;
}

export interface IWeatherComparatorRequestArgs {
  city1: string;
  city2: string;
}

export interface IWeatherComparatorRequest extends IAction {
  payload: IWeatherComparatorRequestArgs,
}

export interface IWeatherRequest extends IAction {
  payload: IWeatherRequestArgs,
}

export interface IWeatherSuccess extends IAction {
  paiload: IWeatherData,
}