import { IWeatherData } from "../types/state"

export interface IWeatherSortResult {
  warmCity: string;
  coldCity: string;
  windyCity: string;
  windlessCity: string;
  wetCity: string;
  dryCity: string;
}

export interface IWeatherDistributionResult {
  rainyCities: string[];
  dryCities: string[];
  snowyCities: string[];
  cataclysmCities: string[];
}

export const weatherSort = (data: IWeatherData[]): IWeatherSortResult => {
  let warm = -100
  let cold = 100
  let windy = 0
  let windless = 100
  let wet = 0
  let dry = 100
  let warmCity = ''
  let coldCity = ''
  let windyCity = ''
  let windlessCity = ''
  let wetCity = ''
  let dryCity = ''

  data.forEach(i => {

    if (i.main.feels_like > warm) {
      warmCity = i.name;
      warm = i.main.feels_like
    }

    if (i.main.feels_like < cold) {
      coldCity = i.name;
      cold = i.main.feels_like
    }

    if (i.wind.speed > windy) {
      windyCity = i.name;
      windy = i.wind.speed
    }

    if (i.wind.speed < windless) {
      windlessCity = i.name;
      windless = i.wind.speed
    }

    if (i.main.humidity > wet) {
      wetCity = i.name;
      wet = i.main.humidity
    }

    if (i.main.humidity < dry) {
      dryCity = i.name;
      dry = i.main.humidity
    }
  })

  return {
    warmCity,
    coldCity,
    windyCity,
    windlessCity,
    wetCity,
    dryCity,
  }
}

export const weatherDistribution = (data: IWeatherData[]): IWeatherDistributionResult => {
  let rainyCities: string[] = [];
  let dryCities: string[] = [];
  let snowyCities: string[] = [];
  let cataclysmCities: string[] = [];

  data.forEach(i => {
    const { name, weather: [{ id }] } = i;

    id < 600 ? rainyCities.push(name) :
      id < 700 ? snowyCities.push(name) :
        id < 800 ? cataclysmCities.push(name) :
          dryCities.push(name);

  })
  return {
    rainyCities,
    dryCities,
    snowyCities,
    cataclysmCities,
  }
}