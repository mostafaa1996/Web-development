import { useState } from "react";

export default function Player({ name, symbol, SelectedPlayer }) {
  const [isEditing, setIsEditing] = useState(false);

  function onEdit() {
    //setIsEditing(!isEditing);  //undefined behavior
    //best practice because it gurantees to use the previous state value existing in the memory
    setIsEditing((prevState) => !prevState);
  }
  const SpanContentEditable = isEditing ? "true" : "false";
  const ButtonText = isEditing ? "Save" : "Edit";

  return (
    <li className={SelectedPlayer === symbol ? "active" : undefined}>
      <span className="player">
        <span contenteditable={SpanContentEditable} className="player-name">
          {name}
        </span>
        <span contenteditable={SpanContentEditable} className="player-symbol">
          {symbol}
        </span>
      </span>
      <button onClick={onEdit}>{ButtonText}</button>
    </li>
  );
}
