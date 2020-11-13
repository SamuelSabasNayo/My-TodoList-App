import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase.config';

import Toaster from '../../components/pages/Toaster';

const Signup = ({ history }) => {
    const handleSignup =useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            
            Toaster('success', 'Signed-up successfully!');
            setTimeout(() => {
                console.log('success', 'Signed-up successfully!');
                history.push('/');
            }, 2000);
        } catch (error) {
            Toaster('error', error.message);
            console.log('error', error.message);
        }
    }, [history]);
    
    return (
        <React.Fragment>
            <div style={{width: '100%'}}>
                <h2
                    style={{textAlign: 'center', color: '#78472c', padding: '10px'}}
                >
                    Signup
                </h2>
                <form onSubmit={handleSignup} className='userForm'>
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
                            value='Signup'
                            style={submitBtn}
                        />
                    </div>
                    <br />
                    <Link to='/login' style={{color: '#e8491d'}}>
                        Login
                    </Link>
                        <span style={{color: '#78472c'}}> if you have an account.</span>
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
    
export default withRouter(Signup);