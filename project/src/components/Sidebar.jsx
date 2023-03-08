import React, { useRef, useState, useEffect } from 'react'
import {BiDockRight, BiPlusMedical} from 'react-icons/bi'
import ModalAddBoard from './ModalAddBoard';


function Sidebar({activeCollect, setActiveCollect, setSelectedBoardId, boards, onBoardClick }) {
    const listCollection = useRef([])
    const [showModalAddBoard, setShowModalAddBoard] = useState(false)
    const handleClick = (index) => {
        setActiveCollect(index)
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
                        onBoardClick(board.id)
                        handleClick(index)}}

                    className={`collection ${activeCollect===index? 'active' : ''}`}><BiDockRight/> <span>{board.title}</span> </li>
                    
                    ))}

                    <li
                    key={boards.length}
                    // ref={el => listCollection.current[boards.length] = el}
                    onClick={() => setShowModalAddBoard(true)}
                    className='collection'><BiDockRight/> <BiPlusMedical/> <span>Create New Board</span></li>              
                

                
            </ul>
        </div>
        {showModalAddBoard && <ModalAddBoard setSelectedBoardId={setSelectedBoardId} setActiveCollect={setActiveCollect} boards={boards} setShowModalAddBoard={setShowModalAddBoard}/>}
        <div className="footer">
        Made by <a href="https://github.com/joi-lightyears" target="_blank" rel="noopener noreferrer">Nguyen Thanh Dat</a> 
        </div>
        </div>
        
    </div>
  )
}

export default Sidebar