import styled from "styled-components";

const ToDoInsertBox = styled.form`
  border-bottom: 2px dashed rgb(132, 163, 254);
  padding: 5px;
`;

const ToDoInput = styled.input`
  margin: 2px;
  width: 560px;
  height: 40px;
  background-color: rgba(175, 210, 250, 0.838);
  border: 2px solid rgb(157, 177, 202);
  font-size: 17px;
  color:rgb(82, 86, 98);

  &:focus{
    outline-color: rgb(102, 149, 243);
    color: rgb(48,48,48);
  }
`;

const ToDoInsertBtn = styled.input`
  margin-left: 5px;
  width: 50px;
  height: 43px;
  font-size: 20px;
  color: #2269f6;
  border: 2px solid rgb(157, 177, 202);
  border-radius: 5px;
  background-color: rgba(152, 197, 248, 0.894);
  cursor: pointer;

  &:active{
    border:2px solid rgb(102, 149, 243);
  }
`;

function ToDoInsert({ inputTodo, handleOnchange, addTodo, submitTodo }) {

  return (
    <ToDoInsertBox onSubmit={submitTodo}>
      <ToDoInput type="text" value={inputTodo} onChange={handleOnchange} placeholder="Write a To Do and Press Enter or Click Btn" required />
      <ToDoInsertBtn type="button" value="+" onClick={addTodo}/>
    </ToDoInsertBox>
  );
}

export default ToDoInsert;
