import React from 'react';
import {Fragment} from 'react';
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <Fragment>
            <footer>
                <div class="footer-container">
                <div className="box-left">
                    <h1>Teamfight UTSC</h1>
                    <p>
                    1265 Military Trail <br/>
                    Toronto, ON <br/>
                    M1C 1A4
                    </p>
                    <p><br/>[insert social media] </p>
                    <br/>
                    <p>&copy; TFT UTSC {(new Date().getFullYear())}</p>
                </div>
                <div className="box-right">
                    <h1>Links</h1>
                    <ul>
                        <li><Link className="link-style" to='/'>Home</Link></li>
                        <li><Link className="link-style" to='/about'>About</Link></li>
                        <li><Link className="link-style" to='/tournaments'>Tournaments</Link></li>
                        <li><Link className="link-style" to='/guides'>Guides</Link></li>

                    </ul>
                </div>
                </div>
            </footer>
        </Fragment>
    )
}
export default Footer;
