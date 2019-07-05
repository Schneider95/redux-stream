import React from 'react';

const GoogleAuthSignOutJsx = (onSignOutClick) => {
  return (
    <button
      className="ui red google button"
      onClick={onSignOutClick}
      type="button"
    >
      <i className="google icon" />
      Sign Out
    </button>
  );
};

export default GoogleAuthSignOutJsx;
