import { forwardRef } from "react";

const Result = forwardRef (function Result({ result, targetTime } , ref) {
  return (
    <dialog ref = {ref} className="result-modal">
      <h2>{result}</h2>
      <p>
        the target time was{" "}
        <strong>
          {targetTime} second{targetTime === 1 ? "" : "s"}{" "}
        </strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>{" "}
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;