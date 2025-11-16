export default function WeatherContainer({
  city = "",
  country,
  temperature,
  date,
  is_day,
}) {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="relative rounded-2xl p-6 h-64 overflow-hidden w-[90%] ">
      <img
        src="src/assets/images/bg-today-large.svg"
        alt="weather background"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="flex flex-row items-center justify-between relative z-10 text-white my-12">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-3xl font-bold">
            {city &&  `${city}, ${country}`}
          </h2>
          <p className="text-sm text-white">{city ? formattedDate : ""}</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-6">
         {city?is_day ? (
            <img
              src="src/assets/images/icon-sunny.webp"
              alt="sun icon"
              className="w-20 h-20"
            />
          ) : (
            <img
              src="src/assets/images/icon-moon.svg"
              alt="moon icon"
              className="w-20 h-20"
            />
          ) : ""} 
          <p className="text-6xl">{city && `${temperature}°`}</p>
        </div>
      </div>
    </div>
  );
}
