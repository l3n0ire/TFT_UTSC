import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Tournaments from './components/pages/Tournaments.jsx';
import Header from './components/Layout/Header.jsx';
import About from './components/pages/About.jsx';
import Guides from './components/pages/Guides.jsx';
import Index from './components/pages/Main'
import Footer from './components/Layout/Footer.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      color:'rgba(0,0,0,0)',
      accent:'white',
      display: 'flex'
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    document.title = 'Teamfight UTSC';
    window.addEventListener('scroll', this.listenScrollEvent)
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({width: window.innerWidth});
    if (this.state.width < 768) {
      this.setState({display: 'none'})
    } else {
      this.setState({display: 'flex'})
    }
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

      <Header colour={this.state.color} accent={this.state.accent} display={this.state.display}/>
      

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
