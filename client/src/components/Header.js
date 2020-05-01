import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamy
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
        </div>
      </div>
    );
  }

  //DOING THIS ONLY: Error: Invariant failed: You should not use <Link> outside a <Router>

export default Header;