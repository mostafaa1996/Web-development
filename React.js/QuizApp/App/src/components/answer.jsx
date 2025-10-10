export default function Answer({ choice, decision, handleChoiceSelection }) {
  let choiceFramCssClasses =
    `w-full h-auto rounded-full  ${decision.answer === choice ? "bg-[#E781FB] hover:bg-[#E781FB]" : "bg-[#87CEEB] hover:bg-[#87CEAB]"}`;

  return (
    <>
      <div className={choiceFramCssClasses}>
        <p className="text-center h-10 text-base text-stone-800 py-2 px-2">
          <button onClick={() => handleChoiceSelection({ choice })}>
            {choice}
          </button>
        </p>
      </div>
    </>
  );
}
