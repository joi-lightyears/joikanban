import { useState } from 'react'
import './Style.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Board from './components/Board'
import {userData} from './data/data'

function App() {
  const [selectedBoardId, setSelectedBoardId] = useState(userData[0].boards[0].id);
  
  const handleBoardClick = (boardId) => {
    setSelectedBoardId(boardId);
  };
  return (
    <div className="App">
      <Header board={userData[0].boards.find((board) => board.id === selectedBoardId)}/>
      <Sidebar boards={userData[0].boards} onBoardClick={handleBoardClick}/>
      <Board key={selectedBoardId} board={userData[0].boards.find((board) => board.id === selectedBoardId)}/>
    </div>
  )
}

export default App
