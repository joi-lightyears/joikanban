import {BiDockRight} from 'react-icons/bi'



// const sidebarCollections = [
//     {
//         text: 'First Collection',
//         icon: <BiDockRight className='link-icon'/>,
//         url: '/'
//     },
//     {
//         text: 'Second Collection',
//         icon: <BiDockRight className='link-icon'/>,
//         url: 'about'
//     },
//     {
//         text: 'Third Collection',
//         icon: <BiDockRight className='link-icon'/>,
//         url: 'projects'
//     },
// ]

// export {sidebarCollections}

const userData = [
    {
        uid: 'joitaro',
        name: 'Joitaro',
        email: 'ntd@gmail.com',
        boards: [
            {
                id: 'board-1',
                title: 'Board 1',
                columns: [
                    {
                        id: 'todo',
                        title: 'To Do',
                        items: [
                            { id: 'item-1', title: 'NTD', status: 'todo', description: 'Item 1' },
                            { id: 'item-2', title: 'NTD', status: 'todo', description: 'Item 2' },
                            { id: 'item-3', title: 'NTD', status: 'todo', description: 'Item 3' },
                            { id: 'item-13', title: 'NTD', status: 'todo', description: 'Item 13' },
                            { id: 'item-14', title: 'NTD', status: 'todo', description: 'Item 14' },
                            { id: 'item-15', title: 'NTD', status: 'todo', description: 'Item 15' }
                        ]
                    },
                    {
                        id: 'in-progress',
                        title: 'In Progress',
                        items: [
                            { id: 'item-4', title: 'NTD', status: 'in-progress', description: 'Item 4' },
                            { id: 'item-5', title: 'NTD', status: 'in-progress', description: 'Item 5' },
                            { id: 'item-6', title: 'NTD', status: 'in-progress', description: 'Item 6' }
                        ]
                    },
                    {
                        id: 'blocked',
                        title: 'Blocked',
                        items: [
                            { id: 'item-7', title: 'NTD', status: 'blocked', description: 'Item 7' },
                            { id: 'item-8', title: 'NTD', status: 'blocked', description: 'Item 8' },
                            { id: 'item-9', title: 'NTD', status: 'blocked', description: 'Item 9' }
                        ]
                    },
                    {
                        id: 'done',
                        title: 'Done',
                        items: [
                            { id: 'item-10', title: 'NTD', status: 'done', description: 'Item 10' },
                            { id: 'item-11', title: 'NTD', status: 'done', description: 'Item 11' },
                            { id: 'item-12', title: 'NTD', status: 'done', description: 'Item 12' }
                        ]
                    }
                ]
            },


            {
                id: 'board-2',
                title: 'Board 2',
                columns: [
                    {
                        id: 'todo',
                        title: 'To Do',
                        items: [
                            { id: 'item-1', title: 'NTD', status: 'todo', description: 'Item 1' },
                            { id: 'item-2', title: 'NTD', status: 'todo', description: 'Item 2' },
                            { id: 'item-3', title: 'NTD', status: 'todo', description: 'Item 3' },
                            { id: 'item-15', title: 'NTD', status: 'todo', description: 'Item 15' }

                            
                        ]
                    },
                    {
                        id: 'in-progress',
                        title: 'In Progress',
                        items: [
                            { id: 'item-4', title: 'NTD', status: 'in-progress', description: 'Item 4' },
                            { id: 'item-5', title: 'NTD', status: 'in-progress', description: 'Item 5' },
                            { id: 'item-6', title: 'NTD', status: 'in-progress', description: 'Item 6' }
                        ]
                    },
                    {
                        id: 'blocked',
                        title: 'Blocked',
                        items: [
                            { id: 'item-7', title: 'NTD', status: 'blocked', description: 'Item 7' },
                            { id: 'item-8', title: 'NTD', status: 'blocked', description: 'Item 8' },
                            { id: 'item-9', title: 'NTD', status: 'blocked', description: 'Item 9' }
                        ]
                    },
                    {
                        id: 'done',
                        title: 'Done',
                        items: [
                            { id: 'item-10', title: 'NTD', status: 'done', description: 'Item 10' },
                            { id: 'item-11', title: 'NTD', status: 'done', description: 'Item 11' },
                            { id: 'item-12', title: 'NTD', status: 'done', description: 'Item 12' }
                        ]
                    }
                ]
            },


            {
                id: 'board-3',
                title: 'Board 3',
                columns: [
                    {
                        id: 'todo',
                        title: 'To Do',
                        items: [
                            { id: 'item-1', title: 'NTD', status: 'todo', description: 'Item 1' },
                            { id: 'item-2', title: 'NTD', status: 'todo', description: 'Item 2' },
                            { id: 'item-3', title: 'NTD', status: 'todo', description: 'Item 3' },
                            { id: 'item-13', title: 'NTD', status: 'todo', description: 'Item 13' },
                            { id: 'item-14', title: 'NTD', status: 'todo', description: 'Item 14' },
                        ]
                    },
                    {
                        id: 'in-progress',
                        title: 'In Progress',
                        items: [
                            { id: 'item-4', title: 'NTD', status: 'in-progress', description: 'Item 4' },
                            { id: 'item-5', title: 'NTD', status: 'in-progress', description: 'Item 5' },
                            { id: 'item-6', title: 'NTD', status: 'in-progress', description: 'Item 6' },
                            { id: 'item-15', title: 'NTD', status: 'in-progress', description: 'Item 15' }

                        ]
                    },
                    {
                        id: 'blocked',
                        title: 'Blocked',
                        items: [
                            { id: 'item-7', title: 'NTD', status: 'blocked', description: 'Item 7' },
                            { id: 'item-8', title: 'NTD', status: 'blocked', description: 'Item 8' },
                            { id: 'item-9', title: 'NTD', status: 'blocked', description: 'Item 9' }
                        ]
                    },
                    {
                        id: 'done',
                        title: 'Done',
                        items: [
                            { id: 'item-10', title: 'NTD', status: 'done', description: 'Item 10' },
                            { id: 'item-11', title: 'NTD', status: 'done', description: 'Item 11' },
                            { id: 'item-12', title: 'NTD', status: 'done', description: 'Item 12' }
                        ]
                    }
                ]
            },
        ]
    }

]

const cols = [
    {
        id: 'todo',
        title: 'To Do',
        items: [
            { id: 'item-1', description: 'Item 1' },
            { id: 'item-2', description: 'Item 2' },
            { id: 'item-3', description: 'Item 3' },
            { id: 'item-13', description: 'Item 13' },
            { id: 'item-14', description: 'Item 14' },
            { id: 'item-15', description: 'Item 15' }
        ]
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        items: [
            { id: 'item-4', description: 'Item 4' },
            { id: 'item-5', description: 'Item 5' },
            { id: 'item-6', description: 'Item 6' }
        ]
    },
    {
        id: 'blocked',
        title: 'Blocked',
        items: [
            { id: 'item-7', description: 'Item 7' },
            { id: 'item-8', description: 'Item 8' },
            { id: 'item-9', description: 'Item 9' }
        ]
    },
    {
        id: 'done',
        title: 'Done',
        items: [
            { id: 'item-10', description: 'Item 10' },
            { id: 'item-11', description: 'Item 11' },
            { id: 'item-12', description: 'Item 12' }
        ]
    }
];

export {cols, userData}