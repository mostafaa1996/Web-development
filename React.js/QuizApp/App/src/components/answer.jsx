export default function Answer({ choice }) {
  let choiceFramCssClasses = "w-4/5 h-auto bg-[#87CEEB] rounded-full";
  return (
    <>
      <div className={choiceFramCssClasses}>
        <p className="text-center h-10 text-base text-stone-800 py-2 px-2">
          {choice}
        </p>
      </div>
    </>
  );
}
