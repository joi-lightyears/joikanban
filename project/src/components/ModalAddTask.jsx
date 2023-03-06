import React, {useState} from 'react'

function ModalAddTask({onAddCloumnId,onClose, onSubmit}) {

    const [status, setStatus] = useState(onAddCloumnId);

    const handleCloseOutside = (e) => {
        e.stopPropagation();
    }
    
  return (
    <div className="modal-container" onClick={onClose}>
        <div className="modal" onClick={handleCloseOutside}>
            
            <h2>Add new task</h2>

            <form className='modalInput' onSubmit={onSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                />
                {/* <br /> */}
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    // rows="10"
                    required
                />

                <label htmlFor="status">Status:</label>
                <select value={status} id="status" name="status" onChange={(e)=>setStatus(e.target.value)} >
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="blocked">Blocked</option>
                    <option value="done">Done</option>
                </select>
                {/* <br /> */}
                {/* <label htmlFor="subTasks">Subtasks:</label>
                <input
                    type="text"
                    id="subTasks"
                    name="subTasks"
                /> */}
                {/* <br /> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ModalAddTask