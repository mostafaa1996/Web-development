export default function SearchMenu({ data, onSelect }) {
  const style =
    "bg-[#25253F] rounded-xl w-1/3 h-32 border border-neutral-500  mx-4 py-2 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3B3B57] scrollbar-track-transparent hover:scrollbar-thumb-[#4B4B6A]";
  return (
    <ul className={style}>
      {data?.map((city) => (
        <li
          key={`${city.name}_${city.country}`}
          onClick={() => {
            onSelect(city);
          }}
          className="px-4 py-2 hover:bg-[#2f2f49] cursor-pointer text-white text-l rounded-lg whitespace-nowrap"
        >
          <p>
            {city.name}, {city.country}
          </p>
        </li>
      ))}
    </ul>
  );
}
