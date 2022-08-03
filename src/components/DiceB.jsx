const DiceB = ({ player, handleDice, winner, playerB }) => {
    return (
      <div>
        <h2 data-testid="dice-B-value">Dice B: {playerB.turnValue}</h2>
        <button
          data-testid="dice-B-button"
          disabled={player || winner.status}
          onClick={() => handleDice("B")}
        >
          Player 2: Roll Dice
        </button>
      </div>
    );
  };
  
  export default DiceB;
  