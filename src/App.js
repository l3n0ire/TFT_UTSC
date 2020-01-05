import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Layout/Header.jsx';
import About from './components/pages/About.jsx';
import Tournaments from './components/pages/Tournaments.jsx';
import Guides from './components/pages/Guides.jsx';
import Index from './components/pages/Main'
import Footer from './components/Layout/Footer.jsx';



class App extends Component {
  state = {
    color:'rgba(0,0,0,0)',
    accent:'white'
  }
  componentDidMount() {
    document.title = 'Teamfight UTSC';
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  listenScrollEvent = e => {
    if (window.scrollY > 200) {
      this.setState({color: '#192841'})
      this.setState({accent: 'orange'})
    } else {
      this.setState({color: 'rgba(0,0,0,0)'})
      this.setState({accent: 'white'})
    }
  }

  render(){
  return (
    /* 
      all styling is in app.css
      all pages have <Header/> header styling is in header.js

    */
    <Router>
    <div className="App">
      <Header colour={this.state.color} accent={this.state.accent}/>
      

      <Route exact path="/" component={Index}/>
      <Route path="/about" component = {About}/>
      <Route path="/tournaments" component = {Tournaments}/>
      <Route path="/guides" component = {Guides}/>
      <Footer></Footer>

    </div>
    </Router>
  );
  }
}

export default App;
