import { useState } from "react"; 
import { useRef } from "react";
import Header from "./components/Header.jsx";
import ItemsDistributer from "./components/ItemsDistributer.jsx";
import OrderList from "./components/orderList.jsx";
import Signup from "./components/Signup.jsx";

const item = {
  name: "Mac & Cheese",
  price: "8.99",
  description:
    "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
  image: "logo.jpg",
};

const orders = [{
  id: 1,
  name: "Mac & Cheese",
  quantity: 2,
  price: 8.99,
  } ,
  {
    id: 2,
    name: "Mac & Cheese",
    quantity: 2,
    price: 8.99,
  }
];

function App() {
  const orderListDialog = useRef();
  const SubmitFormRef = useRef();
  const openDialog = () => {
    orderListDialog.current.open(); 
  };

  const openDialog2 = () => {
    SubmitFormRef.current.open(); 
  };

  return (
    <>
      <Header CartCount={2} TextOfLogo={"ReactFood"} ImageOfLogo={"logo.jpg"} />
      <div className="flex flex-col gap-2 w-full justify-center items-center">
        <ItemsDistributer />
      </div>
      <OrderList  orders={orders} ref={orderListDialog}/>
      <Signup ref={SubmitFormRef} />
      <button onClick={openDialog}>Open Dialog1</button>
      <button onClick={openDialog2}>Open Dialog2</button>
    </>
    
  );
}

export default App;
