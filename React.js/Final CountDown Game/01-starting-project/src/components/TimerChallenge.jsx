import { useRef, useState } from "react";
import Result from "./result.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, SetTimeExpired] = useState(false);
  const [challengeIsRunning, SetChallengeIsRunning] = useState(false);
  const Dialog = useRef(null);

  const timer = useRef(null);
  function HandleClickButtonAtStart() {
    timer.current = setTimeout(() => {
      SetTimeExpired(true);
      SetChallengeIsRunning(false);
      Dialog.current.open();
    }, targetTime * 1000);

    SetChallengeIsRunning(true);
  }

  function HandleClickButtonAtStop() {
    clearTimeout(timer.current);
    SetChallengeIsRunning(false);
  }

  return (
    <>
      <Result ref= {Dialog} result="You Lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? "" : "s"}
        </p>
        <p>
          <button
            onClick={
              challengeIsRunning
                ? HandleClickButtonAtStop
                : HandleClickButtonAtStart
            }
          >
            {challengeIsRunning ? "Stop challenge" : "Start challenge"}
          </button>
        </p>
        <p className={challengeIsRunning ? "active" : undefined}>
          {challengeIsRunning ? "Time is running" : "Time is inactive"}
        </p>
      </section>
    </>
  );
}
