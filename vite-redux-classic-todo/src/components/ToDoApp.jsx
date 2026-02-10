import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, toggleToDo } from "../store/todos/todo.actions";

const ToDoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);
  const [text, setText] = useState("");
  const submitHandler = () => {
    if (!text.trim()) return; //it is empty
    dispatch(addToDo(text));
    setText("");
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Redux Raw ToDo App</h2>
        <input
          type="text"
          value={text}
          id="textToDo"
          name="textToDo"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" onClick={submitHandler}>
          افزودن
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              {!todo.completed && (
                <button
                  type="button"
                  onClick={() => dispatch(toggleToDo(todo.id))}
                >
                  ✅
                </button>
              )}

              <button
                type="button"
                onClick={() => dispatch(deleteToDo(todo.id))}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoApp;
