import { DataTransformation } from "./WeatherDataTransformation";

export default async function fetchWeatherData({ locationData }) {
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?
latitude=${locationData.latitude}
&longitude=${locationData.longitude}
&current_weather=true
&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,precipitation,weathercode
&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode
&timezone=auto`);
  if (!res.ok) throw new Error("Weather data not found");
  const Data = await res.json();
  const weatherData = {
    current: {
      temperature: Data?.current_weather?.temperature,
      windSpeed: Data?.current_weather?.windspeed,
      is_day: Data?.current_weather?.is_day,
      time: Data?.current_weather?.time,
      city: locationData.name,
      country: locationData.country,
    },
    daily: {
      temperatureMax: Data?.daily?.temperature_2m_max,
      temperatureMin: Data?.daily?.temperature_2m_min,
      weatherCode: Data?.daily?.weathercode,
      time: Data?.daily?.time,
    },
    hourly: {
      temperature: Data?.hourly?.temperature_2m,
      time: Data?.hourly?.time,
      weatherCode: Data?.hourly?.weathercode,
      relativeHumidity: Data?.hourly?.relativehumidity_2m,
      apparentTemperature: Data?.hourly?.apparent_temperature,
      precipitation: Data?.hourly?.precipitation,
    },
  };
  const WeatherDataObj = DataTransformation({ data: weatherData });

  // console.log(WeatherDataObj);

  return WeatherDataObj;
}



/*
weatherData = {
  current: {
    temperature: data.current.temperature,
    windSpeed: data.current.windSpeed,
    is_day: data.current.is_day,
    time: data.current.time,
    city: data.current.city,
    country: data.current.country,
    apparentTemperature: AverageApparentTemperature,
    relativeHumidity: AverageHumidity,
    precipitation: AveragePericipitation,
  },
  daily:[
   {
    time: data.daily.time[i],
    t_min: data.daily.temperatureMin[i],
    t_max: data.daily.temperatureMax[i],
    weatherCode:{ label: "", icon: "" },
   }, ......] ,
  hourly: [
    {
      time: data.hourly.time[i],
      temperature: data.hourly.temperature[i],
      weatherCode: { label: "", icon: "" },
    }, ......],
}

*/

