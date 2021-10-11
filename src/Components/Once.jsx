import React from 'react';
import './styles/Once.css';

function Once() {
  return (
    <>
      <input type="checkbox" id="check" />
      <label for="check">
        <div className="check-icon"></div>
      </label>
    </>
  );
}

export default Once;
