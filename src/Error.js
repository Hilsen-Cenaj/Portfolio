import React from 'react';
import { Route } from 'react-router-dom';

const Error = () => {
  return (
    <React.Fragment>
      <h1>Error Page</h1>
      <Route to="/" className="btn">
        Back Home
      </Route>
    </React.Fragment>
  );
};

export default Error;
