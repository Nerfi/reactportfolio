import React from 'react';
import {Grid, Cell, List,ListItem, ListItemContent} from 'react-mdl';

function Contact(){
  return(

    <div className="main-div">
        <Grid className="contact-grid">
           <Cell col={6}>
           <h2>Juan Paredes</h2>
           <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
           alt="avatar"
           style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '2em', marginLeft: '-10px'}}>
              Ruby on Rails/ React software developer with a clear vision.
              My objective is not only to produce code, but to build awesome products in which I believe.
              The part I love most about coding is the adrenaline you have when you solve a problem , coming up with fun ideas, implementing them, and seeing my idea work.
              Also have a big interest in all related with A.I, now looking at working as a full-stack developer as it fits all of my career requirements: challenging work,
              working with a team and having an impact
            </p>

           </Cell>


         <Cell col={6}>

          <h2>Contact Me</h2>
          <hr />

          <div className="contact-list">
            <List>

               <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+34) 666-85-69-01
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    juanchuu.jfpc@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                     <a href="https://www.linkedin.com/in/juanparedess/" rel="noopener noreferrer" target="_blank">
                     Juan Paredes
                      </a>
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github-square" aria-hidden="true"/>
                     <a href="https://github.com/Nerfi" rel="noopener noreferrer" target="_blank">
                     Github
                      </a>
                  </ListItemContent>
                </ListItem>


            </List>


          </div>


         </Cell>


        </Grid>



    </div>

    )




}

export default Contact;
