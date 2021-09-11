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

  return (
    <div>
      <li
        className="list-group-item list-group-item-info lead"
        onClick={openModal}
      >
        {props.title}
      </li>
      {/* {isModalOpen && (
        <Modal
          onClick={closeModal}
          onDelete={props.onDelete}
          id={props.id}
          show={props.show}
        />
      )} */}

      {isModalOpen && (
        <Modal show={isModalOpen} onHide={onExit}>
          <Modal.Header>{props.title}</Modal.Header>
          <Modal.Body>{props.description}</Modal.Body>
          <Modal.Footer>
            <button
              onClick={closeModal}
              className="btn btn-danger"
              style={{ marginRight: "auto" }}
            >
              Cancle
            </button>

            <button
              // onClick={() => {
              //   closeModal();
              //   //props.onDelete(props.id);
              //   //console.log("delete from modal: " + props.id);
              // }}
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
