import React,{useState} from 'react'
import {BiPlusMedical} from 'react-icons/bi'
import ModalAddBoard from './ModalAddBoard';

function NoBoardFound() {

  const [showModalAddBoard, setShowModalAddBoard] = useState(false)
  
  return (
    <div className="no-board-found">
      <div className="container">
        <h2>You have no board. Create a new board to get started.</h2>
        <div className="create-new-board-btn" onClick={()=>setShowModalAddBoard(true)}>
          <BiPlusMedical/> Create New Board
        </div>
      </div>
      {showModalAddBoard && <ModalAddBoard setShowModalAddBoard={setShowModalAddBoard}/>}
    </div>
  )
}

export default NoBoardFound