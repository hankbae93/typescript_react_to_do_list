import React, { FC } from "react";

import TodosProvider from "./contexts/ToDoContext";
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";

const App: FC = () => {
  return (
    <TodosProvider>
      <AddTodo />
      <ToDoList />
    </TodosProvider>
  );
};

export default App;
