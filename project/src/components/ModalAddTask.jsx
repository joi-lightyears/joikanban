import React, {useState} from 'react'

function ModalAddTask({onClose, handleSubmit}) {

    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");

    const handleCloseOutside = (e) => {
        e.stopPropagation();
    }
    
  return (
    <div className="modal-container" onClick={onClose}>
        <div className="modal" onClick={handleCloseOutside}>
            
            <h2>Add new task</h2>

            <form className='modalInput' onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                />
                {/* <br /> */}
                <label htmlFor="detail">Detail:</label>
                <textarea
                    id="detail"
                    name="detail"
                    // rows="10"
                    required
                />

                <label htmlFor="status">Status:</label>
                <select id="status" name="status">
                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
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