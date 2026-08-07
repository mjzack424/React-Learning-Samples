import { useStore } from "../context/useStore";
import ItemTodo from "./ItemTodo";

const ListTodo = () => {
  const { state } = useStore();

  if (state.todos.length === 0) {
    return <p>هیچ کاری ثبت نشده است.</p>;
  }

  return (
    <div>
      {state.todos.map((todo) => (
        <ItemTodo
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default ListTodo;