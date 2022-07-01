import ToDoInsert from "./ToDoInsert";
import ToDoList from "./ToDoList";
import ToDoTitle from "./ToDoTitle";
import styled from "styled-components";
import { useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { toDos } from "../atoms/Todos";

const ToDoBox = styled.div`
  height: 780px;
  width: 650px;
  border: 2px solid rgb(149, 178, 247);
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(192, 221, 251);
  box-shadow: 1px 1px 3px 1px #6293f3;
`;

function ToDo() {
  const [todos, setTodos] = useRecoilState(toDos);
  const [index, setIndex] = useState(0);
  const [inputTodo, setInputTodo] = useState("");
  const resetTodos = useResetRecoilState(toDos);
  const toUnDones = todos.filter((todo) => !todo.done);
  const toDoCount = toUnDones.length;
  const toDones = todos.filter((todo) => todo.done);

  function addToDoList() {
    if (inputTodo) {
      const newTodo = {
        id: index,
        content: inputTodo,
        done: false,
      };
      setTodos(todos.concat(newTodo));
      setIndex(index + 1);
      setInputTodo("");
    }
  }

  function handleOnsubmit(e) {
    e.preventDefault();
    addToDoList();
  }

  function handleOnchange(e) {
    setInputTodo(e.target.value);
  }

  function isChecked(id) {
    setTimeout(
      () =>
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          )
        ),
      200
    );
  }

  function deleteToDoList(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <ToDoBox>
      <ToDoTitle />
      <ToDoInsert
        inputTodo={inputTodo}
        handleOnchange={handleOnchange}
        addTodo={addToDoList}
        submitTodo={handleOnsubmit}
      />
      <ToDoList
        todos={toUnDones}
        toDones={toDones}
        toDoCounts={toDoCount}
        resetTodos={resetTodos}
        checkedTodo={isChecked}
        deleteTodo={deleteToDoList}
      />
    </ToDoBox>
  );
}

export default ToDo;
