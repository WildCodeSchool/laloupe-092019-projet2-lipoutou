import './../../Grid.css'
import './Planete.css'
import Carousel from 'react-bootstrap/Carousel';
import React, { Suspense } from 'react';
import { Canvas, } from 'react-three-fiber';
import Mars from '../Mars.jsx';
import Earth from '../ContentMiddlePage/Earth';
import Jupiter from '../ContentMiddlePage/Jupiter';
import Venus from '../ContentMiddlePage/Venus';
import Neptune from '../ContentMiddlePage/Neptune';
import Uranus from '../ContentMiddlePage/Uranus';
import Mercure from '../ContentMiddlePage/Mercure';
import Lune from '../ContentMiddlePage/Lune';
import InfoPlanet from './InfoMars';
import InfoTerre from './InfoTerre';
import InfoJupiter from './InfoJupiter';
import InfoVenus from './InfoVenus';
import InfoNeptune from './InfoNeptune';
import InfoUranus from './InfoUranus';
import InfoMercure from './InfoMercure';
import InfoLune from './InfoLune';


class Planete extends React.Component {
    render() {
        return (
            <div className="sm-12 md-12 lg-12 roww center align-center container-planet position">
                <Carousel>
                    <Carousel.Item>
                        <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                            <Suspense fallback={null}>
                                <Mars />
                                
                            </Suspense>
                        </Canvas>
                        <InfoPlanet />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                            <Suspense fallback={null}>
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <InfoTerre />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                            <Suspense fallback={null}>
                                <Jupiter />
                            </Suspense>
                        </Canvas>
                        <InfoJupiter/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                            <Suspense fallback={null}>
                                <Venus />
                            </Suspense>
                        </Canvas>
                        <InfoVenus/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                            <Suspense fallback={null}>
                                <Neptune />
                            </Suspense>
                        </Canvas>
                        <InfoNeptune/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                            <Suspense fallback={null}>
                                <Uranus />
                            </Suspense>
                        </Canvas>
                        <InfoUranus/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                            <Suspense fallback={null}>
                                <Mercure />
                            </Suspense>
                        </Canvas>
                        <InfoMercure/>
                    </Carousel.Item>


                    <Carousel.Item>
                        <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                            <Suspense fallback={null}>
                                <Lune />
                            </Suspense>
                        </Canvas>
                        <InfoLune/>
                    </Carousel.Item>
            


                </Carousel>




            </div>
        )
    }
}
export default Planete;