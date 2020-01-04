import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () =>{
        return{
            background: '#f4f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // expression ? is the same as if(expression)
            // : means else
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    markComplete = () =>{

    }
    render() {
        // pulls out id and title from this.props.todo
        const { id, title } = this.props.todo;
        // inorder to modify state we have to go back to the higher level components
        // one by one using props
        return (
            <div style ={this.getStyle()}>
               <p>
                   <input type='checkbox' 
                   onChange={this.props.markComplete.bind(this,id)}/> {' '}
                   { title }
                   <button onClick={this.props.delTodo.bind(this,id)}
                   style ={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}
// require the todo object (good practice but not mandatory)
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle ={
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 9px",
    borderRadius:"50%",
    cursor:"pointer",
    float:"right"
}

export default TodoItem
