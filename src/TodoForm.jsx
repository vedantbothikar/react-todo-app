import { useState } from "react";

export function TodoForm(props) {
  const [todoName, setTodoName] = useState("");

  function handleAddTodo(e) {
    e.preventDefault();

    console.log("props: ", props);

    props.handleSetTodoList(todoName);
    setTodoName("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label className="todo-label">Add your todo</label>

      <input
        type="text"
        className="todo-input"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />

      <button className="add-button">Add</button>
    </form>
  );
}
