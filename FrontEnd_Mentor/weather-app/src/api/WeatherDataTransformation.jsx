// Weather code
export const weatherCodeMap = {
  0: { label: "Clear sky", icon: "src/assets/images/icon-sunny.webp" },
  1: { label: "Mainly clear", icon: "src/assets/images/icon-sunny.webp" },
  2: {
    label: "Partly cloudy",
    icon: "src/assets/images/icon-partly-cloudy.webp",
  },
  3: { label: "Overcast", icon: "src/assets/images/icon-overcast.webp" },
  45: { label: "Fog", icon: "src/assets/images/icon-fog.webp" },
  48: { label: "Fog", icon: "src/assets/images/icon-fog.webp" },
  51: { label: "Light drizzle", icon: "src/assets/images/icon-drizzle.webp" },
  53: { label: "Drizzle", icon: "src/assets/images/icon-drizzle.webp" },
  55: { label: "Dense drizzle", icon: "src/assets/images/icon-drizzle.webp" },
  61: { label: "Light rain", icon: "src/assets/images/icon-rain.webp" },
  63: { label: "Moderate rain", icon: "src/assets/images/icon-rain.webp" },
  65: { label: "Heavy rain", icon: "src/assets/images/icon-rain.webp" },
  71: { label: "Snow fall", icon: "src/assets/images/icon-snow.webp" },
  73: { label: "Snow fall", icon: "src/assets/images/icon-snow.webp" },
  75: { label: "Heavy snow fall", icon: "src/assets/images/icon-snow.webp" },
  80: { label: "Rain showers", icon: "src/assets/images/icon-rain.webp" },
  81: { label: "Rain showers", icon: "src/assets/images/icon-rain.webp" },
  82: { label: "Violent rain", icon: "src/assets/images/icon-storm.webp" },
  95: { label: "Thunderstorm", icon: "src/assets/images/icon-storm.webp" },
  96: {
    label: "Thunderstorm + hail",
    icon: "src/assets/images/icon-storm.webp",
  },
  99: {
    label: "Thunderstorm + hail",
    icon: "src/assets/images/icon-storm.webp",
  },
};

let dailyWeather = [
  { day: "Mon", t_min: 0, t_max: 0, weatherState: { label: "", icon: "" } },
  { day: "Tue", t_min: 0, t_max: 0, weatherState: { label: "", icon: "" } },
  { day: "Wed", t_min: 0, t_max: 0, weatherState: { label: "", icon: "" } },
  { day: "Thu", t_min: 0, t_max: 0, weatherState: { label: "", icon: "" } },
  { day: "Fri", t_min: 0, t_max: 0, weatherState: { label: "", icon: "" } },
  { day: "Sat", t_min: 0, t_max: 0, weatherState: { label: "", icon: "" } },
  { day: "Sun", t_min: 0, t_max: 0, weatherState: { label: "", icon: "" } },
];

let hourlyWeather = {};
let currentWeather = {};

export function DataTransformation({ data }) {
  dailyWeather.map((day, i) => {
    day.t_min = data.daily.temperatureMin[i].toFixed(0);
    day.t_max = data.daily.temperatureMax[i].toFixed(0);
    day.weatherState = weatherCodeMap[data.daily.weatherCode[i]];
  });

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let HoursOffset = 0;
  console.log(data.hourly.time.length);
  if (data.hourly.time.length === 7 * 24) {
    for (let day = 0; day < 7; day++) {
      const Startday = new Date(data.hourly.time[HoursOffset]).getDay();
      hourlyWeather[days[Startday]] = [];
      for (let i = HoursOffset; i < HoursOffset + 24; i++) {
        let HourlyObj = {
          time: data.hourly.time[i],
          temperature: data.hourly.temperature[i],
          weatherCode: weatherCodeMap[data.hourly.weatherCode[i]],
        };
        hourlyWeather[days[Startday]].push(HourlyObj);
      }
      HoursOffset += 24;
    }
    console.log(hourlyWeather);
  }

  const AverageApparentTemperature =
    data?.hourly.apparentTemperature.reduce((acc, curr) => acc + curr, 0) /
    data?.hourly.apparentTemperature.length;
  const AverageHumidity =
    data?.hourly.relativeHumidity.reduce((acc, curr) => acc + curr, 0) /
    data?.hourly.relativeHumidity.length;
  const AveragePericipitation =
    data?.hourly.precipitation.reduce((acc, curr) => acc + curr, 0) /
    data?.hourly.precipitation.length;

  currentWeather = {
    temperature: data.current.temperature,
    windSpeed: data.current.windSpeed,
    is_day: data.current.is_day,
    time: data.current.time,
    city: data.current.city,
    country: data.current.country,
    apparentTemperature: AverageApparentTemperature.toFixed(2),
    relativeHumidity: AverageHumidity.toFixed(2),
    precipitation: AveragePericipitation.toFixed(2),
  };

  return {
    current: currentWeather,
    daily: dailyWeather,
    hourly: hourlyWeather,
  };
}
