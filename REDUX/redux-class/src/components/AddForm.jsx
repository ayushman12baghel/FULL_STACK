import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  let submitHandler = (event) => {
    event.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter the task"
        />
        <button>Add Task</button>
      </form>
    </>
  );
}
