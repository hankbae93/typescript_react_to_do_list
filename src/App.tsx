import React, { FC } from "react";

import TodosProvider from "./contexts/ToDoContext";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const App: FC = () => {
  return (
    <TodosProvider>
      <ToDoForm />
      <ToDoList />
    </TodosProvider>
  );
};

export default App;
