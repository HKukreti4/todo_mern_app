import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodos } from "../redux/actions/actions";
import {
  ACTIVE_TODOS,
  ALL_TODOS,
  DONE_TODOS,
} from "../redux/actions/constraints";
import Tabs from "./Tabs";
import Todo from "./Todo";
const Todos = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.currentTab);
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((tabs) => !tabs.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    } else {
      return todos;
    }
  };
  const removeDoneTodo = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <article className="todoList">
      <Tabs currentTab={currentTab} />
      {todos.some((todo) => todo.done) ? (
        <button className="btn done" onClick={() => removeDoneTodo()}>
          Delete Done Todo
        </button>
      ) : null}
      {getTodos().map((todo, id) => (
        <Todo todo={todo} key={todo._id} />
      ))}
    </article>
  );
};

export default Todos;
