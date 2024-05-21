import React, { useState } from "react";
import { connect } from "react-redux";

import Todo from "../components/Todo";

import * as S from "./Home.styles";

import { actionCreator } from "../store";

// connect : components 와 store 연결
// props -> props from react-router + mapStateToProps로부터 받은 값
function Home({ todos, addToDo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>Home</h1>
      <S.Form>
        <S.Input type="text" value={text} onChange={handleChange} />
        <S.Button onClick={handleClick}>Add</S.Button>
      </S.Form>
      <S.Ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </S.Ul>
    </>
  );
}

// mapStateToProps -> state props로 컴포넌트에 전달
// state, ownProps 2개의 매개변수 존재 가능
function mapStateToProps(state) {
  return { todos: state };
}

// mapDispatchToProps -> dispatch function props로 컴포넌트에 전달
// dispatch, ownProps 2개의 매개변수 존재 가능
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreator.addTodo(text)),
  };
}

// mapStateToProps 함수를 통해 store에 있는 state 값을 Home에 전달해줄 것
export default connect(mapStateToProps, mapDispatchToProps)(Home);
