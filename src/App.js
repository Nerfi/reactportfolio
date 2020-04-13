import React from 'react';
import './App.css';
import { Link, HashRouter } from 'react-router-dom';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';

function App() {
  return (
    <div>
    <div className="demo-big-content">
    <HashRouter basename='/'>
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> MyPortfolio </Link>} scroll>
              <Navigation>

                  <Link to="/Projects">Projects</Link>
                  <Link to="/Contact">Contact</Link>

              </Navigation>
          </Header>
          <Drawer title="Tit">
              <Navigation>

                  <Link to="/Projects">Projects</Link>
                  <Link to="/Contact">Contact</Link>

              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
    </HashRouter>
</div>


    </div>
     );
}

export default App;
