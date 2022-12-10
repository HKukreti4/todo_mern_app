import todo from "../models/todoSchema.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await todo.create({
      task: req.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const getAllTodos = async (req, res) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const toggleTodoDone = async (req, res) => {
  try {
    const todoRef = await todo.findById(req.params.id);
    const updatedTodo = await todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );
    await updatedTodo.save();
    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await todo.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json(deletedTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const updateTodo = async (req, res) => {
  try {
    await todo.updateOne({ _id: req.params.id }, { task: req.body.task });
    const updatedTodo = await todo.findById(req.params.id);
    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const completedTodos = async (req, res) => {
  try {
    const todos = await todo.find({ done: true }).sort({ createdAt: -1 });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const uncompletedTodos = async (req, res) => {
  try {
    const todos = await todo.find({ done: false }).sort({ createdAt: -1 });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
