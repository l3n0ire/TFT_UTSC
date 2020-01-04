import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Layout/Header';
import About from './components/pages/About';
import './App.css';
import tft from'./images/tft.jpg'


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

      <div className="container">

      <Route exact path="/" render={props => (
        //Homepage content goes here
        <React.Fragment>
          
          <h1>This is the homepage</h1>
          <img src={tft}></img>
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
