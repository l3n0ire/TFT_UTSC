import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
        <header style={{'background': props.colour, 'display': props.display}}>
            <Link className="title" to="/">Teamfight <span style={{'color': props.accent}}>UTSC</span></Link>
            <div className="link-container">
                <Link className="link-style" to='/'>Home</Link>
                <Link className="link-style" to='/about'>About</Link>
                <Link className="link-style" to='/tournaments'>Tournaments</Link>
                <Link className="link-style" to='/guides'>Guides</Link>
                <Link className="link-style" to='/comps'>Comps</Link>
            </div>

        </header>
        
    )
} 

export default Header
