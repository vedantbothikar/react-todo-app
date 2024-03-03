import { useState } from "react";
import "./index.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  console.log(todoList);

  function handleSetTodoList(todoName) {
    console.log("updating todoList: ");
    setTodoList([...todoList, todoName]);
  }

  return (
    <div className="todo-container">
      <TodoForm handleSetTodoList={handleSetTodoList} />

      <div className="todo-header">Todo List</div>

      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
