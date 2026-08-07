import { useState } from "react";
import { useStore } from "../context/useStore";
import { addTodo } from "../reducers/actionCreators";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const { dispatch } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),
        title: title.trim(),
        completed: false,
      })
    );

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;