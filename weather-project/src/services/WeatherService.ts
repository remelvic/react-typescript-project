import {Weather, WeatherLocation } from "../model/Weather";


const key: string = "1c72ec13b5888110743a09f9f3bee6b2"
//process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;

if (key === undefined) {
  throw new Error(
    "No open Weather API KEY defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_KEY"
  );
}

const keyQuery = `appid=${key}`;
const server = "https://api.openweathermap.org/data/2.5";

export async function readWeather(locationId: number): Promise<Weather> {

  const current = await fetch(`${server}/weather?id=${locationId}&${keyQuery}&units=metric`);

  if (current.status !== 200) throw new Error('Failed to read location data');

  return await current.json();
  
}

export async function readForecast(locationId: number): Promise<Weather[]> {
  const forecast = await fetch(`${server}/forecast?id=${locationId}&${keyQuery}&units=metric&cnt=8`);

  if (forecast.status !== 200) throw new Error('Failed to read location data');

  return (await forecast.json()).list;
}

export async function getTempForLocation(location: string ): Promise<Weather>{
  const current = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&${keyQuery}`);

  if (current.status !== 200) throw new Error(`Failed get info about ${location}`);

  return await current.json();
}

export function getIconUrl(code: string): string {
  return `http://openweathermap.org/img/wn/${code}.png`;
}