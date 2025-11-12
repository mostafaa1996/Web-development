export default function SearchMenu({ data, onSelect }) {
  const style = `bg-[#25253F] rounded-lg w-1/2 h-32 ${data?.length > 3 ? "overflow-y-scroll" : ""}`;
  return (<ul className={style}>
    {data?.map((city) => (
      <li
        key={`${city.name}_${city.country}`}
        onClick={() => {
          onSelect(city);
        }}
        className="px-4 py-2 hover:bg-neutral-600 cursor-pointer text-white text-l rounded-lg whitespace-nowrap"
      >
        <p>{city.name} , {city.country}</p>
      </li>
    ))}
  </ul>);
}
