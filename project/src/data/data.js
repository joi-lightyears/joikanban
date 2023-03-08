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
                title: 'Starting',
                columns: [
                    {
                        id: 'todo',
                        title: 'To Do',
                        items: [
                            { id: 'item-1', title: 'NTD', status: 'todo', description: 'Item 1' },
                            { id: 'item-2', title: 'NTD', status: 'todo', description: 'Item 2' },
                            { id: 'item-3', title: 'NTD', status: 'todo', description: 'Item 3' }
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

        ]
    }

]



export {userData}