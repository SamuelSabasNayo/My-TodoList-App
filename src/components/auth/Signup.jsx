import React from 'react';
import firebase from '../../config/firebase.config';

const Signup = () => {
    return (
        <React.Fragment>
            <div style={{width: '100%'}}>
                <button 
                    style={logoutStyle}
                    onClick={() => firebase
                        .auth()
                        .signOut()
                    }
                >
                    Signup
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
    
export default Signup;