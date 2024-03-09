// src/App.tsx

import React from 'react';
import Header from './components/Header/Header';
import BingoCard from './components/BingoCard/BingoCard';
import GameBoard from './components/GameBoard/GameBoard';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BingoCard />
      <GameBoard />
      <Footer />
    </div>
  );
};

export default App;
