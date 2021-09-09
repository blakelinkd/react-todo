import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDeleteTask = () => {
    setIsDeleted(true);
  };
  return (
    <div>
      <h1>My Todos</h1>

      {!isDeleted && (
        <Todo
          title="i can haz delete"
          description="delete me if you dare"
          onDelete={handleDeleteTask}
        />
      )}

      <Todo
        title="Take a Bubble Bath"
        description="Put dish soap in the water"
        onDelete={handleDeleteTask}
        // onClick={taskClicked}
      />
      <Todo
        someValue="shark"
        title="Think about Grandma"
        description="she was nice."
        onDelete={handleDeleteTask}

        // onClick={taskClicked}
      />
    </div>
  );
}

export default App;
