// BingoCard/BingoCard.tsx
import React from 'react';
import './BingoCard.css';
var BingoCard = function () {
    // Mock bingo card numbers
    var bingoNumbers = [
        [5, 12, 18, 25, 32],
        [3, 10, 17, 24, 31],
        [1, 8, 15, 22, 29],
        [6, 13, 20, 27, 34],
        [4, 11, 16, 23, 30],
    ];
    return (React.createElement("div", { className: "bingo-card" },
        React.createElement("h2", null, "Bingo Card"),
        React.createElement("table", null,
            React.createElement("tbody", null, bingoNumbers.map(function (row, rowIndex) { return (React.createElement("tr", { key: rowIndex }, row.map(function (number, columnIndex) { return (React.createElement("td", { key: columnIndex }, number)); }))); })))));
};
export default BingoCard;
