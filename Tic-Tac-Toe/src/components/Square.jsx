import React from "react";
import styles from "./Square.module.css";
const Square = (props) => {
  return (
    <div onClick={props.onClick} className={styles.square}>
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
