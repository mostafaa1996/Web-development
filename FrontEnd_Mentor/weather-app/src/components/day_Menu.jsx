const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export function Day_Menu({ SetDayFN , SetDayMenuFN }) {
  function handleClick(day) {
    SetDayFN(day);
    SetDayMenuFN(false);
  }

  return (
    <div className="flex flex-col items-center justify-between gap-2 w-full rounded-xl bg-[#25253F] mx-4 py-2 border border-neutral-500">
      {days.map((day, index) => ( 
        <button
          onClick={() => handleClick(day)}
          key={index}
          className="flex flex-row items-center justify-start w-[90%] h-8 rounded-l bg-[#25253F] px-4 hover:bg-[#2f2f49]"
        >
          {day}
        </button>
      ))}
    </div>
  );
}
