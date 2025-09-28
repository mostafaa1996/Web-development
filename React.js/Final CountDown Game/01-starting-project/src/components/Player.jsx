import { useState } from "react";

export default function Player() {
  const [EnterPlayerName, SetEnteredPlayerName] = useState(null);
  const [Submitted, SetSubmitted] = useState(false);
  
  function HandleInputChange(event){
    SetSubmitted(false);
    SetEnteredPlayerName(event.target.value);
  }
  
  function HandleClickButton(){
    SetSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {Submitted&&(EnterPlayerName!==null)?EnterPlayerName:"unknown entity"}</h2>
      <p>
        <input onChange={HandleInputChange} type="text"  />
        <button onClick={HandleClickButton}>Set Name</button>
      </p>
    </section>
  );
}
