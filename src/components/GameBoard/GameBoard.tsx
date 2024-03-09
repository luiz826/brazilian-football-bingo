// GameBoard/GameBoard.tsx

import React, { useState } from 'react';
import './GameBoard.css';

const GameBoard: React.FC = () => {
  // Mock game board numbers
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);
  const bingoNumbers = Array.from({ length: 75 }, (_, i) => i + 1);

  // Function to mark a number as called
  const markNumberCalled = (number: number) => {
    if (!calledNumbers.includes(number)) {
      setCalledNumbers([...calledNumbers, number]);
    }
  };

  return (
    <div className="game-board">
      <h2>Game Board</h2>
      <div className="numbers-grid">
        {bingoNumbers.map((number) => (
          <div
            key={number}
            className={`number ${calledNumbers.includes(number) ? 'called' : ''}`}
            onClick={() => markNumberCalled(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
