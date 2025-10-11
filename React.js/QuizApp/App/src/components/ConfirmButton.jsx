export default function ConfirmButton({ handleConfirm, decision }) {
  let ButtonCssClasses = `w-full h-full text-white rounded-full ${
    !decision.hasAchoiceBeenSelected
      ? "bg-green-800"
      : "bg-green-500 hover:bg-green-600"
  }`;

  return (
    <div className="h-10 w-[40%] rounded-full">
      <button
        className={ButtonCssClasses}
        onClick={() => handleConfirm(decision.answer)}
        disabled={!decision.hasAchoiceBeenSelected}
      >
        Confirm
      </button>
    </div>
  );
}
