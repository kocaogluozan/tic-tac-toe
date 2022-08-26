import React from "react";
import styles from "./Box.module.css";
const Box = ({ board, onClick }) => {
  return (
    <>
      {board.map((player, index) => {
        return (
          <div
            className={styles.box}
            key={index}
            box-index={index}
            onClick={onClick}
          >
            {player}
          </div>
        );
      })}
    </>
  );
};

export default Box;
