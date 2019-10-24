import React from 'react';
import './../../Grid.css'
import './InfoPlanet.css'

class InfoPlanet extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row sm-10 info-planet"><p>August 25: </p><p>Low:-147°F</p></div>
            <div className="sm-12 row container-info-planet">
                <div className="sm-4 plant  column align-center text-center">
                    <img src="https://zupimages.net/up/19/43/dskl.png" className="sm-3 logo-plant"/>
                    <hr className="sm-8"/>
                    <p className="paragraphe-plant">None</p>
                </div>
                <div className="sm-4 plant text-center">
                    <img src="https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C044599836516286fd38ef374d0eeff03/projects/Mdce9b94d2d26ffed31e40ad5db2af0c31571131422160/images/thumbnails/M8370e0097514affb0f0ee4d67938fefa1571168357286" className="sm-3 logo-plant"/>
                    <hr className="sm-8"/>
                    <p className="paragraphe-atmos">Unknown</p>
                </div>
                <div className="sm-4 plant text-center">
                    <img src="https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C044599836516286fd38ef374d0eeff03/projects/Mdce9b94d2d26ffed31e40ad5db2af0c31571131422160/images/thumbnails/Md1a84e33a0fc823e76e101d7348946b21571167708062" className="sm-3 logo-plant"/>
                    <hr className="sm-8"/>
                    <p className="paragraphe-espece">Crabe</p>
                </div>
            </div>
            </div>
        )
    }
}

export default InfoPlanet;