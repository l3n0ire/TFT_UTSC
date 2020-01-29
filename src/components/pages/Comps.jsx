import React from 'react'
import  data from './comps.json'

const comps = data.metaComp;

function Comps() {
    return (
        <div>
            <ul>
                {comps.map(s => (<li>{s}</li>))}
            </ul>
            
        </div>
    )
}

export default Comps

