import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Todos from './components/Todos';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';

import Axios from 'axios';
import uuid from 'uuid';


class App extends Component {
  state = {
    todos:[]

    

  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}))
  }
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
          // sets completed to its opposite value
          todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  // ... copies exisiting array
  // filter removes todo with id of id from the array
  delTodo=(id) =>{
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title)=>{
    const newTodo ={
      // packages that generates random ids
      // we're using version 4
      id: uuid.v4(),
      title:title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]})

  }

  render(){
    // this is how you add props to a component
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header/>

      <Route exact path="/" render={props => (
        <React.Fragment>
          <AddTodo addTodo = {this.addTodo}/>
            <h1>Todos</h1>
            <Todos todos={this.state.todos} 
            markComplete = {this.markComplete}
            delTodo = {this.delTodo}/>

        </React.Fragment>
      )}/>

      <Route path="/about" component = {About}/>

      
      </div>
    </div>
    </Router>
  );
  }
}

export default App;
