import React, { Suspense } from 'react';
import './Planets.css';
import { Canvas, } from 'react-three-fiber';
import Mamadou from '../Components/cube3D';

class Page1 extends React.Component {
    render() {
        return (

            <div>
                <div className="">
                    <div className="roww pose spaceRound centerSectionMob tab-12">
                        <div className="desk-4 topsection  mars">
                            <Canvas className="" camera={{ position: [0, 0, 5] }}>
                                <Suspense fallback={null}>
                                    <Mamadou />
                                </Suspense>
                            </Canvas>

                        </div>
                        <div className="roww columnTab topSection mob-12 tab-2 dsk12">
                            <div className="roww">
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
                            <div className="roww ">
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
                    <div className="roww centerSectiondesk centerSectionMob centersectionTab flexStart mob-12 tab-6 dsk-12 positionApi">
                        <a href="/Page2" className="myButton global travel marginTop  mob-10 tab-12 desk-5 "> Travel to all planets of the univers</a>

                    </div>
                    <div className="roww test botSection borderMom mob-12 tab-12 dsk-12  ">
                        <div className="mob-6 tab-9 desk-5 column roww">
                            <div>
                                <h2 className="marginTop marginLeft">Contact us</h2>
                            </div>
                            <div className="ecart">
                                <form className="borderBot" action="" method="get">
                                    <label htmlFor="get name"></label>
                                    <input className="field marginTop fontSize" id="get name" type="text" name="name" defaultValue="Name" />

                                    <label htmlFor="prenom"></label>
                                    <input className="field marginTop fontSize" id="prenom" type="text" name="Prenom" defaultValue="FirstName" />

                                    <label htmlFor="email"></label>
                                    <input className="field marginTop fontSize" id="email" type="text" name="email" defaultValue="Email" />
                                    <div className="rowDsk desktopArea desk-12">

                                        <div className="desk-6">
                                            <textarea className="textArea marginTop" id="zone de text" name="zone de texte"></textarea>
                                        </div>

                                        <div className="fontSizeNews marginRight desk-12">
                                            <input className="button marginTop fontSize" type="submit" value="Subscribe to the newsletter" />
                                            <input className="button marginTop fontSize" type="button" value="Send the message" />
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="mob-6 tab-6 desk-8 column ">
                            <div>
                                <h2 className="marginTop ">Ressources</h2>
                            </div>
                            <div className="">
                                <p className="ressources "> NASA's InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at
                                Elysiu Planitia , a flat, smooth plain near Mars equator, Summaries of these data are available at https
        ://mars.nasa.gov/insight/weather<br /><br />This API provides per-Sol summary data for each of the last seven available Sols(Martian Days).As more data from a
                                                                                                            particular Sol are downlinked from the spacecraft (sometimes several days later), these values are recalculated, and
        consequently may change as more data are received on Earth.</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}


export default Page1;