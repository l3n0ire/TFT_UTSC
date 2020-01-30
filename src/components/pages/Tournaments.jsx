import React from 'react';
import {Fragment} from 'react';
import data from './Tournaments.json';
import './styles/Tournaments.css';


const tourney = data.Tournaments;

function Tournaments() {
    return (
        <Fragment>
            <div className="welcome-container">
                <h1> Tournaments </h1>
            </div>
            <div className="container">
                <h1>January Tournaments</h1>
                <p>In order to participate in a tournament, you must have an NA account.</p>
                {
                tourney.map(t => 
                    <div className="tournament">
                        <div>
                            <p>{t.date}</p>
                        </div>
                        <div>
                            <p>{t.type}</p>
                        </div>   
                        <a href={t.url}><div>Register Here</div></a>
                    </div>
                )
            }
            </div>
        </Fragment>
    )
}
export default Tournaments;
