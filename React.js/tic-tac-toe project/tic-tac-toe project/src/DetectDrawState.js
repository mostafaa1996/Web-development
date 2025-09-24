export default function DetectDrawState(gameActions, winnerInfo) {
  if (gameActions.length === 9 && winnerInfo.winner === null) {
    return { isDraw: true };
  }
  return { isDraw: false };
}
