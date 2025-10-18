import { useState, useEffect } from "react";
export default function useFetch({ url }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch Data");
        }
        const Data = await res.json();
        setData(Data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
