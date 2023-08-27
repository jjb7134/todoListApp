import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // list를 담는 상태
  const [todolist, setTodolist] = useState([]);

  const onclick = (newitem) => {
    setTodolist([...todolist, newitem]);
  };

  return (
    <div>
      <TodoHeader></TodoHeader>
      <hr></hr>
      <TodoForm onclick={onclick}></TodoForm>
      <TodoList todolist={todolist}></TodoList>
    </div>
  );
}

export default App;
