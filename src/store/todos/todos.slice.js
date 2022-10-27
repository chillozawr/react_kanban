import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const initialState = {
  todos: items,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
      localStorage.clear();
      if (action.payload) {
        localStorage.setItem(
          "todos",
          JSON.stringify(state.todos.map((item) => item))
        );
      }
    },
  },
});

const todosAction = todosSlice.actions;
const todosReducer = todosSlice.reducer;

export { todosSlice, todosAction, todosReducer };
