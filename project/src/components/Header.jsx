import React, {useState} from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import ModalEditBoard from './ModalEditBoard';
import ModalDeleteBoard from './ModalDeleteBoard'
import ModalEditDetailBoard from './ModalEditDetailBoard';
import ModalLogout from './ModalLogout';
import {useDispatch, useSelector} from 'react-redux';
import { boardsSelector, selectedBoardIdSelector } from '../redux/selectors';


function Header({isDarkMode,setIsDarkMode,currentUser, setActiveCollect}) {
  const boards = useSelector(boardsSelector)
  const selectedBoardId = useSelector(selectedBoardIdSelector)
  const [isChecked, setIsChecked] = useState(true);
  const [showModalEditBoard, setShowModalEditBoard] = useState(false);
  const [showModalDeleteBoard, setShowModalDeleteBoard] = useState(false);
  const [showModalEditDetailBoard, setShowModalEditDetailBoard] = useState(false);
  const [showModalLogout, setShowModalLogout] = useState(false);
  const board = boards.find((board) => board.id === selectedBoardId);

  const toggleTheme = () => {
    setIsChecked(!isChecked);
    const body = document.querySelector('body');
    body.style.backgroundColor = isChecked ? '#ffffff' : '#111214';
    body.style.color = isChecked ? '#111214' : '#ffffff';
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="header-container">
        <div className="collection-heading">
            {board?board.title : 'No Board Found'}
        </div>
        <div className="right-section">
          <div className="btn-container">
            <i className="fa fa-sun-o" aria-hidden="true"></i>
              <label className="switch btn-color-mode-switch">
                  <input 
                  checked={isChecked}
                  onChange={() => {setIsChecked(!isChecked); toggleTheme();}}
                  type="checkbox" name="color_mode" id="color_mode" value="1"></input>
                  <label htmlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
              </label>
            <i className="fa fa-moon-o" aria-hidden="true"></i>
          </div>

          <div className="user-profile" onClick={()=>setShowModalLogout(!showModalLogout)}>
              <BsPersonCircle className='avatar'/>
              {showModalLogout && <ModalLogout setShowModalLogout={setShowModalLogout} />}

          </div>
          <div className="more" >
              <BiDotsVerticalRounded onClick={()=>setShowModalEditBoard(!showModalEditBoard)} className='more-icon'/>
              {showModalEditBoard && <ModalEditBoard boards={boards} setShowModalEditDetailBoard={setShowModalEditDetailBoard} setShowModalDeleteBoard={setShowModalDeleteBoard} setShowModalEditBoard={setShowModalEditBoard} />}
              {showModalDeleteBoard && <ModalDeleteBoard currentUser={currentUser} setActiveCollect={setActiveCollect} setShowModalDeleteBoard={setShowModalDeleteBoard} />}
              {showModalEditDetailBoard && <ModalEditDetailBoard  setShowModalEditDetailBoard={setShowModalEditDetailBoard} selectedBoardId={selectedBoardId} boards={boards}/>}
          </div>
        </div>    
    </div>
  )
}

export default Header