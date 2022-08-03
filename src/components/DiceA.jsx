const DiceA = ({ player, handleDice, winner, playerA }) => {
    return (
      <div>
        <h2 data-testid="dice-A-value">Dice A: {playerA.turnValue}</h2>
        <button
          data-testid="dice-A-button"
          disabled={!player || winner.status}
          onClick={() => handleDice("A")}
        >
          Player 1: Roll Dice
        </button>
      </div>
    );
  };
  
  export default DiceA;
  