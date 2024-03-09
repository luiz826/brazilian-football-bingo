// GameBoard/GameBoard.tsx
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState } from 'react';
import './GameBoard.css';
var GameBoard = function () {
    // Mock game board numbers
    var _a = useState([]), calledNumbers = _a[0], setCalledNumbers = _a[1];
    var bingoNumbers = Array.from({ length: 75 }, function (_, i) { return i + 1; });
    // Function to mark a number as called
    var markNumberCalled = function (number) {
        if (!calledNumbers.includes(number)) {
            setCalledNumbers(__spreadArray(__spreadArray([], calledNumbers, true), [number], false));
        }
    };
    return (React.createElement("div", { className: "game-board" },
        React.createElement("h2", null, "Game Board"),
        React.createElement("div", { className: "numbers-grid" }, bingoNumbers.map(function (number) { return (React.createElement("div", { key: number, className: "number ".concat(calledNumbers.includes(number) ? 'called' : ''), onClick: function () { return markNumberCalled(number); } }, number)); }))));
};
export default GameBoard;
