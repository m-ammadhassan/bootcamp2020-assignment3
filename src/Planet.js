import React from 'react';
import './Planet.css';

function Planet(props)
{
    return(
        <div className="planet-card">
            <h3 className="planet-name">Planet Name: </h3>
            <span>{props.planetName}</span>
            <h3 className="planet-moons">No. of Moons: </h3>
            <span>{props.planetMoons}</span>
        </div>
    );
}

export default Planet;