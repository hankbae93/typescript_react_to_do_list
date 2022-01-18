import React, { FC } from "react";
import { ToDo, useToDo } from "../../contexts/ToDoContext";

const ToDoList: FC = () => {
  const { todos, setTodos } = useToDo();

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
