import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
        <header style={{'background': props.colour}}>
            <h1>Teamfight UTSC</h1>
            <Link className="link-style" to='/'>Home</Link>
            
            <Link className="link-style" to='/about'>About</Link>

        </header>
        
    )
} 

export default Header
