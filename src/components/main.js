// Main component for the routes
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';



function Main() {
  return(
    <Switch>
    <Route exact path="/" component={LandingPage} />
  </Switch>
    )


}





export default Main;
