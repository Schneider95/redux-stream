import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';

function HeaderJsx() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Stream
      </Link>
      <div className="right pointing menu">
        <Link to="/" className="item">
          All streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default HeaderJsx;


/**
 * Link doit être utiliser a la place du classique <a href>,
 * car avec <a href>, on recharge toute l'application et tout ses fichiers,
 * et on perds les données que react a stocké.
 */
