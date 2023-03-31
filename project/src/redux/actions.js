export const setInitData = (boards, selectedBoardId) => {
    return {
        type: 'SET_INIT_DATA',
        payload: {
            boards,
            selectedBoardId,
        },
    };
};
export const selectBoard = (selectedBoardId) => {
    return {
        type: 'UPDATE_SELECTED_BOARD_ID',
        payload: {
            selectedBoardId,
        },
    };
};
export const setActiveCollect = (activeCollect) => {
    return {
        type: 'ACTIVE_COLLECT',
        payload: {
            activeCollect,
        },
    };
};
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

export const addBoard = (newBoard) => {
    return {
        type: 'ADD_BOARD',
        payload: {
            newBoard,
        },
    };
}

export const deleteBoard = (boardId) => {
    return {
        type: 'DELETE_BOARD',
        payload: {
            boardId,
        },
    };
}

export const editBoard = (boardId, newTitle) => {
    return {
        type: 'EDIT_BOARD',
        payload: {
            boardId,
            newTitle,
        },
    };
}