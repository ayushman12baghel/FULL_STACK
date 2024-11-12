import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };
  const Done = (id) => {
    dispatch(markAsDone(id));
  };
  return (
    <>
      <AddForm />
      <h2>Todos App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() => Done(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
