import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    render() {
        return (
            <form onSubmit={ this.onSubmit } style={{ display: 'flex' }}>
                <input
                type='text'
                name='title'
                style={{
                    flex: '10',
                    padding: '10px',
                    margin: '0 5px 0 0',
                    fontSize: '16px',
                    color: '#78472C',
                    outline: 'none',
                    border: '2px solid #a7b5be'
                }}
                placeholder='Add Todo...'
                value={ this.state.title }
                onChange={ this.onChange }
            />
            <input
                type='submit'
                value='Submit'
                className='btn'
                style={{
                    flex: '1',
                    background: '#a7b5be',
                    fontSize: '18px',
                    color: '#e8491d',
                    outline: 'none'
                }}
            />
            {/* <input:active /> */}
            </form>
        )
    }
}

export default AddTodo;