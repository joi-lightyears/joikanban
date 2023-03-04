import React, {useState} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { cols } from '../data/data';

function Board() {
    const [columns, setColumns] = useState(cols);

    function onDragEnd(result) {

        const { source, destination, draggableId } = result;

        // If the draggable item was dropped outside of any droppable area, exit early
        if (!destination) {
            return;
        }

        // If the draggable item was dropped in the same position, exit early
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
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

    // function onDragEnd(val) {
        // // Your version
        // // let result = helper.reorder(val.source, val.destination, taskList);
        // // setTasks(result);
    
        // /// A different way!
        // const { draggableId, source, destination } = val;
    
        // const [sourceGroup] = taskList.filter(
        //   column => column.groupName === source.droppableId
        // );
    
        // // Destination might be `null`: when a task is
        // // dropped outside any drop area. In this case the
        // // task reamins in the same column so `destination` is same as `source`
        // const [destinationGroup] = destination
        //   ? taskList.filter(column => column.groupName === destination.droppableId)
        //   : { ...sourceGroup };
    
        // // We save the task we are moving
        // const [movingTask] = sourceGroup.tasks.filter(t => t.id === draggableId);
    
        // const newSourceGroupTasks = sourceGroup.tasks.splice(source.index, 1);
        // const newDestinationGroupTasks = destinationGroup.tasks.splice(
        //   destination.index,
        //   0,
        //   movingTask
        // );
    
        // // Mapping over the task lists means that you can easily
        // // add new columns
        // const newTaskList = taskList.map(column => {
        //   if (column.groupName === source.groupName) {
        //     return {
        //       groupName: column.groupName,
        //       tasks: newSourceGroupTasks
        //     };
        //   }
        //   if (column.groupName === destination.groupName) {
        //     return {
        //       groupName: column.groupName,
        //       tasks: newDestinationGroupTasks
        //     };
        //   }
        //   return column;
        // });
        // setTasks(newTaskList);
    //   }
    


    let backgroundColor, textColor
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
                        {column.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                            <div
                                className="item"
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                backgroundColor: snapshot.isDragging ? '#263B4A' : '#404258',
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
    </div>
  )
}

export default Board