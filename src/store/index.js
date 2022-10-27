import { configureStore } from "@reduxjs/toolkit";
import {todosApi} from "./todos/todos.api";
import {todosReducer} from "./todos/todos.slice";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    todos: todosReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todosApi.middleware)
})