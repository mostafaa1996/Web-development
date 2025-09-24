import BoardDataTrackerBuild from "../BoardDataTracker";

export default function GameBoard({ GameUpdate, GameTurns }) {
  const gameBoard = BoardDataTrackerBuild({ gameTurns: GameTurns });

  function handleClick(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] === "") {
      GameUpdate(rowIndex, colIndex);
    }
  }

  return (
    <ol id="game-board">
      {/* Game board implementation will go here */}
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {gameBoard[rowIndex].map((cell, cellIndex) => (
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
