import React from 'react';

const Header = () => {
    return (
        <header style={ headerStyle }>
            <h1>TodoList</h1>
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

export default Header;