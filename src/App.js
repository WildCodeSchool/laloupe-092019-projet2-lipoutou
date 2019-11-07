import React from 'react';
import Page1 from './components/Page1';
import Page2 from './Components/Page2';
import {Switch, Route} from 'react-router-dom';





function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Page1} /> 
        <Route path="/Page2" component={Page2} />     
      </Switch>
    </div>
  );
}


export default App;
