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

 function App() {
  const {currentUser} =  useContext(AuthContext)
  const [activeCollect, setActiveCollect] = useState(0)
  const boards = useSelector(boardsSelector)
  console.log(boards)
  const selectedBoardId = useSelector(selectedBoardIdSelector)
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getBoards =()=>{
      const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        getInitData(dispatch, currentUser)
      });
      return () =>{
        unsub();
      };
    }
  currentUser.uid && getBoards()
  }, [currentUser.uid])
  
  if(!boards)
  {
    return <div>Loading...</div>
  }
    
  return (
    <div className="App">
      <Header currentUser={currentUser} setActiveCollect={setActiveCollect}/>
      <Sidebar currentUser={currentUser} activeCollect={activeCollect} setActiveCollect={setActiveCollect}/>
      {selectedBoardId ? <Board  currentUser={currentUser} /> : <NoBoardFound/>}
    </div>
  )
}

export default App
