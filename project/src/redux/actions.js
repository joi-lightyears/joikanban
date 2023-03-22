export const setInitData = (data) => {
    return {
        type: 'SET_INIT_DATA',
        payload: data,
    };
};


export const addBoard = (board) => {
    return {
        type: 'ADD_BOARD',
        payload: board,
    };
}


export const addItem = (boardId, columnId, newItem) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            boardId,
            columnId,
            newItem,
        },
    }
}


export const deleteItem = (boardId, columnId, itemId) => {
    return {
        type: 'DELETE_ITEM',
        payload: {
            boardId,
            columnId,
            itemId,
        },
    }
}

export const editItem = (boardId, itemId, selectedTask, updatedItem) => {
    return {
        type: 'EDIT_ITEM',
        payload: {
            boardId,
            itemId,
            selectedTask,
            updatedItem,
        },
    }
}

export const optionChange = (boardId, oldStatus, newStatus, taskId) => {
    return {
        type: 'OPTION_CHANGE',
        payload: {
            boardId,
            oldStatus,
            newStatus,
            taskId,
        },
    }
}

export const onMove = (boardId, source, destination, draggableId) => {
    return {
        type: 'ON_DRAG_END',
        payload: {
            boardId,
            source,
            destination,
            draggableId,
        },
    }
}