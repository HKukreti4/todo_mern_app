import React, { useState } from "react";
import { deleteTodo, toggleTodos, updateTodo } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.task);

  const dispatch = useDispatch();
  const editTodo = () => {
    setEdit(!edit);
  };
  const submitForm = (e) => {
    editTodo();
    dispatch(updateTodo(todo._id, text));
  };
  return (
    <div className="todoContainer">
      {edit ? (
        <div className="todoEdit">
          <input
            type="text"
            value={text}
            autoFocus
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      ) : (
        <p
          style={{
            textDecoration: todo.done ? "line-through" : "",
            color: todo.done ? "GrayText" : "",
            opacity: edit ? "0" : "1",
          }}
          onClick={() => dispatch(toggleTodos(todo._id))}
        >
          {todo.task}
        </p>
      )}

      <div className="btns">
        {edit ? (
          <button className="btn" type="submit" onClick={submitForm}>
            Update
          </button>
        ) : (
          <button className="btn" onClick={() => editTodo()}>
            Edit
          </button>
        )}
        <button className="btn" onClick={() => dispatch(deleteTodo(todo._id))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
