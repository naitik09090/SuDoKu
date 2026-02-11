import React, { useContext } from 'react';
import { BoardContext } from '../context/boardContext';
import { IoClose } from 'react-icons/io5';

const NewGameModal = ({ onClose, showModal }) => {

  let { setNewGame, newCustomGame } = useContext(BoardContext)

  const handleNewGame = (numEmptyCells) => {
    setNewGame(numEmptyCells);
    onClose();
  };

  return (
    <div className={`modal ${showModal ? 'modal-show' : ''}`}>
      <button className='cancel-button' onClick={onClose} aria-label="Close">
        <IoClose />
      </button>
      <div className="modal-content">

        <h2 className='modal-title'>New Game Options</h2>

        <div className="difficulty-buttons">
          <button className='button btn-difficulty easy' onClick={() => handleNewGame(40)}>Easy</button>
          <button className='button btn-difficulty medium' onClick={() => handleNewGame(50)}>Medium</button>
          <button className='button btn-difficulty hard' onClick={() => handleNewGame(60)}>Hard</button>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className='button btn-custom' onClick={() => { newCustomGame(); onClose() }}>
          Create Custom Board
        </button>
      </div>
    </div>
  );
};

export default NewGameModal;
