import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useActions } from "../../hooks";
import { Button } from "../../UI/button";
import { SelectInput } from "../../UI/selectInput";
import { TextInput } from "../../UI/textInput";

export const Todo = () => {
  const { id } = useParams();
  const { todos } = useSelector((state) => state.todos);
  const { setTodos } = useActions();
  const [todo, setTodo] = useState();
  const [editTitle, setEditTitle] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const todoCopy = todos.map((item) => {
    return Object.assign({}, item);
  });

  useEffect(() => {
    if (todos && todos.length) {
      const todo = todos.find((todo) => todo.id === Number(id));
      setTodo(todo);
    }
  }, [todos, id]);

  const onEditTitleHandler = (event) => {
    setEditTitle(event.target.value);
  };

  const onEditStatusHandler = (event) => {
    setEditStatus(event.target.value);
    console.log(editStatus);
  };

  const onTitleEditHandler = (event) => {
    event.preventDefault();
    todoCopy.map((item) => {
      if (item.id === Number(id)) {
        item.title = editTitle;
      }
    });
    setTodos(todoCopy);
    setEditTitle("");
  };

  const onStatusEditHandler = (event) => {
    event.preventDefault();
    todoCopy.map((item) => {
      if (item.id === Number(id)) {
        item.status = editStatus;
      }
    });
    setTodos(todoCopy);
    setEditStatus("");
  };

  const onDeleteTaskHandler = () => {
    setTodos(todoCopy.filter((item) => item.id !== todo.id));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.taskEditor}>
        <p>{todo && todo.title}</p>
        <p>{todo && `status: ${todo.status}`}</p>
        <Button item={editTitle} onClick={onTitleEditHandler}>
          Edit Title
        </Button>
        <TextInput onChange={onEditTitleHandler} />
        <Button item={editStatus} onClick={onStatusEditHandler}>
          Edit Status
        </Button>
        <SelectInput onChange={onEditStatusHandler} />
      </div>
      <Link to="/">
        <FontAwesomeIcon
          className={styles.icon}
          icon={faTrash}
          onClick={onDeleteTaskHandler}
        />
      </Link>
    </div>
  );
};
