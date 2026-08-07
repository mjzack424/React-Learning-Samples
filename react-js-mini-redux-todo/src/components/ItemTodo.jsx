import { useState } from "react";
import { useStore } from "../context/useStore";
import { deleteTodo, editTodo, toggleTodo } from "../reducers/actionCreators";

const ItemTodo = ({ todo }) => {
  const { dispatch } = useStore();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleSave = () => {
    if (!title.trim()) return;

    dispatch(
      editTodo(todo.id, {
        title: title.trim(),
      }),
    );

    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />

      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />

          <button onClick={handleSave}>Save</button>

          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.title}
          </span>

          <button onClick={() => setIsEditing(true)}>Edit</button>

          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ItemTodo;
