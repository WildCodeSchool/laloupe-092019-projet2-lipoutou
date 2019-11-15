import React from 'react';
import Page1 from './Page1';


const tabPlanets = [
    {name: "Mars", image: "./mars2.jpg" ,info1: "SOL 259", info2: "Aug:29", info3: "High: -17°F", info4: "Low:-150°F" },
    {name:"Earth", image: "./earth.jpg", info1: "SOL 259", info2: "Aug:29", info3: "High: -17°F", info4: "Low:-150°F" },
    {name:"Jupiter", image: "./jupiter.jpg", info1: "SOL 259", info2: "Aug:29", info3: "High: -17°F", info4: "Low:-150°F" },
    {name:"Venus", image: "./venus.jpg", info1: "SOL 259", info2: "Aug:29", info3: "High: -17°F", info4: "Low:-150°F" },
    {name:"Saturn", image: "./saturn.jpg", info1: "SOL 259", info2: "Aug:29", info3: "High: -17°F", info4: "Low:-150°F" },
    
];


const Planets = () => (

    <div>
        {tabPlanets.map(props => (
        <Page1 name = {props.name} image = {props.image}/>
        ))}

    </div>

)

export default Planets;