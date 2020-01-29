import React from 'react'
import  data from './comps.json'

const metaComps = data.metaComps;

function Comps() {
    return (
        <div>
            
                {
                metaComps.map(comp => 
                    <div>
                    
                        {
                            
                            comp.champs.map(champName=>
                                <div>
                                    {champName}
                                    </div>
                                )
                        }
                        </div>
                    )
                }
            
            
        </div>
    )
}

export default Comps

