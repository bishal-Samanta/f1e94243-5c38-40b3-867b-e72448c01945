import DiceB from "./DiceB";
import DiceA from "./DiceA";
import { useState } from "react";

const Game = () => {
  //Main state management hubb
  const A = {
    name: "Player 1",
    total: 0,
    turnValue: 0,
  };

  const B = {
    name: "Player 1",
    total: 0,
    turnValue: 0,
  };

  const [player, setPlayer] = useState(true);
  //True means turn for A

  const [playerA, setPlayerA] = useState(A);
  const [playerB, setPlayerB] = useState(B);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState({ status: false, name: "" });

  const handleDice = (value) => {
    var num = Math.floor(Math.random() * 6) + 1;
    if (value === "A") {
      setPlayerA((prev) => {
        return {
          ...prev,
          total: prev.total + num,
          turnValue: num,
        };
      });

      setCount((prev) => prev + 1);
      setPlayer((prev) => !prev);
      return;
    } else {
      setPlayerB((prev) => {
        return {
          ...prev,
          total: prev.total + num,
          turnValue: num,
        };
      });

      if (count === 5) {
        if (playerA.total > playerB.total) {
          setWinner({ status: true, name: "A" });
        } else {
          setWinner({ status: true, name: "B" });
        }
        return;
      }
      setPlayer((prev) => !prev);

      return;
    }
  };

  return (
    <div>
      <h1 data-testid="turn-heading">
        {winner.status
          ? "Game Over!!"
          : player
          ? "Player 1, It is your turn!!"
          : "Player 2, It is your turn!!"}{" "}
      </h1>
      <DiceA
        player={player}
        handleDice={handleDice}
        winner={winner}
        playerA={playerA}
      />
      <DiceB
        player={player}
        handleDice={handleDice}
        winner={winner}
        playerB={playerB}
      />
      <h3 data-testid="player1-score">Player 1 Scores: {playerA.total}</h3>
      <h3 data-testid="player2-score">Player 2 Scores: {playerB.total}</h3>
      <h1 data-testid="result-tag">
        {winner.status
          ? winner.name === "A"
            ? "Player 1 Wins!!"
            : "Player 2 Wins!!"
          : ""}
      </h1>
    </div>
  );
};

export default Game;
