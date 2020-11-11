import React from 'react';
import firebase from '../../config/firebase.config'; 

export const TodoInput = ({todo}) => {
    const [title, setTitle] = React.useState(todo.title);
    
    const onUpdate = () => {
        const db = firebase.firestore();
        db.collection('todos').doc(todo.id).set({...todo, title})
    }
    
    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('todos').doc(todo.id).delete()
    }
    return (
        <>
            <input 
                value={title}
                onChange={e => {
                    setTitle(e.target.value);
                }}
            />
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>
        </>
    )
}
