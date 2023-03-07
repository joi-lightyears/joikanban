import React, {useState} from 'react'

function ModalEdit({infoTask, onClose, onSubmit}) {
    const [status, setStatus] = useState(infoTask.status);
    const [title, setTitle] = useState(infoTask.title);
    const [description, setDescription] = useState(infoTask.description);
    

    const handleCloseOutside = (e) => {
        e.stopPropagation();
    }

  return (
    <div className="modal-container" onClick={onClose}>
        <div className="modal" onClick={handleCloseOutside}>
            
            <h2>Edit task</h2>

            <form className='modalInput' onSubmit={onSubmit} >
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                />
                {/* <br /> */}
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
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
                <button type="submit">Save changes</button>
            </form>
        </div>
    </div>
  )
}

export default ModalEdit