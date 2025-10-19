import { useOrderList } from "../orderListProvider.jsx";
export default function Cart({ item, serverUrlForImages }) {
  function addToCart() {
    const order = {
      id: item.id,
      name: item.name,
      price: item.price,
    };
    addOrderToList(order);
    handleCartCount();
  }
  const ImagePath = serverUrlForImages + item.image;
  const { addOrderToList, handleCartCount } = useOrderList();
  return (
    <div className="rounded-xl  flex flex-col items-center hover:scale-105 transition-transform duration-100 bg-[#110F0D] w-[90%] ">
      <img className="rounded-t-xl w-full h-[50%]" src={ImagePath} alt="" />
      <div className="flex flex-col items-center gap-5 h-[50%]">
        <h2 className="text-base mt-6">{item.name}</h2>
        <p className="text-sm text-center bg-[#312C1D] w-[20%] text-yellow-400">
          {item.price}$
        </p>
        <p className="text-sm text-center h-[45%] w-[90%]">
          {item.description}
        </p>
        <button
          className="bg-yellow-400 px-5 py-2 rounded-md mt-2 text-[#110F0D] mb-8 active:bg-yellow-600 hover:scale-105 transition-transform duration-100 active:scale-90 active:translate-y-1 active:translate-x-1"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
