import { combineReducers } from "redux";
import * as todoList from "./todoList";

//use reducer to split and then use combineReducers to combine

const rootReducer = combineReducers({
  ...todoList
});

export default rootReducer;
