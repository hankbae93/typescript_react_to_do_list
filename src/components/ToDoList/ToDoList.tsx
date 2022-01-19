import React, { FC } from "react";
import { useTodoContext } from "../../contexts/ToDoContext";
import { ToDo } from "../../type";
import ToDoItem from "./ToDoItem";

const ToDoList: FC = () => {
  const { todos } = useTodoContext();
  return (
    <>
      <ul>
        {todos.map((item: ToDo, i: number) => {
          return <ToDoItem {...item} key={item.id} />;
        })}
      </ul>
    </>
  );
};

export default ToDoList;
