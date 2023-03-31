import React, { useRef, useState, useEffect } from 'react'
import {BiDockRight, BiPlusMedical} from 'react-icons/bi'
import ModalAddBoard from './ModalAddBoard';
import {useDispatch, useSelector} from 'react-redux';
import { boardsSelector, activeCollectSelector } from '../redux/selectors';
import { setActiveCollect, selectBoard } from '../redux/actions';

function Sidebar({currentUser, setActiveCollect, activeCollect }) {
    const boards = useSelector(boardsSelector)
    const dispatch = useDispatch();
    // const activeCollect = useSelector(activeCollectSelector)
    const listCollection = useRef([])
    const [showModalAddBoard, setShowModalAddBoard] = useState(false)
    const handleClick = (boardId,index) => {
        // dispatch(setActiveCollect(index))
        setActiveCollect(index)
        dispatch(selectBoard(boardId))
    }
    


  return (
    <div className="sidebar-container">
        <div className="logo">NTDkanban</div>
        <div className="bottom">
        <div className="bottom-wrapper">
            <div className="heading">
                ALL BOARDS (<span>{boards.length}</span>)
            </div>
            
            <ul className="board-list">


                {boards.map((board, index) => (
                
                    <li 
                    key={index}
                    ref={el => listCollection.current[index] = el}
                    onClick={() => {
                        handleClick(board.id,index)}}

                    className={`collection ${activeCollect===index? 'active' : ''}`}><BiDockRight/> <span>{board.title}</span> </li>
                    
                    ))}

                                  
                

                
            </ul>
            <li
                    key={boards.length}
                    // ref={el => listCollection.current[boards.length] = el}
                    onClick={() => setShowModalAddBoard(true)}
                    className='collection'><BiDockRight/> <BiPlusMedical/> <span>Create New Board</span></li>
        </div>
        {showModalAddBoard && <ModalAddBoard   currentUser={currentUser}  setActiveCollect={setActiveCollect} setShowModalAddBoard={setShowModalAddBoard}/>}
        <div className="footer">
            Made by <a href="https://github.com/joi-lightyears" target="_blank" rel="noopener noreferrer">Nguyen Thanh Dat</a> 
        </div>
        </div>
        
    </div>
  )
}

export default Sidebar