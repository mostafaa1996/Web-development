import { forwardRef , useImperativeHandle , useRef } from "react";

const Result = forwardRef (function Result({targetTime , RemainingTime , onOpen} , ref) {
  const dialogRef = useRef(null); 

  const formattedRemainingTime = (RemainingTime / 1000).toFixed(2);
  const score = (1-(formattedRemainingTime / targetTime).toFixed(2)) * 100;

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
  }));

  return (
    <dialog ref = {dialogRef} className="result-modal" onClose={onOpen}>
      <h2>{formattedRemainingTime <= 0?'You lost' : 'You won'}</h2>
      {formattedRemainingTime > 0 && <h2>Score: {score}%</h2>}
      <p>
        the target time was{" "}
        <strong>
          {targetTime} second{targetTime === 1 ? "" : "s"}{" "}
        </strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>{" "}
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;