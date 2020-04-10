import React,{useState} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import database from './database.json';
import Cards from './Cards';


  const  Projects = () => {
    const [selectTab, setTab] = useState(0);
  return(
       <div>

        <Tabs activeTab={selectTab} key={selectTab.id} onChange={(tabId) => setTab(tabId)} ripple>
          <Tab>Ruby</Tab>
          <Tab>React</Tab>
          <Tab>Rails</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>

              {database[selectTab].map(project => {
                console.log(project.id, 'here is the id')
                return(

                <div className="projects-grid">
                  <Cards
                  key={project.id}
                  name={project.name}
                  backgroundImg={project.image}
                  description={project.description}

                  />
                </div>
                );

              })}

            </Cell>
          </Grid>
      </div>


    )

}

export default Projects;
