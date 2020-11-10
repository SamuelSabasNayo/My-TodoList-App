import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.config';

const TodoDelete = ({todo}) => {
    const [title, setTitle] = useState(todo.title);
    
    // const onUpdate = () => {
    //     const db = firebase.firestore();
    //     db.collection('todos').doc(todo.id).set({...todo, title})
    // }
    
    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('todos').doc(todo.id).delete();
    }
    
    return (
        <div >
            <div className='todo-items' key={todo.id}>
                    <input
                        value={todo.title}
                        style={{
                            border: 'none',
                            // width: '80%',
                            fontSize: '18px',
                            background: '#f4f4f4',
                            flex: '12',
                            color: '#78472c'
                        }}
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                    />
                    <button onClick={onDelete} style={{flex: '1'}} className='btn'>Delete</button>
                </div>
        </div>
    )
    
}

export default TodoDelete;

