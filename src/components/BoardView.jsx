import React, { useContext, useState } from 'react'
import DetailsBox from './DetailsBox';
import Keyboard from './Keyboard';
import Board from './Board';
import GameWon from './GameWon';
import { BoardContext } from '../context/boardContext';

const BoardView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { state } = useContext(BoardContext);

  const handleNewGame = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='game'>
      <div className="background-decor">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="grid-overlay"></div>
        <div className="nebula-cloud"></div>
      </div>
      <DetailsBox isOpen={isModalOpen} onToggle={setIsModalOpen} />
      <Board />
      {state.gameWon ? <GameWon onNewGame={handleNewGame} /> : <Keyboard />}
    </div>
  )
}

export default BoardView