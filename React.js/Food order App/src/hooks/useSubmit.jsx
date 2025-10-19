import { useEffect } from "react";
import { useOrderList } from "../orderListProvider";
export default function useSubmit() {
  const { customer, setFullInfoFororder, orderList, FullInfoFororder } =
    useOrderList();

  useEffect(() => {
    if (customer.fullName !== null) {
      setFullInfoFororder({
        items: orderList,
        customer: customer,
      });
    }
  }, [customer]);

  useEffect(() => {
    async function submitOrder(order) {
      try {
        const response = await fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Failed to send order.");
        }

        const data = await response.json();
        console.log("Order submitted:", data.message);
      } catch (err) {
        console.error("Error:", err.message);
      }
    }

    if (FullInfoFororder.items?.length > 0) {
      console.log(FullInfoFororder);
      submitOrder(FullInfoFororder);
    }
  }, [FullInfoFororder]);

  return {};
}
