import React from 'react';

const ModalJsx = (props) => {
  return (
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
  );
};

export default ModalJsx;


