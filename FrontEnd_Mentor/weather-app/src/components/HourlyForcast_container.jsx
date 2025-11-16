import { tr } from "framer-motion/client";
import SmallHourlyForcastContainer from "./SmallHourlyForcast_container";
import {Day_Menu} from "./day_Menu";
import { useState , useRef } from "react";
import { useClickAway } from "react-use";
export default function HourlyForcastContainer({ hourlyData }) {
  const [Day, SetDay] = useState("Sunday");
  const [ShowDayMenu, setShowDayMenu] = useState(false);
  const [ClickAwayTriggered, setClickAwayTriggered] = useState(false);
  const Menuref = useRef(null);
  const Btnref = useRef(null);

  useClickAway(Menuref, () => {
    console.log("clicked away");
    setClickAwayTriggered(true);
    setShowDayMenu(false);
  });

  function handleClick() {
    if(ClickAwayTriggered) {
      setClickAwayTriggered(false);
      Btnref.current.click();
    }
    else {
      setShowDayMenu(!ShowDayMenu);
    }
  }
  return (
    <div className="flex flex-col items-center justify-start w-full h-full bg-[#25253F] rounded-xl flex-grow relative">
      <div className="flex flex-row items-center justify-between text-white my-2 w-full">
        <h2 className="whitespace-nowrap text-l font-bold mx-4">
          Hourly Forcast
        </h2>
        <div className="flex flex-row items-center justify-between gap-2 w-[30%] h-12 rounded-xl bg-[#2f2f49] mx-4 px-1">
          <p className="text-sm">{Day}</p>
          <button
            ref={Btnref}
            onClick={handleClick}
            className="rounded-xl hover:scale-[1.2]"
          >
            <img
              className="p-2"
              src="src/assets/images/icon-dropdown.svg"
              alt="dropdown icon"
            />
          </button>
        </div>
        {ShowDayMenu ? (
          <div ref={Menuref} className="absolute top-0 translate-y-[+20%] right-8 z-20 w-[50%] ">
            <Day_Menu SetDayFN={SetDay} SetDayMenuFN={setShowDayMenu} />
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center justify-start w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#3B3B57] scrollbar-track-transparent hover:scrollbar-thumb-[#4B4B6A] flex-grow">
        {hourlyData[Day].map((hourlyWeather, index) => {
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
