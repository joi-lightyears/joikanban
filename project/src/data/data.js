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


const cols = [
    {
        id: 'todo',
        title: 'To Do',
        items: [
            { id: 'item-1', content: 'Item 1' },
            { id: 'item-2', content: 'Item 2' },
            { id: 'item-3', content: 'Item 3' },
            { id: 'item-13', content: 'Item 13' },
            { id: 'item-14', content: 'Item 14' },
            { id: 'item-15', content: 'Item 15' }
        ]
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        items: [
            { id: 'item-4', content: 'Item 4' },
            { id: 'item-5', content: 'Item 5' },
            { id: 'item-6', content: 'Item 6' }
        ]
    },
    {
        id: 'blocked',
        title: 'Blocked',
        items: [
            { id: 'item-7', content: 'Item 7' },
            { id: 'item-8', content: 'Item 8' },
            { id: 'item-9', content: 'Item 9' }
        ]
    },
    {
        id: 'done',
        title: 'Done',
        items: [
            { id: 'item-10', content: 'Item 10' },
            { id: 'item-11', content: 'Item 11' },
            { id: 'item-12', content: 'Item 12' }
        ]
    }
];

export {cols}