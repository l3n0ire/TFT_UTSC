import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render(){
    console.log(this.props.todos)
  // this is like a for each loop (for each item in the todo array from app.js)
  return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} 
      markComplete ={this.props.markComplete}
      delTodo = {this.props.delTodo}/>

  ));
  }
}

// require the todos array (good practice but not mandatory)
// lowercase p propTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
