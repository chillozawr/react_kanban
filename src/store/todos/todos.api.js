import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodosFactory } from "../../utils/helpers/todos.factory";

export const todosApi = createApi({
  reducerPath: "todos/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getTodos: build.query({
      query: (limit = 10) => ({
        url: `todos?_limit=${limit}`,
      }),
      transformResponse: (response) => TodosFactory.fromResponseDto(response),
    }),
    deleteTodo: build.mutation({
      query: (limit = 10) => ({
        url: `todos?_limit=${limit}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetTodosQuery, useDeleteTodoMutation } = todosApi;
