import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <header>
            <h1>Teamfight UTSC</h1>
            <div className="links">
            <Link className="link-style" to='/'>Home</Link>
            
            <Link className="link-style" to='/about'>About</Link>
            </div>

        </header>
        
    )
} 

export default Header
