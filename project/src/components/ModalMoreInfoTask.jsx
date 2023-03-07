import React from 'react'

function ModalMoreInfoTask({setShowModalDelete, setShowModalInfo, setShowModalEdit}) {
  const handleEditSelect = () => {
    setShowModalEdit(true);
    setShowModalInfo(false);
  }
  const handleDelete = () => {
    setShowModalDelete(true);
    setShowModalInfo(false);
  }
  return (
    <div className="moreInfoTask">
        <div className="container">
            <div className="edit" onClick={handleEditSelect}>Edit task</div>
            <div className="delete" onClick={handleDelete}>Delete</div>
        </div>
    </div>
  )
}

export default ModalMoreInfoTask