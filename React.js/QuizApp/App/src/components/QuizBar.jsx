import { useState, useEffect } from "react";
export default function QuizBar({ Time_InSeconds }) {
  const [TimeUpdatedValue, setTimeUpdatedValue] = useState(
    Time_InSeconds * 1000,
  );

  const cssClassesOfOuterDiv =
    "w-[90%] bg-[rgba(12,5,32,0.6)] rounded-full h-2 ml-2 overflow-hidden mb-1";
  const cssClassesOfinnerDiv =
    "bg-[#9082a3] h-2 rounded-full transition-all duration-300";
  const TimeRunning = TimeUpdatedValue / 1000; //TimeRunning in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUpdatedValue((prevValue) => {
        if (prevValue === 0) return 0;
        return prevValue - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // not applicable at tailwind..
  //cssClassesOfinnerDiv += ` w-[${(TimeRunning / Time_InSeconds) * 100}%]`;
  return (
    <div className="flex items-center flex-row justify-center w-[60%] h-auto">
      <label className="w-5 text-base text-right">{TimeRunning}</label>
      <div className={cssClassesOfOuterDiv}>
        <div
          className={cssClassesOfinnerDiv}
          style={{ width: `${(TimeRunning / Time_InSeconds) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
