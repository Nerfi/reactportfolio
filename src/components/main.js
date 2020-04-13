import React from 'react';
import { Switch, Route , HashRouter} from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';



function Main() {
  return(
    <HashRouter basename="/">
      <Switch>

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />

    </Switch>
  </HashRouter>
    )


}





export default Main;
