import { useRef } from "react";
import Header from "./components/Header.jsx";
import ItemsDistributer from "./components/ItemsDistributer.jsx";
import OrderList from "./components/orderList.jsx";
import SubmitForm from "./components/SubmitForm.jsx";
import SuccessDialog from "./components/SuccessDialog.jsx";

function App() {
  const orderListDialogRef = useRef();
  const SubmitFormRef = useRef();
  const SuccessDialogRef = useRef();

  return (
    <>
      <Header
        TextOfLogo={"ReactFood"}
        ImageOfLogo={"logo.jpg"}
        OrderListDialogRef={orderListDialogRef}
      />
      <div className="flex flex-col gap-2 w-full justify-center items-center">
        <ItemsDistributer />
      </div>
      <OrderList ref={orderListDialogRef} SubmitFormRef={SubmitFormRef} />
      <SubmitForm ref={SubmitFormRef} successDialogRef={SuccessDialogRef} />
      <SuccessDialog ref={SuccessDialogRef} />
    </>
  );
}

export default App;
