import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default NotFound;