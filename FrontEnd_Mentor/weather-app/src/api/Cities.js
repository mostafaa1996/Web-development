export default async function fetchCities(query) {
  if (!query) return { results: [] };
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=en&format=json`
  );
  if (!res.ok) throw new Error("Failed to fetch cities");
  const Data = await res.json();
  let results = [];
  if (Data.results) {
    results = Data.results.map((city) => {
      return {
        name: city.name,
        latitude: city.latitude,
        longitude: city.longitude,
        country: city.country,
      };
    });
  }
  return results;
}