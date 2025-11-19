import { AnimatePresence } from "framer-motion";
import SearchInProgress from "./SearchInProgress";
import SearchMenu from "./SearchMenu";
import { useSearchHook } from "../hooks/SearchHook";

export default function SearchBar({ setCityInfoFN }) {
  const {
    inputRef,
    handleChangeInSearch,
    handleSearchButtonClick,
    data,
    isLoading,
    isError,
    error,
    showMenu,
    handleMenuClick,
  } = useSearchHook({ setCityInfoFN });
  return (
    <div className="flex flex-col items-center justify-center w-full relative">
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
        <div className="w-[20%] bg-[#4657DA] rounded-xl">
          <button
            className="w-full h-10 rounded-xl bg-[#4657DA] text-white hover:scale-105 focus:border focus:border-[#00074C] focus:scale-95"
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        </div>
      </div>
      <AnimatePresence>{isLoading && <SearchInProgress />}</AnimatePresence>
      {isError && <p>{error.message}</p>}
      {data?.length > 0 && showMenu && (
        <div className="absolute top-16 left-80 w-full h-full bg-opacity-50 z-[9999]">
          <SearchMenu
            data={data}
            onSelect={(city) => {
              handleMenuClick(city);
            }}
          />
        </div>
      )}
    </div>
  );
}
