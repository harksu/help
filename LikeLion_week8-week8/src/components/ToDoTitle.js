import styled from "styled-components";

const ToDoTitleBox = styled.div`
  text-align: center;
  border-bottom: 2px solid rgb(149, 178, 247);
  color: rgb(83, 157, 247);
`;

const ToDoTitleText = styled.h3`
  margin: 0;
  padding: 10px;
  font-size: 35px;
  font-style: italic;

  &:hover{
    color: rgba(121, 158, 254, 0.831);
  }

  &:hover::after{
    margin-left:15px;
    content:'#해보자고';
    font-size: 30px;
    color: rgba(84, 141, 254, 0.79);
    text-decoration:underline;
  }
`;

function ToDoTitle() {

  return (
    <ToDoTitleBox>
      <ToDoTitleText>To Do List</ToDoTitleText>
    </ToDoTitleBox>
  );
}

export default ToDoTitle;
