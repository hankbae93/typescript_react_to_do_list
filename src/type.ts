export interface ToDo {
  id: number;
  // title: string;
  content: string;
  status: boolean;
}

export interface TodoContextType {
  todos: ToDo[];
  addTodo: (todo: ToDo) => void;
  updateTodo: (id: number, content: string) => void;
  deleteTodo: (id: number) => void;
  checkTodo: (id: number, status: boolean) => void;
}
