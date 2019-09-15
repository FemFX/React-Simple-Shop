import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <h2 className="text-center pt-5">
    <div className="pt-5">Ooops...</div>
    <div className="pt-2">Page Not Found</div>
    <button className="btn btn-warning">
      <Link to="/" className="link">Back To Home</Link>
    </button>
  </h2>
);
