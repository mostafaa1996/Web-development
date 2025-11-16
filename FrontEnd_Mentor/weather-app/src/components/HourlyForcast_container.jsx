import SmallHourlyForcastContainer from "./SmallHourlyForcast_container";
export default function HourlyForcastContainer({ hourlyData }) {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full bg-[#25253F] rounded-xl flex-grow">
      <div className="flex flex-row items-center justify-between text-white my-2 w-full">
        <h2 className="whitespace-nowrap text-l font-bold mx-4">
          Hourly Forcast
        </h2>
        <div className="flex flex-row items-center justify-between gap-2 w-[30%] h-12 rounded-xl bg-[#2f2f49] mx-4">
          <p className="text-sm p-2">Tuesday</p>
          <img
            className="p-2"
            src="src/assets/images/icon-dropdown.svg"
            alt="dropdown icon"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#3B3B57] scrollbar-track-transparent hover:scrollbar-thumb-[#4B4B6A] flex-grow">
        {hourlyData.map((hourlyWeather, index) => {
          console.log(hourlyWeather);
          return (
            <SmallHourlyForcastContainer
              key={index}
              time={hourlyWeather.time}
              Temperature={hourlyWeather.temperature}
              weatherState={hourlyWeather.weatherCode}
            />
          );
        })}
      </div>
    </div>
  );
}
