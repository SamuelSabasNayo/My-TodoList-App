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



// import React, { useState } from 'react';
// import firebase from '../../config/firebase.config';

// const AddTodo = ({todo}) => {
//     const [title, setTitle] = useState('');
//     // const [title, setTitle] = useState(todo.title);
    
//     const onSubmit = (e) => {
//         e.preventDefault();
        
//         const db = firebase.firestore();
//         db.collection('todos')
//             .add({
//                 title
//             })
//             .then(() => {
//                 setTitle('')
//             })
//     }
//     return (
//         <form
//             style={{
//                 display: 'flex',
//                 margin: '5px'
//             }}
//             onSubmit={onSubmit}
//         >
//         <input
//             type='text'
//             name='title'
//             style={{
//                 flex: '10',
//                 padding: '10px',
//                 margin: '0 5px 0 0',
//                 fontSize: '16px',
//                 color: '#78472C',
//                 outline: 'none',
//                 border: '2px solid #a7b5be'
//             }}
//             placeholder='Add Todo...'
//             value={title}
//             onChange={e => {
//                 setTitle(e.target.value);
//             }}
//         />
//             <input
//                 type='submit'
//                 value='Add Todo'
//                 className='addBtn'
//                 style={{
//                     flex: '1',
//                     background: '#a7b5be',
//                     fontSize: '18px',
//                     color: '#e8491d',
//                     outline: 'none',
//                     border: 'none',
//                     padding: '10px',
//                 }}
//             />
//         </form>
//     )
// }

// export default AddTodo;


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// export class AddTodo extends Component {
//     state = {
//         title: ''
//     }
    
//     onSubmit = (e) => {
//         e.preventDefault();
//         this.props.addTodo(this.state.title);
//         this.setState({ title: '' });
//     }
    
//     onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
//     render() {
//         return (
//             <form onSubmit={ this.onSubmit } style={{ display: 'flex' }}>
//                 <input
//                     type='text'
//                     name='title'
//                     style={{
//                         flex: '10',
//                         padding: '10px',
//                         margin: '0 5px 0 0',
//                         fontSize: '16px',
//                         color: '#78472C',
//                         outline: 'none',
//                         border: '2px solid #a7b5be'
//                     }}
//                     placeholder='Add Todo...'
//                     value={ this.state.title }
//                     onChange={ this.onChange }
//                 />
//                 <input
//                     type='submit'
//                     value='Add Todo'
//                     className='btn'
//                     style={{
//                         flex: '1',
//                         background: '#a7b5be',
//                         fontSize: '18px',
//                         color: '#e8491d',
//                         outline: 'none'
//                     }}
//                 />
//             </form>
//         )
//     }
// }

// // PropTypes
// AddTodo.propTypes = {
//     addTodo: PropTypes.func.isRequired
// }

// export default AddTodo;