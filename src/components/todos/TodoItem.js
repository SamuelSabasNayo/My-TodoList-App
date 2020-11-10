import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.config';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoDelete from './TodoDelete';

const TodoItem = (todo) => {
    const [todos, setTodos] = useState([]);
        
    useEffect(() => {
        const getData = () => {
            const db = firebase.firestore();
            db.collection('todos')
                .onSnapshot((snapShot) => {
                    const newTodos = snapShot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setTodos(newTodos)
                })
                }
        getData();
    }, []);
    
    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('todos').doc(todo.id).delete();
        console.log('hello sam')
    }
    
    return (
        <div className='container'>
            {todos.map((todo) => 
                <div className='todo-items'>
                    <TodoDelete todo={todo} />
                </div>
            )}
        </div>
    )
    
}

export default TodoItem;




// import React, { useState, useEffect } from 'react';
// import firebase from '../../config/firebase.config';

// const TodoItem = (todo) => {
//     const [todos, setTodos] = useState([]);
        
//     useEffect(() => {
//         const getData = () => {
//             const db = firebase.firestore();
//             db.collection('todos')
//                 .onSnapshot((snapShot) => {
//                     const newTodos = snapShot.docs.map((doc) => ({
//                         id: doc.id,
//                         ...doc.data()
//                     }))
                    
//                     setTodos(newTodos)
//                 })
//         }
            
//         getData();
//     }, []);
    
//     return (
//         <div >
//             {todos.map((todo) => 
//                 <div className='todo-items' key={todo.id}>
//                     <input type='checkbox' />
//                     {' '}
//                     <input
//                         value={todo.title}
//                         style={{
//                             border: 'none',
//                             width: '40%',
//                             fontSize: '18px',
//                             background: '#f4f4f4'
//                         }}
//                     />
//                     <button className='btn'>Delete</button>
//                 </div>
//             )}
//         </div>
//     )
    
// }

// export default TodoItem;



// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// export class TodoItem extends Component {
//     getStyle = () => {
//         return {
//             backgroundColor: '#f4f4f4',
//             padding: '10px',
//             borderBottom: '1px dotted #ccc',
//             textDecoration: this.props.todo.completed ? 'line-through' : 'none'
//         }
//     }
    
//     render() {
//         const { id, title } = this.props.todo;
//         return (
//             <div style={ this.getStyle() }>
//                 <p>
//                     <input type='checkbox' onChange={ this.props.markComplete.bind(this, id) } /> {' '}
//                     { title }
//                     <button onClick={ this.props.deleteTodo.bind(this, id) } style={btnStyle}>Delete</button>
//                 </p>
//             </div>
//         )
//     }
// }

// // PropTypes
// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     deleteTodo: PropTypes.func.isRequired
// }

// const btnStyle = {
//     background: '#ff0000',
//     color: '#fff',
//     border: 'none',
//     padding: '5px 10px',
//     borderRadius: '10%',
//     cursor: 'pointer',
//     float: 'right'
//     // outline: '#fff'
// }

// export default TodoItem;