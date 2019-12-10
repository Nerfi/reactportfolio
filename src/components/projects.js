import React from 'react';
import {Tabs, Tab, Grid, Cell,Card,CardTitle,CardText,CardActions,Button} from 'react-mdl';
import { useState } from 'react';
import database from './database';

  const  Projects = () => {

      const [activeTab, setActiveTab] = useState(0);

       function toggleCategories() {

          if (activeTab === 0){
            return database[0].map(project => {

            return (
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
          } else if(activeTab === 1) {
            return database[1].map(project1 => {

            return(
              <div className="projects-grid">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                      <CardTitle style={{color: '#fff', height: '176px', background: project1.image}}>{project1.name}</CardTitle>
                      <CardText>
                          {project1.description}
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
        } else if (activeTab === 2) {
          return database[2].map(project2 => {

            return(
              <div className="projects-grid">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                      <CardTitle style={{color: '#fff', height: '176px', background: project2.image}}>{project2.name}</CardTitle>
                      <CardText>
                         {project2.description}
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


        } else if (activeTab === 3) {
          return database[3].map(project3 => {

            return(
              <div className="projects-grid">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: project3.image }}>{project3.name}</CardTitle>
                    <CardText>
                        {project3.description}
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

      }


  return(
       <div>

        <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
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
