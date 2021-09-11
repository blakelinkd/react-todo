import Todo from "./components/Todo";
import { useState } from "react";
import "./App.css";
function App() {
  const tasks = [
    {
      id: 1,
      title: "Click on me!",
      description: "I like to fart",
      incomplete: true,
    },
  ];

  const [todoItems, setTodoItems] = useState(tasks);
  const [text, setText] = useState("");

  const handleDeleteTask = (id) => {
    setTodoItems(todoItems.filter((task) => task.id !== id));
    console.log("handleDelete called");
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <h1 className="display-3">Tasks</h1>
        <ul className="list-group">
          {/* Only list items that are flagged incomplete */}
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
        {console.log(todoItems)}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTodoItems([
              ...todoItems,
              {
                id: todoItems.length + 1,
                title: text,
                description: text,
                incomplete: true,
              },
            ]);
            console.log(todoItems);
          }}
        >
          <div className="mt-5 form-control input-group mb-3 fixed-middle w-25 mx-auto shadow p-3 mb-5 bg-body rounded">
            <div className="input-group-prepend">
              <button
                type="button"
                className="btn new-task--button"
                onClick={(e) => {
                  setTodoItems([
                    ...todoItems,
                    {
                      id: todoItems.length + 1,
                      title: text,
                      description: text,
                      incomplete: true,
                    },
                  ]);
                  console.log(todoItems);
                }}
              >
                New Task
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Today I need to..."
              aria-label=""
              aria-describedby="basic-addon1"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
