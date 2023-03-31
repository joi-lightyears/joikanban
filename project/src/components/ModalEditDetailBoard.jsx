import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { boardsSelector, selectedBoardIdSelector } from '../redux/selectors';
import { selectBoard, editBoard } from '../redux/actions';

function ModalEditDetailBoard({setShowModalEditDetailBoard}) {
  const dispatch = useDispatch();
  const boards = useSelector(boardsSelector);
  const selectedBoardId = useSelector(selectedBoardIdSelector)
  const board = boards.find((board) => board.id === selectedBoardId);
  const [name, setName] = useState(board.title);
  const handleCloseOutside = (e) => {
    e.stopPropagation();
}
  const handleEditBoard = (e) => {
    e.preventDefault();
    dispatch(editBoard(selectedBoardId, name));
    setShowModalEditDetailBoard(false)
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