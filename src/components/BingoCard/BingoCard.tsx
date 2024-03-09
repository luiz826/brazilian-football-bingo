// BingoCard/BingoCard.tsx

import React from 'react';
import './BingoCard.css';

const BingoCard: React.FC = () => {
  // Mock bingo card numbers
  const bingoNumbers = [
    [5, 12, 18, 25, 32],
    [3, 10, 17, 24, 31],
    [1, 8, 15, 22, 29],
    [6, 13, 20, 27, 34],
    [4, 11, 16, 23, 30],
  ];

  return (
    <div className="bingo-card">
      <h2>Bingo Card</h2>
      <table>
        <tbody>
          {bingoNumbers.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((number, columnIndex) => (
                <td key={columnIndex}>{number}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoCard;
