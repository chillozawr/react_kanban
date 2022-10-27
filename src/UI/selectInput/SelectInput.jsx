import styles from "./styles.module.scss";

export const SelectInput = (props) => {
  return (
    <select
      name="selectStatus"
      onChange={props.onChange}
      className={styles.textinput}
    >
      <option>To do</option>
      <option>Done</option>
      <option>Doing</option>
    </select>
  );
};
