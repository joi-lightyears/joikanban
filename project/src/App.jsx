import { useState, useEffect, useContext } from 'react'
import './Style.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Board from './components/Board'
import NoBoardFound from './components/NoBoardFound'
// import {userData} from './data/data'
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { AuthContext } from './context/AuthContext'
import { db } from './firebase';
import getInitData from './redux/getInitData'
import {useDispatch, useSelector} from 'react-redux';
import { boardsSelector } from './redux/selectors'

 function App() {
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [activeCollect, setActiveCollect] = useState(0); // active collection
  const [fakeState, setFakeState] = useState(true); // fake state to re-render the app
  const handleBoardClick = (boardId) => {
    setSelectedBoardId(boardId);
  };

  const [boards, setBoards] = useState(null)
  const {currentUser} =  useContext(AuthContext)

  const dispatch = useDispatch();
  

  useEffect(() => {
    const getBoards =()=>{
      const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        setBoards(doc.data().boards)
        getInitData(dispatch, currentUser, setSelectedBoardId)

        
      });
      return () =>{
        unsub();
      };
    }
    currentUser.uid && getBoards()
    
    // currentUser.uid && setSelectedBoardId()
  }, [currentUser.uid])
  
  const userData = useSelector(boardsSelector)
  console.log(userData)
  
  if(boards === null)
  {
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <Header setFakeState={setFakeState} selectedBoardId={selectedBoardId} setActiveCollect={setActiveCollect} setSelectedBoardId={setSelectedBoardId} />
      <Sidebar activeCollect={activeCollect} setActiveCollect={setActiveCollect} setSelectedBoardId={setSelectedBoardId} onBoardClick={handleBoardClick}/>
      {selectedBoardId ? <Board key={selectedBoardId} currentUser={currentUser} selectedBoardId={selectedBoardId}/> : <NoBoardFound setSelectedBoardId={setSelectedBoardId} setActiveCollect={setActiveCollect} boards={boards}/>}
    </div>
  )
}

export default App
