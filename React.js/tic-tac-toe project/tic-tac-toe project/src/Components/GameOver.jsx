export default function GameOver({ winner }) {
   return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>Player {winner} wins!</p> : <p>It's a draw!</p>}
      <button onClick={() => window.location.reload()}>Restart Game</button>
    </div>
  );

}