import {todosAction} from "../store/todos/todos.slice";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";

const actions = {
  ...todosAction
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}