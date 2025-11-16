export default function WeatherStatusContainer({Text , Value , unit}) {
  return (
    <div className="flex flex-col justify-start items-start px-4 py-4 text-white bg-[#25253F] rounded-xl gap-3 w-[20%]">
      <p className="text-lg font-bold">{Text?Text:""}</p>
      <p className="whitespace-nowrap text-2xl">{Value?Value:""} {unit?unit:""}</p>
    </div>
  );
}
