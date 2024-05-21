import { legacy_createStore as createStore } from "redux";

const input = document.querySelector("input");
const addBtn = document.getElementById("add");
const todos = document.getElementById("todos");
const errorText = document.getElementById("error_text");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

// 추가할 todo Data 변경해주는 function
// mutation : 변형 -> state 자체를 변형하지 말 것, 새로운 state를 리턴할 것
const todoModifier = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [{ text: action.text, id: Date.now() }, ...state];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== parseInt(action.id));
    default:
      return state;
  }
};

// state 저장 공간
const todoStore = createStore(todoModifier);

const dispatchAddTodo = (toDoText) => {
  todoStore.dispatch(addTodo(toDoText));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  todoStore.dispatch(deleteTodo(id));
};

// 변경된 data 값 실제로 html에 적용해주는 function
const changeTodoList = () => {
  const todoList = todoStore.getState();
  todos.innerHTML = "";
  todoList.forEach((todo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    li.innerText = todo.text;
    li.id = todo.id;
    button.innerText = "delete";

    li.append(button);
    todos.appendChild(li);

    button.addEventListener("click", dispatchDeleteTodo);
    errorText.innerText = "";
  });
};

// 변경되는 data 값 감지 가능하게 해주는 fucntion
todoStore.subscribe(changeTodoList);

const handleClick = () => {
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

// add 버튼에 이벤트 부여
addBtn.addEventListener("click", handleClick);
