import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }
    onChange = (e) => this.setState( {[e.target.name]: e.target.value});

    onSubmit =(e) =>{
        e.preventDefault();
        // prop function to pass up to app.js
        this.props.addTodo(this.state.title);
        // clear state
        this.setState({ title:''})
    }
    render() {
        return (
            <form onSubmit ={this.onSubmit} style={{display:'flex'}}>
                <input 
                type='text' 
                name='title' 
                placeholder='Add Todo'
                style={{flex:'10', padding:'5px'}}
                value={this.state.title}
                onChange={this.onChange}
                                    />
                <input 
                    type='submit' 
                    value='submit' 
                    className='btn'
                    style={{flex:'1'}}
                    />
            </form>

        )
    }
}

export default AddTodo
