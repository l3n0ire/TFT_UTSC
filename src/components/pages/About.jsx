import React from 'react';
import {Fragment} from 'react';

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
                        <h1>President</h1>
                    </div>
                    <div className="box">
                        <h1>Vice-President</h1>
                    </div>
                    <div className="box">
                        <h1>Treasurer</h1>
                    </div>
                    <div className="box">
                        <h1>Secretary</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default About;
