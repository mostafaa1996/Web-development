import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./error";
import Cart from "./cart";
export default function ItemsDistributer() {
  const {
    data: Meals,
    isLoading,
    error,
  } = useFetch({
    url: "http://localhost:3000/meals",
  });

  if (isLoading) return <Loading />;
  if (error)
    return <Error error="Can`t get the Meals. please try again later" />;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[70%] gap-4 mt-10 mb-10">
      {Meals.map((item) => (
        <Cart
          key={item.id}
          item={item}
          serverUrlForImages="http://localhost:3000/"
        />
      ))}
    </div>
  );
}
