import React, { useState } from "react";
import styles from "./Game.module.css";

const Hands = [
  { id: "rock", emoji: "✊" },
  { id: "paper", emoji: "✋" },
  { id: "scissors", emoji: "✌️" },
];

const TheGame = () => {
  const [playerChoise, setPlayerChoise] = useState(null);
  const [computerChoise, setComputerChoise] = useState(null);
  const [result, setResult] = useState("VS");
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  const handleChoise = (choise) => {
    setPlayerChoise(choise);
    const computerChoise = Hands[Math.floor(Math.random() * Hands.length)];
    setComputerChoise(computerChoise);
    if (choise.id === computerChoise.id) {
      setResult("Tie!");
    } else if (
      (computerChoise.id === "rock" && choise.id === "paper") ||
      (computerChoise.id === "paper" && choise.id === "scissors") ||
      (computerChoise.id === "scissors" && choise.id === "rock")
    ) {
      setResult("You win!!!");
      setPlayerWins(playerWins + 1);
    } else {
      setResult("You Lose!!!");
      setComputerWins(computerWins + 1);
    }
  };

  if (playerChoise === null) {
    return (
      <div className={styles.containerChoises}>
        {Hands.map((choise) => (
          <button
            className={styles.buttonOfChoise}
            key={choise.id}
            onClick={() => handleChoise(choise)}
          >
            {choise.emoji}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.gameContainer}>
      <div className={styles.opponentChoise}>
        <p className={styles.opponentText}> Your Opponent chose</p>
        <span className={styles.computerEmoji}>{computerChoise.emoji}</span>
        <p className={styles.opponentTextHidden}> Your Opponent chose</p>
      </div>
      <div className={styles.vsContainer}>
        <p className={styles.vs}>{result}</p>
      </div>
      <div className={styles.yourChoise}>
        <span className={styles.computerEmoji}>{playerChoise.emoji}</span>
        <p> You chose!</p>
      </div>

      <div className={styles.count}>
        <p>{playerWins}</p>
        <p>/</p> <p>{computerWins}</p>
      </div>

      <div className={styles.containerChoises}>
        {Hands.map((choise) => (
          <button
            className={styles.buttonOfChoise}
            key={choise.id}
            onClick={() => handleChoise(choise)}
          >
            {choise.emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TheGame;
