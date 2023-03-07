import React, {useState} from 'react'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import ModalMoreInfoTask from './ModalMoreInfoTask';

function ModalInfoTask({setShowModalDelete, setShowModalInfo, setShowModalEdit, selectChange,infoTask,onClose, onSubmit}) {

    const [status, setStatus] = useState(infoTask.status);
    const [showModalMoreInfo, setShowModalMoreInfo] = useState(false);
    // const [showModalEditTask, setShowModalEditTask] = useState(false);
    // console.log(infoTask);
    const handleCloseOutside = (e) => {
        e.stopPropagation();
        // setShowModalMoreInfo(false);
    }
    const handleMore = (e) => {
        // e.stopPropagation();
        // setShowModalMoreInfo(true);
    }
    const handleShowMore = () => {
        setShowModalMoreInfo(!showModalMoreInfo);
    }
  return (
    <div className="modal-container" onClick={onClose}>
        <div className="modal" onClick={handleCloseOutside}>
            <div className="header-info-task">
                <h2>{infoTask.title}</h2>
                <div onClick={handleShowMore} className="more">
                    <BiDotsVerticalRounded className='more-icon'/>
                </div>
            </div>

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
            {showModalMoreInfo && <ModalMoreInfoTask setShowModalDelete={setShowModalDelete} setShowModalInfo={setShowModalInfo}  setShowModalEdit={setShowModalEdit}/>}

        </div>
    </div>
  )
}

export default ModalInfoTask