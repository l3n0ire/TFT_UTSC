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
          <h1>Teamfight UTSC</h1>
          <div className="welcome-container">
            <img className ="welcome-img" src={tft} alt="oops"/>
          </div>
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
