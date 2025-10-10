export default function SkipButton({ handleSkip}) {
  let ButtonCssClasses =
    "w-full h-full bg-red-800 text-white rounded-full  hover:bg-red-600";

  return (
    <div className="h-10 w-[40%] rounded-full">
      <button
        className={ButtonCssClasses}
        onClick={handleSkip}
      >
        {'>'} Skip
      </button>
    </div>
  );
}