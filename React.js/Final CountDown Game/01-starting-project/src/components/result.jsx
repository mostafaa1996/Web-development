import { forwardRef , useImperativeHandle , useRef } from "react";

const Result = forwardRef (function Result({ result, targetTime } , ref) {
  const dialogRef = useRef(null); 

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
  }));

  return (
    <dialog ref = {dialogRef} className="result-modal">
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