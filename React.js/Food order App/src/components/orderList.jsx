import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import { useOrderList } from "../orderListProvider";


export default function OrderList({ orders, ref , SubmitFormRef}) {
  const DialogRef = useRef();
  const { removeOrderFromList, addOrderToList } = useOrderList();
  const handleIncrementQuantity = (order) => {
    addOrderToList(order);
  };
  const handledecrementQuantity = (order) => {
    removeOrderFromList(order.id);
  };
  const openSubmitForm = () => {
    SubmitFormRef.current.open(); 
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      DialogRef.current.showModal();
    },
    close: () => {
      DialogRef.current.close();
    },
  }));

  return createPortal(
    <dialog
      ref={DialogRef}
      className="p-6 rounded-xl shadow-lg md:w-[30%] w-[60%] bg-[#E6DAC9]"
    >
      <h2 className="text-xl md:text-2xl font-bold my-2">Your Cart</h2>
      <form action="" className="flex flex-col gap-2">
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-sm text-stone-600">
                  {order.name} - {order.quantity} x $
                  {Number(order.price).toFixed(2)}
                </p>
                <div className="flex flex-row gap-2 mr-2">
                  <button
                    formAction={() => handledecrementQuantity(order)}
                    className="rounded-full bg-[#110F0D] w-[1.5rem] h-[1.5rem] text-center text-yellow-400"
                  >
                    -
                  </button>
                  <span className="w-[1.5rem] h-[1.5rem] text-center">
                    {order.quantity}
                  </span>
                  <button
                    formAction={() => handleIncrementQuantity(order)}
                    className="rounded-full bg-[#110F0D] w-[1.5rem] h-[1.5rem] text-center text-yellow-400"
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-row justify-end">
          <p className="text-base font-bold text-stone-600 justify-end">
            Total: $
            {orders.reduce(
              (acc, order) => acc + order.price * order.quantity,
              0
            )}
          </p>
        </div>

        <div className="flex flex-row gap-2 items-center justify-end">
          <button
            formAction={() => ref.current.close()}
            className="bg-yellow-400 px-5 py-2 rounded-md mt-2 text-[#110F0D] mb-2"
          >
            Cancel
          </button>
          <button
            className="bg-yellow-400 px-5 py-2 rounded-md mt-2 text-[#110F0D] mb-2"
            formAction={() => {openSubmitForm(); ref.current.close();}}
          >
            GO TO Checkout
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("root")
  );
}
