// import axios from 'axios';

const API_KEY = '0347c864d2bf42c0018f6c88f5869e61';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `$(ROOT_URL)?q={city name},{country code}&cnt={cnt}`;
  //const request = axios.get(url);

  return {
    type: FETCH_WEATHER
    // payLoad: request
  };
}
