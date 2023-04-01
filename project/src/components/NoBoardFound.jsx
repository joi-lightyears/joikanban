import React,{useState, useEffect} from 'react'
import {BiPlusMedical} from 'react-icons/bi'
import ModalAddBoard from './ModalAddBoard';
import { updateData } from '../redux/updateData';
import { boardsSelector } from '../redux/selectors';
import { useSelector} from 'react-redux';


function NoBoardFound({currentUser, setActiveCollect}) {

  const [showModalAddBoard, setShowModalAddBoard] = useState(false)
  const boards = useSelector(boardsSelector);

  useEffect(() => { 
    updateData(boards, currentUser);
  }, [boards, currentUser]);
  return (
    <div className="no-board-found">
      <div className="container">
        <h2>You have no board. Create a new board to get started.</h2>
        <div className="create-new-board-btn" onClick={()=>setShowModalAddBoard(true)}>
          <BiPlusMedical/> Create New Board
        </div>
      </div>
      {showModalAddBoard && <ModalAddBoard currentUser={currentUser} setShowModalAddBoard={setShowModalAddBoard} setActiveCollect={setActiveCollect}/>}
    </div>
  )
}

export default NoBoardFound