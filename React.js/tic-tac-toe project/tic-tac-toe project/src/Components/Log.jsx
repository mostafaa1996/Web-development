export default function Log({ gameTurns }) {
  const logEntries = [...gameTurns].reverse().map((turn, index) => {
    const { player, position } = turn;
    return (
      <li key={index}>
        Player {player} placed at ({position[0]}, {position[1]})
      </li>
    );
  });
  return <ol id="log">{logEntries}</ol>;
}
