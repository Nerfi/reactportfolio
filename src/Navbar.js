import React from 'react';
import About from './About';
import Projects from './Projects';

import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar(){
  return(
     <BrowserRouter>

    <div className="App">

    <Route exact path="/" component={Projects} />
    <Route exact path="/about" component={About} />


    <div className="navigation">
      <div className="navigation-sub">

        <Link to="/" className="item">Projects</Link>

        <Link to="/About" className="item">About</Link>

      </div>

    </div>

    </div>
       </BrowserRouter>)

}


export default Navbar;
