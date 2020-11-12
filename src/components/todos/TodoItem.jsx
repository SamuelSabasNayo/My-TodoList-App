import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.config';
import Todos from './Todos';

const TodoItem = () => {
    const [todos, setTodos] = useState([]);
    // console.log(currentAuthor)
    useEffect(() => {
        const myUserData = firebase.auth().currentUser;
        const userEmail = myUserData.email;
        console.log(`signed as ${userEmail}`);
        const getData = () => {
            const db = firebase.firestore();
            db.collection('todos')
                .where('authorEmail', '==', `${userEmail}` )
                .onSnapshot((snapShot) => {
                    // const newTodos = snapShot.docs.map((doc) => 
                    //     console.log(doc)
                    // )
                    const newTodos = snapShot.docs.map((doc) => ({
                        id: doc.id,
                        // authorEmail: doc.data(),
                        ...doc.data()
                    }))
                    setTodos(newTodos)
                })
        }
        getData();
    }, []);
    
    return (
        <div className='container'>
        {todos.map((todo) => 
                <Todos todo={todo} />
        )}
        </div>
    )
}

export default TodoItem;