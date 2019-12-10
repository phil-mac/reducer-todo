import React, {useReducer} from 'react';

export default () => {
    
    return(
        <form>
            <input 
                type='text'
                placeholder='new item'
                onChange='handleChange'
            />
        </form>
    )
}