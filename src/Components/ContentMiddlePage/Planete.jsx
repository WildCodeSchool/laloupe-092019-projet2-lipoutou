import React from 'react';
import './../../Grid.css'
import './Planete.css'

class Planete extends React.Component{
    render(){
        return(
            <div className="sm-12 row center align-center container-planet">
                <div className="sm-2">
                    <img src="https://zupimages.net/up/19/43/11aw.png" className="sm-12 fleche-gauche-planet"/>
                </div>
                <div className="sm-8">
                    <img src="https://zupimages.net/up/19/43/8hs3.png" className="planet sm-12"/>
                </div>
                <div className="sm-2 end">
                    <img src="https://zupimages.net/up/19/43/q9s6.png" className="sm-12 fleche-droite-planet"/>
                </div>
            </div>

        )
    }
}

export default Planete;