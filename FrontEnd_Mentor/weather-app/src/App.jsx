import "./App.css";
import Header from "./components/Header";
import WeatherContainer from "./components/weather_container.jsx";
import WeatherStatusContainer from "./components/WeatherStatus_container.jsx";
import DailyForecastContainer from "./components/DailyForecast_container.jsx";
import HourlyForcastContainer from "./components/HourlyForcast_container.jsx";
import SearchBar from "./components/SearchBar.jsx";
import fetchWeatherData from "./api/weatherData.jsx";
import { useImperialUnitsContext } from "./ImperialUnitsContext";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
function App() {
  const { imperialUnits} = useImperialUnitsContext();
  const [cityInfo, setCityInfo] = useState({
    name: "Cairo",
    country: "Egypt",
    latitude: 30.0444,
    longitude: 31.2357,
  });
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["weather" , cityInfo , imperialUnits],
    queryFn: () => {
      return fetchWeatherData({ locationData: cityInfo , isImperial: imperialUnits });
    },
  });

  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (isError) content = <p>{error.message}</p>;
  if (data)
    content = (
      <>
        <Header />
        <SearchBar setCityInfoFN={setCityInfo} />
        <div className="grid grid-cols-3 gap-6 items-stretch w-full ">
          <div className="col-span-2">
            <WeatherContainer
              city={data?.current.city}
              country={data?.current.country}
              temperature={data?.current.temperature}
              date={data?.current.time}
              is_day={data?.current.is_day}
            />
            <div className="flex flex-row items-center gap-6 w-full my-6 mx-1">
              <WeatherStatusContainer
                Text="Feels like"
                Value={data?.current.apparentTemperature}
                unit={`${imperialUnits ? "°F" : "°C"}`}
              />
              <WeatherStatusContainer
                Text="Humidity"
                Value={data?.current.relativeHumidity}
                unit="%"
              />
              <WeatherStatusContainer
                Text="Wind"
                Value={data?.current.windSpeed}
                unit={`${imperialUnits ? "mph" : "kmh"}`}
              />
              <WeatherStatusContainer
                Text="Percipitation"
                Value={data?.current.precipitation}
                unit={`${imperialUnits ? "inch" : "mm"}`}
              />
            </div>
            <h2 className="text-xl font-bold mx-1 text-white justify-self-start">
              Daily Forecast
            </h2>
            <div className="flex flex-row items-center gap-4 w-full my-1 mx-1">
              {data?.daily.map((day, i) => {
                return (
                  <DailyForecastContainer
                    key={i}
                    Day={day.day}
                    T_min={day.t_min}
                    T_max={day.t_max}
                    weatherState={day.weatherState}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-span-1 h-[67vh]">
            <HourlyForcastContainer hourlyData={data?.hourly} />
          </div>
        </div>
      </>
    );

  return <> {content} </>;
}

export default App;
