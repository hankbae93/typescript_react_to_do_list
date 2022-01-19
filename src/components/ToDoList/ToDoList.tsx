import React, { FC } from "react";
import { useTodoContext } from "../../contexts/ToDoContext";
import { ToDo } from "../../type";

const ToDoList: FC = () => {
  const { todos } = useTodoContext();
  return (
    <>
      <ul>
        {todos.map((item: ToDo, i: number) => {
          return <li>{item.content}</li>;
        })}
      </ul>
    </>
  );
};

export default ToDoList;
