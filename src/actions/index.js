import { TODO_SELECT } from "./types";

export const fetchTodos = () => {
  return {
    type: TODO_SELECT,
    payload: "state.todosList",
  };
};
