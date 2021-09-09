function Todo(props) {
  return (
    <div
      className="card-body bg-info rounded border-success"
      style={{ width: "18rem", marginBottom: "18px" }}
    >
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <div className="actions">
        <a href="/" className="btn btn-primary">
          Complete
        </a>
      </div>
    </div>
  );
}

export default Todo;
