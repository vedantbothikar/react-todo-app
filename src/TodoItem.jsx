export function TodoItem(props) {
  return (
    <li className="todo-item">
      <label>{props.todoItem}</label>
      <button className="delete-button">Delete</button>
    </li>
  );
}
