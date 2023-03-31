import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { boardsSelector, selectedBoardIdSelector } from '../redux/selectors';
import { deleteBoard, selectBoard } from '../redux/actions';

function ModalDeleteBoard({setActiveCollect, setShowModalDeleteBoard}) {
    const dispatch = useDispatch();
    const boards = useSelector(boardsSelector);
    const selectedBoardId = useSelector(selectedBoardIdSelector)
    const handleDelete = () => {
        dispatch(deleteBoard(selectedBoardId));
        dispatch(selectBoard(boards.length>0? boards[0].id : null));
        setShowModalDeleteBoard(false);
        setActiveCollect(0);
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