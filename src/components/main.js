import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';



function Main() {
  return(

      <Switch>

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />

    </Switch>

    )


}





export default Main;
