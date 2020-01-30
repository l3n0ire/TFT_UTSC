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
                    <div className="row">
                        <h1>{comp.title}</h1>
                        {
                            comp.champs.map(champName=>
                                <div>
                                <p>
                                    
                                    {champName}
                                </p>
                                <img src={require('./images/Champs/'+champName+'.jpg')}></img>
                                </div>
                            )
                        }
                    </div>
                )
            }
            
            </div>
        </div>
        </Fragment>
    )
}

export default Comps

