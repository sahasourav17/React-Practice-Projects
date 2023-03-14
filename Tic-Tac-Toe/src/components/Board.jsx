import React, { useState } from "react";
import Square from "./Square";
import styles from "./Board.module.css";
const Board = () => {
  const [squareState, setSquareState] = useState(Array(9).fill(null));
  const [isXMove, setIsXMove] = useState(true);

  const handleClick = (idx) => {
    const moveState = [...squareState];
    moveState[idx] = isXMove ? "X" : "0";
    setSquareState(moveState);
    setIsXMove(!isXMove);
  };
  return (
    <>
      <div className={styles.boardContainer}>
        <div className={styles.boardRow}>
          <Square value={squareState[0]} onClick={() => handleClick(0)} />
          <Square value={squareState[1]} onClick={() => handleClick(1)} />
          <Square value={squareState[2]} onClick={() => handleClick(2)} />
        </div>
        <div className={styles.boardRow}>
          <Square value={squareState[3]} onClick={() => handleClick(3)} />
          <Square value={squareState[4]} onClick={() => handleClick(4)} />
          <Square value={squareState[5]} onClick={() => handleClick(5)} />
        </div>
        <div className={styles.boardRow}>
          <Square value={squareState[6]} onClick={() => handleClick(6)} />
          <Square value={squareState[7]} onClick={() => handleClick(7)} />
          <Square value={squareState[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
};

export default Board;
