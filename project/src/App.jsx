import { useState } from 'react'
import './Style.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Board/>
    </div>
  )
}

export default App
