import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import Box from ".//components/Box";
import GameStatus from "./components/GameStatus";

//Initial Game Board
const INITIAL_BOARD = ["", "", "", "", "", "", "", "", ""];

const WINNING_COMBOS_CHECK = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const App = () => {
  const [boardValues, setBoardValues] = useState(INITIAL_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [finalMessage, setFinalMessage] = useState("Good Luck!");

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };
  const resetTheBoard = () => {
    setBoardValues(INITIAL_BOARD);
    setCurrentPlayer("X");
  };

  const winningHandler = () => {
    // window.alert(`${currentPlayer} won the game.`);
    setFinalMessage(`Congratulations, ${currentPlayer} won the game!`);
    resetTheBoard();
  };
  const drawHandler = () => {
    // window.alert("Draw!.");
    setFinalMessage("There is no winner. DRAW!");
    resetTheBoard();
  };
  const BoxClickHandler = (event) => {
    setFinalMessage("Good Luck!");
    //The index of clicked box
    const boxIndex = Number(event.target.getAttribute("box-index"));

    //The value of clicked box
    const boxValue = boardValues[boxIndex];

    //If there is a value on clicked box return
    if (boxValue) {
      return;
    }

    const newBoardValues = [...boardValues];
    newBoardValues[boxIndex] = currentPlayer;
    setBoardValues(newBoardValues);
  };

  useEffect(() => {
    checkGameFinished();
  }, [boardValues]);

  const checkGameFinished = () => {
    let gameWon = false;

    for (let i = 0; i < WINNING_COMBOS_CHECK.length; i++) {
      const WinningCombo = WINNING_COMBOS_CHECK[i];
      //a,b,c are the board values for every win combos.
      let a = boardValues[WinningCombo[0]];
      let b = boardValues[WinningCombo[1]];
      let c = boardValues[WinningCombo[2]];

      if ([a, b, c].includes("")) {
        continue;
      }
      if (a === b && b === c) {
        gameWon = true;

        break;
      }
    }
    if (gameWon) {
      setTimeout(() => {
        winningHandler();
      }, 500);
    }

    if (!boardValues.includes("") && !gameWon) {
      setTimeout(() => {
        drawHandler();
      }, 500);
    }

    changePlayer();
  };
  return (
    <div className={styles.game}>
      <h1 className={styles.h1}>Tic Tac Toe</h1>
      <div className={styles.container}>
        <div className={styles.board}>
          <Box board={boardValues} onClick={BoxClickHandler} />
        </div>
        <div>
          <GameStatus
            currentPlayer={currentPlayer}
            resetBoard={resetTheBoard}
            message={finalMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
