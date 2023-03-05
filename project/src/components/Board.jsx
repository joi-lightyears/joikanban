import React, {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { cols, userData } from '../data/data';
import {BiPlusMedical} from 'react-icons/bi'
import ModalAddTask from './ModalAddTask';

function Board({board}) {
    
    const [columns, setColumns] = useState(board.columns);
    const [showModal, setShowModal] = useState(false);
    // useEffect(() => {
    //     setColumns(board.columns);
    // }, [board]);
    // console.log(board.columns)
    // console.log(columns);
    function onDragEnd(result) {
        const { source, destination, draggableId } = result;

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
    const handleAddMore = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (data) => {
        console.log(data);
    };


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

                        <div onClick={handleAddMore} className="item add-task">
                            <BiPlusMedical/> Add new task
                        </div>
                        {column.items.map((item, index) => (
                            
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                <div
                                    className="item"
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    style={{
                                    backgroundColor: snapshot.isDragging ? 'rgba(43, 45, 49, 0.5)' : 'rgba(43, 45, 49, 1)',
                                    ...provided.draggableProps.style
                                    }}
                                >
                                    {item.content}
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

        {showModal && <ModalAddTask onClose={handleCloseModal} onSubmit={handleSubmit}/>}
    </div>
  )
}

export default Board