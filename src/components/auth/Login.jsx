import React, { useCallback, useContext } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../config/firebase.config';
import { Link } from 'react-router-dom';
import { AuthContext } from './Auth';

import Toaster from '../../components/pages/Toaster';

const Login = ({history}) => {
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            
            try {
                await firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                    .then(() => {
                        Toaster('success', 'Logged-in successfully!');
                    setTimeout(() => {
                        console.log('success', 'Signed-up successfully!');
                        history.push('/');
                    }, 3000);
                });
            } catch (error) {
                Toaster('error', error.message);
                console.log('error', error.message);
            }
        },
        [history]
    );
    
    const currentUser = useContext(AuthContext);
    
    return (
        <React.Fragment>
            <div style={{width: '100%'}}>
                <h2
                    style={{textAlign: 'center', color: '#78472c', padding: '10px'}}
                >
                    Login
                </h2>
                <form onSubmit={handleLogin} className='userForm'>
                    <div>
                        <label>
                            Email:
                        </label> <br/>
                        <input className='signupInput' name='email' type="email" placeholder='example@gmail.com...' />
                    </div> <br/>
                    <div>
                        <label>
                            Password:
                        </label> <br/>
                        <input className='signupInput' name='password' type="password" placeholder='' />
                    </div> 
                    <br />
                    <br />
                    <div>
                        <input
                            type='submit'
                            value='Login'
                            style={submitBtn}
                        />
                    </div>
                    <br />
                    <Link to='/signup' style={{color: '#e8491d'}}>
                        Signup
                    </Link>
                        <span style={{color: '#78472c'}}> if you don't have an account.</span>
                </form>
            </div>
        </React.Fragment>
    )
}

const submitBtn = {
    flex: '1',
    background: '#a7b5be',
    fontSize: '18px',
    color: '#e8491d',
    outline: 'none',
    border: 'none',
    padding: '10px',
    width: '300px'
}

export default withRouter(Login);