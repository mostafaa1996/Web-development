import { useState } from "react";
import Player from "./Components/player";
import GameBoard from "./Components/GameBoard";

function App() {
  const [selectedPlayer, SetSelectedPlayer] = useState("X");

  function togglePlayer() {
    SetSelectedPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
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
        <GameBoard
          TogglePlayer={togglePlayer}
          SelectedPlayer={selectedPlayer}
        />
      </div>
    </main>
  );
}

export default App;
