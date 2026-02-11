import React from 'react'

const GameWon = ({ onNewGame }) => {
  return (
    <div className='game-won'>
      <div className="victory-text">VICTORY</div>
      <button className="button pulse-btn" onClick={onNewGame}>New Game</button>
    </div>
  )
}

export default GameWon