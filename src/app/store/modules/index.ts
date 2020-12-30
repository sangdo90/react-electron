import { combineReducers } from "redux";
import { TodoState, todoReducer as todos } from "./todo";

export interface StoreState {
  todos: TodoState;
}

export default combineReducers<StoreState>({
  todos,
});
