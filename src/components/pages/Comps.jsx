import React from 'react'
import  data from './comps.json'
import './styles/Comps.css'
import {Fragment} from 'react';


const metaComps = data.metaComps;

function Comps() {
    return (
        <Fragment>
        <div>
            <div className="welcome-container">
            <h1>Comps</h1>
            </div>
            
            <div className="container">
            {
                metaComps.map(comp => 
                    <div className="wrap">
                    <div className="row">
                        <div className="compName"><h2>{comp.title} {comp.tier+"     tier"}</h2></div>
                        <div className ="champs">
                        {
                            comp.champs.map(champName=>
                                <div className="champ">
                                <p>
                                    
                                    {champName}
                                </p>
                                <img className="compImg" src={require('./images/Champs/'+champName+'.png')}></img>
                                </div>
                            )
                        }
                        </div>
                    </div>
                    </div>
                )
            }
            
            </div>
        </div>
        </Fragment>
    )
}

export default Comps

