// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import BingoCard from './components/BingoCard/BingoCard';
import GameBoard from './components/GameBoard/GameBoard';
import Footer from './components/Footer/Footer';
var App = function () {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(BingoCard, null),
        React.createElement(GameBoard, null),
        React.createElement(Footer, null)));
};
export default App;
