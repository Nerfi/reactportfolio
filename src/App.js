import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Projects from './Projects';
import { BrowserRouter, Route, Link } from 'react-router-dom';



function App() {
  return (
     <BrowserRouter>

    <div className="App">

    <Route exact path="/" component={Projects} />
    <Route exact path="/about" component={About} />


    <div className="navigation">
      <img src={logo} className="logo" alt="Logo Image" />
      <div className="navigation-sub">

        <Link to="/" className="item">Projects</Link>

        <Link to="/About" className="item">About</Link>

      </div>

    </div>

    </div>
       </BrowserRouter>
  );
}

export default App;
