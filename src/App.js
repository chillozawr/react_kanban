import { useGetTodosQuery } from "./store/todos/todos.api";
import { Route, Routes } from "react-router-dom";
import { Todo } from "./pages/Todo";
import { useActions } from "./hooks";
import { useEffect } from "react";
import { Dashboards } from "./pages/Dashboards";

export const App = () => {
  const { data: todos } = useGetTodosQuery();
  const { setTodos } = useActions();

  useEffect(() => {
    localStorage.length === 0
      ? setTodos(todos)
      : setTodos(JSON.parse(localStorage.getItem("todos")));
  }, [todos]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboards />} />
        <Route path="/todo/:id" element={<Todo />} />
        <Route path="/done/:id" element={<Todo />} />
        <Route path="/doing/:id" element={<Todo />} />
      </Routes>
    </>
  );
};
