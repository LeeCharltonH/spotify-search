import React from "react";
import styles from "./input.module.scss";

const Input = (props) => {
  return (
    <React.Fragment>
      <input className={styles.input} type={props.type} onChange={props.onChange} />
    </React.Fragment>
  );
};

export default Input;
