import { useContext, useState, createContext } from "react";

const OrderListContext = createContext();
export default function OrderListProvider({ children }) {
  const [orderList, setOrderList] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [customer, setCustomer] = useState({});
  const [FullInfoFororder, setFullInfoFororder] = useState({});

  function addOrderToList(order) {
    if (orderList.some((item) => item.id === order.id)) {
      setOrderList((prevOrderList) =>
        prevOrderList.map((item) =>
          item.id === order.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setOrderList((prevOrderList) => [...prevOrderList, {...order , quantity: 1}]);
    }
    setCartCount(cartCount + 1);
  }

  function removeOrderFromList(orderId) {
    setOrderList((prevOrderList) =>
      prevOrderList.filter((order) => order.id !== orderId)
    );
    setCartCount(cartCount - 1);
  }

  function registerThecustomer(customer) {
    setCustomer(customer);
  }

  const handleCartCount = () => {
    setCartCount(cartCount + 1);
  }

  return (
    <OrderListContext.Provider
      value={{
        orderList,
        addOrderToList,
        removeOrderFromList,
        customer,
        registerThecustomer,
        cartCount,
        handleCartCount,
        FullInfoFororder,
        setFullInfoFororder
      }}
    >
      {children}
    </OrderListContext.Provider>
  );
}

export function useOrderList() {
  return useContext(OrderListContext);
}
