import React from 'react';
import {Fragment} from 'react';
import president from './images/president.png'
import vice_president from './images/vice-president.png'
import treasurer from './images/treasurer.png'
import secretary from './images/secretary.png'

function About() {
    return (
        <Fragment>
            <div className="welcome-container">
                <h1> About </h1>
            </div>
            <div className="container">
                <h1>Our team</h1>
                <div className="box-row">
                    <div className="box">
                        <img src={president} alt="oops"/>
                        <div className="box-text">
                            <h1>President</h1>
                        </div>
                    </div>
                    <div className="box">
                        <img src={vice_president} alt="oops"/>
                        <div className="box-text">
                            <h1>Vice-President</h1>
                        </div>
                    </div>
                    <div className="box">
                        <img src={treasurer} alt="oops"/>
                        <div className="box-text">
                            <h1>Treasurer</h1>
                        </div>
                    </div>
                    <div className="box">
                        <img src={secretary} alt="oops"/>
                        <div className="box-text">
                            <h1>Secretary</h1>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default About;
