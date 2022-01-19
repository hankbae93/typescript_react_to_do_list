import React, {
  useContext,
  createContext,
  useState,
  FC,
  useEffect,
} from "react";
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

  const checkTodo = (id: number, status: boolean) => {
    setTodos((prev) =>
      prev.map((todo, i) => {
        if (todo.id === id) {
          return { ...todo, status };
        } else {
          return todo;
        }
      })
    );
  };

  useEffect(() => {
    console.table(todos);
  }, [todos]);

  const value = {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    checkTodo,
  };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export default TodosProvider;
