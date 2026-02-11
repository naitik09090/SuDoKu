import React, { useState } from 'react';
import BoardView from './components/BoardView';
import Navbar from './components/Navbar';
import BoardState from './context/BoardState';
import Home from './components/Home';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <>
      <Navbar />
      <div className='App'>
        {!gameStarted ? (
          <Home onPlayNow={() => setGameStarted(true)} />
        ) : (
          <BoardState>
            <BoardView />
          </BoardState>
        )}
      </div>
    </>
  );
}

export default App;
