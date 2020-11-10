import React, { useState } from 'react';
import firebase from '../../config/firebase.config';

const AddTodo = ({todo}) => {
    const [title, setTitle] = useState('');
    // const [title, setTitle] = useState(todo.title);
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        const db = firebase.firestore();
        db.collection('todos')
            .add({
                title
            })
            .then(() => {
                setTitle('')
            })
    }
    return (
        <form
            style={{
                display: 'flex',
                margin: '5px'
            }}
            onSubmit={onSubmit}
        >
        <input
            type='text'
            name='title'
            style={{
                flex: '10',
                padding: '10px',
                margin: '0 5px 0 0',
                fontSize: '16px',
                color: '#78472C',
                outline: 'none',
                border: '2px solid #a7b5be'
            }}
            placeholder='Add Todo...'
            value={title}
            onChange={e => {
                setTitle(e.target.value);
            }}
        />
            <input
                type='submit'
                value='Add Todo'
                className='addBtn'
                style={{
                    flex: '1',
                    background: '#a7b5be',
                    fontSize: '18px',
                    color: '#e8491d',
                    outline: 'none',
                    border: 'none',
                    padding: '10px',
                }}
            />
        </form>
    )
}

export default AddTodo;