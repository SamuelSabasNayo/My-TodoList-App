import React, { Component }  from 'react';
import Header from './components/layout/Headers';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import uuid from 'react-uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  
  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
      
    }) });
  }
  
  // Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  
  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  
  render() {
    return (
      <div className="App">
        <div className='container'>
        <Header />
        <AddTodo addTodo={ this.addTodo } />
        <Todos todos={ this.state.todos } markComplete={ this.markComplete } deleteTodo={ this.deleteTodo } />
        </div>
      </div>
    );
  }
}

export default App;