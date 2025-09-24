import { WINNING_COMBINATIONS } from "./winning-combinations";
import BoardDataTrackerBuild from "./BoardDataTracker";

export default function DetectWinner(gameActions) {
  const boardState = BoardDataTrackerBuild({ gameTurns: gameActions });
  for (let combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;
    console.log(combination);
    if (
      boardState[first.row][first.column] &&
      boardState[first.row][first.column] ===
        boardState[second.row][second.column] &&
      boardState[first.row][first.column] ===
        boardState[third.row][third.column]
    ) {
      return { winner: boardState[first.row][first.column] };
    }
  }
  return { winner: null };
}
