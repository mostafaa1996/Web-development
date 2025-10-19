import { useContext, useImperativeHandle, useRef, forwardRef } from "react";
import useSubmit from "../hooks/useSubmit";
import { useOrderList } from "../orderListProvider";
const SuccessDialog = forwardRef(function SuccessDialog(props, ref) {
  const SuccessDialogRef = useRef();
  const { FullInfoFororder, Reset } = useOrderList();
  useSubmit();
  useImperativeHandle(ref, () => ({
    openDig: () => {
      SuccessDialogRef.current.showModal();
    },
    close: () => {
      SuccessDialogRef.current.close();
    },
  }));

  function close() {
    Reset();
    SuccessDialogRef.current.close();
  }

  return (
    <dialog
      ref={SuccessDialogRef}
      className="p-6 rounded-xl shadow-lg lg:w-[30%] md:w-[70%] w-[90%] bg-[#E6DAC9] flex flex-col items-center justify-center"
    >
      <h2 className="text-xl md:text-2xl font-bold my-2">
        Order Placed Successfully
      </h2>
      <p className="text-sm text-stone-900">
        Order ID: {Math.floor(Math.random() * 10000001)}
      </p>
      <div className="flex md:flex-row flex-col  w-full gap-2  my-8">
        <div className="flex flex-col w-full ">
          <p className="text-base font-bold text-stone-900">Order Details:</p>
          <ul>
            {FullInfoFororder.items?.map((order) => (
              <li key={order.id}>
                {order.name} - {order.price}$
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-full ">
          <p className="text-base font-bold text-stone-900">cunstomer Info:</p>
          <ul>
            {Object.keys(FullInfoFororder.customer ?? {}).map((key) => (
              <li key={key}>{(FullInfoFororder.customer ?? {})[key]}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-base text-stone-900">Thank you for your order!</p>
      <button
        className="bg-yellow-400 px-5 py-2 rounded-md mt-2 text-[#110F0D] mb-2"
        onClick={() => close()}
      >
        Close
      </button>
    </dialog>
  );
});

export default SuccessDialog;
