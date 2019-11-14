import './../../Grid.css'
import './Planete.css'
import Carousel from 'react-bootstrap/Carousel';
import React, { Suspense } from 'react';
import { Canvas, } from 'react-three-fiber';
import Mars from '../Mars.jsx';
import Earth from '../ContentMiddlePage/Earth';
import Jupiter from '../ContentMiddlePage/Jupiter';
import Venus from '../ContentMiddlePage/Venus';

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
                    </Carousel.Item>
                    <Carousel.Item>
                    <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                                <Suspense fallback={null}>
                                    <Earth />
                                </Suspense>
                            </Canvas>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                                <Suspense fallback={null}>
                                    <Jupiter />
                                </Suspense>
                            </Canvas>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Canvas className="planeteTaille" camera={{ position: [0, 0, 5] }}>
                                <Suspense fallback={null}>
                                    <Venus />
                                </Suspense>
                            </Canvas>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default Planete;