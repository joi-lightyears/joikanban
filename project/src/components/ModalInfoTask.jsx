import React, {useState} from 'react'

function ModalInfoTask({selectChange,infoTask,onClose, onSubmit}) {

    const [status, setStatus] = useState(infoTask.status);
    // console.log(infoTask);
    const handleCloseOutside = (e) => {
        e.stopPropagation();
    }
  return (
    <div className="modal-container" onClick={onClose}>
        <div className="modal" onClick={handleCloseOutside}>
            
            <h2>{infoTask.title}</h2>

            <form className='modalInput' onSubmit={onSubmit}>
                
                <div className="description">
                    {infoTask.description}
                </div>
                <label htmlFor="status">Current Status:</label>
                <select value={status} id="status" name="status" onChange={(e)=>{setStatus(e.target.value); selectChange(status, e.target.value, infoTask.id)}} >
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="blocked">Blocked</option>
                    <option value="done">Done</option>
                </select>
                
            </form>
        </div>
    </div>
  )
}

export default ModalInfoTask