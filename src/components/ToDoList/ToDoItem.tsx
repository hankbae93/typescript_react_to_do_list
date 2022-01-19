import React, { FC } from "react";
import { useTodoContext } from "../../contexts/ToDoContext";
import { ToDo } from "../../type";

const ToDoItem: FC<ToDo> = ({ id, content, status }) => {
  const { checkTodo, updateTodo, deleteTodo } = useTodoContext();

  const onClick = () => {
    checkTodo(id, !status);
  };

  return (
    <li style={{ display: "flex" }}>
      <p style={{ textDecoration: status ? "line-through" : "none" }}>
        {content}
      </p>
      {!status && <button onClick={onClick}>임무 완료</button>}
      {status && <button onClick={onClick}>임무 완료 취소</button>}
    </li>
  );
};

export default ToDoItem;
