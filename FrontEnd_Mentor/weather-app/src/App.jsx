import "./App.css";
import Header from "./components/Header";
import WeatherContainer from "./components/weather_container.jsx";
import WeatherStatusContainer from "./components/WeatherStatus_container.jsx";
import DailyForecastContainer from "./components/DailyForecast_container.jsx";
import HourlyForcastContainer from "./components/HourlyForcast_container.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row w-full h-screen my-8">
        <div className="w-2/3">
          <WeatherContainer />
          <div className="flex flex-row items-center gap-6 w-full my-6 mx-1">
            <WeatherStatusContainer />
            <WeatherStatusContainer />
            <WeatherStatusContainer />
            <WeatherStatusContainer />
          </div>
          <h2 className="text-2xl font-bold mx-1 text-white justify-self-start">Daily Forecast</h2>
          <div className="flex flex-row items-center gap-6 w-full my-6 mx-1">
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
