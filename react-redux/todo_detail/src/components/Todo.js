import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as S from "../routes/Home.styles";

import { actionCreator } from "../store";

function Todo({ id, text, deleteToDo }) {
  const handleDelete = (e) => {
    deleteToDo(id);
  };

  return (
    <S.Li>
      <S.DelButton onClick={() => handleDelete(id)}>Delete</S.DelButton>
      <Link to={`/${id}`}>{text}</Link>
    </S.Li>
  );
}

// mapDispatchToProps -> dispatch function props로 컴포넌트에 전달
// dispatch, ownProps 2개의 매개변수 존재 가능
function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: (id) => dispatch(actionCreator.deleteTodo(id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
