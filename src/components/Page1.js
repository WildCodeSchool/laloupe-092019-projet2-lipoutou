import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Planets.css'
import { Container, Row, Col } from 'reactstrap';

class Page1 extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Container>
            <div>
                <div className="bg flex">
                    <img className="mars" src={this.props.image} />
                    <p>{this.props.name}</p>
                    <h1>travel to all planets of the univers </h1>
                    <div className="row">
                        <div className="">
                            <h3>Contact us</h3>
                        </div>
                        <div className="">
                            <h2>Ressources</h2>
                        </div>
                    </div>

                </div>

            </div>
            </Container>
        )
    }
}


export default Page1;