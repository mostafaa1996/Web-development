import { useRef, useState } from "react";
import Result from "./result.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeLeft, SetTimeLeft] = useState(targetTime * 1000);
  const Dialog = useRef(null);
  const timer = useRef(null);

  const timerIsActive = timeLeft < targetTime * 1000 && timeLeft > 0;

  if (timeLeft <= 0) {
    clearInterval(timer.current);
    Dialog.current.open();
  }

  function ResetTimeLeft()  {
    SetTimeLeft(targetTime * 1000);
  }

  function HandleClickButtonAtStart() {
    timer.current = setInterval(() => {
      SetTimeLeft((prevtimeLeft) => prevtimeLeft - 10);
    }, 10);
  }

  function HandleClickButtonAtStop() {
    clearInterval(timer.current);
    Dialog.current.open();
  }

  return (
    <>
      <Result
        ref={Dialog}
        targetTime={targetTime}
        RemainingTime={timeLeft}
        onOpen={ResetTimeLeft}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? "" : "s"}
        </p>
        <p>
          <button
            onClick={
              timerIsActive ? HandleClickButtonAtStop : HandleClickButtonAtStart
            }
          >
            {timerIsActive ? "Stop challenge" : "Start challenge"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Time is inactive"}
        </p>
      </section>
    </>
  );
}
