import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import history from '../../../history'

/**
 * React.Fragment permet de retourner des elements HTML sans pour autant les
 * mettre dans un div.
 */

class StreamDeleteJsx extends React.Component {

  renderActions() {

    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream()}
        >
          Delete
        </button>
        <Link
          className="ui button"
          to="/"
        >
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream ?';
    }

    return `Are you sure you want to delete the stream "${this.props.stream.title}" ?`;
  }

  render = () => {
    return (
      <Modal
        actions={this.renderActions()}
        content={this.renderContent()}
        onDismiss={() => history.push('/')}
        title="Delete Stream"
      />
    );
  }
};

export default StreamDeleteJsx;
