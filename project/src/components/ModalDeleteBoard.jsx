import React from 'react'

function ModalDeleteBoard({setFakeState, selectedBoardId, setActiveCollect, setSelectedBoardId, setShowModalDeleteBoard, boards}) {
    const handleDelete = () => {
        setShowModalDeleteBoard(false);
        const index = boards.findIndex((b) => b.id === selectedBoardId);
        boards.splice(index, 1);
        
        
        setSelectedBoardId(boards.length>0? boards[0].id : null);
        setActiveCollect(0);
        setFakeState(prev => !prev);
        
        // console.log(boards);
    }
    
  return (
    <div className="modal-container" >
        <div className="modal" >
            <div className="modalInput">

            <h1>Delete this board?</h1>
            <p>Are you sure you want to delete the board? This action will remove all the tasks and columns and cannot be reversed.</p>
            <div className="btn-section">
                <div className="delete-btn" onClick={handleDelete}>
                    Delete
                </div>
                <div className="cancel-btn" onClick={()=>setShowModalDeleteBoard(false)}>
                    Cancel
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ModalDeleteBoard