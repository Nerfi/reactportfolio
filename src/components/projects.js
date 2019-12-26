import React from 'react';
import {Tabs, Tab, Grid, Cell,Card,CardTitle,CardText,CardActions,Button} from 'react-mdl';
import { useState } from 'react';
import database from './database';

  const  Projects = () => {

      const [activeTab, setActiveTab] = useState(0);

       function toggleCategories() {
        return database[activeTab].map(project => {
          return(
               <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: project.image }}>{project.name}</CardTitle>
                  <CardText>
                     {project.description}
                  </CardText>
                  <CardActions border>
                      <Button colored>
                          <a href="https://github.com/mjachowdhury/myPortfolio">Github</a>
                        </Button>

                        <Button colored>Live Demo</Button>
                  </CardActions>

            </Card>

       </div>
            )
        })


      }


  return(
       <div>

        <Tabs activeTab={activeTab} key={activeTab.id} onChange={(tabId) => setActiveTab(tabId)} ripple>
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
