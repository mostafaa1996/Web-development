export default function SmallHourlyForcastContainer({
  weatherState,
  time,
  Temperature,
}) {
  const date = new Date(time);

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className="flex flex-row items-center justify-between text-white w-[90%] h-16 bg-[#2f2f49] rounded-xl my-2 gap-2">
      <div className="flex flex-row items-center justify-center gap-1 w-[20%] m-10 ">
        <img
          className="w-[70%]"
          src={weatherState?.icon || null}
          alt={weatherState?.label || null}
        />
        <p className="whitespace-nowrap text-l w-auto">{formattedTime}</p>
      </div>
      <p className="text-l w-[10%] m-2">
        {Temperature ? `${Temperature}°` : ""}
      </p>
    </div>
  );
}
