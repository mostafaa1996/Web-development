import { useState, useEffect } from "react";
export default function QuizBar({ Time_InSeconds }) {
  const [TimeUpdatedValue, setTimeUpdatedValue] = useState(
    Time_InSeconds * 1000,
  );

  const cssClassesOfOuterDiv = "w-[70%] bg-[rgba(12,5,32,0.6)] items-center justify-center rounded-full h-2 ml-2 overflow-hidden inline-block" ;
  const cssClassesOfinnerDiv = "bg-[#9082a3] h-2 rounded-full transition-all duration-300" ; 
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
    <div className="w-[30%] h-auto">
      <label className="w-12 text-2xl mr-2">
        {TimeRunning}
      </label>
      <div className={cssClassesOfOuterDiv}>
        <div
          className={cssClassesOfinnerDiv}
          style={{ width: `${(TimeRunning / Time_InSeconds) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
