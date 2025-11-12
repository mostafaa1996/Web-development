import "./App.css";
import Header from "./components/Header";
import WeatherContainer from "./components/weather_container.jsx";
import WeatherStatusContainer from "./components/WeatherStatus_container.jsx";
import DailyForecastContainer from "./components/DailyForecast_container.jsx";
import HourlyForcastContainer from "./components/HourlyForcast_container.jsx";
import SearchBar from "./components/SearchBar.jsx";
import fetchWeatherData from "./api/weatherData.jsx";
import { useCityContext } from "./CityInfoContext.jsx";
import { useQueryClient } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
function App() {
  const {cityInfo} = useCityContext();
  const queryClient = useQueryClient(); 
  const { data, isLoading, isError, error } = useQuery({
    queryKey:["weather"], 
    queryFn:() =>{
      const locations = queryClient.getQueryData(["location"]);
      const location = locations.find((location) => location.name === cityInfo);
      fetchWeatherData({ locationData: location})
    }
  });

  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (isError) content = <p>{error.message}</p>;
  if (data) content = <WeatherContainer />;

  return (
    <>
      <Header />
      <SearchBar />
      <div className="flex flex-row w-full my-8">
        <div className="w-2/3">
          <WeatherContainer />
          <div className="flex flex-row items-center gap-6 w-full my-6 mx-1">
            <WeatherStatusContainer />
            <WeatherStatusContainer />
            <WeatherStatusContainer />
            <WeatherStatusContainer />
          </div>
          <h2 className="text-xl font-bold mx-1 text-white justify-self-start">
            Daily Forecast
          </h2>
          <div className="flex flex-row items-center gap-6 w-full my-1 mx-1">
            <DailyForecastContainer />
            <DailyForecastContainer />
            <DailyForecastContainer />
            <DailyForecastContainer />
            <DailyForecastContainer />
            <DailyForecastContainer />
            <DailyForecastContainer />
          </div>
        </div>
        <HourlyForcastContainer />
      </div>
    </>
  );
}

export default App;
