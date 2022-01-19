import React, { FC, useState } from "react";
import { useTodoContext } from "../../contexts/ToDoContext";
import { ToDo } from "../../type";
import useTodo from "../ToDoForm/hooks/useTodo";

const ToDoItem: FC<ToDo> = ({ id, content, status }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { checkTodo, updateTodo, deleteTodo } = useTodoContext();
  const [value, onChange] = useTodo(content);

  const onClick = () => {
    checkTodo(id, !status);
  };

  const onModify = () => {
    setIsEdit(true);
  };

  const onUpdate = () => {
    updateTodo(id, value);
    setIsEdit(false);
  };

  return (
    <li style={{ display: "flex" }}>
      <p style={{ textDecoration: status ? "line-through" : "none" }}>
        {isEdit ? (
          <div>
            <input type='text' value={value} onChange={onChange} />
            <button onClick={onUpdate}>업데이트</button>
          </div>
        ) : (
          content
        )}
        {!isEdit && <button onClick={onModify}>수정</button>}
      </p>
      {!status && <button onClick={onClick}>임무 완료</button>}
      {status && <button onClick={onClick}>임무 완료 취소</button>}
    </li>
  );
};

export default ToDoItem;
