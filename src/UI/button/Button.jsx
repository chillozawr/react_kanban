import styles from "./styles.module.scss";

export const Button = (props) => {
  return (
    <button
      className={styles.button}
      disabled={!props.item}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
