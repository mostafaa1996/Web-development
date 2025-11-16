export default function DailyForecastContainer({
  Day,
  T_min,
  T_max,
  weatherState,
}) {
  return (
    <div className="flex flex-col items-center justify-center my-4 w-[11%] h-auto bg-[#25253F] rounded-xl text-white">
      <p className="text-l p-2">{Day ? Day : ""}</p>
      <img
        className="p-4 w-[90%] h-[70%]"
        src={weatherState?.icon || null}
        alt={weatherState?.label || null}
      />
      <div className="flex flex-row justify-between px-1 w-full">
        <p className="text-l p-2">{T_min ? `${T_min}°` : ""}</p>
        <p className="text-l p-2">{T_max ? `${T_max}°` : ""}</p>
      </div>
    </div>
  );
}
