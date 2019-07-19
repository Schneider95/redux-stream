import React from 'react';
// import { Link } from 'react-router-dom';

class ModalJsx extends React.Component {
  render = () => {
    return (
      <div
        className="ui dimmer modals visible active"
        onClick={this.onDismiss}
        onKeyPress={this.handleKeyPress}
        role="menuitem"
        tabIndex="0"
      >
        <div
          className="ui standard modal visible active"
          onClick={e => e.stopPropagation()}
          onKeyPress={this.handleKeyPress}
          role="tab"
          tabIndex="-1"
        >
          <div className="header">{this.props.title}</div>
          <div className="content">{this.props.content}</div>
          <div className="actions">{this.props.actions}</div>
        </div>
      </div>
    );
  }
};

export default ModalJsx;


