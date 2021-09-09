const Modal = (props) => {
  return (
    <div classNameName="modal" tabIndex="-1" role="dialog">
      <div classNameName="modal-dialog" role="document">
        <div classNameName="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Task?</h5>
            <button
              type="button"
              className="btn btn-warning"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.onClick}
            >
              <span aria-hidden="true">Confirm</span>
            </button>
          </div>
          <div className="modal-body">
            <p>You are about to remove this task.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
