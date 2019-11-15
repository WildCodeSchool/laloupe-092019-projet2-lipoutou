import React from 'react';
import './../../Grid.css'
import './InfoPlanet.css'

class InfoJupiter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apiNasa: {},
            idSol1: 332,
            idSol2: 333
        }
    }

    fetchApiNasa() {
        fetch("https://api.nasa.gov/insight_weather/?api_key=dXEb5oeKags0aLGI30hoQRfPM613cKvHhy8wJvTi&feedtype=json&ver=1.0")
            .then(Response => Response.json())
            .then(data => {
                this.setState({ apiNasa: data[this.state.idSol1] });
                console.log(this.state.apiNasa)
            })
        fetch("https://api.nasa.gov/insight_weather/?api_key=dXEb5oeKags0aLGI30hoQRfPM613cKvHhy8wJvTi&feedtype=json&ver=1.0")
            .then(Response => Response.json())
            .then(data => {
                this.setState({ apiNasa: data[this.state.idSol1] });
                console.log(this.state.apiNasa)
            })
    }

    componentDidMount() {
        this.fetchApiNasa()
    }

    render() {
        return (
            <div>
                <div className="containerr roww space-btw">
                    <div className="sm-12 md-12 lg-8 roww container-info-planet">
                        <div className="sm-4 md-4 lg-4 plant  column align-center text-center">
                            <img alt="img" src="https://zupimages.net/up/19/43/dskl.png" className="sm-3 md-2 lg-1 logo-plant" />
                            <hr className="sm-8 md-8 lg-8" />
                            <p className="paragraphe-plant">None</p>
                        </div>
                        <div className="sm-4 md-4 lg-4 plant text-center">
                            <img alt="img" src="https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C044599836516286fd38ef374d0eeff03/projects/Mdce9b94d2d26ffed31e40ad5db2af0c31571131422160/images/thumbnails/M8370e0097514affb0f0ee4d67938fefa1571168357286" className="sm-3 md-2 lg-1 logo-plant" />
                            <hr className="sm-8 md-8 lg-8" />
                            <p className="paragraphe-atmos">Unknown</p>
                        </div>
                        <div className="sm-4 md-4 lg-4 plant text-center">
                            <img alt="img" src="https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C044599836516286fd38ef374d0eeff03/projects/Mdce9b94d2d26ffed31e40ad5db2af0c31571131422160/images/thumbnails/Md1a84e33a0fc823e76e101d7348946b21571167708062" className="sm-3 md-2 lg-1 logo-plant" />
                            <hr className="sm-8 md-8 lg-8" />
                            <p className="paragraphe-espece">Unknown</p>
                        </div>
                    </div>
                    <div className="sm-0 md-0 column container-meteo-planet lg-1 center align-center">
                        <h3>SOL {this.state.idSol1}</h3>
                        <hr className="sm-8 md-8 lg-8" />
                        <p>High: -118°F</p>
                        <p>Low: -129°F</p>
                    </div>
                    <div className="sm-0 md-0 column container-meteo-planet container-meteo-planet-2 lg-1 center align-center">
                        <h3>SOL {this.state.idSol2}</h3>
                        <hr className="sm-8 md-8 lg-8" />
                        <p>High: -118°F</p>
                        <p>Low: -129°F</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoJupiter;