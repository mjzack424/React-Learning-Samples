//src\page\ToDoPage.jsx:
import AddTodo from "../components/AddTodo";
import ListTodo from "../components/ListTodo";

const ToDoPage = () => {
  return (
    <div>
      <h1>ToDo</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
};

export default ToDoPage;
