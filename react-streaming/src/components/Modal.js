import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
    {/* Stop the click event from propogating up to the next click event handler */}
      <div onClick={e=>e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    // ref to the element (div with id) that we render the portal into
    document.querySelector("#modal") // from index.html
  );
};

export default Modal;
