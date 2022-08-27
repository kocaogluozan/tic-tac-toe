import React from "react";
import styles from "./GameStatus.module.css";
const GameStatus = ({ currentPlayer, resetBoard, message }) => {
  return (
    <div className={styles.gameInfo}>
      <div className={styles.message}>{message}</div>
      <p>Next Player: {currentPlayer}</p>
      <button onClick={resetBoard} className={styles.button}>
        Restart Game
      </button>
    </div>
  );
};

export default GameStatus;
