import ToDoListItem from "./ToDoListItem";
import styled from "styled-components";

const ToDoListTopBox = styled.div`
  border-bottom: 3px double rgb(114, 148, 250);
  padding-bottom: 2px;
`;

const ToDoListCounter = styled.b`
  margin-left: 10px;
  color: rgb(83, 134, 253);
  font-size: 20px;
  border-radius: 5px;
  margin-top: 2px;
  font-style: italic;
`;

const ToDoListRestBtn = styled.input`
  margin-left: 472px;
  background-color: #8ebffb;
  border-radius: 5px;
  border: 2px solid rgb(99, 163, 246);
  color: rgb(93, 97, 101);
  height: 27px;
  cursor: pointer;

  &:hover {
    color: #f43333;
  }
`;

const ToDoListSet = styled.ul`
  margin: 0;
  height: 77%;
  overflow: auto;
`;

function ToDoList({
  todos,
  toDoCounts,
  toDones,
  resetTodos,
  checkedTodo,
  deleteTodo,
}) {
  return (
    <>
      <ToDoListTopBox>
        <ToDoListCounter>To Do: {toDoCounts} </ToDoListCounter>
        <ToDoListRestBtn
          type="button"
          value="List Reset"
          onClick={resetTodos}
        />
      </ToDoListTopBox>
      <ToDoListSet>
        <p>남은 할 일</p>
        {todos.map((todo) => (
          <ToDoListItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            done={todo.done}
            checkedTodo={checkedTodo}
            deleteTodo={deleteTodo}
            ischecked={todo.checked}
          />
        ))}
        <p>완료된 할 일</p>
        {toDones.map((todone) => (
          <ToDoListItem
            key={todone.id}
            id={todone.id}
            content={todone.content}
            done={todone.done}
            checkedTodo={checkedTodo}
            deleteTodo={deleteTodo}
            ischecked={!todone.checked}
          />
        ))}
      </ToDoListSet>
    </>
  );
}

export default ToDoList;
