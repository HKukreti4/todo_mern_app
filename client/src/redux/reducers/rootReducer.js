import { combineReducers } from "redux";
import tabReducer from "./tabReducer";
import todosReducers from "./todosReducers";
const reducer = combineReducers({
  todos: todosReducers,
  currentTab: tabReducer,
});
export default reducer;
