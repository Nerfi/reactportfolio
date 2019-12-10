import React from 'react';
import {Grid, Cell} from 'react-mdl';


function LandingPage(){
  return(
  <div style={{width: '100%', margin: 'auto'}}>

  <Grid className="landing-grid">
    <Cell col={12}>

    <img
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Favatar-circle%2F248%2FBoy_man_male_mustache_smile_happy_adult_Avatar_-512.png&f=1&nofb=1"
    alt="avatar man"
    className="avatar-img"
    />

    <div className="banner-text">

      <h1>Fullstack dev</h1>

      <hr />
      <p>HTML/CSS | Boostrap | JS | React | Rails | RoR</p>

      <div className="social-links">

            {/*linkedin */}
          <a href="https://www.linkedin.com/in/juanparedess/" rel="noopener noreferrer" target="_blank">
          <i className=" fa fa-linkedin-square" aria-hidden="true"></i>
          </a>

            {/*  Github Link*/}
           <a href="https://github.com/Nerfi" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>


      </div>


    </div>


    </Cell>
  </Grid>


  </div>


    )


}

export default LandingPage;
