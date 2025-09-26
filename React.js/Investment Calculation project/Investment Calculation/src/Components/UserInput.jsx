import InputsArray from "./../InputsArray";

export default function UserInput({ row, col, onEnteringValue }) {
  let Inputrows = [];
  for (let i = 0; i < row; i++) {
    Inputrows.push(
      <span key={i}>
        <ul className="input-group">
          {InputsArray.slice(i * col, i * col + col).map((input, index) => (
            <li key={index}>
              <label>{input.label}</label>
              <input
                type={input.input_type}
                required={input.input_required}
                onChange={(event) =>
                  onEnteringValue(input.KeyName, event.target.value)
                }
              />
            </li>
          ))}
        </ul>
      </span>
    );
  }

  return <div id="user-input">{Inputrows}</div>;
}
