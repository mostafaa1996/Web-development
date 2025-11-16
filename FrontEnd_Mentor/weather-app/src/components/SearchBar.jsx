import { useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

import fetchCities from "../api/Cities";
import SearchInProgress from "./SearchInProgress";
import SearchMenu from "./SearchMenu";

export default function SearchBar({ setCityInfoFN }) {
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(true);
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cities"],
    queryFn: () => fetchCities(search),
    enabled: search.length > 1,
  });
  function handleSearchButtonClick() {
    const city = inputRef.current.value.split(",")[0].trim();
    const completeDataOfCity = data.find((item) => item.name === city);
    console.log(completeDataOfCity);
    setCityInfoFN(completeDataOfCity);
  }
  function handleMenuClick(city) {
    inputRef.current.value = city.name + ", " + city.country;
    queryClient.removeQueries(["cities"]);
    setShowMenu(false);
    // new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
    //   console.log(data);
    // })
  }
  function handleChangeInSearch() {
    //debouncing wait until 500ms after last change
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      queryClient.invalidateQueries(["cities"]);
      setSearch(inputRef.current.value);
      setShowMenu(true);
    }, 500);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center justify-center text-white w-1/2 h-12  my-4 gap-2 justify-self-center">
        <div className="flex items-center bg-neutral-800 rounded-lg px-2 w-[70%] focus-within:ring-1 focus-within:ring-white">
          <img
            src="src/assets/images/icon-search.svg"
            alt="search icon"
            className="w-4 h-4 opacity-70"
          />
          <input
            type="text"
            placeholder="Search for a city..."
            className="flex-1 bg-transparent text-white px-2 py-2 focus:outline-none"
            ref={inputRef}
            onChange={handleChangeInSearch}
          />
        </div>
        <button
          className="w-[20%] h-12 rounded-xl bg-[#4657DA] text-white w-20 hover:bg-[#4657DA]/80"
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </div>
      <AnimatePresence>{isLoading && <SearchInProgress />}</AnimatePresence>
      {isError && <p>{error.message}</p>}
      {data?.length > 0 && showMenu && (
        <SearchMenu
          data={data}
          onSelect={(city) => {
            handleMenuClick(city);
          }}
        />
      )}
    </div>
  );
}
