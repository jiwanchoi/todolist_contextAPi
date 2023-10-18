import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = ["바주카포"];

export default function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState(initialTodoListState);

  const addTodo = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
  };

  const removeTodo = (todoIndex) => {
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };

  const contextValue = {
    todoList,
    addTodo,
    removeTodo,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}
export const useTodoContext = () => useContext(TodoContext);
