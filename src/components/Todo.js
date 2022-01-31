import { useState } from "react";
import Modal from "react-bootstrap/Modal";
const Todo = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log("open model clicked");
    setModalOpen(true);
  };
  const closeModal = (id) => {
    setModalOpen(false);
    console.debug("close model on: " + id);
  };
  
  const onExit = () => {
    setModalOpen(false);
  };
  const onDelete = () => {
    props.onDelete(props.id);
    setModalOpen(false);
    console.debug("close model on: " + props.id);
  };
  const [text, setText] = useState("");

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
            <h4>{props.title}</h4>
          </Modal.Header>
          <Modal.Body>
            {props.description === "" ? (
              <input
                type="text"
                className="form-control"
                placeholder="Today I need to..."
                aria-label=""
                aria-describedby="basic-addon1"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            ) : (
              <h5>{props.description}</h5>
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
