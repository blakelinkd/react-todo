import Todo from "./components/Todo";
import { useState } from "react";
function App() {
  const tasks = [
    {
      id: 1,
      title: "hello world",
      description: "I like to fart",
      incomplete: true,
    },
    {
      id: 2,
      title: "make dinner",
      description: "mac n cheese",
      incomplete: true,
    },
  ];

  const [todoItems, setTodoItems] = useState(tasks);

  const [isDeleted, setIsDeleted] = useState(false);
  const handleDeleteTask = (id) => {
    console.log("delete clicked" + " on " + id);
    setTodoItems(todoItems.filter((task) => task.id !== id));
  };
  return (
    <div>
      <h1>My Todos</h1>
      {todoItems.map(
        (task) =>
          task.incomplete && (
            <Todo
              id={task.id}
              title={task.title}
              description={task.description}
              onDelete={handleDeleteTask}
            />
          )
      )}
    </div>
  );
}

export default App;
