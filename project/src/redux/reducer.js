

// const getInitialState = () => {


export const initialState ={
    id: 1,
    selectedBoardId: null,
    // activeCollect: 0,
    boards: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INIT_DATA':
            {const {boards, selectedBoardId} = action.payload;
            console.log('reducer')
            return {
                ...state,
                selectedBoardId,
                boards,
            }}
        case 'UPDATE_SELECTED_BOARD_ID':
            {
                const { selectedBoardId } = action.payload;
                return {
                    ...state,
                    selectedBoardId,
                };
            }
        // case 'ACTIVE_COLLECT':
        //     {
        //         const { activeCollect } = action.payload;
        //         return {
        //             ...state,
        //             activeCollect,
        //         };
        //     }
        case 'ADD_ITEM':
            {
                const { boardId, columnId, newItem } = action.payload;
                // console.log(boardId, columnId, newItem)
                const board = state.boards.find(board => board.id === boardId);
                const column = board.columns.find(column => column.id === columnId);
                const newColumn = {
                    ...column,
                    items: [...column.items, newItem]
                };
                const newColumns = [...board.columns];
                const columnIndex = newColumns.findIndex(column => column.id === columnId);
                newColumns[columnIndex] = newColumn;
                const newBoard = {
                    ...board,
                    columns: newColumns
                };
                const newBoards = [...state.boards];
                const boardIndex = newBoards.findIndex(board => board.id === boardId);
                newBoards[boardIndex] = newBoard;
                return {
                    ...state,
                    boards: newBoards
                };
            }
        case 'DELETE_ITEM':
            {
                const { boardId, columnId, itemId } = action.payload;
                // console.log(boardId, columnId, itemId)
                const board = state.boards.find(board => board.id === boardId);
                const column = board.columns.find(column => column.id === columnId);
                const newItems = column.items.filter(item => item.id !== itemId);
                const newColumn = {
                    ...column,
                    items: newItems
                };
                const newColumns = [...board.columns];
                const columnIndex = newColumns.findIndex(column => column.id === columnId);
                newColumns[columnIndex] = newColumn;
                const newBoard = {
                    ...board,
                    columns: newColumns
                };
                const newBoards = [...state.boards];
                const boardIndex = newBoards.findIndex(board => board.id === boardId);
                newBoards[boardIndex] = newBoard;
                return {
                    ...state,
                    boards: newBoards
                };
            }
            case 'EDIT_ITEM':
            {
                const { boardId, itemId, selectedTask, updatedItem } = action.payload;
                const board = state.boards.find(board => board.id === boardId);
                if(selectedTask.status !== updatedItem.status) {
                    const sourceColumn = board.columns.find(column => column.id === selectedTask.status);
                    const destinationColumn = board.columns.find(column => column.id === updatedItem.status);
                    
                    const newSourceItems = sourceColumn.items.filter(item => item.id !== itemId);
                    const newSourceColumn = { ...sourceColumn, items: newSourceItems };
                    
                    const newDestinationColumn = { ...destinationColumn, items: [...destinationColumn.items, updatedItem] };
                    const newColumns = board.columns.map(column => {
                        if (column.id === newSourceColumn.id) {
                          return newSourceColumn;
                        } else if (column.id === destinationColumn.id) {
                          return newDestinationColumn;
                        } else {
                          return column;
                        }
                      });
                    const newBoard = {
                        ...board,
                        columns: newColumns
                    };
                    const newBoards = [...state.boards];
                    const boardIndex = newBoards.findIndex(board => board.id === boardId);
                    newBoards[boardIndex] = newBoard;
                    // console.log(newBoards)
                    return {
                        ...state,
                        boards: newBoards
                    };
                }else{
                    const column = board.columns.find(column => column.id === updatedItem.status);
                    const newItems = column.items.map(item => {
                        if (item.id === itemId) {
                          return updatedItem;
                        } else {
                          return item;
                        }
                      });
                    const newColumn = {
                        ...column,
                        items: newItems
                    };
                    const newColumns = [...board.columns];
                    const columnIndex = newColumns.findIndex(column => column.id === updatedItem.status);
                    newColumns[columnIndex] = newColumn;
                    const newBoard = {
                        ...board,
                        columns: newColumns
                    };
                    const newBoards = [...state.boards];
                    const boardIndex = newBoards.findIndex(board => board.id === boardId);
                    newBoards[boardIndex] = newBoard;
                    return {
                        ...state,
                        boards: newBoards
                    };
                }

            }
            case 'OPTION_CHANGE':
            {
                // console.log(action.payload)
                const {boardId, oldStatus, newStatus, taskId} = action.payload;
                const board = state.boards.find(board => board.id === boardId);
                const sourceColumn = board.columns.find(column => column.id === oldStatus);
                const destinationColumn = board.columns.find(column => column.id === newStatus);
                const itemToMove = sourceColumn.items.find(item => item.id === taskId);
                const newStatusItemToMove = {...itemToMove, status: newStatus}
                const newSourceItems = sourceColumn.items.filter(item => item.id !== taskId);
                const newSourceColumn = { ...sourceColumn, items: newSourceItems };
                const newDestinationColumn = { ...destinationColumn, items: [...destinationColumn.items, newStatusItemToMove] };
                const newColumns = board.columns.map(column => {
                    if (column.id === newSourceColumn.id) {
                        return newSourceColumn;
                    } else if (column.id === destinationColumn.id) {
                        return newDestinationColumn;
                    } else {
                        return column;
                    }
                });
                const newBoard = {
                    ...board,
                    columns: newColumns
                };
                const newBoards = [...state.boards];
                const boardIndex = newBoards.findIndex(board => board.id === boardId);
                newBoards[boardIndex] = newBoard;
                console.log(newBoards)
                return {
                    ...state,
                    boards: newBoards
                };
            }
            case 'ON_DRAG_END':
            {
                const {boardId, source, destination, draggableId} = action.payload;
                // If the draggable item was dropped outside of any droppable area, exit early
                if (!destination) {
                    return state;
                }
                // If the draggable item was dropped in the same column, exit if in the same index
                // reorder if in different index
                if (destination.droppableId === source.droppableId) {
                    if (destination.index === source.index) {
                        return state;
                    }else{
                        const board = state.boards.find(board => board.id === boardId);
                        const column = board.columns.find(column => column.id === source.droppableId);
                        const newItems = [...column.items];
                        const [reorderedItem] = newItems.splice(source.index, 1);
                        newItems.splice(destination.index, 0, reorderedItem);
                        const newColumn = {
                            ...column,
                            items: newItems
                        };
                        const newColumns = [...board.columns];
                        const columnIndex = newColumns.findIndex(column => column.id === source.droppableId);
                        newColumns[columnIndex] = newColumn;
                        const newBoard = {
                            ...board,
                            columns: newColumns
                        };
                        const newBoards = [...state.boards];
                        const boardIndex = newBoards.findIndex(board => board.id === boardId);
                        newBoards[boardIndex] = newBoard;
                        return {
                            ...state,
                            boards: newBoards
                        };
                    }
                }
                // If the draggable item was dropped in a different column, move it
                const board = state.boards.find(board => board.id === boardId);
                const sourceColumn = board.columns.find(column => column.id === source.droppableId);
                const destinationColumn = board.columns.find(column => column.id === destination.droppableId);
                const itemToMove = sourceColumn.items.find(item => item.id === draggableId);
                const newStatusItemToMove = {...itemToMove, status: destination.droppableId};
                const newSourceItems = sourceColumn.items.filter(item => item.id !== draggableId);
                const newSourceColumn = { ...sourceColumn, items: newSourceItems };
                const newDestinationItems = [...destinationColumn.items]
                newDestinationItems.splice(destination.index, 0, newStatusItemToMove);
                const newDestinationColumn = { ...destinationColumn, items: newDestinationItems };
                const newColumns = board.columns.map(column => {
                    if (column.id === newSourceColumn.id) {
                        return newSourceColumn;
                    } else if (column.id === destinationColumn.id) {
                        return newDestinationColumn;
                    } else {
                        return column;
                    }
                });
                const newBoard = {
                    ...board,
                    columns: newColumns
                };
                const newBoards = [...state.boards];
                const boardIndex = newBoards.findIndex(board => board.id === boardId);
                newBoards[boardIndex] = newBoard;
                return {
                    ...state,
                    boards: newBoards
                };
               
            }
            case 'ADD_BOARD':
            {
                const {newBoard} = action.payload;
                return {
                    ...state,
                    boards: [...state.boards, newBoard]
                };
            }
            case 'DELETE_BOARD':
            {
                const {boardId} = action.payload;
                const tempBoards = state.boards.filter(board => board.id !== boardId);
                const newBoards = [...tempBoards];
                return {
                    ...state,
                    boards: newBoards
                };
            }
            case 'EDIT_BOARD':
            {
                const {boardId, newTitle} = action.payload;
                const board = state.boards.find(board => board.id === boardId);
                const newBoard = {
                    ...board,
                    title: newTitle
                };
                const newBoards = [...state.boards];
                const boardIndex = newBoards.findIndex(board => board.id === boardId);
                newBoards[boardIndex] = newBoard;
                return {
                    ...state,
                    boards: newBoards
                };
            }
        
        default:
            return state;
    }
}

export default rootReducer;