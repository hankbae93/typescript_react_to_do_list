import React, { FC, useState } from "react";
import { useToDo as useContext } from "../../contexts/ToDoContext";
import useTodo from "./hooks/useTodo";

const AddTodo: FC = () => {
  const [value, onChange, setValue] = useTodo();
  const { setTodos } = useContext();

  const AddTodos = () => {
    setTodos((prev) =>
      prev.concat({
        content: value,
      })
    );
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

export default AddTodo;
