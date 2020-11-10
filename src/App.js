import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from './config/firebase.config';
import Header from './components/layout/Headers';
import AddTodo from './components/todos/AddTodo';
import TodoDelete from '../src/components/todos/TodoDelete';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
        
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
    <Router>
      <div className="App">
        <Header />
        <AddTodo />
        <div className='container'>
            {todos.map((todo) => 
                    <TodoDelete todo={todo} />
            )}
        </div>
      </div>
    </Router>
  );
}

export default App;