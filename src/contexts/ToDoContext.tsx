import React, { useContext, createContext, useState, FC } from "react";
import { ToDo, TodoContextType } from "../type";

const ToDoContext = createContext<TodoContextType | null>(null);

export const useTodoContext = (): TodoContextType => {
  return useContext(ToDoContext) as TodoContextType;
};

const TodosProvider: FC<React.ReactNode> = ({ children }) => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodo = (todo: ToDo) => {
    setTodos((prev) => prev.concat(todo));
  };

  const updateTodo = (id: number) => {};

  const deleteTodo = (id: number) => {};

  const value = {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export default TodosProvider;
