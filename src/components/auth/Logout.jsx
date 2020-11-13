import React from 'react';
import firebase from '../../config/firebase.config';
import { Redirect } from 'react-router';
import Toaster from '../../components/pages/Toaster';

const Logout = ({history}) => {
    const handleLogout = () => {
        Toaster('success', 'Logged-out successfully!');
        setTimeout(() => {
            firebase
                .auth()
                .signOut()
                .then(() => {
                        return <Redirect  to='/login' />
                })
        }, 2000);
    }
    
    return (
        <React.Fragment>
            <div style={{width: '100%'}}>
                <button 
                    style={logoutStyle}
                    onClick={handleLogout}
                >
                    Sign Out
                </button>
            </div>
        </React.Fragment>
    )
}

const logoutStyle = {
    width: '150px',
    background: '#f4f4f4',
    color: '#78472C',
    fontSize: '20px',
    border: 'none',
    outline: 'none',
    padding: '5px 10px',
    margin: '0 43%'
}

export default Logout;