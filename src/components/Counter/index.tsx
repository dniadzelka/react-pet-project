import React, { useState } from 'react';
import './style.scss';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrementClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrementClick = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <button onClick={handleDecrementClick} className="button decrement">
        -
      </button>
      {counter}
      <button onClick={handleIncrementClick} className="button in">
        +
      </button>
    </div>
  );
}
