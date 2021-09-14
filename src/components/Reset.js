import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Board() {
  const { setSquares, setIsXNext } = useContext(GameContext);
  
  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}