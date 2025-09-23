export default function GameBoard({ TogglePlayer, GameTurns }) {
  const gameBoard = GameTurns.reduce(
    (board, turn) => {
      const [row, col] = turn.position;
      board[row][col] = turn.player;
      return board;
    },
    [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]
  );

  function handleClick(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] === "") {
      TogglePlayer(rowIndex, colIndex);
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
