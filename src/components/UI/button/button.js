import styles from "./button.module.scss";

const Button = (props) => {
  return (
    <button type={props.type} className={`${styles.button} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
