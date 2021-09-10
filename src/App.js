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
    <div className="container">
      <div className="row justify-content-md-center">
        <h1 className="display-3">Tasks</h1>
        <ul className="list-group">
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
        </ul>

        <div className="input-group mb-3 fixed-bottom w-75 mx-auto shadow p-3 mb-5 bg-body rounded">
          <div className="input-group-prepend">
            <button className="btn btn-info" type="button">
              New Task
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
