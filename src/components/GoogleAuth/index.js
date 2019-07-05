import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { signInAction, signOutAction } from '../../actions';
import GoogleAuthSignInJsx from './GoogleAuthSignIn';
import GoogleAuthSignOutJsx from './GoogleAuthSignOut';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '150947198050-u1fup17svoldks5ptt80u33pglmu5d8m.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    const { signIn, signOut } = this.props;

    if (isSignedIn) {
      signIn(this.auth.currentUser.get().getId());
    } else {
      signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  render = () => {
    const { isSignedIn } = this.props;

    if (isSignedIn === null) {
      return null;
    }

    if (isSignedIn) {
      return GoogleAuthSignOutJsx(this.onSignOutClick);
    }

    return GoogleAuthSignInJsx(this.onSignInClick);
  }
}

GoogleAuth.defaultProps = {
  isSignedIn: null,
  signIn: null,
  signOut: null,
};

GoogleAuth.propTypes = {
  isSignedIn: PropTypes.bool,
  signIn: PropTypes.func,
  signOut: PropTypes.func,
};

const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });

const mapDispatchToProps = {
  signIn: signInAction,
  signOut: signOutAction,
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

const GoogleAuthConnected = connectComponent(GoogleAuth);

export default GoogleAuthConnected;
