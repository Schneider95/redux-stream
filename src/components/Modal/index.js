import React from 'react';
import ReactDOM from 'react-dom';
import ModalJsx from './Modal';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={props.onDismiss}
      role="menuitem"
      tabIndex="0"
    >
      <div
        className="ui standard modal visible active"
        onClick={e => e.stopPropagation()}
        role="tab"
        tabIndex="-1"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>
    ,
    document.querySelector('#modal')
  );
};

export default Modal;
