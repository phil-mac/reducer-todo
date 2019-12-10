export const initialState = {
    todos: [
        {
            item: 'Eat turkey',
            completed: true,
            id: 1575012467650,
            due: '2019-12-01T17:23'
        },
        {
            item: 'Learn bout reducers',
            completed: false,
            id: 1576015164650,
            due: '2019-12-18T17:23'
        },
    ]
}

export const reducer = (state, action) => {
    switch(action.type){
        case('ADD_TODO'):
            const newTodo = {
                item: action.payload.item,
                completed: false,
                id: Date.now(),
                due: action.payload.due
            }
            return{
                ...state,
                todos: [...state.todos, newTodo]
            }
        case('MARK_COMPLETE'):
            return{
                ...state,
                todos: state.todos.map(item => (
                    item.id === action.payload
                    ? {...item, completed: !item.completed}
                    :item
                ))
            }
        case('CLEAR_COMPLETED'):
            return{
                ...state,
                todos: state.todos.filter(item => (
                    item.completed === false
                ))
            }
        default:
            return state;
    }
}
