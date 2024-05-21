import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "../routes/Home.styles";
import { actionCreator } from "../store";

function Detail({ todos, deleteTodo }) {
  const navigate = useNavigate();
  const id = parseInt(useParams().id);
  const todo = todos.find((item) => item.id === id);

  const handleDelete = () => {
    deleteTodo(id);
    navigate("/");
  };

  return (
    <>
      <h1>Detail</h1>
      <div>content : {todo?.text}</div>
      <div style={{ marginBottom: "10px" }}>createdAt : {todo?.id}</div>
      <S.DelButton onClick={handleDelete}>Delete</S.DelButton>
    </>
  );
}

const mapStateToProps = (state) => {
  return { todos: state };
};
const mapDispatchToProps = (dispatch) => {
  return { deleteTodo: (id) => dispatch(actionCreator.deleteTodo(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
