import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
        <header style={{'background': props.colour}}>
            <Link className="title" to="/">Teamfight UTSC</Link>
            <Link className="link-style" to='/'>Home</Link>
            
            <Link className="link-style" to='/about'>ABOUT</Link>

        </header>
        
    )
} 

export default Header
