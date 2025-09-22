import { useState } from "react";

const InitialGameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export default function GameBoard({ TogglePlayer, SelectedPlayer }) {
  const [board, SetBoard] = useState(InitialGameBoard);

  function handleClick(row, col) {
    // Handle the click event for the cell at (row, col)
    SetBoard((prevBoard) => {
      let newBoard = [...prevBoard.map((r) => [...r])]; // Create a copy of the board
      if (newBoard[row][col] === "") {
        newBoard[row][col] = SelectedPlayer;
      }
      return newBoard; // Return the updated board (for demonstration purposes
    });
    TogglePlayer(); // Call the function passed from App to toggle the player
  }
  return (
    <ol id="game-board">
      {/* Game board implementation will go here */}
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {board[rowIndex].map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handleClick(rowIndex, cellIndex)}>
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
