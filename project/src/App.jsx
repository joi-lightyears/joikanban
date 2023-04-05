import { useState, useEffect, useContext } from 'react'
import './Style.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Board from './components/Board'
import NoBoardFound from './components/NoBoardFound'
// import {userData} from './data/data'
import { doc, onSnapshot } from 'firebase/firestore';
import { AuthContext } from './context/AuthContext'
import { db } from './firebase';
import getInitData from './redux/getInitData'
import {useDispatch, useSelector} from 'react-redux';
import { boardsSelector, selectedBoardIdSelector, activeCollectSelector } from './redux/selectors'
import { selectBoard } from './redux/actions'
import { updateData } from './redux/updateData'

 function App() {
  const {currentUser} =  useContext(AuthContext)
  const [activeCollect, setActiveCollect] = useState(0)
  const boards = useSelector(boardsSelector)
  const [isDarkMode, setIsDarkMode] = useState(true)
  // console.log(boards)
  const selectedBoardId = useSelector(selectedBoardIdSelector)
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getBoards =()=>{
        getInitData(dispatch, currentUser)
      return () =>{
        unsub();
      };
    }
  currentUser.uid && getBoards()
  }, [currentUser.uid])
  useEffect(() => { 
    if(currentUser && boards)
    updateData(boards, currentUser);
  }, [boards, currentUser]);
  
  if(!boards)
  {
    return (
      <div className="loading-page">
        <div className="loader"></div>
      </div>
    )
  }
  
  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} currentUser={currentUser} setActiveCollect={setActiveCollect}/>
      <Sidebar isDarkMode={isDarkMode} currentUser={currentUser} activeCollect={activeCollect} setActiveCollect={setActiveCollect}/>
      {selectedBoardId ? <Board isDarkMode={isDarkMode} currentUser={currentUser} /> : <NoBoardFound currentUser={currentUser} setActiveCollect={setActiveCollect}/>}
    </div>
  )
}

export default App
