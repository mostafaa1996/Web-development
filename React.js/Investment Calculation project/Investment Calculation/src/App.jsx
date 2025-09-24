import UserInput from "./Components/UserInput";
import TableCreation from "./Components/table";
import { useState } from "react";
import "./util/investment.js";


function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  function handleReformingData(key, value) {
    setFormData((prevValue) => ({
      ...prevValue,
      [key]: +value,
    }));
  }

  return (
    <>
      <UserInput row={2} col={2} onEnteringValue={handleReformingData} />
      <TableCreation row={5} col={5} inputData = {formData}/>
    </>
  );
}

export default App;
