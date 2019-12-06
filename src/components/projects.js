import React from 'react';
import {Tabs, Tab, Grid, Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';
import {useState, useEffect } from 'react';

 export const  Projects = () => {

      const [activeTab, setActiveTab ] = useState(0);

      const toggleCategories = () => {

        if (activeTab === 0){

          return(
             <div className="Projects-card">

           <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
              <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                  <Button colored>Get Started</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>

      </div>

            )

        } else if(activeTab === 1) {
          return(
          <div><h1>This is React</h1></div>
          )
        } else if (activeTab === 2) {
          return(
          <div><h1>This is Rails</h1></div>

          )
        } else if (activeTab === 3) {
          return(
           <div><h1>This is Python</h1></div>

          )
        }

      }


  return(
       <div>

        <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab({ activeTab: tabId })} ripple>
          <Tab>Ruby</Tab>
          <Tab>React</Tab>
          <Tab>Rails</Tab>
          <Tab>Python</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>


    )




}

export default Projects;
