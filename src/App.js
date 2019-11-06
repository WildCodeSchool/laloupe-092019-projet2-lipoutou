import React from 'react';
import './App.css';
// import { Alert } from 'reactstrap';
// import { Spinner } from 'reactstrap';
import NavBar from './Components/NavBar';
import Planete from './Components/ContentMiddlePage/Planete';
import InfoPlanet from './Components/ContentMiddlePage/InfoPlanet'
import './Grid.css'
import Planets from './components/Planets';


function App() {
  return (
    <div className="App column space-btw">
      <div className="sm-12 lg-12">
        <NavBar/>
      </div>
      <div className="planet sm-12 lg-12">
        <Planete />
      </div>
      <div className="infoPlanet sm-12 lg-12">
        <InfoPlanet/>
      </div>
      <div className="App">
        <Planets/>
      </div>
    </div>
  );
}

export default App;