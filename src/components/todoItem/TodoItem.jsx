import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useDrag, useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TodoItem = ({ id, title, status, index }) => {
  const { todos } = useSelector((state) => state.todos);
  const { setTodos } = useActions();

  const todoCopy = todos.map((item) => {
    return Object.assign({}, item);
  });

  const onDeleteHandler = () => {
    setTodos(todoCopy.filter((item) => item.id !== id));
  };

  const [{ isDragging }, drag] = useDrag(
    {
      item: { name: "dragItem" },
      type: "TYPE",
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        todoCopy.map((e) => {
          if (e.title === title) {
            e.status = dropResult.name;
          }
        });
        setTodos(todoCopy);
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    },
    [todos]
  );

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div className={styles.wrapper} ref={drag} style={{ opacity }}>
      <p className={styles.title}>{title}</p>
      <Link className={styles.link} to={`${status.replace(/\s+/g, "")}/${id}`}>
        {`go to ${status}`}
      </Link>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faTrash}
        onClick={onDeleteHandler}
      />
    </div>
  );
};
