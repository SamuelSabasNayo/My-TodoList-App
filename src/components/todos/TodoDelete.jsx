import React, { useState } from 'react';
import firebase from '../../config/firebase.config';

const TodoDelete = ({todo}) => {
    const [title, setTitle] = useState(todo.title);
    
    // Toggle complete
    const markComplete = (id) => {
        // console.log(id, todo.completed)
        const db = firebase.firestore();
        if (todo.completed === false) {
            db.collection('todos').doc(todo.id).set({...todo, completed:true});
        } else {
            db.collection('todos').doc(todo.id).set({...todo, completed:false});
        }
    }
    // const onUpdate = () => {
    //     const db = firebase.firestore();
    //     db.collection('todos').doc(todo.id).set({...todo, title})
    // }
    
    const getStyle = () => {
        return {
            border: 'none',
            fontSize: '18px',
            background: '#f4f4f4',
            flex: '12',
            color: '#78472c',
            textDecoration: todo.completed ? 'line-through' : 'none'
        }
    }

    // Delete Todo
    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('todos').doc(todo.id).delete();
    }
    
    const { id } = todo;
    return (
        <div className='todo-items' key={todo.id}>
            <input
                type='checkbox'
                style={{
                    margin: '2px 0',
                    border: '#78472c',
                    background: '#f4f4f4',
                    flex: '0.5'
                }}
                onChange={markComplete.bind(this, id)}
            /> 
            <p
                style={getStyle()}
                onChange={e => {
                    setTitle(e.target.value);
                }}>
                {todo.title}
            </p>
            <button onClick={onDelete} style={{flex: '1'}} className='btn'>Delete</button>
        </div>
    )   
}

export default TodoDelete;




// import React, { useState, useEffect } from 'react';
// import firebase from '../../config/firebase.config';

// const TodoDelete = ({todo}) => {
//     const [title, setTitle] = useState(todo.title);
    
//     // const onUpdate = () => {
//     //     const db = firebase.firestore();
//     //     db.collection('todos').doc(todo.id).set({...todo, title})
//     // }
    
//     const onDelete = () => {
//         const db = firebase.firestore();
//         db.collection('todos').doc(todo.id).delete();
//     }
    
//     return (
//         <div >
//             <div className='todo-items' key={todo.id}>
//                     <input
//                         value={todo.title}
//                         style={{
//                             border: 'none',
//                             width: '50%',
//                             fontSize: '18px',
//                             background: '#f4f4f4',
//                             flex: '12',
//                             color: '#78472c'
//                         }}
//                         onChange={e => {
//                             setTitle(e.target.value);
//                         }}
//                     />
//                     <button onClick={onDelete} style={{flex: '1'}} className='btn'>Delete</button>
//                 </div>
//         </div>
//     )
    
// }

// export default TodoDelete;

