import { useState } from "react";
import Modal from "react-bootstrap/Modal";
const Todo = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState(props.text)
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = (id) => {
    setModalOpen(false);
  };

  const onExit = () => {
    setModalOpen(false);
  };
  const onDelete = () => {
    props.onDelete(props.id);
    setModalOpen(false);
  };


  return (
    <div>
      <li
        className="list-group-item list-group-item-info lead"
        onClick={openModal}
      >
        {props.title}
      </li>

      {isModalOpen && (
        <Modal show={isModalOpen} onHide={onExit}>
          <Modal.Header>
            <p className="fs-3 fw-bold">{props.title}</p>
          </Modal.Header>
          <Modal.Body>
            {!(text) ? (
              <input
                type="text"
                className="form-control"
                placeholder="Today I need to..."
                aria-label=""
                aria-describedby="basic-addon1"
                onBlur={(e) => setText(e.target.value)}
                defaultValue={ text }
              />
            ) : (
              <p className="fst-italic fs-2">{text}</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={closeModal}
              className="btn btn-danger"
              style={{ marginRight: "auto" }}
            >
              Cancle
            </button>

            <button
              onClick={onDelete}
              className="btn btn-warning"
              style={{ marginLeft: "auto" }}
            >
              Complete
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Todo;
