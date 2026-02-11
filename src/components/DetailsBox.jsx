import React, { useContext, useState } from 'react'
import NewGameModal from './NewGameModal';
import { BoardContext } from '../context/boardContext';
import Timer from './Timer';
import { solve } from '../helper/solver';
import { isValidSudoku } from '../helper/checkValid';

const DetailsBox = ({ isOpen, onToggle }) => {

  const [showError, setShowError] = useState(false)
  const { state, setSolvedBoard, handleFinishEntering } = useContext(BoardContext)

  const handleCloseModal = () => {
    onToggle(false);
  };

  function solveSudoku() {
    let newBoard = state.actualBoard.map((row) => [...row]);
    solve(newBoard);
    setSolvedBoard(newBoard);
  };

  function handleSubmit() {
    if (isValidSudoku(state.actualBoard)) handleFinishEntering();
    else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false)
      }, 3000);
    }
  }


  return (
    <div className="detail-box flex-box">
      {!state.isCustomBoard && <Timer />}
      <div className='button' onClick={() => onToggle(true)}>New Game</div>

      {isOpen && (
        <div className="overlay">
          <NewGameModal
            onClose={handleCloseModal}
            showModal={isOpen}
          />
        </div>
      )}
      {/* {!state.isCustomBoard && !state.gameWon && <div className='button' onClick={solveSudoku}>Solve</div>} */}
      {state.isCustomBoard && <div className='button' onClick={handleSubmit}>Submit</div>}
      {showError && <div className='valid-error-modal flex-box'>Not a valid sudoku</div>}
      {/* <span className='dificulty-level'>{state.difficulty}</span> */}
    </div>
  )
}

export default DetailsBox