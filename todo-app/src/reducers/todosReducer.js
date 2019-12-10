export const initialState = {
    todos: [
        {
            item: 'Eat turkey',
            completed: true,
            id: 1575012467650
        },
        {
            item: 'Learn bout reducers',
            completed: false,
            id: 1576015164650
        },
    ]
}

export const reducer = (state, action) => {
    switch(action.type){
        case('ADD_TODO'):
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
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
