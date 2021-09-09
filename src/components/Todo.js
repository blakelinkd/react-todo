import Modal from "./Modal";
import { useState } from "react";

const Todo = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    console.debug("clicked");
  };

  return (
    <div
      className="card-body bg-info rounded border-success"
      style={{ width: "18rem", marginBottom: "18px" }}
    >
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <div className="actions">
        <button href="/" className="btn btn-primary" onClick={openModal}>
          Complete
        </button>
      </div>

      {isModalOpen && <Modal onClick={closeModal} onDelete={props.onDelete} />}
    </div>
  );
};

export default Todo;
