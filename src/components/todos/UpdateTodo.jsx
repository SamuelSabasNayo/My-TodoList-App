import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.config';

const TodoDelete = ({todo}) => {
    const [title, setTitle] = useState(todo.title);
    
    const onUpdate = () => {
        const db = firebase.firestore();
        db.collection('todos').doc(todo.id).set({...todo, title})
    }
    
    const onDelete = () => {
    console.log('hello sam');
        // const db = firebase.firestore();
        // db.collection('todos').doc(todo.id).delete()
    }
    
    return (
        <div >
            <div className='todo-items' key={todo.id}>
                    <input
                        value={todo.title}
                        style={{
                            border: 'none',
                            width: '40%',
                            fontSize: '18px',
                            background: '#f4f4f4'
                        }}
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                    />
                    {/* <button onClick={onUpdate} className='btn'>Update</button> */}
                    <button onClick={onDelete} className='btn'>Delete</button>
                </div>
        </div>
    )
    
}

export default TodoDelete;

