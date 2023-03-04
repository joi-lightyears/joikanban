import React, { useRef, useState } from 'react'
import {BiDockRight, BiPlusMedical} from 'react-icons/bi'


function Sidebar() {

    const [activeCollect, setActiveCollect] = useState(null); // active collection
    const listCollection = useRef([])
    const handleClick = (index) => {
        setActiveCollect(index)
    }

  return (
    <div className="sidebar-container">
        <div className="logo">Joikanban</div>
        <div className="bottom">
        <div className="bottom-wrapper">
            <div className="heading">
                ALL BOARDS (<span>3</span>)
            </div>
            
            <ul className="board-list">

                <li 
                ref={el => listCollection.current[0] = el}
                onClick={() => handleClick(0)}
                className={`collection ${activeCollect===0? 'active' : ''}`}><BiDockRight/> <span>Board A</span> </li>
                <li 
                ref={el => listCollection.current[1] = el}
                onClick={() => handleClick(1)}
                className={`collection ${activeCollect===1? 'active' : ''}`}><BiDockRight/> <span>Board B</span></li>
                <li 
                ref={el => listCollection.current[2] = el}
                onClick={() => handleClick(2)}
                className={`collection ${activeCollect===2? 'active' : ''}`}><BiDockRight/> <span>Board C</span></li>


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