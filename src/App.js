import React from 'react';
import './App.css';
// import { Alert } from 'reactstrap';
// import { Spinner } from 'reactstrap';
import NavBar from './Components/NavBar';
import Planete from './Components/ContentMiddlePage/Planete';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Planete/>
    </div>
  );
}

export default App;
