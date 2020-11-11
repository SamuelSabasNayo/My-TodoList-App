import React from 'react';
import firebase from '../../config/firebase.config';
import { Redirect } from 'react-router';

const Logout = ({history}) => {
    const handleLogout = () => {
        firebase
            .auth()
            .signOut()
                .then(() => {
                    return <Redirect  to='/login' />
                })
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




// import React from 'react';
// import firebase from '../../config/firebase.config';
// import { Redirect } from 'react-router';

// const Logout = () => {
//     const handleLogout = () => {
//         firebase
//             .auth()
//             .signOut()
//                 .then(() => {
//                     console.log('logout');
                    
//                     return <Redirect  to='/login' />
//                 })
//     }
//     return (
//         <React.Fragment>
//             <div style={{width: '100%'}}>
//                 <button 
//                     style={logoutStyle}
//                     onClick={handleLogout}
//                 >
//                     Sign Out
//                 </button>
//             </div>
//         </React.Fragment>
//     )
// }

// const logoutStyle = {
//     width: '150px',
//     background: '#f4f4f4',
//     color: '#78472C',
//     fontSize: '20px',
//     border: 'none',
//     outline: 'none',
//     padding: '5px 10px',
//     margin: '0 43%'
// }

// export default Logout;