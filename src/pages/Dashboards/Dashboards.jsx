import { TODO_STATUS_TYPES } from "../../utils/constants";
import styles from "./style.module.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Dashboard } from "../Dashboard";

export const Dashboards = () => {
  return (
    <div className={styles.wrapper}>
      <DndProvider backend={HTML5Backend}>
        <Dashboard item={TODO_STATUS_TYPES.todo} />
        <Dashboard item={TODO_STATUS_TYPES.done} />
        <Dashboard item={TODO_STATUS_TYPES.doing} />
      </DndProvider>
    </div>
  );
};
