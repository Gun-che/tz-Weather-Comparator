import { IWeatherData } from "./apiResponse";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IWeatherRequestArgs {
  city: string;
  country?: string;
}

export type IWeatherComparatorRequestArgs = string[];

export interface IWeatherComparatorRequest extends IAction {
  payload: IWeatherComparatorRequestArgs,
}

export interface IWeatherRequest extends IAction {
  payload: IWeatherRequestArgs,
}

export interface IWeatherSuccess extends IAction {
  paiload: IWeatherData,
}