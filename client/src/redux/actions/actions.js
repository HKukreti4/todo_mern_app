import axios from "axios";
import {
  ADD_NEW_TODO,
  GET_ALL_TODOS,
  TOGGLE_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TABS,
} from "./constraints";
const API_URL = "http://localhost:5000";

// because we are calling an api we are thunk between
const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADD_NEW_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};
const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: GET_ALL_TODOS, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};
const toggleTodos = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: TOGGLE_TODOS, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};
const updateTodo = (id, task) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { task });
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};
const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TABS, selected: tab });
};

export {
  addNewTodo,
  getAllTodos,
  toggleTodos,
  deleteTodo,
  updateTodo,
  toggleTab,
};
