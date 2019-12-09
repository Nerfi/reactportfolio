import React from 'react';
import {Tabs, Tab, Grid, Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';
import { useState } from 'react';

  const  Projects = () => {

      const [activeTab, setActiveTab] = useState(0);

         function toggleCategories() {

        if (activeTab === 0){

          return(
           <div className="Projects-card">

             <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sitepoint.com%2Fwp-content%2Fthemes%2Fsitepoint%2Fassets%2Fimages%2Ficon.ruby.png&f=1&nofb=1) center / cover'}}>Welcome</CardTitle>
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

          <div className="Projects-card">
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F640px-React-icon.svg.png&f=1&nofb=1) center / cover'}}>Welcome</CardTitle>
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
        } else if (activeTab === 2) {
          return(
          <div className="Projects-card">
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnp0.stackassets.com%2Fa83017bbc3c2d2da0874e0dd4a04bf1dedc6f962%2Fstore%2F71d2ebdab71bb55e3ec09e8e61cce8ff95e2c73932770a94608ee58419d2%2F1323_RubyonRailsRookietoRockstar_MF.jpg&f=1&nofb=1) center / cover'}}>Welcome</CardTitle>
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
        } else if (activeTab === 3) {
          return(
           <div className="Projects-card">
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ostechnix.com%2Fwp-content%2Fuploads%2F2018%2F02%2FPython.jpg&f=1&nofb=1) center / cover'}}>Welcome</CardTitle>
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
