import React from 'react';
import NavBar from './NavBar';

import Planete from './ContentMiddlePage/Planete';
import InfoPlanet from './ContentMiddlePage/InfoPlanet'






function Page2() {
  return (
    <div className="App column space-btw">
     <NavBar/>
      <Planete />
     <InfoPlanet/>
     
      </div>
  );
}


export default Page2;