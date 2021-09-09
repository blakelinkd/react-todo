import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

const Todo = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const deleteHandler = () => {
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
        <button href="/" className="btn btn-primary" onClick={deleteHandler}>
          Complete
        </button>
      </div>

      {isModalOpen && <Modal onClick={closeModal} />}
    </div>
  );
};

export default Todo;
