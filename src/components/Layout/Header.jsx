import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
        <header style={{'background': props.colour}}>
            <h1>TEAMFIGHT UTSC</h1>
            <Link className="link-style" to='/'>HOME</Link>
            
            <Link className="link-style" to='/about'>ABOUT</Link>

        </header>
        
    )
} 

export default Header
