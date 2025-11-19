import { useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import fetchCities from "../api/Cities";
export function useSearchHook({ setCityInfoFN }) {
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [{ cities: search }],
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
    queryClient.removeQueries([{ cities: search }]);
    setShowMenu(false);
  }
  function handleChangeInSearch(event) {
    //debouncing wait until 500ms after last change
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      queryClient.invalidateQueries([{ cities: search }]);
      setSearch(inputRef.current.value);
      if (event.target.value.length > 1) setShowMenu(true);
      else setShowMenu(false);
    }, 500);
  }

  return {
    inputRef,
    handleSearchButtonClick,
    handleChangeInSearch,
    data,
    isLoading,
    isError,
    error,
    showMenu,
    handleMenuClick,
  };
}
