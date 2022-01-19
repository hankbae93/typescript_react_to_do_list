import React, { FC } from "react";
import { useTodoContext } from "../../contexts/ToDoContext";
import { ToDo } from "../../type";

import useTodo from "./hooks/useTodo";

const ToDoForm: FC = () => {
  const [value, onChange, setValue] = useTodo();
  const { todos, addTodo } = useTodoContext();

  const AddTodos = () => {
    const lastId = (todos[todos.length - 1]?.id ?? 0) + 1;
    const todo: ToDo = {
      id: lastId,
      content: value,
      status: false,
    };
    addTodo(todo);
    setValue("");
  };

  return (
    <div>
      <input
        type='text'
        placeholder='할일 입력'
        value={value}
        onChange={onChange}
      />
      <button onClick={AddTodos}>추가</button>
    </div>
  );
};

export default ToDoForm;
