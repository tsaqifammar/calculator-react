import React from 'react';

const Button = ({ value, position, btnClass, onPressed }) => {
  return (
    <button
      className={btnClass}
      style={{ gridArea: `s${position}` }}
      onClick={() => onPressed(value)}
    >
      {value}
    </button>
  );
};

export default Button;
