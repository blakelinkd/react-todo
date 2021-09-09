function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div clasName="border-success" style={{ width: "18rem" }}>
        <div className="card-body bg-info rounded">
          <h5 className="card-title">Task Title</h5>
          <p className="card-text">Explain what the task is.</p>
          <div className="actions">
            <a href="/" className="btn btn-primary">
              Complete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
