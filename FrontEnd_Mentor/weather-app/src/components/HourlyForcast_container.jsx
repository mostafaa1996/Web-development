import SmallHourlyForcastContainer from "./SmallHourlyForcast_container";
export default function HourlyForcastContainer() {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 bg-[#25253F] rounded-xl">
      <div className="flex flex-row items-center justify-between text-white my-2 w-full">
        <h2 className="whitespace-nowrap text-l font-bold mx-4">Hourly Forcast</h2>
        <div className="flex flex-row items-center justify-between gap-2 w-[30%] h-12 rounded-xl bg-[#2f2f49] mx-4">
          <p className="text-sm p-2">Tuesday</p>
          <img className="p-2" src="src/assets/images/icon-dropdown.svg" alt="dropdown icon" />
        </div>
      </div>
      <SmallHourlyForcastContainer />
      <SmallHourlyForcastContainer />
      <SmallHourlyForcastContainer />
      <SmallHourlyForcastContainer />
      <SmallHourlyForcastContainer />
      <SmallHourlyForcastContainer />
      <SmallHourlyForcastContainer />
      <SmallHourlyForcastContainer />
    </div>
  );
}
