import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todoList.map((todoItem) => {
        return <TodoItem todoItem={todoItem} />;
      })}
    </ul>
  );
}
