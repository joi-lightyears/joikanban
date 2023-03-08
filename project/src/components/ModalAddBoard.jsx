import React from 'react'
import { v4 as uid } from 'uuid';


function ModalAddBoard({setSelectedBoardId, setActiveCollect, boards, setShowModalAddBoard}) {
    const handleCloseOutside = (e) => {
        e.stopPropagation();
    }
    const handleAddBoard = (e) => {
        e.preventDefault();
        setActiveCollect(boards.length);
        
        const newBoard = {
            id: uid(),
            title: e.target.name.value,
            columns: [
                {
                    id: 'todo',
                    title: 'To Do',
                    items: []
                },
                {
                    id: 'in-progress',
                    title: 'In Progress',
                    items: []
                },
                {
                    id: 'blocked',
                    title: 'Blocked',
                    items: []
                },
                {
                    id: 'done',
                    title: 'Done',
                    items: []
                }
            ]
        }
        boards.push(newBoard);
        setSelectedBoardId(newBoard.id);
        // console.log(boards);
        setShowModalAddBoard(false);
    }
  return (
    <div className="modal-container" onClick={()=>setShowModalAddBoard(false)}>
        <div className="modal" onClick={handleCloseOutside}>
            
            <h2>Add new board</h2>

            <form className='modalInput' onSubmit={handleAddBoard}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ModalAddBoard