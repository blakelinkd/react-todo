import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo
        title="Take a Bubble Bath"
        description="Put dish soap in the water"

        // onClick={taskClicked}
      />
      <Todo
        title="Think about Grandma"
        description="she was nice."
        // onClick={taskClicked}
      />
    </div>
  );
}

export default App;
