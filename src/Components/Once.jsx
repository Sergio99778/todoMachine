import React from 'react';
import './styles/Once.css';
import checkmarkImage from '../assets/white-checkmark.png';

function Once() {
  return (
    <button type="checkbox" className="Once">
      <img className="Once__icon" src={checkmarkImage} alt="Check" />
    </button>
  );
}

export default Once;
