# Getting Started with Create React App

    npx create-react-app {project} --template typescript

## 커스텀 훅스 쓸 때 주의할 점

strict: true 설정에서는 리턴타입도 지정해줘야 union type이 되지 않는다.

1시간정도 헤멘 것 같다;;

```tsx
import { useState } from "react";

type useToDoArg = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

const useTodo = (): useToDoArg => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};

export default useTodo;
```

## Context파일에도 tsx를 애용합시다 ...

해당 파일을 ts로 작성하니 createContext로 만든 ctx를 tsx에서 못찾는 에러가 있엇다.

```tsx
import React, { useContext, createContext, useState, FC } from "react";

export interface ToDo {
  id: number;
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
  const [todos, setTodos] = useState<ToDo[]>([]);

  const value = {
    todos,
    setTodos,
  };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export default TodosProvider;
```
