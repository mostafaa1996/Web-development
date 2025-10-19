import { useEffect } from "react";
import { useOrderList } from "../orderListProvider";
export default function useSubmit() {
  const { customer, setFullInfoFororder, orderList } = useOrderList();

  useEffect(() => {
    setFullInfoFororder({
      order: orderList,
      customer: customer,
    });
  }, [customer, orderList, setFullInfoFororder]);

  return {};
}
