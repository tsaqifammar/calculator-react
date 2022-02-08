import React from 'react';

const DisplayExpression = ({ expression }) => {
  return (
    <div id="display">
      <span>{expression.length === 0 ? '_' : expression}</span>
      <hr></hr>
    </div>
  );
};

export default DisplayExpression;
