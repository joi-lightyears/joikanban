import React, {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {BiPlusMedical} from 'react-icons/bi'
import ModalAddTask from './ModalAddTask';
import ModalInfoTask from './ModalInfoTask';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';
import { v4 as uid } from 'uuid';

function Board({board}) {
    
    const [columns, setColumns] = useState(board.columns);
    const [showModal, setShowModal] = useState(false);
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState({});
    const [selectedTask, setSelectedTask] = useState({});
    // useEffect(() => {
    //     setColumns(board.columns);
    // }, [board]);
    // console.log(board.columns)
    // console.log(columns);
    function onDragEnd(result) {
        const { source, destination, draggableId } = result;
        // console.log(result);
        // If the draggable item was dropped outside of any droppable area, exit early
        if (!destination) {
            return;
        }

        // If the draggable item was dropped in the same column, exit if in the same index
        // reorder if in different index
        if (destination.droppableId === source.droppableId ) {
            if(destination.index === source.index){
                return;
            }else{
                const column = columns.find((column) => column.id === source.droppableId);
                const newItems = [...column.items];
                const [removed] = newItems.splice(source.index, 1);
                newItems.splice(destination.index, 0, removed);
                const newColumns = [...columns];
                newColumns.find((column) => column.id === source.droppableId).items = newItems;
                setColumns(newColumns);
                return;
            }
        }


        // Find the column corresponding to the source droppable area
        const sourceColumn = columns.find((column) => column.id === source.droppableId);

        // Find the item that was dragged
        const draggedItem = sourceColumn.items.find((item) => item.id === draggableId);
        // console.log(draggedItem)
        //update status of that task when dragged
        draggedItem.status = destination.droppableId;

        // Remove the item from the source column
        const newSourceItems = [...sourceColumn.items];
        newSourceItems.splice(source.index, 1);

        // Find the column corresponding to the destination droppable area
        const destinationColumn = columns.find((column) => column.id === destination.droppableId);

        // Add the item to the destination column
        const newDestinationItems = [...destinationColumn.items];
        newDestinationItems.splice(destination.index, 0, draggedItem);

        // Update the state with the new positions of the items in the columns
        const newColumns = [...columns];
        newColumns.find((column) => column.id === source.droppableId).items = newSourceItems;
        newColumns.find((column) => column.id === destination.droppableId).items = newDestinationItems;
        setColumns(newColumns);
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
        const indexOldTask = columns.find((column) => column.id === oldStatus).items.findIndex((item) => item.id === taskId);
        const lengthNewTask = columns.find((column) => column.id === newStatus).items.length;
        const tempResult = {
            destination: {
                droppableId: newStatus,
                index: lengthNewTask,
            },
            draggableId: taskId,
            source: {
                droppableId: oldStatus,
                index: indexOldTask,
            }
        }
        onDragEnd(tempResult);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e);
        const title = e.target.title.value;
        const description = e.target.description.value;
        const status = e.target.status.value;
        // console.log(title, description, status);


        const newColumns = [...columns];
        const newItems = [...newColumns.find((column) => column.id === status).items];
        newItems.push({
            id: uid(),
            title: title,
            description: description,
            status: status
        });
        // console.log(newItems);
        newColumns.find((column) => column.id === status).items = newItems;
        setColumns(newColumns);
        setShowModal(false);

    };

    const handleEdit = (e) => {
        setShowModalEdit(false);
        e.preventDefault()
        const title = e.target.title.value;
        const description = e.target.description.value;
        const status = e.target.status.value;
        const indexOldTask = columns.find((column) => column.id === selectedTask.status).items.findIndex((item) => item.id === selectedTask.id);

        selectedTask.title = title;
        selectedTask.description = description;

        // console.log(e);

        // const newColumns = [...columns];

        if(selectedTask.status !== status){
            const lengthNewTask = columns.find((column) => column.id === status).items.length;
            const tempResult = {
                destination: {
                    droppableId: status,
                    index: lengthNewTask,
                },
                draggableId: selectedTask.id,
                source: {
                    droppableId: selectedTask.status,
                    index: indexOldTask,
                }
            }
            onDragEnd(tempResult);
        }else{
            const newItems = [...columns.find((column) => column.id === selectedTask.status).items];
            newItems[indexOldTask] = selectedTask;
            const newColumns = [...columns];
            newColumns.find((column) => column.id === selectedTask.status).items = newItems;
            setColumns(newColumns);
        }
        

    }
    const handleDelete = () => {
        const indexOldTask = columns.find((column) => column.id === selectedTask.status).items.findIndex((item) => item.id === selectedTask.id);
        const newItems = [...columns.find((column) => column.id === selectedTask.status).items];
        newItems.splice(indexOldTask, 1);
        const newColumns = [...columns];
        newColumns.find((column) => column.id === selectedTask.status).items = newItems;
        setColumns(newColumns);
        setShowModalDelete(false);
    }

  return (
    <div className="board-container">
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="columns">
                {columns.map((column) => (
                <Droppable key={column.id} droppableId={column.id}>
                    {(provided, snapshot) => (

                    <div
                        className="column"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                        // background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey'
                        }}
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