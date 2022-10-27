import styles from "./styles.module.scss";

export const TextInput = (props) => {
  return (
    <input className={styles.textinput} type="text" onChange={props.onChange} />
  );
};
