import React from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom';



export default function Sidebar(props) {
    return (     
      <div style={{'display': props.display}}>
        <header style={{'background': props.colour}}>
          <Link className="title" to="/" style={{'display': props.textdisplay}}>Teamfight <span style={{'color': props.accent}}>UTSC</span></Link>
        </header>  
        <div class="menu-wrap" >
          <input type="checkbox" class="toggler"/>
            <div class="hamburger"><div></div></div>
              <div class="menu">
                <div>
                  <div>
                    <ul>
                      <li> <Link className="link-style" to='/'>Home</Link></li>
                      <li><Link className="link-style" to='/about'>About</Link></li>
                      <li><Link className="link-style" to='/tournaments'>Tournaments</Link></li>
                      <li><Link className="link-style" to='/guides'>Guides</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
