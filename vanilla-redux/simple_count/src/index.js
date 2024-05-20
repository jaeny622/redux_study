import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// reducer : data modify function
const countModifier = (count = 0, action) => {
  // 매개변수 = default 지정 가능
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// state : 변하는 data 값
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// store state 변화 감지 함수
countStore.subscribe(onChange);

// dispatch : action 지정
// action must be object
// action must have type
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
