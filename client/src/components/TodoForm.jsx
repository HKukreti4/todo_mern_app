import React, { useState } from "react";
import { addNewTodo } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
const ToDoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(todo));
    setTodo("");
  };

  return (
    <form className="todoform" onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Enter new task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="btn"
        type="submit"
        style={{
          marginLeft: "15px",
          padding: "0.62rem 2rem",
          fontSize: "1.2rem",
        }}
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
