import React from 'react';
import firebase from '../../config/firebase.config';
import Header from '../layout/Headers';
import Logout from '../auth/Logout';
import TodoItem from '../todos/TodoItem';
import AddTodo from '../todos/AddTodo';

const Home = () => {
    return  (
        <React.Fragment>
            <div style={{
                margin: '0', 
                background: '#f4f4f4'
            }}>
                <Logout />
                <AddTodo />
                <TodoItem/>
            </div>
        </React.Fragment>
    )
}

export default Home;