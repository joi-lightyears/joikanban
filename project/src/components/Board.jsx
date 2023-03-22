import React, {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {BiPlusMedical} from 'react-icons/bi'
import ModalAddTask from './ModalAddTask';
import ModalInfoTask from './ModalInfoTask';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';
import { v4 as uid } from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import { boardsSelector } from '../redux/selectors';
import { addItem, deleteItem, editItem, optionChange, onMove } from '../redux/actions';
import { updateData } from '../redux/updateData';

function Board({selectedBoardId, currentUser}) {
    const boards = useSelector(boardsSelector)
    const board = boards.find((board) => board.id === selectedBoardId)
    const dispatch = useDispatch();

    // const [columns, setColumns] = useState(board.columns);
    const [showModal, setShowModal] = useState(false);
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState({});
    const [selectedTask, setSelectedTask] = useState({});
    function onDragEnd(result) {
        const { source, destination, draggableId } = result;
        const boardId = board.id;
        dispatch(onMove(boardId, source, destination, draggableId));
    }


    // for column heading
    const colorPalette = (type)=>{
        switch(type){
            case 'todo':
                 return {backgroundColor:'#edecea', color:'#2d1d19'};
            case 'in-progress':
                 return {backgroundColor:'#7ea2c5', color:'#2d1d19'};
            case 'blocked':
                 return {backgroundColor:'#e28875', color:'#2d1d19'};
            case 'done':
                 return {backgroundColor:'#bfd179', color:'#2d1d19'};
            default:
                 return {backgroundColor:'#000000', color:'#ffffff'};
        }
    }


    // modal
    const handleInfoTask = () => {
        setShowModalInfo(true);
    }
    const handleAddMore = (columnId) => {
        setSelectedColumn(columnId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setShowModalInfo(false);
        setShowModalEdit(false);
        setShowModalDelete(false);
    };


    const handleSelectOptionChange = (oldStatus, newStatus, taskId) => {
        const boardId = board.id;
        dispatch(optionChange(boardId, oldStatus, newStatus, taskId))
    }

    useEffect(() => {
        // setColumns(board.columns);
        updateData(boards, currentUser);
      }, [boards, currentUser]);
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const description = e.target.description.value;
        const status = e.target.status.value;
        const newItem = {
            id: uid(),
            title: title,
            description: description,
            status: status
        }
        const boardId = board.id;
        const columnId = status;
        console.log(boardId, columnId, newItem)
        dispatch(addItem(boardId, columnId, newItem))
        setShowModal(false);

    };

    const handleEdit = (e) => {
        setShowModalEdit(false);
        e.preventDefault()
        const title = e.target.title.value;
        const description = e.target.description.value;
        const status = e.target.status.value;

        const boardId = board.id;
        const itemId = selectedTask.id;
        const updatedItem = {
            id: selectedTask.id,
            title: title,
            description: description,
            status: status
        }
        dispatch(editItem(boardId, itemId, selectedTask, updatedItem))
    }
    const handleDelete = () => {
        const boardId = board.id;
        const columnId = selectedTask.status;
        const itemId = selectedTask.id;
        dispatch(deleteItem(boardId, columnId, itemId));
        setShowModalDelete(false);
    }

  return (
    <div className="board-container">
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="columns">
                {board.columns.map((column) => (
                <Droppable key={column.id} droppableId={column.id}>
                    {(provided, snapshot) => (

                    <div
                        className="column"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        // style={{
                        //  background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey'
                        // }}
                    >

                        <h2
                        style={colorPalette(column.id)}
                        >{column.title} (<span>{column.items.length}</span>) </h2>

                        <div onClick={()=>handleAddMore(column.id)} className="item add-task">
                            <BiPlusMedical/> Add new task
                        </div>
                        {column.items.map((item, index) => (
                            
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                <div
                                    className="item"
                                    onClick={()=>{setSelectedTask(item); handleInfoTask();}}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    style={{
                                    backgroundColor: snapshot.isDragging ? 'rgba(43, 45, 49, 0.5)' : 'rgba(43, 45, 49, 1)',
                                    ...provided.draggableProps.style
                                    }}
                                >
                                    {item.title}
                                </div>
                                )}
                                </Draggable>
                            
                        
                        ))}
                        {provided.placeholder}

                        
                    </div>
                    )}
                </Droppable>
                ))}
            </div>
        </DragDropContext>

        {showModal && <ModalAddTask onAddCloumnId={selectedColumn}  onClose={handleCloseModal} onSubmit={handleSubmit}/>}
        {showModalInfo && <ModalInfoTask setShowModalDelete={setShowModalDelete} setShowModalInfo={setShowModalInfo} setShowModalEdit={setShowModalEdit} selectChange={handleSelectOptionChange} infoTask={selectedTask}  onClose={handleCloseModal} onSubmit={handleSubmit}/>}
        {showModalEdit && <ModalEdit infoTask={selectedTask} onClose={handleCloseModal} onSubmit={handleEdit} />}
        {showModalDelete && <ModalDelete handleDelete={handleDelete} onClose={handleCloseModal} setShowModalInfo={setShowModalInfo} setShowModalDelete={setShowModalDelete} infoTask={selectedTask}/>}
    </div>
  )
}

export default Board