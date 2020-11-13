import React, { useState } from 'react';
import firebase from '../../config/firebase.config';

import Toaster from '../../components/pages/Toaster';

const AddTodo = ({todo}) => {
    const [title, setTitle] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        const myUser = firebase.auth().currentUser;
        const authorEmail = myUser.email;
        
        if (title === '') {
            Toaster('error', 'Please! Add Todo.');
        } else {
            Toaster('success', 'Added Todo!');
            const db = firebase.firestore();
            db.collection('todos')
                .add({
                    title,
                    completed: false,
                    authorEmail
                })
                .then(() => {
                    setTitle('')
                })
        }
    }
    
    const onChange = e => {
        const addedTodo = e.target.value;
            setTitle(addedTodo);
    }
    return (
        <form
            style={{
                display: 'flex',
                margin: '5px'
            }}
            onSubmit={onSubmit}
        >
        {/* <div className='addingError'></div> <br/> */}
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
            onChange={onChange}
            className='addingError'
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