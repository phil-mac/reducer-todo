import React, {useReducer, useState} from 'react';
import moment from 'moment';

import {reducer, initialState} from '../reducers/todosReducer';

export default () => {
    const [todoState, dispatch] = useReducer(reducer, initialState);

    const [newTodo, setNewTodo] = useState('')
    
    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type: "ADD_TODO", payload: newTodo})
        setNewTodo('');
    }

    const toggleComplete = id =>{
        dispatch({type: "MARK_COMPLETE", payload: id})
    }

    const clearCompleted = () => {
        dispatch({type: 'CLEAR_COMPLETED'})
    }

    return(
        <ul>
            {todoState.todos.map(todo => (
                <li key={todo.id} onClick={()=>toggleComplete(todo.id)}>
                    <span><strong>{todo.item}</strong></span>
                    <span style={{fontSize: '80%', color: 'lightgrey'}}>  -  {moment(todo.id).fromNow()}</span>
                    {todo.completed && <span style={{color: 'red'}}><strong> X</strong></span>}
                </li>
            ))}
            <li>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        placeholder='new item'
                        onChange={handleChange}
                        value={newTodo}
                    />
                    <button type='submit'>Add</button>
                </form>
            </li>
            <button onClick={clearCompleted}>Clear Completed</button>
        </ul>
    )
}