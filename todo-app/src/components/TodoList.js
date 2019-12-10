import React, {useReducer, useState} from 'react';
import moment from 'moment';

import {reducer, initialState} from '../reducers/todosReducer';

export default () => {
    const [todoState, dispatch] = useReducer(reducer, initialState);

    const [newTodo, setNewTodo] = useState('')
    const [newDueDate, setNewDueDate] = useState('');
    
    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const handleTimeChange = e => {
        console.log(e.target.value);
        setNewDueDate(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type: "ADD_TODO", payload: {item: newTodo, due: newDueDate}})
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
                    <span style={{fontSize: '80%', color: 'lightgrey'}}>  - created {moment(todo.id).fromNow()}</span>
                    {moment(todo.due).fromNow().includes('ago') && 
                        <span style={{fontSize: '80%', color: 'red'}}>  - due {moment(todo.due).fromNow()}</span>
                    }
                    {todo.completed && <span style={{color: 'red'}}><strong> X</strong></span>}
                </li>
            ))}
            <div>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        placeholder='new item'
                        onChange={handleChange}
                        value={newTodo}
                    />
                    <br/>
                    <input 
                        type='datetime-local'
                        onChange={handleTimeChange}
                    />
                    {/* <input 
                        type='time'
                    /> */}
                    <br/>
                    <button type='submit'>Add</button>
                </form>
            </div>
            <hr/>
            <button onClick={clearCompleted}>Clear Completed</button>
        </ul>
    )
}