import React from 'react';
import {Fragment} from 'react';
import './Main.css'
import tournament from './images/tournament.jpg'
import tutorial from './images/tutorial.jpg'
import guide from './images/guide.jpg'
import {Link} from 'react-router-dom';


function Index() {
    return (
        <Fragment>
        <div className="welcome-container">
          <h1>Teamfight UTSC</h1>
        </div>
        

        <div className="container">
            <h1>Who are we?</h1>
            <p>
                We’re a group with a strong passion for the game Teamfight Tactics. Teamfight UTSC  holds tournaments 
                and tutorials for both newcomers and experienced players. Our goal is to provide training sessions, 
                guides, and tournaments to help players develop their skills and improve their gameplay. Teamfight 
                UTSC’s mission is to introduce new players to competitive or casual Teamfight Tactics.

            </p>
            <h1>What we do.</h1>

            <div className="box-row">
                <Link className="linky" to='/tournaments'>
                    <div className="box">
                        <img src={tournament} alt="oops"/>
                        <div className="box-text">
                            <h1>Tournaments</h1>
                            <p>
                                Opportunity to gain first-hand experience casual and competitive tournament environment.
                                
                            </p>
                        </div>
                    </div>
                </Link>
                <Link className="linky" to='/guides'>
                    <div className="box">
                        <img src={tutorial} alt="oops"/>
                        <div className="box-text">
                            <h1>Tutorials</h1>
                            <p>
                            Gain valuable feedback and advice from experienced players to improve gameplay
                            </p>
                        </div>
                    </div>
                </Link>
                <Link className="linky" to='/guides'>
                    <div className="box">
                        <img src={guide} alt="oops"/>
                        <div className="box-text">
                            <h1>Guides</h1>
                            <p>
                                Comprehensive guides that introduce new players to all aspects of the game from start to finish.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

        </div>

        


      </Fragment>
    )
}
export default Index;
