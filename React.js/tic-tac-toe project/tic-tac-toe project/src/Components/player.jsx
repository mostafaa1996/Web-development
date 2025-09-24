import { useState, useRef } from "react";
export default function Player({
  name,
  symbol,
  SelectedPlayer,
  onChangeNames,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const nameRef = useRef();

  function onEdit() {
    //setIsEditing(!isEditing);  //undefined behavior
    //best practice because it gurantees to use the previous state value existing in the memory
    setIsEditing((prevState) => !prevState);
    const newName = nameRef.current.textContent;
    onChangeNames(newName, symbol);
  }
  const SpanContentEditable = isEditing ? "true" : "false";
  const ButtonText = isEditing ? "Save" : "Edit";

  return (
    <li className={SelectedPlayer === symbol ? "active" : undefined}>
      <span className="player">
        <span
          contenteditable={SpanContentEditable}
          className="player-name"
          ref={nameRef}
          suppressContentEditableWarning={true}
        >
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
