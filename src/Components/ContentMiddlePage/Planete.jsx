import React from 'react';
import './../../Grid.css'
import './Planete.css'
import Obj from "../cube3D";
import { Canvas } from "react-three-fiber"


class Planete extends React.Component{
    render(){
        return(
            <div className="sm-12 md-12 lg-12 row center align-center container-planet">
                <div className="sm-2 md-2 lg-2 end">
                    <img alt="img" src="https://zupimages.net/up/19/43/11aw.png" className="sm-12 md-12 lg-12 fleche-gauche-planet"/>
                </div>
                <div className="sm-8 md-8 lg-8 center row">
                { <Canvas className="jeremy "  camera={{ position: [0, 0, 5] }}>
            <Obj className="mars" />
            </Canvas> }
                </div>
                <div className="sm-2 md-2 lg-2 start">
                    <img alt="img" src="https://zupimages.net/up/19/43/q9s6.png" className="sm-12 md-12 lg-12 fleche-droite-planet"/>
                </div>
            </div>
        )
    }
}

export default Planete;