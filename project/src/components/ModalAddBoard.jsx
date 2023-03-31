import React, {useEffect} from 'react'
import { v4 as uid } from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import { boardsSelector } from '../redux/selectors'
import { addBoard, setActiveCollect, selectBoard } from '../redux/actions'
import { updateData } from '../redux/updateData'

function ModalAddBoard({currentUser, setShowModalAddBoard, setActiveCollect}) {
    const dispatch = useDispatch();
    const boards = useSelector(boardsSelector)

    const handleCloseOutside = (e) => {
        e.stopPropagation();
    }
    // useEffect(() => { 
    //     updateData(boards, currentUser);
    //   }, [boards, currentUser]);
    const handleAddBoard = (e) => {
        e.preventDefault();
        // dispatch(setActiveCollect(boards.length));
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
        dispatch(addBoard(newBoard))
        dispatch(selectBoard(newBoard.id))
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