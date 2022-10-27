import { useSelector } from "react-redux";
import { TodoItem } from "../../components/todoItem";
import { useMemo, useState } from "react";
import styles from "./style.module.scss";
import { useDrop } from "react-dnd";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActions } from "../../hooks";
import { Button } from "../../UI/button";

export const Dashboard = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const { todos } = useSelector((state) => state.todos);
  const { setTodos } = useActions();

  const [, drop] = useDrop({
    accept: "TYPE",
    drop: () => ({ name: props.item }),
  });

  const titleChangeHandler = (event) => {
    setTaskTitle(event.target.value);
  };

  const onAddHandler = (event) => {
    event.preventDefault();

    const todoCopy = todos.map((item) => {
      return Object.assign({}, item);
    });

    const id =
      Math.max.apply(
        null,
        todoCopy.map((item) => item.id)
      ) + 1;

    todoCopy.push({
      id,
      title: taskTitle,
      status: props.item,
    });
    setTodos(todoCopy);
    setTaskTitle("");
  };

  const todosList = useMemo(() => {
    return todos
      ? todos
          .filter((item) => item.status === props.item)
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                status={props.item}
              />
            );
          })
      : "";
  }, [todos]);

  return (
    <div className={styles.dashboard} ref={drop}>
      <div className={styles.heading}>
        <h2>{props.item}</h2>
      </div>
      <div className={styles.wrapper}>{todosList}</div>
      <div className={styles.taskAdding}>
        <Button item={taskTitle} onClick={onAddHandler}>
          <FontAwesomeIcon icon={faPlus} transform="grow-10" />
        </Button>
        <input
          type="text"
          className={styles.addTask}
          value={taskTitle}
          onChange={titleChangeHandler}
        />
      </div>
    </div>
  );
};
