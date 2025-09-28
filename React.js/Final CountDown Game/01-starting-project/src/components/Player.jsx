import { useState, useRef } from "react";

export default function Player() {
  const InputRef = useRef();

  const [EnterPlayerName, SetEnteredPlayerName] = useState(null);

  function HandleClickButton() {
    SetEnteredPlayerName(InputRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {EnterPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={InputRef} type="text" />
        <button onClick={HandleClickButton}>Set Name</button>
      </p>
    </section>
  );
}
