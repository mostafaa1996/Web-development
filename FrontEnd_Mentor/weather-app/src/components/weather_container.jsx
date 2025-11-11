export default function WeatherContainer() {
  return (
    <div className="relative rounded-2xl p-6 h-64 overflow-hidden w-[90%] ">
      <img
        src="src/assets/images/bg-today-large.svg"
        alt="weather background"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="flex flex-row items-center justify-between relative z-10 text-white my-12">
        <h2 className="text-3xl font-bold">Berlin, Germany</h2>
        <p className="text-6xl mt-4">20°</p>
      </div>
    </div>
  );
}
