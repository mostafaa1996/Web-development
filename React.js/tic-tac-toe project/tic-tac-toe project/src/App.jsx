import { useState } from "react";
import Player from "./Components/player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";

function App() {
  const [gameTurns, SetGameTurns] = useState([]);
  const selectedPlayer = gameTurns.length % 2 === 0 ? "X" : "O";
  function togglePlayer(rowIndex, colIndex) {
    SetGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0) {
        currentPlayer =
          prevTurns[prevTurns.length - 1].player === "X" ? "O" : "X";
      }
      return [
        ...prevTurns,
        { player: currentPlayer, position: [rowIndex, colIndex] },
      ];
    });
  }

  return (
    <main>
      <div id="game-container">
        {/* Game components will go here */}
        <ol id="players" className="highlight-player">
          {/* Move list items will go here */}
          <Player name="Player 1" symbol="X" SelectedPlayer={selectedPlayer} />
          <Player name="Player 2" symbol="O" SelectedPlayer={selectedPlayer} />
        </ol>
        <GameBoard TogglePlayer={togglePlayer} GameTurns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
