import React, { FC } from "react";
import { useTodoContext } from "../../contexts/ToDoContext";
import { TodoContextType } from "../../type";

import useTodo from "./hooks/useTodo";

const ToDoForm: FC = () => {
  const [value, onChange, setValue] = useTodo();
  const { addTodo } = useTodoContext();

  const AddTodos = () => {
    // setTodos((prev: ToDo[]) =>
    //   prev.concat({
    //     content: value,
    //   })
    // );
    // setValue("");
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
