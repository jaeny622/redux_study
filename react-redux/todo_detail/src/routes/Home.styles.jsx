import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 10px;

  padding: 0 0 10px 0;
`;

export const Input = styled.input`
  all: unset;

  width: 200px;
  height: 30px;
  padding: 2px 4px;

  border-radius: 4px;
  border: 1px solid #666666;

  &:focus {
    border: 1px solid #97b4d9;
  }
`;

export const Button = styled.button`
  all: unset;
  box-sizing: border-box;

  width: 50px;
  height: 35px;

  color: #fff;
  font-size: 12px;
  text-align: center;

  border-radius: 4px;
  background-color: #97b4d9;

  &:hover {
    cursor: pointer;
    background-color: #83b5f5;
  }
`;

export const DelButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 25px;

  background-color: #e99d9d;

  &:hover {
    background-color: #f38787;
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  all: unset;
`;

export const Li = styled.li`
  display: flex;
  gap: 10px;

  margin: 10px;
  line-height: 25px;

  font-size: 16px;

  & > a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: #e99d9d;
    }
  }
`;
