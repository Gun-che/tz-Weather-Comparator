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