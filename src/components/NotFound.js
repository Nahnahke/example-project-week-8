import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const Navigate = useNavigate();
  const onHomeButtonClick = () => {
    Navigate('/');
  }
  return (
    <div>
      <p>Sorry Pokemon Master, no such page</p>
      <button type="button" onClick={onHomeButtonClick}>Return to Home Page</button>
    </div>
  )
}

export default NotFound;