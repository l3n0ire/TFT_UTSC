import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Layout/Header';
import About from './components/pages/About';
import Index from './components/pages/Index'


class App extends Component {
  state = {
    todos:[]
  }
  componentDidMount() {
    document.title = 'Teamfight UTSC';
  }
  render(){
  return (
    /* 
      all styling is in app.css
      all pages have <Header/> header styling is in header.js

    */
    <Router>
    <div className="App">
      <Header/>


      <Route exact path="/" component={Index}/>
      
      <Route path="/about" component = {About}/>


    </div>
    </Router>
  );
  }
}

export default App;
