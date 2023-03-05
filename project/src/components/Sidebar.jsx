import React, { useRef, useState } from 'react'
import {BiDockRight, BiPlusMedical} from 'react-icons/bi'


function Sidebar({ boards, onBoardClick }) {

    const [activeCollect, setActiveCollect] = useState(0); // active collection
    const listCollection = useRef([])
    const handleClick = (index) => {
        setActiveCollect(index)
    }


  return (
    <div className="sidebar-container">
        <div className="logo">NTDkanban</div>
        <div className="bottom">
        <div className="bottom-wrapper">
            <div className="heading">
                ALL BOARDS (<span>3</span>)
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
                ref={el => listCollection.current[3] = el}
                onClick={() => handleClick(3)}
                className={`collection ${activeCollect===3? 'active' : ''}`}><BiDockRight/> <BiPlusMedical/> <span>Create New Board</span></li>
            </ul>
        </div>
        <div className="footer">
            Made by Nguyen Thanh Dat
        </div>
        </div>
        
    </div>
  )
}

export default Sidebar