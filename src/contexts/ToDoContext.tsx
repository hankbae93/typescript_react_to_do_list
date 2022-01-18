import React, { useContext, createContext, useState, FC } from "react";

export interface ToDo {
  // id: number;
  content: string;
}

interface ToDoState {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoContext = createContext<ToDoState | null>(null);

export const useToDo = () => {
  return useContext(ToDoContext);
};

const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ToDo[] | []>([]);

  const value = {
    todos,
    setTodos,
  };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export default TodosProvider;
