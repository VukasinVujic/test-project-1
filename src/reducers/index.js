import { combineReducers } from "redux";
import todosRedusers from "./todos-reducers";

export default combineReducers({
  todos: todosRedusers,
});
