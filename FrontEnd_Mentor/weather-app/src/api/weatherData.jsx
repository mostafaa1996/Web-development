export default async function fetchWeatherData({locationData}) {
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
      apparentTemperature: Data?.current_weather?.apparent_temperature,
      relativeHumidity: Data?.current_weather?.relativehumidity_2m,
      precipitation: Data?.current_weather?.precipitation,
      windSpeed: Data?.current_weather?.windspeed,
      is_day: Data?.current_weather?.is_day,
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
    },
  }
  return weatherData;
}
