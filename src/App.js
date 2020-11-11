import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Headers';
import Home from '../src/components/auth/Home';
import Login from '../src/components/auth/Login';
import Signup from '../src/components/auth/Signup';
import { AuthProvider } from './components/auth/Auth';
import PrivateRoute from './components/auth/PrivateRoute';

import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          {/* <Route exact path='/' component={Home} /> */}
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import firebase from './config/firebase.config';
// import Header from './components/layout/Headers';
// import TodoItem from './components/todos/TodoItem';
// import AddTodo from './components/todos/AddTodo';

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <AddTodo />
//         < TodoItem/>
//       </div>
//     </Router>
//   );
// }

// export default App;







// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import firebase from './config/firebase.config';
// import Header from './components/layout/Headers';
// import AddTodo from './components/todos/AddTodo';
// import TodoDelete from '../src/components/todos/TodoDelete';

// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState('');
        
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
    
//     const onSubmit = (e) => {
//       e.preventDefault();
      
//       const db = firebase.firestore();
//       db.collection('todos')
//           .add({
//               title
//           })
//           .then(() => {
//               setTitle('')
//           })
//   }
  
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <AddTodo />
//         <div className='container'>
//             {todos.map((todo) => 
//                 <div className='todo-items'>
//                     <TodoDelete todo={todo} />
//                 </div>
//             )}
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/layout/Headers';
// import AddTodo from './components/todos/AddTodo';
// import TodoItem from './components/todos/TodoItem';

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <AddTodo />
//         <TodoItem />
//       </div>
//     </Router>
//   );
// }

// export default App;






// import React from 'react';
// import firebase from './config/firebase.config';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './components/layout/Headers';
// import Todos from './components/todos/Todos';
// import {TodoInput} from './components/todos/TodoInput';

// import './App.css';

// function App() {
//   const [todos, setTodos] = React.useState([]);
//   const [newTodoTitle, setNewTodoTitle] = React.useState()
  
//   React.useEffect(() => {
//     const fetchData = async () => {
//       const db = firebase.firestore();
//       const todos = await db.collection('todos').get();
//       const res = todos.docs.map((doc => ({ ...doc.data(), id: doc.id})));
        
//       setTodos(res);
//     }
//     fetchData();
//   }, [])
  
//   const onCreate = () => {
//     const db = firebase.firestore();
//     db.collection('todos').add({title: newTodoTitle})
//   }
  
//   return (
//     <Router>
//       <div className="App">
//       <Header />
//         <ul>
//           <input value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} />
//           <button onClick={onCreate}>Add Todo</button>
//           {todos.map(todo => (
//             <li key={todo.id}>
//             <TodoInput todo={todo} />
//             </li>
//           ))}
//         </ul>
        
//       </div>
//     </Router>
//   );
// }

// export default App;