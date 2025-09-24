export default function BoardDataTrackerBuild({ gameTurns }) {
  const gameBoard = gameTurns.reduce(
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
  return gameBoard;
}