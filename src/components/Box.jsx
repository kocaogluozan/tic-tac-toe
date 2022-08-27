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
            <span style={{ color: player === "X" ? "pink" : "yellow" }}>
              {player}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Box;
