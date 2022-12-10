import express from "express";
import {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  deleteTodo,
  updateTodo,
  completedTodos,
  uncompletedTodos,
} from "../controllers/todo_controller.js";
const route = express.Router();

// we do no use this
// route.post("/todos", (req, resp) => {
//   console.log(req.body);
// });
// instead we use controller --we create our business logic to controllers
route.get("/todos/completed", completedTodos);
route.get("/todos/uncompleted", uncompletedTodos);
route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", toggleTodoDone);
route.delete("/todos/:id", deleteTodo);
route.put("/todos/:id", updateTodo);
export default route;
