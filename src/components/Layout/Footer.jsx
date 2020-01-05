import React from 'react';
import {Fragment} from 'react';
import './Footer.css'

function Footer() {
    return (
        <Fragment>
            <footer>
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
                </div>
            
            </footer>
        </Fragment>
    )
}
export default Footer;
