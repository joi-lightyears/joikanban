import React, {useState} from 'react'

function ModalEditBoard({boards, setShowModalEditDetailBoard, setShowModalDeleteBoard,setShowModalEditBoard}) {
  // console.log(boards);
  return (
    <div className="modal-header">
      <div className="container">
        {boards.length!==0 && <div className="edit-board" onClick={()=>{setShowModalEditDetailBoard(true); setShowModalEditBoard(false)}}>
          Edit Board
        </div>}
        <div className="delete-board" onClick={()=>{setShowModalDeleteBoard(true);setShowModalEditBoard(false)}}>
          Delete Board
        </div>
      </div>
    </div>
  )
}

export default ModalEditBoard