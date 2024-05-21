import { legacy_createStore as createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const defaultState = JSON.parse(localStorage.getItem("todos")) ?? [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const addNewTodo = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem("todos", JSON.stringify(addNewTodo));
      return addNewTodo;
    case DELETE_TODO:
      const deleteNewTodo = state.filter((todo) => todo.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(deleteNewTodo));
      return deleteNewTodo;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreator = {
  addTodo,
  deleteTodo,
};

export default store;
