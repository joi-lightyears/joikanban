import { useState, useEffect } from 'react'
import './Style.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Board from './components/Board'
import NoBoardFound from './components/NoBoardFound'
import {userData} from './data/data'

function App() {
  const [selectedBoardId, setSelectedBoardId] = useState(userData[0].boards.length>0?userData[0].boards[0].id:null);
  const [activeCollect, setActiveCollect] = useState(0); // active collection
  const [fakeState, setFakeState] = useState(true); // fake state to re-render the app
  const handleBoardClick = (boardId) => {
    setSelectedBoardId(boardId);
  };
  // useEffect(() => {
  //   console.log(userData[0].boards)
  // }, [userData[0].boards]);
  return (
    <div className="App">
      <Header setFakeState={setFakeState} selectedBoardId={selectedBoardId} setActiveCollect={setActiveCollect} setSelectedBoardId={setSelectedBoardId} boards={userData[0].boards} />
      <Sidebar activeCollect={activeCollect} setActiveCollect={setActiveCollect} setSelectedBoardId={setSelectedBoardId} boards={userData[0].boards} onBoardClick={handleBoardClick}/>
      {selectedBoardId ? <Board key={selectedBoardId} board={userData[0].boards.find((board) => board.id === selectedBoardId)}/> : <NoBoardFound setSelectedBoardId={setSelectedBoardId} setActiveCollect={setActiveCollect} boards={userData[0].boards}/>}
    </div>
  )
}

export default App
