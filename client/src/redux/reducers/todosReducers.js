import {
  ADD_NEW_TODO,
  DELETE_TODO,
  GET_ALL_TODOS,
  TOGGLE_TODOS,
  UPDATE_TODO,
} from "../actions/constraints";

const todosReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [action.payload, ...state];
    case GET_ALL_TODOS:
      return action.payload;
    case TOGGLE_TODOS:
      return state.map((todo) => {
        return todo._id === action.payload._id
          ? { ...todo, done: !todo.done }
          : todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => {
        return todo._id !== action.payload._id;
      });
    case UPDATE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, task: action.payload.task }
          : todo
      );

    default:
      return state;
  }
};

export default todosReducers;
