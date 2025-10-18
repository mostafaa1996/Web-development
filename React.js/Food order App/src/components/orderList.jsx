import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
export default function OrderList({ orders, ref }) {
  const DialogRef = useRef();
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
                  {order.name} - {order.quantity} x ${order.price.toFixed(2)}
                </p>
                <div className="flex flex-row gap-2 mr-2">
                  <button
                    className="rounded-full bg-[#110F0D] w-[1.5rem] h-[1.5rem] text-center text-yellow-400"
                    onClick={() => {}}
                  >
                    -
                  </button>
                  <span className="w-[1.5rem] h-[1.5rem] text-center">
                    {order.quantity}
                  </span>
                  <button
                    className="rounded-full bg-[#110F0D] w-[1.5rem] h-[1.5rem] text-center text-yellow-400"
                    onClick={() => {}}
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
            className="bg-yellow-400 px-5 py-2 rounded-md mt-2 text-[#110F0D] mb-2"
            onClick={() => {}}
          >
            Cancel
          </button>
          <button
            className="bg-yellow-400 px-5 py-2 rounded-md mt-2 text-[#110F0D] mb-2"
            onClick={() => {}}
          >
            GO TO Checkout
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("root")
  );
}
