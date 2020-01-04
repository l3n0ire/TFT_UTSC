import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Teamfight UTSC</h1>
            <Link style = {linkStyle} to='/'>Home</Link>
            |
            <Link style = {linkStyle} to='/about'>About</Link>

        </header>
        
    )
} 
const linkStyle={
    display:'inline',
    color:'#fff',
    textDecoration:"none"
}
const headerStyle={
    background:"black",
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
export default Header
