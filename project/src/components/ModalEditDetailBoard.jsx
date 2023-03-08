import React, {useState} from 'react'

function ModalEditDetailBoard({setFakeState, setShowModalEditDetailBoard, selectedBoardId, boards}) {
  const board = boards.find((board) => board.id === selectedBoardId);
  const [name, setName] = useState(board.title);
  const handleCloseOutside = (e) => {
    e.stopPropagation();
}
  const handleEditBoard = (e) => {
    e.preventDefault();
    boards.find((board) => board.id === selectedBoardId).title = e.target.name.value;
    setShowModalEditDetailBoard(false)
    setFakeState(prev => !prev);
    // console.log(boards);
  }
  return (
    <div className="modal-container" onClick={()=>setShowModalEditDetailBoard(false)}>
        <div className="modal" onClick={handleCloseOutside}>
            
            <h2>Edit Board</h2>

            <form className='modalInput' onSubmit={handleEditBoard} >
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <button type="submit">Save changes</button>
            </form>
        </div>
    </div>
  )
}

export default ModalEditDetailBoard