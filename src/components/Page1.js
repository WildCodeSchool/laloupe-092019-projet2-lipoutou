import React from 'react';
import './Planets.css';



class Page1 extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (

            <div>
                <div className="">
                    <div className="rowTab rowDsk spaceRound tab-12">
                        <img className="mars tab-6" src={this.props.image} />

                        <div className="row columnTab topSection mob-12 tab-2 dsk12">
                            <div className="row">
                                <div className="border">
                                    <div className="travelText">
                                        SOL 259
                            </div>
                                    <div className="travelText">
                                        Aug: 29
                            </div>
                                    <div className="lane">

                                    </div>
                                    <div className="travelText">
                                        High:-17°F
                            </div>
                                    <div className="travelText">
                                        Low:-150°F
                            </div>
                                </div>
                                <div className="border borderHidden">
                                    <div className="travelText">
                                        SOL 259
                            </div>
                                    <div className="travelText">
                                        Aug: 29
                            </div>
                                    <div className="lane">

                                    </div>
                                    <div className="travelText">
                                        High:-17°F
                            </div>
                                    <div className="travelText">
                                        Low:-150°F
                            </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="border">
                                    <div className="travelText">
                                        SOL 259
                            </div>
                                    <div className="travelText">
                                        Aug: 29
                            </div>
                                    <div className="lane">

                                    </div>
                                    <div className="travelText">
                                        High:-17°F
                            </div>
                                    <div className="travelText">
                                        Low:-150°F
                            </div>
                                </div>
                                <div className="border borderHidden">
                                    <div className="travelText">
                                        SOL 260
                            </div>
                                    <div className="travelText">
                                        Aug: 29
                            </div>
                                    <div className="lane">

                                    </div>
                                    <div className="travelText">
                                        High:-19°F
                            </div>
                                    <div className="travelText">
                                        Low:-150°F
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row centerSection flexStart mob-12 tab-6 dsk-12">
                        
                        <h1 className="travel marginTop  mob-10 tab-12 desk-4"><span>Travel to all planets of the univers</span> </h1>
                    </div>
                    <div className="row botSection borderMom mob-12 tab-12 dsk-12">
                        <div className="mob-6 tab-9 desk-5 column">
                            <h2 className="marginTop marginLeft">Contact us</h2>
                            <form className="borderBot" action="" method="get">
                                <label htmlFor="get name"></label>
                                <input className="field marginTop fontSize" id="get name" type="text" name="name" defaultValue="Name" />

                                <label htmlFor="prenom"></label>
                                <input className="field marginTop fontSize" id="prenom" type="text" name="Prenom" defaultValue="Prénom" />

                                <label htmlFor="email"></label>
                                <input className="field marginTop fontSize" id="email" type="text" name="email" defaultValue="Email" />
                                <div className="rowDsk desktopArea desk-12">

                                    <div className="marginLeft desk-6">
                                        <textarea className="textArea marginTop" id="zone de text" name="zone de texte"></textarea>
                                    </div>

                                    <div className="fontSizeNews marginRight desk-6">
                                        <input className="button marginTop fontSize" type="submit" value="Subscribe to the newsletter" />
                                        <input className="button marginTop fontSize" type="button" value="Send the message" />
                                    </div>
                               
                                </div>

                            </form>
                        </div>
                        <div className="mob-6 tab-6 desk-8 column">
                            <h2 className="marginTop ">Ressources</h2>
                            <p className="ressources"> NASA's InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at
 Elysiu Planitia , a flat, smooth plain near Mars equator, Summaries of these data are available at https
://mars.nasa.gov/insight/weather<br /><br />This API provides per-Sol summary data for each of the last seven available Sols(Martian Days).As more data from a
                                                                particular Sol are downlinked from the spacecraft (sometimes several days later), these values are recalculated, and
consequently may change as more data are received on Earth.</p>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}


export default Page1;