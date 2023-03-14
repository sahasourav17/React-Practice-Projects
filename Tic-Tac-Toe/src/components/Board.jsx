import React, { useState } from "react";
import Square from "./Square";
import styles from "./Board.module.css";
const Board = () => {
  const [squareState, setSquareState] = useState(Array(9).fill(null));
  const [isXMove, setIsXMove] = useState(true);

  const checkWinner = () => {
    const winLogic = [
      // row condition
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // column condition
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // diagonal condition
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winLogic) {
      const [a, b, c] = logic;
      if (
        squareState[a] &&
        squareState[a] === squareState[b] &&
        squareState[a] === squareState[c]
      ) {
        return squareState[a];
      }
    }
    return false;
  };

  // checking winner in each render
  const isWinner = checkWinner();

  const handleMove = (idx) => {
    const moveState = [...squareState];
    moveState[idx] = isXMove ? "X" : "0";
    setSquareState(moveState);
    setIsXMove(!isXMove);
  };

  const handleReset = () => {
    setSquareState(Array(9).fill(null));
  };
  return (
    <div className={styles.boardContainer}>
      {isWinner ? (
        <>
          <p>Player {isWinner} Won!!</p>
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h3> Player {isXMove ? "X" : "0"} Turn</h3>
          <div className={styles.boardRow}>
            <Square value={squareState[0]} onClick={() => handleMove(0)} />
            <Square value={squareState[1]} onClick={() => handleMove(1)} />
            <Square value={squareState[2]} onClick={() => handleMove(2)} />
          </div>
          <div className={styles.boardRow}>
            <Square value={squareState[3]} onClick={() => handleMove(3)} />
            <Square value={squareState[4]} onClick={() => handleMove(4)} />
            <Square value={squareState[5]} onClick={() => handleMove(5)} />
          </div>
          <div className={styles.boardRow}>
            <Square value={squareState[6]} onClick={() => handleMove(6)} />
            <Square value={squareState[7]} onClick={() => handleMove(7)} />
            <Square value={squareState[8]} onClick={() => handleMove(8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
