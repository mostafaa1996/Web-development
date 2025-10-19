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
    <div className="rounded-xl flex flex-col items-center justify-between hover:scale-105 transition-transform duration-100 bg-[#110F0D] h-[500px] md:w-[100%] w-[70%]">
      <img
        className="rounded-t-xl w-full lg:h-[45%] md:h-[40%] h-[30%]"
        src={ImagePath}
        alt=""
      />

      <div className="flex flex-col items-center justify-between gap-5 w-full h-full px-3 pb-5">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-base mt-4">{item.name}</h2>
          <p className="text-sm bg-[#312C1D] w-[30%] text-yellow-400">
            {item.price}$
          </p>
          <p className="text-sm text-stone-300 w-[100%]">{item.description}</p>
        </div>

        <button
          className="bg-yellow-400 px-5 py-2 rounded-md text-[#110F0D] 
                 active:bg-yellow-600 hover:scale-105 transition-transform 
                 duration-100 active:scale-90 active:translate-y-1 
                 active:translate-x-1 mt-auto "
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
