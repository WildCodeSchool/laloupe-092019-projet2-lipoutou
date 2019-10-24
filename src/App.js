import React from 'react';
import './App.css';
// import { Alert } from 'reactstrap';
// import { Spinner } from 'reactstrap';
import NavBar from './Components/NavBar';
import Planete from './Components/ContentMiddlePage/Planete';
import InfoPlanet from './Components/ContentMiddlePage/InfoPlanet'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Planete/>
      <InfoPlanet/>
    </div>
  );
}

export default App;
