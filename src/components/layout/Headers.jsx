import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={ headerStyle }>
            <h1>TodoList</h1>
            <Link to='/' style={linkStyle}>Home</Link> | <Link to='/about' style={linkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
    position: 'sticky',
    background: '#fff',
    color: '#e8491d',
    textAlign: 'center',
    padding: '10px',
    borderBottom: '3px solid #e8491d',
    marginBottom: '10px'
}

const linkStyle = {
    color: '#78472C',
    fontSize: '18px'
}

export default Header;