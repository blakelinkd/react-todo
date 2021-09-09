const Modal = (props) => {
  return (
    <div tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Task will be marked Completed, Confirm?
            </h5>
          </div>
          <div className="modal-body">
            <button
              type="button"
              style={{ marginRight: "auto" }}
              className="btn btn-danger"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.onClick}
            >
              <span aria-hidden="true">Cancle</span>
            </button>
            <button
              className="btn btn-warning"
              type="button"
              style={{ marginLeft: "40px" }}
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.onDelete}
              //onClick={props.onClick}
              //onDelete={props.onDelete}
            >
              <span aria-hidden="true">Confirm</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
