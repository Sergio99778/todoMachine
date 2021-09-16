import React from 'react';
import plusImg from '../assets/plus-sign.png';

import './styles/CreateTodoButton.css';

function CreateTodoButton() {
  return <img className="CreateTodoButton" src={plusImg} alt="Add one to do" />;
}

export default CreateTodoButton;
