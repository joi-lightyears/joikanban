import React from 'react'

function ModalDelete({handleDelete, onClose, setShowModalInfo, setShowModalDelete, infoTask}) {
    const handleCancel = () => {
        setShowModalInfo(true)
        setShowModalDelete(false)
    }
    const handleCloseOutside = (e) => {
        e.stopPropagation();
    }
  return (
    <div className="modal-container" onClick={onClose}>
        <div className="modal" onClick={handleCloseOutside}>
            <div className="modalInput">

            <h1>Delete this task?</h1>
            <p>Are you sure you want to delete the '<span>{infoTask.title}</span>' task? This action will remove the task and cannot be reversed.</p>
            <div className="btn-section">
                <div className="delete-btn" onClick={handleDelete}>
                    Delete
                </div>
                <div className="cancel-btn" onClick={handleCancel}>
                    Cancel
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ModalDelete