import styled, { css } from "styled-components";

const ToDoListItemBox = styled.div`
  font-size: 18px;
`;

const ListItemCheckBox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const ListItem = styled.li`
  height: 35px;
  border-bottom: 1px solid rgb(114, 148, 250);
  margin: 2px;
  color: rgb(94, 140, 248);
  font-weight: bold;

  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
      color: rgb(144, 187, 247);
      font-weight: bold;
    `}
`;

const ListItemDeleteBtn = styled.input`
  float: right;
  background-color: rgb(192, 221, 251);
  border: none;
  color: rgb(42, 70, 249);
  border-radius: 5px;
  height: 30px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    color: #ff2f2f;
  }

  &:active {
    color: rgb(42, 70, 249);
  }
`;

function ToDoListItem({
  id,
  content,
  done,
  checkedTodo,
  deleteTodo,
  ischecked,
}) {
  function handleOnchange() {
    checkedTodo(id);
  }

  function handleOnclick() {
    deleteTodo(id);
  }

  return (
    <ToDoListItemBox>
      <ListItem done={done} ischecked={ischecked}>
        <ListItemCheckBox
          type="checkbox"
          onChange={handleOnchange}
          checked={ischecked}
        />
        {content}
        <ListItemDeleteBtn type="button" value="⨉" onClick={handleOnclick} />
      </ListItem>
    </ToDoListItemBox>
  );
}

export default ToDoListItem;
