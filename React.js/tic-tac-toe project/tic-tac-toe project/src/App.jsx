import Player from "./Components/player";
import GameBoard from "./Components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        {/* Game components will go here */}
        <ol id="players">
          {/* Move list items will go here */}
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
